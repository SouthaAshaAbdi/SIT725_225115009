const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/myprojectDB');

const ProjectSchema = new mongoose.Schema({
  title: String,
  image: String,
  link: String,
  description: String,
});

const Project = mongoose.model('Project', ProjectSchema);

const sampleProjects = [
  {
    title: "Tree 2",
    image: "images/tree2.png",
    link: "About tree 2",
    description: "Demo description about tree 2"
  },
  {
    title: "Tree 3",
    image: "images/tree3.png",
    link: "About tree 3",
    description: "Demo description about tree 3"
  }
];

Project.insertMany(sampleProjects)
  .then(() => {
    console.log("Sample projects saved!");
    mongoose.connection.close();
  })
  .catch((err) => {
    console.log(err);
  });