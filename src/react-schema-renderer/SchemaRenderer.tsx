type UnsupportedBranchRenderer = React.FC<React.PropsWithChildren<{ node: { type: string } }>>;
type UnsupportedLeafRenderer = React.FC<{ node: { type: string } }>;

export type UnsupportedRenderer = {
  "::UnsupportedBranch::": UnsupportedBranchRenderer;
  "::UnsupportedLeaf::": UnsupportedLeafRenderer;
};

export type NodeMap<T extends { type: string }> = {
  [Type in T["type"]]: Extract<T, { type: Type }>;
};

export type RenderMap<T extends { type: string }> = UnsupportedRenderer & {
  [Type in keyof NodeMap<T>]: NodeMap<T>[Type] extends Extract<T, { children: any[] }>
    ? React.FC<React.PropsWithChildren<{ node: NodeMap<T>[Type] }>>
    : React.FC<{ node: NodeMap<T>[Type] }>;
};

export const SchemaRenderer = <Types extends string, Node extends { type: Types; children?: any[] }>({
  node,
  components,
}: {
  node: Node;
  components: RenderMap<Node>;
}) => {
  if (!("children" in node)) {
    const component = node.type in components ? components[node.type] : components["::UnsupportedLeaf::"];

    const Component = component as React.FC<{ node: Node }>;
    return <Component node={node} />;
  }

  const children = node.children?.map((child, i) => <SchemaRenderer key={`${child.type}::${i}`} components={components} node={child} />);

  const component = node.type in components ? components[node.type] : components["::UnsupportedBranch::"];

  const Component = component as React.FC<React.PropsWithChildren<{ node: Node }>>;
  return <Component node={node}>{children}</Component>;
};
