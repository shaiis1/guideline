import { unprotectedGetRequest } from "./apiGenerics"

export const GetMessages = async (workerId: number) => {
    const messages = await unprotectedGetRequest(
      `Messages/GetMessages?workerId=${workerId}`
    )
    return messages
  }