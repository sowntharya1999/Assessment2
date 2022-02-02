
const { Category} = require("../models/categoryindex.js");
 
module.exports = app => {
    
    const categoryTable=require("../controllers/category.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Tutorial

    router.post("/", categoryTable.create);
  
    // Retrieve all Tutorials
    
    router.get("/", categoryTable.findAll);
   
  
    // Retrieve all published Tutorials
    router.get("/published", categoryTable.findAllPublished);
  
    // Retrieve a single Tutorial with id
    router.get("/:id", categoryTable.findOne);
    // Update a Tutorial with id
    router.put("/:id", categoryTable.update);
  
    // Delete a Tutorial with id
    router.delete("/:id", categoryTable.delete);
  
    // Delete all Tutorials
    router.delete("/", categoryTable.deleteAll);
  
    app.use('/api/productTables', router);
  };