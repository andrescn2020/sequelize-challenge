const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define('movie', {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    year: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    casting: {
      type: DataTypes.ARRAY(DataTypes.JSON),
      defaultValue: []
    },
    directors: {
      type: DataTypes.ARRAY(DataTypes.JSON),
      defaultValue: []
    },
    producers: {
      type: DataTypes.ARRAY(DataTypes.JSON),
      defaultValue: []
    },
  },
    {
      timestamps: false
    });
};
