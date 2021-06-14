import { types, Instance, SnapshotOut } from "mobx-state-tree";
import * as store from '../'

export const RootStoreModel = types.model("RootStore")
  .props({
    app: store.App.createAppModel(),
  })

export interface RootStore extends Instance<typeof RootStoreModel> { }
export interface RootStoreSnapshot extends SnapshotOut<typeof RootStoreModel> { }