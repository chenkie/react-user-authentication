# React Authentication for Front End Masters

## Implementing Authentication Challenges

* Complete the `onLoginSubmit` and `onSignupSubmit` methods to make `POST` requests (sending the user's credentials) to the `api/users/authenticate` and `api/users` endpoints respectively. The methods should call a `login` and `signup` method in the `AuthService`
* Provide a method in the `AuthService` which saves the returned JWT in local storage
* Create a `logout` method which removes the user's JWT from local storage
* Provide buttons for **Log In** and **Log Out** in the home view and the toolbar

## Running the App

Install the dependencies:

```bash
npm install
```

Start the app:

```bash
npm start
```

The app will be served at `localhost:3000`.