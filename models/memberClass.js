const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class MemberClass extends Model { }

MemberClass.init(
  {
    // define columns
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    member_id: {
      type: DataTypes.INTEGER,
      // references: {
      //   model: 'member',
      //   key: 'id',
      // },
    },
    class_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'class',
        key: 'id',
      },
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'member_class',
  }
);

module.exports = MemberClass;
