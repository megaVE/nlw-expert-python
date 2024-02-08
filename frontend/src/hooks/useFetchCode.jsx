import { useEffect, useState } from "react"

const URL = "http://localhost:3000/"

export const useFetchCode = () => {
  const [code, setCode] = useState("")
  const [response, setResponse] = useState(null)
  const [isLoading, setIsLoading] = useState(false)

  const codeRequestConfig = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ "product_code": code })
  }

  const reset = () => {
    setCode("")
    setResponse(null)
  }

  useEffect(() => {
    if(!code) return

    const fetchCode = async () => {
      setIsLoading(true)
  
      try {
        const res = await fetch(URL + "create_tag", codeRequestConfig)
  
        const resJSON = await res.json()
  
        setResponse({...resJSON, path: `/src/img/${code}.png`})
      } catch (error) {
        console.log(error)
      } finally {
        setIsLoading(false)
      }
    }
    fetchCode()
  }, [code])

  return { response, isLoading, setCode, reset }
}