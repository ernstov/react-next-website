import { useEffect, useState } from "react"
import { Notyf } from "notyf"

export const useNotyf = (params) => {
  const [notyf, setNotyf] = useState(null)

  useEffect(() => {
    if (!notyf) {
      setNotyf(new Notyf({ dismissible: true, duration: 4000, ...params }))
    }
  }, [])

  return notyf
}
