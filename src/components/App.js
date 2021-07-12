import React, { useEffect, useState  } from "react"

const App = () => {
  const [dogPicture, setDogPicture] = useState(null)

  useEffect(() => {
    fetch("https://dog.ceo/api/breeds/image/random")
    .then(resp => resp.json())
    .then(data => {
      setDogPicture(data.message)
    })
    }, [])
  
    if (!dogPicture) {
      return <p>Loading...</p>
    }
  return (
    <img src={dogPicture} alt="A Random Dog" />
  )
}

export default App