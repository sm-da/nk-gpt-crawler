import { Config } from "./src/config";

export const defaultConfig: Config = {
  url: "http://www.dprk-book.com/",
  match: "http://www.dprk-book.com/**",
  maxPagesToCrawl: 99999999,
  outputFileName: "dprk.json",
  maxTokens: 2000000,
  selector: "body",
};
