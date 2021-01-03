FROM "node:alpine"

WORKDIR /usr/app

# Using cache on package.json to avoid 
# having to re-install dependencies every time
COPY package.json .

RUN npm install

COPY . .

CMD ["npm", "start"]