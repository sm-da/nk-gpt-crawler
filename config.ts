import { Config } from "./src/config";

export const defaultConfig: Config = {
  url: "http://www.friend.com.kp/",
  match: "http://www.friend.com.kp/**",
  maxPagesToCrawl: 99999999999,
  outputFileName: ".json",
  maxTokens: 2000000,
  selector: "body",
};
