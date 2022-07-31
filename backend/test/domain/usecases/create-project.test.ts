import { testProject1 } from '@test/domain/mocks/project-mock';
import { ProjectRepository } from '@src/domain/interfaces/repositories/project-repository';
import { MockProjectRepository } from '../mocks/project-repository-mock';
import { CreateProject } from '@src/domain/usecases/create-project';

describe('Create Project Use Case', () => {
  let mockProjectRepository: ProjectRepository;

  beforeEach(() => {
    jest.clearAllMocks();
    mockProjectRepository = new MockProjectRepository();
  });

  it('Should return a project', async () => {
    const inputProject = testProject1;
    jest
      .spyOn(mockProjectRepository, 'createProject')
      .mockImplementation(() => Promise.resolve(true));
    const createProject = new CreateProject(mockProjectRepository);
    const result = await createProject.execute(inputProject);
    expect(result).toBe(true);
  });
});
