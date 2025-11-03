import { defineConfig } from "cypress";
import { users } from "./users"; // keep only non-secret defaults

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      config.env.user = users.env.user;
      return config;
    },
    video: true,
  },
});
