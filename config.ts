import { Config } from "./src/config";

export const defaultConfig: Config = {
  url: "http://175.45.176.14/ko/notice/cholsan/",
  match: "http://175.45.176.14/ko/notice/cholsan/**",
  maxPagesToCrawl: 99999999999,
  outputFileName: ".json",
  maxTokens: 2000000,
  selector: "body",
};
