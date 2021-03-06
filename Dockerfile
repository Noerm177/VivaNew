FROM node:8.11.2-slim

ENV APP_DIR=/vivaorganica-frontend

RUN mkdir $APP_DIR && mkdir -p /var/www/html

WORKDIR $APP_DIR

COPY . $APP_DIR

COPY supervisord.conf /etc/supervisor/conf.d/supervisord.conf

RUN apt-get update \
    && apt-get install -y nginx supervisor \
    && rm -rf /var/lib/apt/lists/*

COPY nginx.conf /etc/nginx/sites-available/default

RUN npm i npm@latest -g && npm install && npm audit fix && npm run build \
    && cp -rf ./dist/vivaorganica-frontend/* /var/www/html

EXPOSE 80

CMD ["/usr/bin/supervisord"]
