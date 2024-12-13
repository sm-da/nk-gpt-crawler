import { Config } from "./src/config";

export const defaultConfig: Config = {
  url: "http://www.chongryon.com/*",
  match: "http://www.chongryon.com/**",
  maxPagesToCrawl: 9999999999,
  outputFileName: "chongron-com.json",
  maxTokens: 2000000,
  selector: "body",
};
