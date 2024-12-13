import { Config } from "./src/config";

export const defaultConfig: Config = {
  url: "http://www.korea-publ.com/",
  match: "http://www.korea-publ.com/**",
  maxPagesToCrawl: 9999999999,
  outputFileName: "korea-publ.json",
  maxTokens: 2000000,
  selector: "body",
};
