import { Config } from "./src/config";

export const defaultConfig: Config = {
  url: "https://oshkoshdefense.com/",
  match: "https://oshkoshdefense.com/**",
  maxPagesToCrawl: 9999999999,
  outputFileName: "oshkoshdefense.json",
  maxTokens: 2000000,
  selector: "body",
};
