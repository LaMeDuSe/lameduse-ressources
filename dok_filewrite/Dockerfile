# Use a lightweight base image
FROM alpine:latest

# Install necessary tools
RUN apk add --no-cache bash

# Copy the script into the container
COPY write-file.sh /write-file.sh

# Make the script executable
RUN chmod +x /write-file.sh

# Run the script
CMD ["/write-file.sh"]
