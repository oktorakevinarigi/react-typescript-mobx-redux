import { connectReduxDevtools } from "mst-middlewares"
import { RootStoreModel, RootStore } from "./root-store";
import { Environment } from "../environment";

export async function createEnvironment() {
  const env = new Environment();
  return env;
}

export async function setupRootStore() {
  let rootStore: RootStore;
  const env = await createEnvironment();
  try {
    rootStore = RootStoreModel.create({}, env);
  } catch (e) {
    rootStore = RootStoreModel.create({}, env);
  }

  // Redux devtools
  if (process.env.NODE_ENV !== 'production') {
    connectReduxDevtools(require("remotedev"), rootStore)
  }

  return rootStore;
}
