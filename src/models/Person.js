const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define('person', {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    age: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    moviesAsActor: {
      type: DataTypes.ARRAY(DataTypes.JSON),
      defaultValue: []
    },
    moviesAsDirector: {
      type: DataTypes.ARRAY(DataTypes.JSON),
      defaultValue: []
    },
    moviesAsProducer: {
      type: DataTypes.ARRAY(DataTypes.JSON),
      defaultValue: []
    },
  },
    {
      timestamps: false
    });
};
