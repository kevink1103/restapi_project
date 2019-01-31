'use strict'

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    email: {
      allowNull: false,
      unique: true,
      type: DataTypes.STRING,
      validate: {
        isEmail: true,
      },
    },
    password: {
      allowNull: false,
      type: DataTypes.STRING,
    }
  }, {
    tableName: 'users',
    timestamps: true,
  })

  User.associate = function (models) {
    // associations
  }

  // hooks

  return User
}