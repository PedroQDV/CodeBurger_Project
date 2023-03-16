'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    id: {
      type: Sequelize.UUID
      DefaultValue: Sequelize.UUIDV4
      allowNull: false
      primaryKey: true
    };

    name: {
      type: Sequelize.STRING
      allowNull: false
    };

    email: {
      type: Sequelize.STRING
      allowNull: false
      unique: true
    };

    password_hash: {
      type: Sequelize.STRING
      allowNull: false
    };

    admin: {
      type: Sequelize.BOOLEAN
      DefaultValue: false
      allowNull: false
    };

    created_at: {
      type: Sequelize.DATE
      allowNull: false
    };

    updated_at: {
      type: Sequelize.DATE
      allowNull: false
    };
  },

  async down (queryInterface) {
      await queryInterface.dropTable('users');
  }
}
