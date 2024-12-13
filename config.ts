import { Config } from "./src/config";

export const defaultConfig: Config = {
  url: "http://www.kcna.kp/",
  match: "http://www.kcna.kp/**",
  maxPagesToCrawl: 99999999999,
  outputFileName: "kcna.json",
  maxTokens: 2000000,
  selector: "body",
};
