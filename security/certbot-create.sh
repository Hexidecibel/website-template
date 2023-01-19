certbot certonly \
  --standalone \
  --agree-tos \
  --non-interactive \
  -m ccushman@fulcrum.net \
  -d ccushman.com \
  --preferred-challenges http \
  --http-01-port 9785 \
  --renew-with-new-domains \
  --keep-until-expiring
