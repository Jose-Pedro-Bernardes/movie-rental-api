import { AppDataSource } from "./data-source";
import app from "./app";

const PORT: number = parseInt(process.env.PORT!) || 3000;

AppDataSource.initialize()
  .then(() => {
    console.log("Database is connected");

    app.listen(PORT, () => {
      console.log(`Serve is running on port ${PORT}`);
    });
  })
  .catch((err) => console.log(err));
