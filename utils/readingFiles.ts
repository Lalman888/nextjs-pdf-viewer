import * as fs from "fs";

export const BASE_URL = "http://localhost:3000/";

export const staticPaths = fs
  .readdirSync("pages")
  .filter((staticPage) => {
    return ![
      "api",
      "_app.ts",
      "_document.ts",
      "404.ts",
      "sitemap.xml.ts",
    ].includes(staticPage);
  })
  .map((staticPagePath) => {
    return `${BASE_URL}/${staticPagePath}`;
  });
