# Configuration sheet for a single container

#We  use an official node js runtime as a parent image. Image is like a snapshot of the environment, so when we run the container, the container loads to the exact image of the environment
FROM node:22-alpine

# Set the working directory in the container
WORKDIR /app

# Copy the package.json and the package-lock.json files to the container
# the . means that after copying the packages, it will throw them inside the /app folder designated above
COPY package*.json .

# Install the dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Expose the port that the app runs on
# When we run the app inside the container, it is basically walled off from the external world. So we need to map an external port to an internal port. With this command we are telling the container to open up the port to external requests, otherwise we wouldnt be able to send network requests to
EXPOSE 3001

# Define the command to run your application, or boot out our app to the external world
# Like what we define inside script on package.json
CMD ["node", "./src/server.js"]