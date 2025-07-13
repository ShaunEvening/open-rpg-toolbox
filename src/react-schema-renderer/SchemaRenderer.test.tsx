import { describe, expect, it } from "vitest";

import { type RenderMap, SchemaRenderer } from "./SchemaRenderer";

const TODO = { todo: true };

type LeafNode = {
  type: "leaf";
  value: "Passed";
};

type RootNode = { type: "root"; children: LeafNode[] };

type TestGraph = LeafNode | RootNode;

const TestRenderer = {
  root: ({ node, children }) => <div>{children}</div>,
  leaf: ({ node }) => <div>{node.value}</div>,
  "::UnsupportedBranch::": () => null,
  "::UnsupportedLeaf::": () => null,
} satisfies RenderMap<TestGraph>;

const test_graph: TestGraph = {
  type: "root",
  children: [{ type: "leaf", value: "Passed" }],
};

describe("SchemaRenderer", TODO, () => {
  it("Works", TODO, () => {
    // <SchemaRenderer node={test_graph} components={TestRenderer} />
  });
});
