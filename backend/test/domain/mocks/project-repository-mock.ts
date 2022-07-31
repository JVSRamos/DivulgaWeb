import { ProjectEntity } from '../entities/project-entity';
import { ProjectPageEntity } from '../entities/project-page-entity';
import { ProjectRepository } from '../interfaces/repositories/project-repository';

export class MockProjectRepository implements ProjectRepository {
  getPaginatedFilteredProjects(): Promise<ProjectPageEntity> {
    throw new Error('Method not implemented');
  }

  createProject(project: ProjectEntity): Promise<boolean> {
    throw new Error('Method not implemented');
  }
}
