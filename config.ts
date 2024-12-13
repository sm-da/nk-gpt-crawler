import { Config } from "./src/config";

export const defaultConfig: Config = {
  url: "http://www.northkoreatech.org/",
  match: "http://www.northkoreatech.org/**",
  maxPagesToCrawl: 99999999999,
  outputFileName: ".json",
  maxTokens: 2000000,
  selector: "body",
};
