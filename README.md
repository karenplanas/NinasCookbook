# Nina's Cookbook

Is a web application that allows you to list, search, create, review, and rate cooking recipes. 

# Screenshots 
## Sign In screen
<img width="1275" alt="Login" src="https://user-images.githubusercontent.com/61513120/162331017-1adf297b-ef13-461d-a991-445b4862975d.png">  

## Home screen  
<img width="1146" alt="NinasCookbook" src="https://user-images.githubusercontent.com/61513120/161384093-6ee35609-2c8b-40bd-899e-b3f7bb0cba89.jpg">  

## Recipe details screen
<img width="1146" alt="RecipeDetails" src="https://user-images.githubusercontent.com/61513120/162331109-ec47b92e-210c-41a0-a1e9-48d0e2eb51b6.png">
<!-- [NinasCoobook](https://user-images.githubusercontent.com/61513120/161384093-6ee35609-2c8b-40bd-899e-b3f7bb0cba89.jpg) -->

# Getting Started
1. Clone this repo.  
  ```
  git clone https://github.com/karenplanas/NinasCookbook.git
  ```
  
2. Install dependencies in root, server and client folder.
```
npm install
```

3. Create .env file in server folder
```
MONGO_URI=
SECRET_KEY=
```

4. Install [MongoDB](https://www.mongodb.com/docs/manual/installation/) on your machine

5. Run `mongosh` without any command-line options to connect to a MongoDB instance running on your localhost with default port 27017. 
More info [here](https://www.mongodb.com/docs/mongodb-shell/connect/#std-label-mdb-shell-connect)

6. To select a database to use, in `mongosh`, issue the `use <db>` statement. If a database does not exist, MongoDB creates the database when you first store data for that database.
```
use myDB
```

7. Start the server. From the server folder, run
```
npm start
```
  
8. Start the client. From the client folder, run
```
npm start
```

# Tech Stack 
[Figma](https://www.figma.com/)  
[Notion](https://www.notion.so/)  
[React](https://reactjs.org/)  
[React Hook Form](https://react-hook-form.com/)  
[TypeScript](https://www.typescriptlang.org/)  
[JWT](https://jwt.io/)  
[Cloudinary](https://cloudinary.com/)  
[Koa](https://koajs.com/)  
[MongoDB](https://www.mongodb.com/)  
[Mongoose](https://mongoosejs.com/)  
