import { initModels } from '@src/databases';
import { testProject1, testProject2 } from '@test/domain/mocks/project-mock';
import { ServiceProjectRepository } from '@src/services/service-project-repository';
import { sequelize } from '@src/databases/sequelize';
import { Project } from '@src/databases/models/project';

describe('Service Project Repository', () => {
  let serviceProjectRepository: ServiceProjectRepository;

  beforeAll(() => {
    serviceProjectRepository = new ServiceProjectRepository();
    initModels();
  });

  afterAll(async () => {
    await sequelize.close();
  });

  afterEach(async () => {
    Project.destroy({
      truncate: true,
    });
  });

  it('Should save a project', async () => {
    const project = testProject1;
    const result = await serviceProjectRepository.createProject(project);
    expect(result).toStrictEqual(project);
  });

  it('Should return a list of all projects', async () => {
    const expected = [testProject1, testProject2];
    await Promise.all(expected.map(serviceProjectRepository.createProject));

    const result = await serviceProjectRepository.getProjects();
    expect(result).toStrictEqual(expected);
  });
});
