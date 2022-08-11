import { ProjectEntity } from '../entities/project-entity';
import { ProjectRepository } from '../interfaces/repositories/project-repository';
import { CreateProjectUseCase } from '../interfaces/usecases/create-project-use-case';

export class CreateProject implements CreateProjectUseCase {
  projectRepository: ProjectRepository;

  constructor(projectRepository: ProjectRepository) {
    this.projectRepository = projectRepository;
  }

  async execute(project: ProjectEntity): Promise<ProjectEntity> {
    const result = await this.projectRepository.createProject(project);
    return result;
  }
}
