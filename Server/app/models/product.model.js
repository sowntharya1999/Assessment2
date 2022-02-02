module.exports = (sequelize, Sequelize) => {
    const Product = sequelize.define("productTable", {
      
      P_Name: {
        type: Sequelize.STRING
      },
      Prize: {
        type: Sequelize.FLOAT
      },
      CountryOfOrigin: {
        type: Sequelize.STRING
      },
      Category:{
        type: Sequelize.INTEGER 
        
      }
     
    },
    {
      timestamps: false,
    });
    // const Category = sequelize.define("categoryL", {
      
    //     Weight: {
    //       type: Sequelize.INTEGER
    //     },
    //     Processor: {
    //       type: Sequelize.STRING
    //     },
    //     Ram: {
    //       type: Sequelize.STRING
    //     },  
    // },
    //   {
    //     timestamps: false,
    //   });
      
    return Product;
    
  };
