var express = require("express")
const mongoose = require('mongoose');

var app = express()

// Middleware
app.use(express.static(__dirname + '/public'))
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// MongoDB Connection
mongoose.connect('mongodb://127.0.0.1:27017/myprojectDB');

mongoose.connection.on('connected', () => {
  console.log('Connected to MongoDB');
});

// Schema
const ProjectSchema = new mongoose.Schema({
  title: String,
  image: String,
  link: String,
  description: String,
});

// Model
const Project = mongoose.model('Project', ProjectSchema);

// API Route
app.get('/api/projects', async (req, res) => {

  const projects = await Project.find({});

  res.json({
    statusCode: 200,
    data: projects,
    message: "Success"
  });

});

// Port
var port = process.env.PORT || 3000;

// Start Server
app.listen(port, () => {
  console.log("App listening to: " + port)
})