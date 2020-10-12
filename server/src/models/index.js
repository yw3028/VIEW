import * as sequelize from 'sequelize';
import fs from 'fs'; // NEEDS CONFIRMATION: correct? does it require npm install?

import { config } from 'dotenv';
config();

const dbName = process.env.DB_NAME;
const dbUser = process.env.DB_USER;
const dbPassword = process.env.DB_PASSWORD;

export const dbConfig = new sequelize.Sequelize(dbName, dbUser, dbPassword, {
  port: Number(process.env.DB_PORT),
  host: process.env.DB_HOST,
  dialect: 'postgres',
  pool: {
    min: 0,
    max: 5,
    acquire: 30000000,
    idle: 10000000,
  },
  logging: false,
});

// Mandatory Sequelize code to avoid manual import to all the files
fs.readdirSync(__dirname)
  .filter((file) => {
    return (
      file.indexOf('.') !== 0 && file !== basename && file.slice(-3) === '.js'
    );
  })
  .forEach((file) => {
    var model = sequelize['import'](path.join(__dirname, file));
    db[model.name] = model;
  });

Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});
