import { unprotectedGetRequest } from "./apiGenerics"

export const GetWorkers = async () => {
    const workers = await unprotectedGetRequest(
      `Workers/GetWorkers`
    )
    debugger
    return workers
  }