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

      // Find all @breakpoints at-rules and process them
      root.walkAtRules("breakpoints", (atRule) => {
        // Clone and insert all children before the at-rule, tracking data-attr rules
        atRule.nodes.forEach((node) => {
          const clonedNode = node.clone();
          atRule.before(clonedNode);

          // If it's a rule with data attributes, track it for breakpoint generation
          if (clonedNode.type === "rule") {
            const hasDataAttr = clonedNode.selector.match(
              /\[data-(?!theme-)([a-z-]+)="([^"]+)"\]/
            );
            if (hasDataAttr) {
              dataAttrRules.push(clonedNode);
            }
          }
        });

        // Remove the @breakpoints wrapper
        atRule.remove();
      });

      // If no rules to process, exit early
      if (dataAttrRules.length === 0) {
        return;
      }

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
          const mediaAtRule = postcss.atRule({
            name: "media",
            params: `(min-width: ${width})`,
          });

          mediaAtRule.append(mediaRule);

          // Insert after the last inserted rule to maintain order
          lastInsertedRule.after(mediaAtRule);
          lastInsertedRule = mediaAtRule;
        });
      });
    },
  };
};

module.exports.postcss = true;
