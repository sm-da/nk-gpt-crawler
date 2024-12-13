import { Config } from "./src/config";

export const defaultConfig: Config = {
  url: "http://www.north-korea-books.com/",
  match: "http://www.north-korea-books.com/**",
  maxPagesToCrawl: 9999999999,
  outputFileName: "north-korea-books.json",
  maxTokens: 2000000,
  selector: "body",
};
