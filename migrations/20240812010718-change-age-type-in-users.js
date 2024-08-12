module.exports = {
  up: async (queryInterface, Sequelize) => {
    // Cambiar el tipo de dato de la columna 'age' a INTEGER
    await queryInterface.changeColumn('User', 'age', {
      type: Sequelize.INTEGER,
      allowNull: true,
    });
  },

  down: async (queryInterface, Sequelize) => {
    // Revertir el cambio si se deshace la migración
    await queryInterface.changeColumn('User', 'age', {
      type: Sequelize.DATE,
      allowNull: true,
    });
  }
};
