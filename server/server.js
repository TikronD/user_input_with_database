import express from "express";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(cors());

app.get("/", function (request, response) {
  response.json("You are looking at my root route.");
});

// adding a post method
app.post("/messages", function (request, response) {
  const newMessage = request.body;
  console.log(newMessage); // this console lof will appear in the terminal
  // here is here the adding of the message to the database will go
  response.json(newMessage);
});

app.listen(8080, function () {
  console.log("app running");
});
