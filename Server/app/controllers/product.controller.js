const db = require("../models");
const Product = db.productTable;

const Op = db.Sequelize.Op;

// Create and Save a new Tutorial
exports.create = (req, res) => {
    if (!req.body.P_Name) {
        res.status(400).send({
          message: "Content can not be empty!"
        });
        return;
    }

    // Create a Tutorial
    const productTable = {
      P_Name: req.body.P_Name,
      Prize: req.body.Prize,
      CountryOfOrigin: req.body.CountryOfOrigin,
      Category:req.body.Category
      
    };
    // if (!req.body.Weight) {
    //     res.status(400).send({
    //       message: "Content can not be empty!"
    //     });
    //     return;
    // }
    // const categoryL = {
    //     Weight: req.body.Weight,
    //     Processor: req.body.Processor,
    //     Ram: req.body.Ram
        
    //   };
    
  
    // Save Tutorial in the database
    Product.create(productTable)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the Product."
        });
      });
    //   Category.create(categoryL)
    //   .then(data => {
    //     res.send(data);
    //   })
    //   .catch(err => {
    //     res.status(500).send({
    //       message:
    //         err.message || "Some error occurred while creating the Product."
    //     });
    //   });
};

// Retrieve all Tutorials from the database.
exports.findAll = (req, res) => {
    const P_Name = req.query.P_Name;
    var condition = P_Name ? { P_Name: { [Op.like]: `%${P_Name}%` } } : null;
  
    Product.findAll({ where: condition })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving products."
        });
      });

    //   const Weight = req.query.Weight;
    //   var condition = Weight ? { Weight: { [Op.like]: `%${Weight}%` } } : null;

    //   Category.findAll({ where: condition })
    //   .then(data => {
    //     res.send(data);
    //   })
    //   .catch(err => {
    //     res.status(500).send({
    //       message:
    //         err.message || "Some error occurred while retrieving products."
    //     });
    //   });
};

// Find a single Tutorial with an id
exports.findOne = (req, res) => {
    const id = req.params.id;

    Product.findByPk(id)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving product with id=" + id
        });
      });

    //   Category.findByPk(id)
    //   .then(data => {
    //     res.send(data);
    //   })
    //   .catch(err => {
    //     res.status(500).send({
    //       message: "Error retrieving product with id=" + id
    //     });
    //   });
};

// Update a Tutorial by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;

    Product.update(req.body, {
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Product was updated successfully."
          });
        } else {
          res.send({
            message: `Cannot update product with id=${id}. Maybe product was not found or req.body is empty!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating product with id=" + id
        });
      });

    //   Category.update(req.body, {
    //     where: { id: id }
    //   })
    //     .then(num => {
    //       if (num == 1) {
    //         res.send({
    //           message: "Product was updated successfully."
    //         });
    //       } else {
    //         res.send({
    //           message: `Cannot update product with id=${id}. Maybe product was not found or req.body is empty!`
    //         });
    //       }
    //     })
    //     .catch(err => {
    //       res.status(500).send({
    //         message: "Error updating product with id=" + id
    //       });
    //     });
};

// Delete a Tutorial with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;

    Product.destroy({
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Product was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete product with id=${id}. Maybe product was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete product with id=" + id
        });
      });

    //   Category.destroy({
    //     where: { id: id }
    //   })
    //     .then(num => {
    //       if (num == 1) {
    //         res.send({
    //           message: "Product was deleted successfully!"
    //         });
    //       } else {
    //         res.send({
    //           message: `Cannot delete product with id=${id}. Maybe product was not found!`
    //         });
    //       }
    //     })
    //     .catch(err => {
    //       res.status(500).send({
    //         message: "Could not delete product with id=" + id
    //       });
    //     });
};

// Delete all Tutorials from the database.
exports.deleteAll = (req, res) => {
    Product.destroy({
        where: {},
        truncate: false
      })
        .then(nums => {
          res.send({ message: `${nums} Products were deleted successfully!` });
        })
        .catch(err => {
          res.status(500).send({
            message:
              err.message || "Some error occurred while removing all products."
          });
        });

        // Category.destroy({
        //     where: {},
        //     truncate: false
        //   })
        //     .then(nums => {
        //       res.send({ message: `${nums} Products were deleted successfully!` });
        //     })
        //     .catch(err => {
        //       res.status(500).send({
        //         message:
        //           err.message || "Some error occurred while removing all products."
        //       });
        //     });
};

// Find all published Tutorials
exports.findAllPublished = (req, res) => {
    Product.findAll({ where: { Category: true } })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Products."
      });
    });

    // Category.findAll({ where: { Processor: true } })
    // .then(data => {
    //   res.send(data);
    // })
    // .catch(err => {
    //   res.status(500).send({
    //     message:
    //       err.message || "Some error occurred while retrieving Products."
    //   });
    // });
};