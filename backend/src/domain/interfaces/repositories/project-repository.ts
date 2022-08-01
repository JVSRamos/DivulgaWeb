import { ProjectEntity } from '@src/domain/entities/project-entity';

export interface ProjectRepository {
  getProjects(): Promise<ProjectEntity[]>;

  createProject(project: ProjectEntity): Promise<boolean>;
}
