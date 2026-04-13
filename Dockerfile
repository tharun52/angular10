# Stage 1: Build
FROM node:14-alpine AS build

WORKDIR /app

COPY package*.json ./
RUN npm install --legacy-peer-deps

COPY . .
RUN npm run build -- --prod

# Stage 2: Serve with nginx
FROM nginx:alpine

COPY --from=build /app/dist/angular-starter/browser /usr/share/nginx/html

# SPA fallback: redirect 404s to index.html for Angular routing
RUN printf 'server {\n\
    listen 80;\n\
    root /usr/share/nginx/html;\n\
    index index.html;\n\
    location / {\n\
        try_files $uri $uri/ /index.html;\n\
    }\n\
}\n' > /etc/nginx/conf.d/default.conf

EXPOSE 80
