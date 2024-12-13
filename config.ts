import { Config } from "./src/config";

export const defaultConfig: Config = {
  url: "http://www.koredufund.org.kp/",
  match: "http://www.koredufund.org.kp/**",
  maxPagesToCrawl: 99999999999,
  outputFileName: "koredufund.json",
  maxTokens: 2000000,
  selector: "body",
};
