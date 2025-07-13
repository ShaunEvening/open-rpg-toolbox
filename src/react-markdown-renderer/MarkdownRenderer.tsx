import type { RenderMap } from "../react-schema-renderer/SchemaRenderer.tsx";
import type { MDLiteral, MDRoot, MDRootContent } from "./parser.js";

import { SchemaRenderer } from "../react-schema-renderer/SchemaRenderer";

type MarkdownDocument = MDRoot;
type MarkdownComponents = RenderMap<MDRoot | MDRootContent>;

const MarkdownRenderMap: MarkdownComponents = {
  "::UnsupportedBranch::": () => null,
  "::UnsupportedLeaf::": () => null,
  containerDirective: ({ node, children }) => children,
  leafDirective: ({ node, children }) => children,
  textDirective: ({ node, children }) => children,
};

export const MarkdownRenderer = <Node extends MDRoot>({ node }: { node: Node }) => {
  return <SchemaRenderer node={node} components={MarkdownRenderMap} />;
};
