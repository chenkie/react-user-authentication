# React Authentication for Front End Masters

## Protecting Routes Challenges

* Add a method called `requireAuth` in `src/views/routes.js` which checks whether the user is authenticated and redirects them to the **Login** route if they aren't
* Add a method called `requireAdmin` in `src/views/routes.js` which checks whether the user is authenticated and is an admin and redirects them to the **Login** route if they aren't
* Apply the `requireAuth` check to the **Profile** and **Instructor** routes via the `onEnter` event
* Apply the `requireAdmin` check to the **NewInstructor** route via the `onEnter` event

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