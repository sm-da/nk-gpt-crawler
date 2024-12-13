import { Config } from "./src/config";

export const defaultConfig: Config = {
  url: "https://flyinghorsedelta.com/",
  match: "https://flyinghorsedelta.com/**",
  maxPagesToCrawl: 9999999999,
  outputFileName: "flying-horse.json",
  maxTokens: 2000000,
  selector: "body",
};
