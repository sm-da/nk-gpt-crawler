import { Config } from "./src/config";

export const defaultConfig: Config = {
  url: "http://175.45.176.14/ko/notice/2009web/homepage.html",
  match: "http://175.45.176.14/ko/notice/2009web/homepage.html/**",
  maxPagesToCrawl: 9999999999,
  outputFileName: "pitf.json",
  maxTokens: 2000000,
  selector: "body",
};
