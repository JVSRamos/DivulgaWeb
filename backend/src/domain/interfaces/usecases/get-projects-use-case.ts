import { ProjectEntity } from '@src/domain/entities/project-entity';

export interface GetProjectsUseCase {
  execute(): Promise<ProjectEntity[]>;
}
