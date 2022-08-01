import { ProjectRepository } from '@src/domain/interfaces/repositories/project-repository';
import { GetProjects } from '@src/domain/usecases/get-projects';
import { testProject1, testProject2 } from '../mocks/project-mock';
import { MockProjectRepository } from '../mocks/project-repository-mock';

describe('Get All Projects Use Case', () => {
  let mockProjectRepository: ProjectRepository;

  beforeEach(() => {
    jest.clearAllMocks();
    mockProjectRepository = new MockProjectRepository();
  });

  it('Should return a list of projects', async () => {
    const expected = [testProject1, testProject2];
    jest
      .spyOn(mockProjectRepository, 'getProjects')
      .mockImplementation(() => Promise.resolve(expected));
    const getProjects = new GetProjects(mockProjectRepository);
    const result = await getProjects.execute();
    expect(result).toStrictEqual(expected);
  });
});
