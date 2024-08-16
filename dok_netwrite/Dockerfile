# Use an official Node.js runtime as a parent image
FROM node:18-alpine

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy the client script to the container
COPY client.js .

# Command to run the client (reads from stdin and sends to target host/port)
CMD ["node", "client.js"]
