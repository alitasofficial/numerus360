// type Fetcher = (method: string, url: string, payload?: object) => Promise<any>

export const fetcher = async (method: "GET" | "POST", url: string, payload: object | null) => {
  if (method === "GET") {
    const response = await fetch(url)
    return response.json()
  } else if (method === "POST") {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    })
    return response.json()
  }
}
