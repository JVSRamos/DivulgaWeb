import { ProjectPageEntity } from '../entities/project-page-entity';
import { ProjectRepository } from '../interfaces/repositories/project-repository';
import { GetPaginatedFilteredProjectsUseCase } from '../interfaces/usecases/get-paginated-filtered-projects-use-case';

export class GetPaginatedFilteredProjects
  implements GetPaginatedFilteredProjectsUseCase
{
  projectRepository: ProjectRepository;

  constructor(projectRepository: ProjectRepository) {
    this.projectRepository = projectRepository;
  }

  async execute(limit: number, offset: number): Promise<ProjectPageEntity> {
    const result = await this.projectRepository.getPaginatedFilteredProjects(
      limit,
      offset
    );
    return result;
  }
}
