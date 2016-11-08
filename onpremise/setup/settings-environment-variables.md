# Settings - Environment Variables

Much of the functionality of Redash can be changes with settings. Settings are read by /redash/settings.py from environment variables which (for most installs) can be set in /opt/redash/current/.env

The follow is a list of settings and what they control:

* **REDASH_NAME**: name of the site, used in page titles, _default “Redash”_
* **REDASH_REDIS_URL**: _default “redis://localhost:6379/0”_
* **REDASH_PROXIES_COUNT**: _default “1”_
* **REDASH_STATSD_HOST**: _default “127.0.0.1”_
* **REDASH_STATSD_PORT**: _default “8125”_
* **REDASH_STATSD_PREFIX**: _default “redash”_
* **REDASH_STATSD_USE_TAGS**: whether to use tags in StatsD metrics (InfluxDB’s format), _default false_
* **REDASH_DATABASE_URL**: _default “postgresql://postgres”_
* **REDASH_CELERY_BROKER**: _default REDIS_URL_
* **REDASH_CELERY_BACKEND**: _default CELERY_BROKER_
* **REDASH_CELERY_TASK_RESULT_EXPIRES**: How many seconds to keep Celery task results in cache (in seconds), _default 3600_
* **REDASH_HEROKU_CELERY_WORKER_COUNT**: _default 2_
* **REDASH_QUERY_RESULTS_CLEANUP_ENABLED**: _default “true”_
* **REDASH_QUERY_RESULTS_CLEANUP_COUNT**: _default “100”_
* **REDASH_QUERY_RESULTS_CLEANUP_MAX_AGE**: _default “7”_
* **REDASH_SCHEMAS_REFRESH_SCHEDULE**: how often to refresh the data sources schemas (in minutes), _default 30_
* **REDASH_AUTH_TYPE**: _default “api_key”_
* **REDASH_PASSWORD_LOGIN_ENABLED**: _default “true”_
* **REDASH_ENFORCE_HTTPS**: _default “false”_
* **REDASH_MULTI_ORG**: _default “false”_
* **REDASH_GOOGLE_CLIENT_ID**: _default “”_
* **REDASH_GOOGLE_CLIENT_SECRET**: _default “”_
* **REDASH_SAML_METADATA_URL**: _default “”_
* **REDASH_SAML_LOCAL_METADATA_PATH**: _default “”_
* **REDASH_SAML_CALLBACK_SERVER_NAME**: _default “”_
* **REDASH_SAML_NAMEID_FORMAT**: _default “”_
* **REDASH_SAML_ENTITY_ID**: _default “”_
* **REDASH_STATIC_ASSETS_PATH**: _default ”../rd_ui/app/”_
* **REDASH_JOB_EXPIRY_TIME**: _default 3600 * 6_
* **REDASH_COOKIE_SECRET**: _default “c292a0a3aa32397cdb050e233733900f”_
* **REDASH_LOG_LEVEL**: _default “INFO”_
* **REDASH_MAIL_SERVER**: _default “localhost”_
* **REDASH_MAIL_PORT**: _default 25_
* **REDASH_MAIL_USE_TLS**: _default “false”_
* **REDASH_MAIL_USE_SSL**: _default “false”_
* **REDASH_MAIL_USERNAME**: _default None_
* **REDASH_MAIL_PASSWORD**: _default None_
* **REDASH_MAIL_DEFAULT_SENDER**: _default None_
* **REDASH_MAIL_MAX_EMAILS**: _default None_
* **REDASH_MAIL_ASCII_ATTACHMENTS**: _default “false”_
* **REDASH_HOST**: _default “”_
* **REDASH_CORS_ACCESS_CONTROL_ALLOW_ORIGIN**: _default “”_
* **REDASH_CORS_ACCESS_CONTROL_ALLOW_CREDENTIALS**: _default “false”_
* **REDASH_CORS_ACCESS_CONTROL_REQUEST_METHOD**: _default GET, POST, PUT”“_
* **REDASH_CORS_ACCESS_CONTROL_ALLOW_HEADERS**: _default “Content-Type”_
* **REDASH_ENABLED_QUERY_RUNNERS**: _default ”,”.join(default_query_runners)_
* **REDASH_ADDITIONAL_QUERY_RUNNERS**: _default “”_
* **REDASH_SENTRY_DSN**: _default “”_
* **REDASH_ALLOW_SCRIPTS_IN_USER_INPUT**: disable sanitization of text input, allowing full HTML, _default “true”_
* **REDASH_DATE_FORMAT**: _default “DD/MM/YY”_
* **REDASH_FEATURE_ALLOW_ALL_TO_EDIT**: _default “true”_
* **REDASH_FEATURE_SHOW_QUERY_RESULTS_COUNT**: disable/enable showing count of query results in status, _default “true”_
* **REDASH_VERSION_CEHCK**: _default “true”_
* **REDASH_FEATURE_DISABLE_REFRESH_QUERIES**: disable scheduled query execution, _default “false”_
* **REDASH_BIGQUERY_HTTP_TIMEOUT**: _default “600”_
* **REDASH_SCHEMA_RUN_TABLE_SIZE_CALCULATIONS**: _default “false”_

