import { Project } from './models/project';
import { sequelize } from './sequelize';

export const initModels = () => {
  Project.initialize(sequelize);
};
