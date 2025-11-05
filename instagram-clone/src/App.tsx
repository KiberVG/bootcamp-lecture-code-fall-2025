import { useState } from 'react'
import './App.css'

// "❤️": "🤍"

function InstagramPic({description, imageURL}) {
  const [likes, setLikes] = useState(0) 
  const [liked, setLiked] = useState(false)


  function handleClick() {
    if (liked) {
      setLiked(false)
      setLikes(likes - 1)
    } else {
      setLiked(true)
      setLikes(likes + 1)
    }
    
  }

  return (
     <div className='instagram-pic'>
          <h2>{description}</h2>
          <img width={350} src={imageURL} alt={description} />
          <button onClick={handleClick}> 
            {liked? "❤️": "🤍"} {likes}
          </button>
    </div>
  )
}

function App() {
  const imageNotes = [
    {
      image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb", 
      note: "Peaceful sunset over the ocean 🌅"
    },
    {
      image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e", 
      note: "Crystal clear waves on a sunny day 🌊"
    },
    {
      image: "https://images.unsplash.com/photo-1708604010245-59d0c22cf9e9?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=3132", 
      note: "A cozy cabin surrounded by snow ❄️"
    },
    {
      image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470", 
      note: "Majestic mountains under the stars 🌌"
    },
    {
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f", 
      note: "Teamwork makes the dream work 👥"
    }
  ]

  return (
    <>
      <div id='image-container'>
        {imageNotes.map((note) => <InstagramPic description={note.note} imageURL={note.image}></InstagramPic>)}
      </div>
    </>
    
  )
}

export default App
