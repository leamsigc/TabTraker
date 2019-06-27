module.exports = (sequelize, DataType) => sequelize.define('User', {
  email: {
    type: DataType.STRING,
    unique: true,
  },
  name: DataType.STRING,
  password: DataType.STRING,
});

// {
//   type: DataType.STRING,
//     allowNull: false,
//       validate: {
//     len: [7, 100],
//     },
//   }
