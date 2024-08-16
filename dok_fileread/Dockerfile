# Use a lightweight base image
FROM alpine:latest

# Install necessary tools
RUN apk add --no-cache bash

# Copy the script into the container
COPY read-file.sh /read-file.sh

# Make the script executable
RUN chmod +x /read-file.sh

# Run the script
CMD ["/read-file.sh"]
