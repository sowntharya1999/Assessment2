const { Product } = require("../models/index.js");
 
module.exports = app => {
    const productTable = require("../controllers/product.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Tutorial
    router.post("/", productTable.create);
  
    // Retrieve all Tutorials
    router.get("/", productTable.findAll);
   
  
    // Retrieve all published Tutorials
    router.get("/published", productTable.findAllPublished);
  
    // Retrieve a single Tutorial with id
    router.get("/:id", productTable.findOne);
    // Update a Tutorial with id
    router.put("/:id", productTable.update);
  
    // Delete a Tutorial with id
    router.delete("/:id", productTable.delete);
  
    // Delete all Tutorials
    router.delete("/", productTable.deleteAll);
  
    app.use('/api/productTables', router);
  };