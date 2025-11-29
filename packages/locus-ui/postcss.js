const postcss = require("postcss");

const breakpoints = [
  ["initial", "0px"],
  ["xs", "520px"],
  ["sm", "768px"],
  ["md", "1024px"],
  ["lg", "1280px"],
  ["xl", "1640px"],
];

module.exports = (opts = {}) => {
  return {
    postcssPlugin: "postcss-breakpoint-data-attrs",

    Once(root) {
      const dataAttrRules = [];

      root.walkRules((rule) => {
        // Match value-specific selectors like [data-radius="md"] but not theme attributes like [data-theme-radius="md"]
        const hasDataAttr = rule.selector.match(
          /\[data-(?!theme-)([a-z-]+)="([^"]+)"\]/
        );
        if (hasDataAttr) {
          dataAttrRules.push(rule);
        }
      });

      // Generate breakpoint-specific versions for value selectors
      let lastInsertedRule = dataAttrRules[dataAttrRules.length - 1];

      breakpoints.forEach(([breakpoint, width]) => {
        dataAttrRules.forEach((rule) => {
          // Create a new selector with the breakpoint suffix
          const newSelector = rule.selector.replace(
            /\[data-(?!theme-)([a-z-]+)="([^"]+)"\]/g,
            `[data-$1-${breakpoint}="$2"]`
          );

          // Create a cloned rule with new selector
          const mediaRule = rule.clone({
            selector: newSelector,
          });

          // Create @media at-rule with min-width
          const atRule = postcss.atRule({
            name: "media",
            params: `(min-width: ${width})`,
          });

          atRule.append(mediaRule);

          // Insert after the last inserted rule to maintain order
          lastInsertedRule.after(atRule);
          lastInsertedRule = atRule;
        });
      });
    },
  };
};

module.exports.postcss = true;
