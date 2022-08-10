import { Migration } from '../umzug';
import { DataTypes } from 'sequelize';

export const up: Migration = async ({ context: sequelize }) => {
  await sequelize.query(`raise fail('up migration not implemented')`);
};

export const down: Migration = async ({ context: sequelize }) => {
  await sequelize.query(`raise fail('down migration not implemented')`);
};
