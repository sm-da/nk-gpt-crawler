import { Config } from "./src/config";

export const defaultConfig: Config = {
  url: "https:/sec.gov/",
  match: "https:/sec.gov/**",
  maxPagesToCrawl: 99999999999,
  outputFileName: "sec.json",
  maxTokens: 2000000,
  selector: "body",
};
