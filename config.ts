import { Config } from "./src/config";

export const defaultConfig: Config = {
  url: "http://naenara.com.kp/",
  match: "http://naenara.com.kp/**",
  maxPagesToCrawl: 99999999999,
  outputFileName: "naenara.json",
  maxTokens: 2000000,
  selector: "body",
};
