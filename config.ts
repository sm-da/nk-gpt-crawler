import { Config } from "./src/config";

export const defaultConfig: Config = {
  url: "http://www.korelcfund.org.kp/	",
  match: "http://www.korelcfund.org.kp/**",
  maxPagesToCrawl: 99999999999,
  outputFileName: "korelcfund.json",
  maxTokens: 2000000,
  selector: "body",
};
