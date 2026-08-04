import "reflect-metadata";

import { runSeeders } from "typeorm-extension";
import { AppDataSource } from "./data-source";

import "./pages/factories/partner.factory";
import "./pages/factories/page.factory";

import PageSeeder from "./pages/seeds/main.seeder";

async function run() {
  console.log("Initializing Data Source...");
  await AppDataSource.initialize();

  console.log("Running seeders...");
  await runSeeders(AppDataSource, {
    seeds: [PageSeeder],
  });

  console.log("Seeding complete!");
  process.exit(0);
}

run().catch((error) => {
  console.error("Error during seeding:", error);
  process.exit(1);
});