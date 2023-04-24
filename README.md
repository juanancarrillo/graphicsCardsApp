# GraphicsCardsApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.2.2.

This is the repository for Graphics Cards App. The application is dockerized, which means that you can run it in a Docker container on any machine that has Docker installed.

## Requirements

To run the application in a Docker container, you need to have Docker installed on your machine. You can download Docker Desktop from the official Docker website: https://www.docker.com/products/docker-desktop

## Usage instructions

To run the application in a Docker container, follow these steps:

1. Clone the repository to your local machine: `git clone https://github.com/juanancarrillo/graphicsCardsApp.git.git`
2. Navigate to the repository directory: `cd graphicsCardsApp`
3. Build the Docker image for the application: `docker build -t graphics-cards-app .`
4. Run the Docker container for the application: `docker run -p 80:80 graphics-cards-app`
5. Open a web browser and navigate to `http://localhost:80` to view the application.

And that's it! 💪 You should now see the Graphics Cards App running in a Docker container on your local machine.

# If you don't prefer Docker 😛

1. Clone the repository to your local machine: `git clone https://github.com/juanancarrillo/graphicsCardsApp.git.git`
2. Navigate to the repository directory: `cd graphicsCardsApp`
3. NPM install: `npm install`

## Step 1. Development Fake API

Run `npm run json-run` for a Fake API. Navigate to `http://localhost:3000/graphics`. 

## Step 2.  Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.


# Running tests  🧪
To run tests, follow these steps:

Run `ng test`. The command will launch the Karma test runner and execute all unit tests located in the src/app directory.

Alternatively, you can run a specific test suite or test file by providing the path to the test file as an argument:

Run `ng test path/to/test/file.spec.ts`. The command will launch the Karma test runner and execute the specified test file.

Note: You can also use the --watch flag to run the tests in watch mode, which will automatically re-run the tests when changes are made to the source files.

Run `ng test --watch=false --browsers=ChromeHeadless`. 