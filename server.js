const http=require("http");
const express=require("express");
const { Console } = require("console");
const app=express();
const server=http.createServer(app);
const port=process.env.PORT ||3000;

app.use(express.static(__dirname+'/public'));

app.get('/',(req,res)=>{
    res.sendFile(__dirname+'/index.html');

})


//socket id strts
  const io=require("socket.io")(server);
  var users={};
  io.on("connection",(socket)=>{
    socket.on("new-user-joined",(username)=>{
      users[socket.id]=username;
      console.log(users);

    })


    
  })


  //socket io setup



server.listen(port,()=>{
    console.log("Server started at " +port);
});