import { Config } from "./src/config";

export const defaultConfig: Config = {
  url: "https://www.sec.gov/",
  match: "https://www.sec.gov/**",
  maxPagesToCrawl: 99999999999,
  outputFileName: "sec.json",
  maxTokens: 2000000,
  selector: "body",
};
