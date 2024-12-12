import { Config } from "./src/config";

export const defaultConfig: Config = {
  url: "http://www.chochong.net/",
  match: "http://www.chochong.net/**",
  maxPagesToCrawl: 9999999999,
  outputFileName: "chochong.json",
  maxTokens: 2000000,
  selector: "body",
};
