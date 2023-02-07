
// -- Example Usage: 
// -- cypress/tsconfig.json
// {
//   "compilerOptions": {
//      "types": ["cypress", "cypress-plugin-snapshots"]
//    }
// }

declare namespace Cypress {
  interface Chainable<Subject = any> {
    toMatchImageSnapshot(options?: Partial<{
      imageConfig: Partial<{
        createDiffImage: boolean,
        threshold: number,
        thresholdType: "percent" | "pixels",
        resizeDevicePixelRatio: boolean;
      }>,
      screenshotConfig: Partial<ScreenshotDefaultsOptions>,
      name: string,
      separator: string;
    }>): Chainable<null>;
  }
}
