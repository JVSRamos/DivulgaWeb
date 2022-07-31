import { ProjectEntity } from '@src/domain/entities/project-entity';
import { ProjectPageEntity } from '@src/domain/entities/project-page-entity';

export interface ProjectRepository {
  getPaginatedFilteredProjects(
    limit: number,
    offset: number
  ): Promise<ProjectPageEntity>;

  createProject(project: ProjectEntity): Promise<boolean>;
}
