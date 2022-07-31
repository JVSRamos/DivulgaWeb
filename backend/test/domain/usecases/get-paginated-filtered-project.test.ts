import { ProjectRepository } from '@src/domain/interfaces/repositories/project-repository';
import { GetPaginatedFilteredProjects } from '@src/domain/usecases/get-paginated-filtered-projects';
import { testProjectPage } from '@test/domain/mocks/page-project-mock';
import { MockProjectRepository } from '../mocks/project-repository-mock';

describe('Get Projects Paginated with Filter Use Case', () => {
  let mockProjectRepository: ProjectRepository;

  beforeEach(() => {
    jest.clearAllMocks();
    mockProjectRepository = new MockProjectRepository();
  });

  it('Should return a project page', async () => {
    const expected = testProjectPage;
    jest
      .spyOn(mockProjectRepository, 'getPaginatedFilteredProjects')
      .mockImplementation(() => Promise.resolve(expected));
    const getPaginatedFilteredProjects = new GetPaginatedFilteredProjects(
      mockProjectRepository
    );
    const result = await getPaginatedFilteredProjects.execute(2, 0);
    expect(result).toStrictEqual(expected);
  });
});
