import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    baseUrl: 'http://localhost:5173',
    excludeSpecPattern: [
      "**/__snapshots__/*",
      "**/__image_snapshots__/*",
    ]
  },
  env: {
    'cypress-plugin-snapshots': {
      serverPort: 2222,
      diffLines: 4,
      excludeFields: ["ignore"],
    },
  },
  ignoreTestFiles: [],
  video: false,
  viewportWidth: 1280,
  viewportHeight: 720,
});
