# How to Encrypt your Redash installation with a free SSL certificate from Let’s Encrypt

**Note:** This below steps were tested on Ubuntu 14.04, but _should_ work with any Debian-based distro.

[Let’s Encrypt](https://letsencrypt.org/) is a new certificate authority sponsored by major tech companies including Mozilla, Google, Cisco, and Facebook. Unlike traditional CA authorities, Let’s Encrypt allows you to generate and renew an SSL certificate quickly and **at no cost**.

1. Open port 443 in your security group (if using AWS or GCE).
2. Update package lists, install git, and clone the letsencrypt repository.

```
sudo apt-get update
sudo apt-get install git
sudo git clone https://github.com/letsencrypt/letsencrypt /opt/letsencrypt

```

1. Stop nginx and redash, then ensure that no processes are still listening on port 80.

```
sudo supervisorctl stop redash_server
sudo service nginx stop
netstat -na | grep ':80.*LISTEN'

```

1. Generate your letsencrypt certificate.

```
cd /opt/letsencrypt
sudo pip install urllib3[secure] --upgrade
./letsencrypt-auto certonly --standalone

```

In most cases you’ll want to enter ‘example.com www.example.com’ when prompted for your domain so that you can use the certificate on [http://example.com](http://example.com/) and [http://www.example.com](http://www.example.com/).

1. Optionally generate a stronger Diffie-Hellman ephemeral parameter. Without this step, you will not achieve higher than a B score on [SSLLabs](https://www.ssllabs.com/ssltest/). Please note that on a low-end server (VPS or micro/small GCE instance) this step can take approximately 20-30 minutes.

```
cd /etc/ssl/certs
sudo openssl dhparam -out dhparam.pem 3072

```

1. Backup the existing nginx redash config, delete it, and then create a new version with the code supplied below.

```
sudo cp /etc/nginx/sites-available/redash /etc/nginx/sites-available/redash.bak
sudo rm /etc/nginx/sites-available/redash
sudo nano /etc/nginx/sites-available/redash

```

```
upstream redash_servers {
   server 127.0.0.1:5000;
}

server {
   listen 80;

# Allow accessing /ping without https. Useful when placing behind load balancer.
location /ping {
   proxy_set_header Host $http_host;
   proxy_set_header X-Real-IP $remote_addr;
   proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
   proxy_pass       http://redash_servers;
}

location / {
   # Enforce SSL.
   return 301 https://$host$request_uri;
   }
}

server {
   listen 443 ssl;
   ssl on;

   # Make sure to set paths to your certificate .pem and .key files.
   ssl_certificate /etc/letsencrypt/live/YOURDOMAIN.TLD/fullchain.pem;
   ssl_certificate_key /etc/letsencrypt/live/YOURDOMAIN.TLD/privkey.pem;
   ssl_dhparam /etc/ssl/certs/dhparam.pem;

   # Use secure protocols and ciphers which are compatible with modern browsers
   ssl_protocols TLSv1 TLSv1.1 TLSv1.2;
   ssl_prefer_server_ciphers on;
   ssl_ciphers AES256+EECDH:AES256+EDH;
   ssl_session_cache shared:SSL:20m;

   # Enforce strict transport security
   add_header Strict-Transport-Security "max-age=31536000; includeSubdomains;";

   access_log /var/log/nginx/redash.access.log;

   gzip on;
   gzip_types *;
   gzip_proxied any;

   location / {
   proxy_set_header Host $http_host;
   proxy_set_header X-Real-IP $remote_addr;
   proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
   proxy_set_header X-Forwarded-Proto $scheme;
   proxy_pass       http://redash_servers;
   proxy_redirect   off;
   }
}

```

1. Start the nginx and redash servers again.

```
sudo service nginx start
sudo supervisorctl start redash_server

```

1. Verify the installation by running a [SSLLabs test](https://www.ssllabs.com/ssltest/). This guide _should_ yield an A+ score. If everything is working as expected, optionally delete the old redash nginx config:

```
sudo rm /etc/nginx/sites-available/redash.bak

```

**Important Note:** letsencrypt certificates only remain valid for 90 days. To renew your certificate, simply follow steps 3 and 4 again:

```
sudo supervisorctl stop redash_server
sudo service nginx stop
netstat -na | grep ':80.*LISTEN'

cd /opt/letsencrypt
./letsencrypt-auto certonly --standalone

sudo service nginx start
sudo supervisorctl start redash_server

```

