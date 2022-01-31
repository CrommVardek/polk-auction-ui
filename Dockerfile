# Build step
FROM node:14 as build
WORKDIR /app
COPY package*.json ./
RUN yarn install
COPY . ./
RUN yarn build:prod

# Run step
FROM nginx:stable-alpine
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]