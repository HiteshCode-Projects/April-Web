//Backend Rules To Write code

//Step 1: Importing All  Required Modules Whatever we want To Use In Our Backend Application. Like Express, Mongoose, Cors, Dotenv, Bcrypt, Jsonwebtoken Etc. We Need To Import All These Modules First Before Using Them.
// use - require('module-name') Method To Import Modules 

const express   =  require('express');


//InBuilt express function to create an express application which is inside the express module
//Step 2: Create an Express Application
const app = express();


//Step 3: Define Routes- API Endpoints
// use - app.METHODNAME(PATH, HANDLER) Method To Define Routes 

app.get('/login' ,(req,res)=>{


    res.send('Fill The Form To Login / Good Evening User')
})

app.get('/signup' ,(req,res)=>{

    res.send('Fill The Form To Signup / Good Morining User')
})

//Step 4: Start The Server
//Port. Port is Like a Address on Internet. Which Acts Like My Backend Address. So That Frontend Can Communicate With Backend Using This Port.

//We have Different Free Ports Like 3000, 5000, 8000, 8080. We Can Use Any Of These Ports To Start Our Server.

//Syntax To Start Server - app.listen(PORT, function)

app.listen(8000,()=>{
    console.log('Server Started On Port 8000 http://localhost:8000');
})