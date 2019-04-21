'use strict'

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn(
      'users',
      'uuid', {
        allowNull: false,
        unique: true,
        type: Sequelize.STRING.BINARY
        // after: 'id' only in MySQL
      },
    )
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn(
      'users',
      'uuid',
    )
  }
}
