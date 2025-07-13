import type { RenderMap } from "../react-schema-renderer/SchemaRenderer.tsx";
import { SchemaRenderer } from "../react-schema-renderer/SchemaRenderer";

const ORPGRenderMap = {
  a: () => null,
  "::UnsupportedBranch::": () => null,
  "::UnsupportedLeaf::": () => null,
} as const;

export const ORPGRenderer = () => {
  return <SchemaRenderer node={{ type: "a" }} components={ORPGRenderMap} />;
};
