# Use an official Node.js runtime as a parent image
FROM node:16-alpine as builder

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install dependencies
RUN npm install --production \
    && npm cache clean --force \
    && rm -rf /tmp/*

# Copy all local files to the container
COPY . .
COPY ./manifest.json /manifest.json

# Build the React app for production
RUN npm run build

# Expose the port that the app will run on (React's default is 3000)
EXPOSE 3001

# Define the command to start your React app
CMD ["npm", "start"]