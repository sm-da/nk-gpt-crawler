import { Config } from "./src/config";

export const defaultConfig: Config = {
  url: "http://www.rodong.rep.kp/",
  match: "http://www.rodong.rep.kp/**",
  maxPagesToCrawl: 99999999999,
  outputFileName: "rodong.json",
  maxTokens: 2000000,
  selector: "body",
};
