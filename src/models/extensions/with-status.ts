import { observable, IObservableValue } from "mobx";

export type StatusType = "idle" | "pending" | "done" | "error";

export const withStatus = () => {
  const status: IObservableValue<string> = observable.box("idle");

  return {
    views: {
      // a getter
      get status() {
        return status.get() as StatusType;
      },
      // as setter
      set status(value: StatusType) {
        status.set(value);
      },
    },
    actions: {
      setStatus(value: StatusType) {
        status.set(value);
      },
    },
  };
};
