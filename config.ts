import { Config } from "./src/config";

export const defaultConfig: Config = {
  url: "http://www.airkoryo.com.kp/",
  match: "http://www.airkoryo.com.kp/**",
  maxPagesToCrawl: 99999999999,
  outputFileName: "air-koryo.json",
  maxTokens: 2000000,
  selector: "body",
};
