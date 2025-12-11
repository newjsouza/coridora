# Build stage for frontend
FROM node:18-alpine AS frontend-build

WORKDIR /app/frontend
COPY frontend/package*.json ./
RUN npm install --include=dev
COPY frontend/ .
RUN npm run build

# Main application stage
FROM node:18-alpine

WORKDIR /app

# Copy package files from root
COPY package*.json ./
RUN npm install

# Copy application structure
COPY server.js .
COPY backend/ ./backend/
COPY lib/ ./lib/
COPY config/ ./config/
COPY public/ ./public/

# Copy built frontend from build stage
COPY --from=frontend-build /app/frontend/dist ./public/dist

# Expose port
EXPOSE 3000

# Health check
HEALTHCHECK --interval=30s --timeout=10s --start-period=40s --retries=3 \
  CMD node -e "require('http').get('http://localhost:3000', (r) => {if (r.statusCode !== 200) throw new Error(r.statusCode)})" || exit 1

# Start application
CMD ["node", "server.js"]
