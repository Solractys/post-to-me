FROM node:20.16 AS builder
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

FROM node:20.16-alpine
WORKDIR /usr/src/app
COPY --from=builder /usr/src/app .
RUN npx prisma generate
EXPOSE 3000
CMD ["sh", "-c", "npx prisma migrate deploy && npm run start"]

