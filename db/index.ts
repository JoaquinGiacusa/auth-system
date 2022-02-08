import { Sequelize, Model, DataTypes } from "sequelize";

export const sequelize = new Sequelize({
  dialect: "postgres",
  username: "snermenbgrfjwp",
  password: "38f97bac253f4f7ea41daeb62fa383ab100335fed907cb9279cf3e7b37fcd2f0",
  database: "d75cjhbcu07so7",
  port: 5432,
  host: "ec2-3-232-163-23.compute-1.amazonaws.com",
  ssl: true,
  // esto es necesario para que corra correctamente
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false,
    },
  },
});

// try {
//     await sequelize.authenticate();
//     console.log("Connection has been established successfully.");
//   } catch (error) {
//     console.error("Unable to connect to the database:", error);
//   }
