# VividTheoryChallenge
This is a coding challenge project which is created with PostgreSQL, Express, React, Node.
This project will fetch the blog information from the backend and renders into the frontend.
In backend, typerorm,axios, express has been used. There is server-side pagination in the project that will only fetch 6 blog at a time from the server using the querybuilder. 
In frontend, react-paginate is used with bootstrap to render the products in the card and scroll through the page and navigate to other pages as it fetches the information from the backend.


## To install the project
1. Clone the repository into your system.
2. Change the directory to 'backend'.
3. Type  **{.  npm i or npm install.  }**  to install the node modules in the project.
4. Now change the directory to 'vividblog'.
5. Repeat STEP 3 to install the node modules in this folder.
6. You are ready to start the project now.


# To run the project
Make sure to start the backend first to render the blogs into the frontend. If not, then it will not fetch the values from the backend.

{ It will listen to port:5001}
## To run the backend of the project.
1. Navigate to the 'backend' directory.
2. Open the terminal in that directory.
3. type 'npm run dev' to start the project. This will start the project with the nodemon, which means that everytime you make a change in the files it will automatically restart the building process.


## To run the frontend of the project.

1. Navigate to the 'vividblog' directory.
2. Open the terminal in the directory.
3. Type 'npm start' to start the project.

**After starting the application, you can navigate to any page. '/' will be the homepage where the blog has been sorted according to the latest published date.**


**Enjoy reading the blogs!!!**
