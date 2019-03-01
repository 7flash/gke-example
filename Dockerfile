FROM node:8-alpine AS base
WORKDIR /home/node/app
COPY package.json .

FROM base AS build
RUN npm install --only=production
RUN cp -R node_modules node_modules_production
COPY . .
RUN npm install && npm run build

FROM base AS release
COPY --from=build /home/node/app/build ./build
COPY --from=build /home/node/app/node_modules_production ./node_modules
EXPOSE 3000
CMD npm start
