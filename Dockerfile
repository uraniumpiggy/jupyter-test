FROM node:13.12.0-alpine
COPY /build /build
EXPOSE 3000
RUN npm install -g serve
CMD ["serve", "-s", "build"]