# Builder
FROM node:8.7.0 as builder
WORKDIR /src/app

COPY . .
ARG API_URL
ENV REACT_APP_API_URL=$API_URL

RUN NODE_ENV=development npm install \
    && npm run build

# Runner
FROM nginx:1.12.1-alpine
WORKDIR /usr/share/nginx/html/
COPY --from=builder /src/app/build .
COPY nginx.conf /etc/nginx/nginx.conf

# Build:    docker build -t shiff-admin .
# Test Run: docker run -it --rm -p 80:80 shiff-admin
