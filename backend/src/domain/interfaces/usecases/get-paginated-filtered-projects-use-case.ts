import { ProjectPageEntity } from '@src/domain/entities/project-page-entity';

export interface GetPaginatedFilteredProjectsUseCase {
  execute(limit: number, offset: number): Promise<ProjectPageEntity>;
}
