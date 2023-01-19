#!/usr/bin/env bash
set -euo pipefail

# once setup with initial certbot, this script will renew, and combine certs
# so that haproxy can read them properly, and then reload the haproxy service

mkdir -p /etc/haproxy/ssl-certs

certbot renew || true

for dir in $(find /etc/letsencrypt/live/* -type d); do
  domain=$(basename $dir)
  cat $dir/fullchain.pem $dir/privkey.pem > /etc/haproxy/ssl-certs/$domain.pem
  chown haproxy:ssl-cert /etc/haproxy/ssl-certs/$domain.pem
done

haproxy -c -f /etc/haproxy/haproxy.cfg && systemctl reload haproxy
