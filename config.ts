import { Config } from "./src/config";

export const defaultConfig: Config = {
  url: "http://www.knic.com.kp/",
  match: "http://www.knic.com.kp/**",
  maxPagesToCrawl: 99999999999,
  outputFileName: "knic.json",
  maxTokens: 2000000,
  selector: "body",
};
