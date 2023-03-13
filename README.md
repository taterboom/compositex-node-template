# Compositex Node Demo

bundle complex Compositex Node code via esbuild

## Usage

1. `pnpm install`
2. edit main.js. (notice the `export default` should be added. It's different from the the code in extension node editor, because it will be bundled)
3. pnpm run build
4. copy the code in out.js and paste in the extension node edtior.

## Constructure

- main.js   // you node code here
- build.js  // the building script
- out.js    // the bundled code
