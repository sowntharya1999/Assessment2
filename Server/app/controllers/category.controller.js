const db = require("../models");

const Category = db.categoryTable;
const Op = db.Sequelize.Op;

// Create and Save a new Tutorial
exports.create = (req, res) => {
     
   
    if (!req.body.Processor) {
        res.status(400).send({
          message: "Content can not be empty!"
        });
        return;
    }
    const categoryTable = {
        Weight: req.body.Weight,
        Processor: req.body.Processor,
        Ram: req.body.Ram
        
      };
    
  
    // Save Tutorial in the database
    
      Category.create(categoryTable)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the Product."
        });
      });
};

// Retrieve all Tutorials from the database.
exports.findAll = (req, res) => {
   

      const Processor = req.query.Processor;
      var condition = Processor ? { Processor: { [Op.like]: `%${Processor}%` } } : null;

      Category.findAll({ where: condition })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving products."
        });
      });
};

// Find a single Tutorial with an id
exports.findOne = (req, res) => {
  const id = req.params.id;


      Category.findByPk(id)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving product with id=" + id
        });
      });
};

// Update a Tutorial by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;


      Category.update(req.body, {
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
};

// Delete a Tutorial with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;


      Category.destroy({
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
};

// Delete all Tutorials from the database.
exports.deleteAll = (req, res) => {
  const id = req.params.id;


        Category.destroy({
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
};

// Find all published Tutorials
exports.findAllPublished = (req, res) => {
    

    Category.findAll({ where: { Processor: true } })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Products."
      });
    });
};