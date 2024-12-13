import { Config } from "./src/config";

export const defaultConfig: Config = {
  url: "http://aindf.dyndns.org/kuguk8/Title1.htm",
  match: "http://aindf.dyndns.org/kuguk8/Title1.htm/**",
  maxPagesToCrawl: 99999999999,
  outputFileName: "aindf.json",
  maxTokens: 2000000,
  selector: "body",
};
