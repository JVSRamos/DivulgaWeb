import { Project } from '@src/domain/entities/project';

export interface CreateProjectUseCase {
  execute(project: Project): Promise<boolean>;
}
