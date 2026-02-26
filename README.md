# Project Overview
This project is a real-time geolocation and proximity detection application designed to provide users with accurate location tracking and alerts based on proximity to important places or other users.

# Features
- **Real-time Geolocation**: Track the user's location in real-time.
- **Proximity Detection**: Get notifications when approaching or leaving defined geofences or other users.

# Installation Instructions
## Web App
1. Clone the repository: `git clone https://github.com/wtristao/arvores.git`
2. Navigate to the project directory: `cd arvores`
3. Install dependencies: `npm install`
4. Start the application: `npm start`

## Android App
1. Ensure you have Android Studio installed.
2. Open Android Studio and import the project: File > New > Import Project.
3. Wait for Gradle to sync.
4. Connect an Android device or start an emulator.
5. Run the application from Android Studio.

# How to Use the Application
1. Launch the application on your device.
2. Grant necessary permissions for location access.
3. Set up your profile and preferences for notifications.
4. Start exploring the features as per your defined settings.

# Backend Setup
1. Ensure you have Node.js installed.
2. Clone the backend repository: `git clone https://github.com/wtristao/arvores-backend.git`
3. Navigate to the backend directory: `cd arvores-backend`
4. Install dependencies: `npm install`
5. Start the backend server: `npm start`

# Android Build Instructions
1. Open the project in Android Studio.
2. Configure the build settings in `build.gradle` files if necessary.
3. Click on Build > Build Bundle(s)/APK(s) > Build APK(s).
4. The APK will be generated in the output folder.

# API Endpoints Documentation
- **GET /api/location**: Retrieve current location data.
- **POST /api/geofence**: Create a new geofence
- **DELETE /api/geofence/:id**: Remove a geofence by ID.
- **GET /api/proximity**: Check if the user is within defined proximity.

For more details on request parameters and responses, refer to the API documentation section in the repository.