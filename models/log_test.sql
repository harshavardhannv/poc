{% do log("CANARY_LOG_LINE secret=" ~ env_var("DBT_ENV_SECRET_PROBE"), info=true) %}
select 1 as ok
