import path from 'path';
import fs from 'fs';
import { Umzug, SequelizeStorage } from 'umzug';
import { sequelize } from './sequelize';

export const migrator = new Umzug({
  migrations: {
    glob: ['migrations/*.ts', { cwd: __dirname }],
  },
  context: sequelize,
  storage: new SequelizeStorage({
    sequelize,
  }),
  logger: console,
  create: {
    folder: 'migrations',
    template: (filepath) => [
      // read template from filesystem
      [
        filepath,
        fs
          .readFileSync(path.join(__dirname, 'template/migration-template.ts'))
          .toString(),
      ],
    ],
  },
});

export type Migration = typeof migrator._types.migration;
