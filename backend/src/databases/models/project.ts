import {
  Model,
  InferAttributes,
  InferCreationAttributes,
  DataTypes,
  Sequelize,
  CreationOptional,
} from 'sequelize';

export class Project extends Model<
  InferAttributes<Project>,
  InferCreationAttributes<Project>
> {
  id!: CreationOptional<number>;
  name!: string;
  courseSemester!: number;
  year!: number;
  filePath!: string;

  public static initialize(sequelize: Sequelize) {
    this.init(
      {
        id: {
          type: DataTypes.INTEGER,
          autoIncrement: true,
          primaryKey: true,
        },
        name: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        courseSemester: {
          type: DataTypes.INTEGER,
          allowNull: false,
        },
        year: {
          type: DataTypes.INTEGER,
          allowNull: false,
        },
        filePath: {
          type: DataTypes.STRING,
          allowNull: false,
        },
      },
      {
        timestamps: false,
        sequelize,
      }
    );
  }
}
