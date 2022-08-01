import { ProjectEntity } from '../entities/project-entity';
import { ProjectRepository } from '../interfaces/repositories/project-repository';

export class MockProjectRepository implements ProjectRepository {
  getProjects(): Promise<ProjectEntity[]> {
    throw new Error('Method not implemented');
  }

  createProject(project: ProjectEntity): Promise<boolean> {
    throw new Error('Method not implemented');
  }
}
