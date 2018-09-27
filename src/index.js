import postcss from 'postcss';

import azerbaijaniProperties from './properties';
import azerbaijaniValues from './values';

export default postcss.plugin('postcss-aze-stylesheets', () => {
  return (css) => {
    css.walkDecls((decl) => {
      Object.keys(azerbaijaniProperties).forEach((property) => {
        const azerbaijaniProperty = azerbaijaniProperties[property];
        if (azerbaijaniProperty) {
          decl.prop === azerbaijaniProperty && (decl.prop = property);
        }

        if (decl.value.indexOf('!vacib') >= 0) {
          decl.value = decl.value.replace(/\s*!vacib\s*/, '');
          decl.important = true;
        }
      });

      Object.keys(azerbaijaniValues).forEach((value) => {
        const azerbaijaniValue = azerbaijaniValues[value];
        if (azerbaijaniValue) {
          decl.value = decl.value.replace(new RegExp(azerbaijaniValue), value);
        }
      });
    });
  };
});
