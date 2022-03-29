FROM node:lts-alpine
WORKDIR /app
ENV NODE_ENV=production
COPY package*.json /app/
RUN npm install
COPY . /app
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]

# FROM node:lts-alpine AS DEPS
# WORKDIR /app
# COPY  package.json package-lock.json ./
# RUN npm install
# COPY . .

# # END DEP IMAGE
# FROM node:lts-alpine AS BUILD_IMAGE
# WORKDIR /build
# COPY --from=DEPS /app ./
# RUN npm run build


# # PROD IMAGE
# FROM node:lts-alpine

# ENV NODE_ENV production

# RUN addgroup -g 1001 -S nodejs
# RUN adduser -S nextjs -u 1001

# WORKDIR /app
# COPY --from=BUILD_IMAGE --chown=nextjs:nodejs /app/package*.json ./
# COPY --from=BUILD_IMAGE --chown=nextjs:nodejs /app/node_modules ./node_modules
# COPY --from=BUILD_IMAGE --chown=nextjs:nodejs /app/public ./public
# COPY --from=BUILD_IMAGE --chown=nextjs:nodejs /app/.next ./.next
# COPY --from=BUILD_IMAGE --chown=nextjs:nodejs /app/next.config.js  ./
# #COPY --from=BUILD_IMAGE --chown=nextjs:nodejs /app/components ./components
# RUN npm install next
# USER nextjs

# EXPOSE 3000

# CMD ["npm", "run", "start"]