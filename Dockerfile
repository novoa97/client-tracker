# Build stage
FROM node:22-alpine AS builder
WORKDIR /app

# Install all dependencies (including dev)
COPY package.json package-lock.json ./
RUN npm ci


# Copy the rest of the application
COPY . .

RUN npx prisma generate

# Build the Next.js application
RUN npm run build

# Production stage
FROM node:22-alpine AS runner
WORKDIR /app

# Set production environment
ENV NODE_ENV=production

# Copy only production dependencies
COPY package.json package-lock.json ./
RUN npm ci --omit=dev

# Copy build output and required files
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/prisma ./prisma
COPY --from=builder /app/node_modules/.prisma ./node_modules/.prisma
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/next.config.ts ./next.config.ts
COPY --from=builder /app/src/generated/prisma ./src/generated/prisma
# Expose Next.js porte
EXPOSE 3000

# Run Prisma migrations and start the app
CMD npx prisma migrate deploy && npm start
