import { Config } from "./src/config";

export const defaultConfig: Config = {
  url: "http:/",
  match: "http://**",
  maxPagesToCrawl: 99999999999,
  outputFileName: ".json",
  maxTokens: 2000000,
  selector: "",
};
