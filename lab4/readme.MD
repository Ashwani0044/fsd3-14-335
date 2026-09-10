# NPM project

1. create project folder
2. right click on the project and select open integrated terminal
    ![alt text].(./image.png)
3.  type in terminal `npm init -y` press enter
4. open package.json file
5. update type as `module` in package.json
    ![alt-text].(./image-1.png)
6. type in terminal `npm i nodemon -D` to install nodemon, which restarts the server while file changes. -D flag indicate install as a dev dependency
7. it creates node_modules folder and package_lock.json
8. update .gitignore file and write ./node_modules
9. update package.json to run the project, update script property as below
    ![alt text].(./image-2.png)
    ```
    "scripts": {
        "start": "node app.js",
        "dev": "nodemon app.js"
    },
    "
10. You can start the server by typing `npm run dev`