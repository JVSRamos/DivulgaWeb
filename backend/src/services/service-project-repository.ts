import { Project } from '@src/databases/models/project';
import { ProjectEntity } from '@src/domain/entities/project-entity';
import { ProjectRepository } from '@src/domain/interfaces/repositories/project-repository';

export class ServiceProjectRepository implements ProjectRepository {
  async getProjects(): Promise<ProjectEntity[]> {
    const result = await Project.findAll();
    return result.map(this.__mapProjectModelToEntity);
  }
  async createProject(project: ProjectEntity): Promise<ProjectEntity> {
    const result = await Project.create({
      name: project.name,
      courseSemester: project.courseSemester,
      year: project.year,
      filePath: project.filePath,
    });

    return {
      name: result.name,
      courseSemester: result.courseSemester,
      year: result.year,
      filePath: result.filePath,
    };
  }

  private __mapProjectModelToEntity(project: Project): ProjectEntity {
    return {
      name: project.name,
      courseSemester: project.courseSemester,
      year: project.year,
      filePath: project.filePath,
    };
  }
}
