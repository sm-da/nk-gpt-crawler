import { Config } from "./src/config";

export const defaultConfig: Config = {
  url: "http://chosonsinbo.com/",
  match: "http://chosonsinbo.com/**",
  maxPagesToCrawl: 9999999999,
  outputFileName: "chosonsinbo.json",
  maxTokens: 2000000,
  selector: "body",
};
