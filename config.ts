import { Config } from "./src/config";

export const defaultConfig: Config = {
  url: "http://www.elufa.net/",
  match: "http://www.elufa.net/**",
  maxPagesToCrawl: 9999999999,
  outputFileName: "elufa.json",
  maxTokens: 2000000,
  selector: "body",
};
