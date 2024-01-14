import CONFIG from '../../config/config'

export const unprotectedPostRequest = async (
    apiEndpoint: string,
    body: any
  ) => {
    // console.log(body)
    const res = await fetch(`${CONFIG.api}/${apiEndpoint}`, {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify(body)
    })
  
    return res.json()
  }

  export const unprotectedGetRequest = async (apiEndpoint: string) => {
    const res = await fetch(`${CONFIG.api}/${apiEndpoint}`)
  
    return res.json()
  }