import { Config } from "./src/config";

export const defaultConfig: Config = {
  url: "http://www.minjok.com/",
  match: "http://www.minjok.com/**",
  maxPagesToCrawl: 9999999999,
  outputFileName: "minjok.json",
  maxTokens: 2000000,
  selector: "body",
};
