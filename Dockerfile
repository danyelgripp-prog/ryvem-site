FROM node:20-alpine AS builder
WORKDIR /app
COPY package.json pnpm-lock.yaml ./
COPY patches/ patches/
RUN npm install -g pnpm && pnpm install --frozen-lockfile
COPY . .
RUN pnpm vite build

FROM nginx:alpine
COPY --from=builder /app/dist/public /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
