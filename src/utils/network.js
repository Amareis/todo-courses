export const getApiResource = async (url) => {
  try {
    const res = await fetch(url)

    if (!res.ok) {
      console.error('Could not fetch:', res.status)
      return false
    }

    return await res.json()

  } catch (error) {
    console.error('getApiResource fetch error: ', error.message)
    return false
  }
}