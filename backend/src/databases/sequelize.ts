import {
  DB_DATABASE,
  DB_HOST,
  DB_LOGGING,
  DB_PASSWORD,
  DB_PORT,
  DB_USER,
} from '@src/config/server';
import { Sequelize } from 'sequelize';

export const sequelize = new Sequelize(DB_DATABASE, DB_USER, DB_PASSWORD, {
  dialect: 'postgres',
  host: DB_HOST,
  port: DB_PORT,
  logging: DB_LOGGING,
});
