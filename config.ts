import { Config } from "./src/config";

export const defaultConfig: Config = {
  url: "http://ndfsk.dyndns.org/",
  match: "http://ndfsk.dyndns.org/**",
  maxPagesToCrawl: 9999999999,
  outputFileName: "ndfsk.json",
  maxTokens: 2000000,
  selector: "body",
};
