import { ProjectPageEntity } from '@src/domain/entities/project-page-entity';
import { testProject1, testProject2 } from './project-mock';

export const testProjectPage: ProjectPageEntity = {
  totalItems: 2,
  numPages: 1,
  curPage: 0,
  projects: [testProject1, testProject2],
};
