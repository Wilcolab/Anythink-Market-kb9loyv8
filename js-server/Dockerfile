# Use official Node.js LTS image
FROM node:18

# Set working directory
WORKDIR /app

# Copy package.json and install dependencies
COPY package.json ./
RUN yarn install

# Copy the rest of the code
COPY . .

# Expose port 8001
EXPOSE 8001

# Start the server
CMD ["yarn", "start"]
