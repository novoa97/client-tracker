# ClientTracker

**ClientTracker** is a Next.js-based web application designed to track and manage clients with map integration.

## 🚀 Getting Started

To run this project in Docker, you must set the following **environment variables**:

- `MYSQL_DATABASE_URL` – Your MySQL database connection string.
- `GOOGLE_MAPS_API_KEY` – Google Maps API key with proper permissions.
- `COOKIE_SECURE` – *(Optional)* Set to `false` only if running locally without SSL (e.g., via IP or localhost).  
  By default, cookies are secure (`true`), meaning they are only sent over HTTPS.
- `DATA_PATH` – *(Optional)* Path inside the container where files will be stored. Defaults to `/data`.

The app runs on **port 3000**.

## 💾 File Persistence

To persist uploaded files, you should mount a volume to the data directory. By default, this is `/data`.

## 🔐 Required Google Maps API Permissions

The `GOOGLE_MAPS_API_KEY` must have access to the following services:

- **Places API**
- **Places API (New)**
- **Geocoding API**
- **Maps JavaScript API**

These permissions are required for location search, geocoding, and map rendering functionalities.


## 🔧 Example

```bash
docker run -p 3000:3000 \
  -v $(pwd)/data:/data \
  -e MYSQL_DATABASE_URL="mysql://user:password@host:3306/db" \
  -e GOOGLE_MAPS_API_KEY="YOUR_API_KEY" \
  novoa97/client-tracker