import { Config } from "./src/config";

export const defaultConfig: Config = {
  url: "http://www.northkoreatech.org/",
  match: "http://www.northkoreatech.org/**",
  maxPagesToCrawl: 9999999999,
  outputFileName: "northkoreatech.json",
  maxTokens: 2000000,
  selector: "body",
};
