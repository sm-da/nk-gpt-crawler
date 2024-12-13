import { Config } from "./src/config";

export const defaultConfig: Config = {
  url: "http://www.gnu.rep.kp/",
  match: "http://www.gnu.rep.kp/**",
  maxPagesToCrawl: 99999999999,
  outputFileName: ".json",
  maxTokens: 2000000,
  selector: "body",
};
