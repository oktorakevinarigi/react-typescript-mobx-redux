import { ApiConfig, DEFAULT_API_CONFIG } from "./api-config"
import * as Types from "./api.types"
import { getGeneralApiProblem } from "./api-problem"

import { GET } from './API'

export class ApiHome {
  config: ApiConfig
  url

  constructor(config: ApiConfig = DEFAULT_API_CONFIG) {
    this.config = config
    this.url = config.url
  }

  async postTeamHome(): Promise<Types.ResultNoData> {
    debugger
    const resPerformance = await GET(this.url + this.config.token)

    if (resPerformance.status !== 200) {
      const problem = getGeneralApiProblem(resPerformance.status, resPerformance.res)
      if (problem) return problem
    }

    try {
      console.log("masuk")
      return { kind: "ok", data: '', message: "" }
    } catch {
      return { kind: "bad-data", message: "Not expected format" }
    }
  }
}
