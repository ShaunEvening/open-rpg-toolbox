import type { Literal as MDLiteral, Root as MDRoot, RootContent as MDRootContent } from "mdast";

import { fromMarkdown, type Options as MDParserOptions } from "mdast-util-from-markdown";
import { directiveFromMarkdown } from "mdast-util-directive";
import { frontmatterFromMarkdown } from "mdast-util-frontmatter";
import { gfmFromMarkdown } from "mdast-util-gfm";
import { directive } from "micromark-extension-directive";
import { frontmatter } from "micromark-extension-frontmatter";
import { gfm } from "micromark-extension-gfm";


const frontmatter_options = { type: "json", marker: { open: "{", close: "}" } };
const default_parsing_config: MDParserOptions = {
  extensions: [directive(), frontmatter(frontmatter_options), gfm()],
  mdastExtensions: [directiveFromMarkdown(), frontmatterFromMarkdown(frontmatter_options), gfmFromMarkdown()],
};

export const parse = (md: string, config = default_parsing_config) => {
  return fromMarkdown(md, "utf-8", config);
};

export const serialize = (_mdast: MDRoot) => {
  return ``;
};

export { MDLiteral, MDRoot, MDRootContent };
