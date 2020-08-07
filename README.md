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

# Some recomendations
* Use nodemon!
* If you need to paginate responses, try to use mongoose-paginate
* Use eslint, its a file formater. You'll use a comercial format style, like the one used on [Airbnb](https://github.com/airbnb/javascript)
* Store the dates with unix time format on the DB

## Made by

🇦🇷 Nicolás Lefeld 💕