React Native App

This is a React Native mobile application for managing recipes. It provides features like login, registration, searching for recipes, and hiding extra recipe details.

Setup Instructions:

1. Clone the repository:
   git clone <repository_url>

2. Navigate to the project directory:
   cd react-native-app

3. Install dependencies using npm:
   npm install

4. Start the development server:
   npm start

5. Install the Expo Go app on your mobile device.

6. Scan the QR code displayed in the terminal with the Expo Go app to view the app.

Functionality:

- Login:

  - Description: Allows users to log in to their accounts.
  - Input fields: Username, Password.
  - Authentication: Validates user credentials and grants access.

- Register:

  - Description: Allows users to create new accounts.
  - Input fields: Username, Password, Confirm Password.
  - Registration process: Registers new users with unique credentials.

- Search Functionality:

  - Description: Enables users to search for recipes.
  - Input field: Search query for recipes.
  - Integration: Retrieves recipe data from an external API.

- Hiding Extra Data:
  - Description: Provides an option to hide additional recipe details.
  - Functionality: Allows users to toggle between showing/hiding extra information.

API Integration:

- Base URL: [https://api.edamam.com/api/]
- Endpoints:
  - Authentication: /auth
  - Recipe Retrieval: /recipes/v2
