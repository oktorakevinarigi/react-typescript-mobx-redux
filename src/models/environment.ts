import * as api from "services"

export class Environment {
  constructor() {
    this.apiApp = new api.ApiApp()
  }

  // async setup() {
  //   await this.apiTenantAuthorization.setup()
  //   // await this.apiName2.setup()
  //   // await ...
  // }

  apiApp: api.ApiApp
}