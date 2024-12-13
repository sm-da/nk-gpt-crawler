import { Config } from "./src/config";

export const defaultConfig: Config = {
  url: "http://www.gnu.rep.kp/",
  match: "http://www.gnu.rep.kp/**",
  maxPagesToCrawl: 999999999,
  outputFileName: "gnu.json",
  maxTokens: 2000000,
  selector: "body",
};
