import { types, flow } from "mobx-state-tree";
import { withEnvironment } from "models/extensions/with-environment";

const AppStoreModel = types
  .model("App")
  .props({
    nama: types.optional(types.string, "")
  })
  .extend(withEnvironment)
  .actions((self) => ({
    handleState(value: string) {
      self.nama = value
    },
    fetchData: flow(function* () {
      const result = yield self.environment.apiApp.getData()
      if (result.kind === "ok") {
        self.nama = result.kind
        console.log("ok", result)
      }
    }),
  }))

// type AppStoreModelStoreType = Instance<typeof AppStoreModel>
// export interface AppStore extends AppStoreModelStoreType { }
// type AppStoreSnapshotType = SnapshotOut<typeof AppStoreModel>
// export interface MasterTenantStoreSnapshot extends AppStoreSnapshotType { }
export const createAppModel = () => types.optional(AppStoreModel, {})