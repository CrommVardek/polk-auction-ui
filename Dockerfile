# Build step
FROM node:14 as build
WORKDIR /app
COPY package.json yarn.lock ./
RUN yarn install
COPY . ./
RUN yarn build:prod

# Run step
FROM nginx:stable-alpine
COPY nginx.conf /etc/nginx/nginx.conf
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80
EXPOSE 443
CMD ["/bin/sh", "-c", "'while", ":;", "do", "sleep", "6h", "&", "wait", "\$\${!};", "nginx", "-s", "reload;", "done", "&", "nginx", "-g", "\"daemon off;\"'"]