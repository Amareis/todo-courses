import React from 'react'

export function useForceUpdate() {
  const [i, setI] = React.useState(0)
  return () => setI(i + 1)
}

export function useLocalStorage(key, obj) {
  const [local, setLocal] = React.useState(() => {
    const t = localStorage.getItem(key)
    if (!t) return obj
    try {
      return JSON.parse(t)
    } catch (e) {
      return obj
    }
  })
  return [
    local,
    (newValue) => {
      localStorage.setItem(key, JSON.stringify(newValue))
      setLocal(newValue)
    },
  ]
}
