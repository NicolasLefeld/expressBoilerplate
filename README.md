# API REST BoilerPlate

```                                      
┌┐ ┌─┐┬┬  ┌─┐┬─┐┌─┐┬  ┌─┐┌┬┐┌─┐
├┴┐│ │││  ├┤ ├┬┘├─┘│  ├─┤ │ ├┤ 
└─┘└─┘┴┴─┘└─┘┴└─┴  ┴─┘┴ ┴ ┴ └─┘      
           
```
## Use information

You will find:
* [env.example](env.example) with some default variables.
  * U'll access the variables with process.env.VARIABLE_NAME
* MongoDB connection in this [file](db/dbConnection.js)
  * Basic MongoDB connection
* Router example [here](routers/example.js)
  * First you need to add the path to the server.js and then create the router
* Mongoose schema example [here](schemas/example.js)
  * The schemas for MongoDB to work
* Util file example [here](utils/example.js)
  * WHere the functions of an specific process are stored
* A nice an simple [Dockerfile](Dockerfile)
  * Run "docker build --tag dockerImageNameHere ." and then u'll have the image stored.
  * Run "docker images" to check it!
  * Now you have the image. Then you will need to run it with "docker run" or create a docker-compose (I recomend the second option)

## Some recomendations
* Use nodemon!
* If you need to paginate responses, try to use mongoose-paginate
* Use eslint, its a file formater. You'll use a comercial format style, like the one used on [Airbnb](https://github.com/airbnb/javascript)
* Store the dates with unix time format on the DB
* If you need to work with arrays, numbers, objects, strings, etc. Check [lodash](https://lodash.com/)!

## Information about the technologies used
* Node JS
  * It's a environment of execution for JavaScript, based on on the V8 engine of Chrome.
  * Lightweight and efficient 
* Express
  * Web framework for 
* MongoDB
  * Non-SQL DataBase
* Mongoose
  * It's a module for MongoDB that'll give you the posibility to work with schemas. That means that the objects that'll store on the DB, will follow that schema that you previously define.
* Docker
  * With Docker you'll have the power of making docker images, then run them on containers!. That means that you just need to have a Dockerfile, generate the image then with the image you can run it in a container, isolated from the rest of the system.

## Made by

🇦🇷 Nicolás Lefeld 💕