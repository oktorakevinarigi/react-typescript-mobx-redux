import { getRoot, IStateTreeNode } from "mobx-state-tree";
import { RootStoreModel } from "models/root-store/root-store";

export const withRootStore = (self: IStateTreeNode) => ({
  views: {
    get rootStore() {
      return getRoot<typeof RootStoreModel>(self);
    },
  },
});
