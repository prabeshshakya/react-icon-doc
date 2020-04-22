import codegen from "babel-plugin-codegen/macro";

const fn = codegen`
const { IconsManifest } = require("vyaguta-icons/lib/cjs");

let codes = "(function (id) { switch (id) {";
IconsManifest.forEach(icon => {
  codes += 'case "' + icon.id + '":\\nreturn import("vyaguta-icons/' + icon.id +'/index");\\n'
})
codes += '}})';

module.exports = codes;
// module.exports = "import('vyaguta-icons/fa/index')"
`;

export function getIcons(iconsId) {
  /*
  Dynamic Import with improved performance.
  Macros are used to avoid bundling unnecessary modules.

  Similar to this code
  ```
  return import(`vyaguta-icons/${iconsId}/index`);
  ```
  */

  return fn(iconsId);
}
