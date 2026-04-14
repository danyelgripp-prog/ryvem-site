FROM nginx:alpine
COPY index.html /usr/share/nginx/html/
COPY privacy.html /usr/share/nginx/html/
COPY terms.html /usr/share/nginx/html/
COPY nginx.conf /etc/nginx/conf.d/default.conf
