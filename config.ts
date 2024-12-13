import { Config } from "./src/config";

export const defaultConfig: Config = {
  url: "http://www.cooks.org.kp/	",
  match: "http://www.cooks.org.kp/**",
  maxPagesToCrawl: 99999999999,
  outputFileName: ".json",
  maxTokens: 2000000,
  selector: "body",
};
