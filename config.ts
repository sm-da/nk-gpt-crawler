import { Config } from "./src/config";

export const defaultConfig: Config = {
  url: "http://www.friend.com.kp/",
  match: "http://www.friend.com.kp/**",
  maxPagesToCrawl: 9999999999,
  outputFileName: "friend.json",
  maxTokens: 2000000,
  selector: "body",
};
