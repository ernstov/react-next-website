import { useEffect, useState } from "react"
import { Notyf } from "notyf"

export const useNotyf = (params) => {
  const [notyf, setNotyf] = useState(null)

  useEffect(() => {
    if (!notyf) {
      setNotyf(new Notyf({
        types: [
          {
            type: 'success',
            background: 'rgba(42, 46, 50, 0.95)',
          },
          {
            type: 'error',
            background: 'rgba(252, 84, 36, 0.95)'
          }
        ],
        dismissible: true,
        duration: 4000,
        ...params
      }))
    }
  }, [])

  return notyf
}
