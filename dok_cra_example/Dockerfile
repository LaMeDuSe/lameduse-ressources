FROM node:18 AS build

WORKDIR /app

COPY . .

RUN npm ci --silent

RUN npm run build

FROM nginx:alpine

# Allows you to copy from an app to an other app
COPY --from=build /app/build /usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf

# Expose port 80 for the web server
EXPOSE 80

# Command to run NGINX
CMD ["nginx", "-g", "daemon off;"]
