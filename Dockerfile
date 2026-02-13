# Build stage
FROM node:22-alpine AS builder
WORKDIR /app

# Install all dependencies (including dev)
COPY package.json package-lock.json ./
RUN npm ci


# Copy the rest of the application
COPY . .
RUN ls -la /app && ls -la /app/src && cat /app/tsconfig.json

RUN npx prisma generate

# Build the Next.js application
RUN npm run build

# Production stage
FROM node:22-alpine AS runner
WORKDIR /app

# Set production environment
ENV NODE_ENV=production

# Create a non-root user
RUN addgroup --system --gid 1001 nodejs && \
    adduser --system --uid 1001 nextjs

# Copy only production dependencies
COPY package.json package-lock.json ./
RUN npm ci --omit=dev

# Copy build output and required files with proper ownership
COPY --from=builder --chown=nextjs:nodejs /app/.next ./.next
COPY --from=builder --chown=nextjs:nodejs /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/prisma ./prisma
COPY --from=builder --chown=nextjs:nodejs /app/node_modules/.prisma ./node_modules/.prisma
COPY --from=builder --chown=nextjs:nodejs /app/package.json ./package.json
COPY --from=builder --chown=nextjs:nodejs /app/next.config.ts ./next.config.ts
COPY --from=builder --chown=nextjs:nodejs /app/src/generated/prisma ./src/generated/prisma

# Change ownership of node_modules to nextjs user
RUN chown -R nextjs:nodejs /app/node_modules

# Switch to non-root user
USER nextjs

# Expose Next.js port
EXPOSE 3000

# Run Prisma migrations and start the app
CMD npx prisma migrate deploy && npm start
