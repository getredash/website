---
category: setup
parent_category: data-sources
title: How to query CSV files
slug: csv-file-from-a-url
toc: true
---

# How to query CSV files in Redash

You can't upload files to Redash directly. Instead, you have to pull them from somewhere. This guide shows how to load data from CSV files into Redash and query it with [QRDS]().

## Step 1: Configure your data sources

> If you did this already, go to step 2.

You need two data sources to get started. 

1. CSV
2. Query Results

> Only admins can add data sources.

From **Settings** visit the **Data Sources** tab. For each data source click **New Data Source**. Search for the data source type and name it.

It is easy to configure both data sources. Just name them (`CSV` and `QR` are most common) and click **Create**.

> If you aren't certain, leave the `HTTP Basic Authentication` options blank on the CSV screen. You will know if these are required to access your file.

## Step 2: Host your CSV at a public URL

Any host will work if it exposes a raw CSV file through a URL. Most of the popular file sharing platforms — including Dropbox, Google Sheets, OneDrive, and Github — show a file preview by default instead of the raw file.

![Picture of github CSV preview]()

So you might need to dig a little for the right link.

![Picture of RAW CSV file in browser]()

Shortcuts for a few common providers appear below.

### Dropbox

![Example of Dropbox Permissions]()

Generate a share link with permissions set so *Anyone With Link* can access the file. The link will look like this: `https://www.dropbox.com/s/fc5e038d38a570/filename.csv?dl=0`

Change the subdomain from `www` to `dl`.

The complete URL is: `https://dl.dropbox.com/s/fc5e038d38a570/filename.csv?dl=0`

### Google Drive

![Example of Google Permissions]()

Generate a share link with permissions set so *Anyone with link can view* the file. The link will look like this: `https://drive.google.com/file/d/fc5e038d38a570/view?usp=sharing`

Copy the file identifier `fc5e038d38a570` and add it to the end of this URL: `https://drive.google.com/uc?id=`

The complete URL is: `https://drive.google.com/uc?id=fc5e038d38a570`

### OneDrive

![Example of OneDrive Embed Settings]()

Generate an HTML embed snippet for your file. Then copy its `src` attribute. The attribute looks like this: `https://onedrive.live.com/embed?cid=61905AC1E9907973&resid=61905AC1E9907973%21506&authkey=AFxkxqQH2wePxM8`

Change the word `embed` to `download`.

The complete URL is: `https://onedrive.live.com/download?cid=61905AC1E9907973&resid=61905AC1E9907973%21506&authkey=AFxkxqQH2wePxM8`

### Github

![Example of Github Raw Button]()

Right click the **Raw** button and **Copy Link Location**.

### iCloud Drive

![Example of iCloud Share Settings]()

Generate a share link and copy it to your clipboard. Open a new browser tab and enable its network inspector. Paste the URL and hit `Enter`.

The network inspector will show a HTTP `POST` to a URL like this: `https://ckdatabasews.icloud.com/database/1/com.apple.cloudkit/production/public/records/resolve?`

Inspect the JSON response to that request. The raw CSV URL is found at `results[0].rootRecord.fields.fileContent.value.downloadURL` and looks like this:

```
https://cvws.icloud-content.com/B/AYifvNUNnayDN0SZAlizP8ZfYUPMAfZEgQW_YFfb6FUKTWO6xVkZo04B/${f}?o=AgSnT48VhMQtC-elFkgjbrw22qBLn3uBOytgkANDgAtv&v=1&x=3&a=CAogw0DCZoo9iGQlDuozkTAtH4vQXNvV5qk9j5g56uwuzaESHRDd_IWOgy4Y3dnhj4MuIgEAUgRfYUPMWgQZo04B&e=1581386329&k=Yc1Tyt4g4oKp6blXKa6yBA&fl=&r=b5089feb-afa2-4d0f-b207-9c9b16524c61-1&ckc=com.apple.clouddocs&ckz=com.apple.CloudDocs&p=24&s=UoT0siK5WgA5WNxN47jHUDlSzQo
```

## Step 3: Pull the CSV into Redash

![Screenshot of query screen with URL pasted]()

1. From the top menu click **Create** then **New Query**.
2. Set the data source to CSV data source from step 1.
3. Paste the URL from step 2 into the query editor. 
4. Click **Execute**.

The CSV data is now available to Redash. If everything looks correct click **Save**. Then copy the query ID from the URL bar.

## Step 4: Query the data with QRDS

![Screenshot of QRDS query]()





## Troubleshooting

### Badly formatted CSV file

### Proxy in front of CSV file

To load a CSV file from a URL, please follow these steps:

1. Set up a new CSV data source.
2. Upload CSV somewhere so you can access it from URL.
3. Create a new query, select your CSV data source.
4. Use the CSV file URL address as the query text (i.e. https://example.com/file.csv ). Redash expects a CSV file with a header as the first row.
5. This is going to automatically populate the table view below which you can further configure and set up new visualizations.


To further filter or manipulate the data you can use the [Query Results data source]({% link _kb/user-guide/querying/query-results-data-source.md %}).

_Note: If you are using Dropbox to host the CSV file, make sure it ends as `filename.csv?dl=1`_