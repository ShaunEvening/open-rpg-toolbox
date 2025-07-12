import type { UUIDv4 } from "./id.ts";

export type GenericEntityAttributeDescriptor = {
  name: string;
  code: string;
  description: string;
};

export type EntityAttributeDescriptor<T extends GenericEntityAttributeDescriptor> =
  T & { id: UUIDv4 };

export type EntityAttribute<T extends EntityAttributeDescriptor<GenericEntityAttributeDescriptor>> = {
  attribute_id: T["id"];
  value: number;
};

export type EntityAttributeModifier<T extends EntityAttribute<EntityAttributeDescriptor<GenericEntityAttributeDescriptor>>> = {
  attribute_id: T["attribute_id"];
  value: number;
};

export type TimedAttributeModifier<T extends EntityAttributeModifier<EntityAttribute<EntityAttributeDescriptor<GenericEntityAttributeDescriptor>>>> = T & {
  duration: number;
  remaining: number;
};
