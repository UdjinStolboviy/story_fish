# Stage build
FROM node:16-alpine3.15 AS BUILDER
WORKDIR /usr/src/app

ENV PORT 3000

COPY package.json yarn.lock /usr/src/app/
RUN yarn

COPY . /usr/src/app
RUN yarn export


# Stage production
FROM nginx:1.20
WORKDIR /var/www/html

COPY --from=BUILDER /usr/src/app/out /var/www/html
COPY --from=BUILDER /usr/src/app/nginx.conf /etc/nginx/conf.d/default.conf

COPY env.sh /
COPY .env.template /

RUN chmod +x /env.sh

EXPOSE 80

CMD [ "/bin/bash", "-c", "/env.sh /.env.template && nginx -g \"daemon off;\"" ]
