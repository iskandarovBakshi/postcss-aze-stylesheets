import postcss from "postcss";

import azerbaijaniProperties from "./properties";
import azerbaijaniValues from "./values";

export default postcss.plugin("postcss-aze-stylesheets", () => {
  return (css) => {
    css.walkDecls((decl) => {
      const englishProp = azerbaijaniProperties[decl.prop];
      if (englishProp) decl.prop = englishProp;
      if (decl.value.indexOf("!vacib") >= 0) {
        decl.value = decl.value.replace(/\s*!vacib\s*/, "");
        decl.important = true;
      }
      const englishVal = azerbaijaniValues[decl.value];
      if (englishVal) {
        decl.value = englishVal;
      }
    });
  };
});
