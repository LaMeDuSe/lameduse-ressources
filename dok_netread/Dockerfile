# Use an official Node.js runtime as a parent image
FROM node:18-alpine

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy the server script to the container
COPY server.js .

# Expose port 8080 to the outside world
EXPOSE 8080

# Command to run the server
CMD ["node", "server.js"]
