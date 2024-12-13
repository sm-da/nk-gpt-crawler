import { Config } from "./src/config";

export const defaultConfig: Config = {
  url: "http://chosonsinbo.com/	",
  match: "http://chosonsinbo.com/**",
  maxPagesToCrawl: 99999999999,
  outputFileName: ".json",
  maxTokens: 2000000,
  selector: "body",
};
