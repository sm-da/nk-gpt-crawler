import { Config } from "./src/config";

export const defaultConfig: Config = {
  url: "http:/",
  match: "https://**",
  maxPagesToCrawl: 99999999999,
  outputFileName: "air-korea.json",
  maxTokens: 2000000,
  selector: ""
};
