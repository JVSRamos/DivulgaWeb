import { ProjectEntity } from './project-entity';

export interface ProjectPageEntity {
  totalItems: number;
  numPages: number;
  curPage: number;
  projects: ProjectEntity[];
}
