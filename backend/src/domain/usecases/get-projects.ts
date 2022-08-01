import { ProjectEntity } from '../entities/project-entity';
import { ProjectRepository } from '../interfaces/repositories/project-repository';
import { GetProjectsUseCase } from '../interfaces/usecases/get-projects-use-case';

export class GetProjects implements GetProjectsUseCase {
  projectRepository: ProjectRepository;

  constructor(projectRepository: ProjectRepository) {
    this.projectRepository = projectRepository;
  }

  async execute(): Promise<ProjectEntity[]> {
    const result = await this.projectRepository.getProjects();
    return result;
  }
}
