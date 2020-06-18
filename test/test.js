import postcss from "postcss";

import plugin from "../src";

import properties from "../src/properties";
import values from "../src/values";

function pluginTest(input, output, opts, done) {
  postcss([plugin(opts)])
    .process(input)
    .then((result) => {
      expect(result.css).toBe(output);
      expect(result.warnings()).toEqual([]);
      done();
    })
    .catch(done);
}

function propertyTest(azerbaijani, english, value = "azerbaijani") {
  test(`PROPERTY: converts ${azerbaijani} to ${english}`, (done) => {
    pluginTest(
      `a { ${azerbaijani}: ${value}; }`,
      `a { ${english}: ${value}; }`,
      {},
      done
    );
  });
}

function valueTest(azerbaijani, english, property = "azerbaijani") {
  test(`VALUE: converts ${azerbaijani} to ${english}`, (done) => {
    pluginTest(
      `a { ${property}: ${azerbaijani}; }`,
      `a { ${property}: ${english}; }`,
      {},
      done
    );
  });
}

describe("postcss-aze-stylesheets", () => {
  Object.keys(properties).forEach((property) =>
    propertyTest(properties[property], property)
  );

  Object.keys(values).forEach((value) => valueTest(values[value], value));

  test("property", (done) => {
    pluginTest(
      "a{ hündürlük: xxx; en: xxx }",
      "a{ height: xxx; width: xxx }",
      {},
      done
    );
  });

  test("value", (done) => {
    pluginTest(
      "a{ xxx: blok; xxx: qara }",
      "a{ xxx: block; xxx: black }",
      {},
      done
    );
  });

  test("!important", (done) => {
    pluginTest(
      "a{ fon-rəng: sarı !vacib; }",
      "a{ background-color: yellow !important; }",
      {},
      done
    );
  });
});
