require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const http = require("http");
const { Server } = require("socket.io");

const app = express();
const server = http.createServer(app);
const io = new Server(server,{
  cors:{
    origin:"*"
  }
});


app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

mongoose.connect(process.env.MONGO_URI)
.then(()=>console.log("Mongo Connected"))
.catch(err=>console.log(err));

app.use((req,res,next)=>{
  req.io = io;
  next();
});

app.use("/", require("./routes/pollRoutes"));
app.use("/vote", require("./routes/voteRoutes"));

io.on("connection", socket=>{
  socket.on("joinPoll", id=>{
    socket.join(id);
  });
});

server.listen(process.env.PORT, ()=>{
  console.log("Server running");
});
