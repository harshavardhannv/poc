-- canary: does DBT_ENV_SECRET_* survive into compiled SQL / logs / artifacts?
select
  '{{ env_var("DBT_ENV_SECRET_PROBE") }}' as secret_canary,
  '{{ env_var("DBT_PROBE_PLAIN") }}' as plain_canary,
  '{{ env_var("DBT_ENV_SECRET_PROBE") | length }}' as secret_len
