import { resolvers } from "./resolvers-package1";
import { Query as Query2, Bar as Bar2 } from "./resolvers-package2";

export const resolvers1 = {
  Query: {
    foo: Query2.foo(),
  },
  Foo: {
    fieldA: resolvers.Foo.fieldA,
  }
};
