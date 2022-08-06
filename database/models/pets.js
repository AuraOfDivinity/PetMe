module.exports = (sequelize, Sequelize) => {
  const Pet = sequelize.define("pet", {
    name: {
      type: Sequelize.STRING
    },
    description: {
      type: Sequelize.STRING
    },
    longiture: {
      type: Sequelize.FLOAT
    },
    latitude: {
      type: Sequelize.FLOAT
    },
    image_url: {
      type: Sequelize.STRING
    },
    age: {
      type: Sequelize.INTEGER
    },
    photos: {
      type: Sequelize.STRING
    },
    contact_number: {
      type: Sequelize.STRING
    }
  });

  return Pet;
};