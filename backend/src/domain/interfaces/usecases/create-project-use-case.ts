import { ProjectEntity } from '@src/domain/entities/project-entity';

export interface CreateProjectUseCase {
  execute(project: ProjectEntity): Promise<ProjectEntity>;
}
