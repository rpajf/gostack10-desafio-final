module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('deliveries', 'status', {
      type: Sequelize.STRING,
      defaultValue: 'Pendente',

      allowNull: true,
    });
  },

  down: queryInterface => {
    return queryInterface.removeColumn('deliveries', 'status');
  },
};
