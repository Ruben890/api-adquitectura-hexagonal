import "module-alias/register";
import { Sequelize } from "sequelize-typescript";
import { CONFIG_MYSQL, PORT } from "./config/environment";
import { UserModelMysql } from "../infrastructure/adapters/orm/sequelize/models/user-model";

async function connectionSequelize(): Promise<void> {
  const sequelize = new Sequelize(
    CONFIG_MYSQL.database,
    CONFIG_MYSQL.user,
    CONFIG_MYSQL.password,
    {
      host: CONFIG_MYSQL.host,
      dialect: "mysql",
      models: [UserModelMysql],
    }
  );

  await sequelize.authenticate();
  await sequelize.sync({ force: false });
}

async function init(): Promise<void> {
  await connectionSequelize().then(() =>
    console.log(`Connection successfully to database: ${CONFIG_MYSQL.database}`)
  );

  const app = (await import("./config/bootstrap")).default;

  app.listen(PORT, () => console.log(`Server running on port:  ${PORT}`));
}

void init().catch((err) => console.log(err));
