module.exports = (sequelize, Sequelize) => {
    
    const Category = sequelize.define("categoryTable", {
      
        Weight: {
          type: Sequelize.INTEGER
        },
        Processor: {
          type: Sequelize.STRING
        },
        Ram: {
          type: Sequelize.STRING
        },  
    },
      {
        timestamps: false,
      });
      
    return Category;
    
  };
