import "reflect-metadata";
import "dotenv/config";
import path from "path";
import { DataSource, DataSourceOptions } from "typeorm";

const DataSourceConfig = (): DataSourceOptions => {
  const entitiesPath: string = path.join(__dirname, "./entities/**.{ts,js}");
  const migrationsPath: string = path.join(
    __dirname,
    "./migrations/**.{ts,js}"
  );

  if (process.env.NODE_ENV === "test") {
    return {
      type: "sqlite",
      database: ":memory:",
      synchronize: true,
      entities: [entitiesPath],
    };
  }

  const dbUrl = process.env.DATABASE_URL?.toString();

  if (!dbUrl) {
    throw new Error("Missing env var: 'DATABASE_URL'");
  }

  return {
    type: "postgres",
    url: dbUrl,
    synchronize: false,
    logging: true,
    entities: [entitiesPath],
    migrations: [migrationsPath],
  };
};

const AppDataSource: DataSource = new DataSource(DataSourceConfig());
export default AppDataSource;
