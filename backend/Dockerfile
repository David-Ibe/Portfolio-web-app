# Use Node.js LTS as base image
FROM node:18-alpine

# Set working directory
WORKDIR /usr/src/app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy source code
COPY . .

# Build the app
RUN npm run build

# Expose port (default for NestJS)
EXPOSE 3001

# Start the app
CMD ["npm", "run", "start:prod"]