const esbuild = require("esbuild")
esbuild.build({
  entryPoints: ["main.js"],
  bundle: true,
  minify: true,
  format: "iife",
  platform: "browser",
  outfile: "out.js",
  globalName: "__Node",
  banner: { js: "(() => {" },
  footer: { js: "return __Node.default;})()" },
  mainFields: ["browser", "module", "main"], // for @aws-sdk/client-s3. see https://github.com/evanw/esbuild/issues/2692#issuecomment-1322836181
})
