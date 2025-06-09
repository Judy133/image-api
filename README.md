Project Summary
This project aims to give you a real-world scenario in which you would read and write to your disk via a Node.js express server rather than a database. The project you create serves two purposes: to prepare you for setting up scalable code and architecture for real-world projects and tie together some of the most popular middleware and utilities found in Node.js projects. This project barely touches the surface of what is possible but will prove your ability to use what you’ve learned in real-world scenarios.

For this project, refactor and test as much as possible while you are building. Since you are using TypeScript and an unfamiliar library, it is sometimes easier to write and build in plain JS to see what your functions return; remember, your submission needs to be in TypeScript. As your skills improve, typing in TypeScript will feel more intuitive. Make sure to remove any debugging code from your final submission.

What Will You Build?
You will be building a single-page web app with an API that can be used for both resizing images and serving the store images.

The backend has two primary functions.

Placeholder Image Generator: The image generator API endpoint will generate images with the size set via URL parameters. This will allow you to place images into your frontend for rapid prototyping.
Cached Image Library: The API will also store the resized images as you create them. When an image request is sent, your code will check to see if the image already exists in the library. If it has been created, the API will return a link to that image. If it hasn't, a new image will be created and stored, and the link to the newly created image will be returned.
The frontend will allow users to:

Select an existing image from a local "images" folder for resizing.
Set the desired height and width parameters and click a button that returns a URL for the API image generator that can be used for placeholder images.
Upload new images to your "images" folder and display them on the page so they can be selected for placeholder image generation.
You will:

Set up both your frontend and your Node.js backends from scratch.
Install all dependencies.
Write all necessary configurations to make your dependencies work together.
Use TypeScript to write your code.
Create unit tests for each API endpoint.
Use Prettier and ESLint to identify problems in your code.
Even though the project is quite simple, the way you set up this project will be scalable enough to move to an enterprise-level solution in the future. Imagine processing hundreds of images with multiple thumbnail sizes for an eCommerce solution. This project provides the building blocks for that level of functionality.

In addition to setting up and creating the functionality, you will use industry best practices to ensure that your code is as scalable as your architecture. Using TypeScript, unit testing, linting, and formatting, you will write code that is easy to read, maintainable, less error-prone, and easier to debug. At the enterprise level, it becomes possible that hundreds of people may need to interact with your code, so being able to work within standards is imperative to your success.

What Will You Learn?
The API you create presents your first opportunity to pull together the skills you learned through the course and tie them together in a commonly used application. You'll also work through the challenges of connecting your backend API to a simple front-end website. Besides solidifying your skills, you’ll also have the opportunity to problem-solve and work with the documentation of a popular image processing utility and a commonly used library for uploading files.

The following are just some of the questions that you’ll experience along the way:

What’s the ideal workflow?
How should I structure my project?
How do I want to write my asynchronous TypeScript?
How many functions do I need to complete this task?
What types of things should I test for?
There’s no single correct answer to each question. While building this project, working with peers, and getting feedback from the project reviewer -- you will naturally develop your own answers to these questions!Build the Backend First
Although it might seem intuitive to start with the frontend when building a new application, beginning with the backend offers several advantages.

First, starting with the backend allows you to establish a solid foundation and architecture for your application. It ensures that all the necessary data structures, APIs, and server-side logic are in place, which will dictate how the frontend will interact with your application. By having a clear understanding of the capabilities and constraints of your backend, you can design a more efficient and effective frontend.

Additionally, this approach encourages you to think critically about the user's needs and the data flow rather than getting prematurely caught up in the visual aspects of the project.

Set up the backend with Node
Initialize your project. Add the dependencies required for this project, including Express, TypeScript, Jasmine, Eslint, and Prettier. Complete your package.json file.
Where should your dependencies be placed?
What scripts should you create to take advantage of the dependencies you've added?
Are there other dependencies you would like to add or know you will need to improve your workflow?
Set up your project structure. Create folders and files for what you anticipate you will need for the project.
How do you plan to keep your source code and build code separately?
Where will you place your frontend code?
Where will you keep your tests?
How do you plan to name your routes? Utilities?
Configure your middleware and dependencies. You have quite a few dependencies that all need to work together. Sometimes, it's easiest to write some simple JavaScript functions to test that all of your dependencies work together before you begin adding any functionality.
Does your TypeScript compile?
Do your Eslint and Prettier scripts work?
Are you able to write and pass a basic unit test?
Set up your server and create an API endpoint. Even though this application is fairly straightforward, you still want to set it up in a scalable way. How can you set up your server and route to make your project scalable? It's best to create this and test that it is working before you move on.
Start writing your README. You will be required to submit a detailed README.md file with your project. You can start by writing an introduction to the project.
Set up Sharp
Install Sharp(opens in a new tab). Basic documentation for Sharp can be found at npmjs: sharp(opens in a new tab). You'll need to read the documentation carefully.
Set up the endpoint for Sharp. There is limited information on using Sharp with TypeScript, but don't let that be a blocker. Think about which type the Sharp constructor would return. Have a look at the examples in the full Sharp documentation(opens in a new tab). You are required to:
Create a separate module for your processing functionality and import it into your route.
Add resizing for jpg images.
Document the endpoint in your README. The documentation should help the users understand how to make an API call to this endpoint.
Set up Testing
If you haven't already been writing unit tests, now would be the time to start. Think about what you should test. At a minimum, you should have:

At least one test for your endpoint.
At least one test for your image processing.
In your README, let users know how to run the test scripts in your project.

This is just the start. Continue to add tests to cover new features as you build out the project.

Add Caching
Add caching to your application so that repeated requests to your endpoint use pre-stored images rather than regenerating a new image each time. Describe this feature in your README.

Add Image Uploading
Install Multer(opens in a new tab): Documentation can be found at npmjs: multer(opens in a new tab). Again, you'll need to read the documentation carefully. You'll also need to add type definitions. Fortunately, you can find a package to help here: npmjs: @types/multer(opens in a new tab).
Set up the endpoint for file uploads: You will upload jpg images to a specific folder in your project using Multer's disk storage engine. See the code examples in the documentation to help you get started. As you build your endpoint, think about what should happen when a user tries to upload a file that is not a .jpg file.
Test your code:
Do the unit tests you wrote for image uploading work?
Do the unit tests you wrote for the image processing still work?
Document this new feature in your README: Make sure users know how it works and how to test it.
Build the Frontend
Now that your API is set up and your endpoints are working, it's time to build a frontend to make it easier for users to access the API's features.

Using your knowledge of HTML, CSS, and JavaScript, build an attractive frontend that allows users to:

See available images displayed as a gallery of small uniform images (thumbnails).
Select an image for resizing.
Set a width and height and then resize the image.
Upload new images that are immediately displayed in the image gallery.
As you build your frontend, don't forget to update your README to describe the features you are adding and let users know how to test them.

Be creative and have fun with the frontend!

Test, Debug, and Refactor!
Think of edge cases for your project and how someone may access your project. Should they get different error messages based on what's wrong? Make sure that your user isn't left in the dark when something goes wrong.

Do all of your tests still pass?
Does stopping and restarting your server cause any issues?
Does your user get feedback when something goes wrong?
Is your code easy to follow? Comments?
Is your API production ready?
Does your README document all of the features, API endpoints, and tests in your project?

