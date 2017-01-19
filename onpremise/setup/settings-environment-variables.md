# Settings - Environment Variables

Much of the functionality of Redash can be changes with settings. Settings are read by `redash/settings.py` from environment variables which (for most installs) can be set in `/opt/redash/current/.env`.

The follow is a list of settings and what they control:

| Name | Description | Default Value |
| -- | -- | -- |
| REDASH_NAME | name of the site, used in page titles | Redash |
| REDASH_REDIS_URL |  | “redis://localhost:6379/0” |
| REDASH_PROXIES_COUNT |  | 1 |
| REDASH_STATSD_HOST |  | 127.0.0.1 |
| REDASH_STATSD_PORT |  | 8125 |
| REDASH_STATSD_PREFIX |  | redash |
| REDASH_STATSD_USE_TAGS | whether to use tags in StatsD metrics (InfluxDB’s format) | false |
| REDASH_DATABASE_URL |  | postgresql://postgres |
| REDASH_CELERY_BROKER |  | REDIS_URL |
| REDASH_CELERY_BACKEND |  | CELERY_BROKER |
| REDASH_CELERY_TASK_RESULT_EXPIRES | How many seconds to keep Celery task results in cache (in seconds) | 3600 |
| REDASH_HEROKU_CELERY_WORKER_COUNT |  | 2 |
| REDASH_QUERY_RESULTS_CLEANUP_ENABLED |  | true |
| REDASH_QUERY_RESULTS_CLEANUP_COUNT |  | 100 |
| REDASH_QUERY_RESULTS_CLEANUP_MAX_AGE |  | 7 |
| REDASH_SCHEMAS_REFRESH_SCHEDULE | how often to refresh the data sources schemas (in minutes) | 30 |
| REDASH_AUTH_TYPE |  | api_key |
| REDASH_PASSWORD_LOGIN_ENABLED |  | true |
| REDASH_ENFORCE_HTTPS |  | false |
| REDASH_MULTI_ORG |  | false |
| REDASH_GOOGLE_CLIENT_ID |  |  |
| REDASH_GOOGLE_CLIENT_SECRET |  |  |
| REDASH_SAML_METADATA_URL |  |  |
| REDASH_SAML_LOCAL_METADATA_PATH |  |  |
| REDASH_SAML_CALLBACK_SERVER_NAME |  |  |
| REDASH_SAML_NAMEID_FORMAT |  |  |
| REDASH_SAML_ENTITY_ID |  |  |
| REDASH_STATIC_ASSETS_PATH |  | ”../rd_ui/app/” |
| REDASH_JOB_EXPIRY_TIME |  | 3600 * 6 |
| REDASH_COOKIE_SECRET |  | c292a0a3aa32397cdb050e233733900f |
| REDASH_LOG_LEVEL |  | INFO |
| REDASH_MAIL_SERVER |  | localhost |
| REDASH_MAIL_PORT |  | 25 |
| REDASH_MAIL_USE_TLS |  | false |
| REDASH_MAIL_USE_SSL |  | false |
| REDASH_MAIL_USERNAME |  | None |
| REDASH_MAIL_PASSWORD |  | None |
| REDASH_MAIL_DEFAULT_SENDER |  | None |
| REDASH_MAIL_MAX_EMAILS |  | None |
| REDASH_MAIL_ASCII_ATTACHMENTS |  | false |
| REDASH_HOST |  |  |
| REDASH_CORS_ACCESS_CONTROL_ALLOW_ORIGIN |  |  |
| REDASH_CORS_ACCESS_CONTROL_ALLOW_CREDENTIALS |  | false |
| REDASH_CORS_ACCESS_CONTROL_REQUEST_METHOD |  | GET, POST, PUT |
| REDASH_CORS_ACCESS_CONTROL_ALLOW_HEADERS |  | Content-Type |
| REDASH_ENABLED_QUERY_RUNNERS |  | ”,”.join(default_query_runners) |
| REDASH_ADDITIONAL_QUERY_RUNNERS |  |  |
| REDASH_SENTRY_DSN |  |  |
| REDASH_ALLOW_SCRIPTS_IN_USER_INPUT | disable sanitization of text input, allowing full HTML  | true |
| REDASH_DATE_FORMAT |  | DD/MM/YY |
| REDASH_FEATURE_ALLOW_ALL_TO_EDIT |  | true |
| REDASH_FEATURE_SHOW_QUERY_RESULTS_COUNT | disable/enable showing count of query results in status  | true |
| REDASH_VERSION_CHECK |  | true |
| REDASH_FEATURE_DISABLE_REFRESH_QUERIES | disable scheduled query execution | false |
| REDASH_BIGQUERY_HTTP_TIMEOUT |  | 600 |
| REDASH_SCHEMA_RUN_TABLE_SIZE_CALCULATIONS |  | false |
