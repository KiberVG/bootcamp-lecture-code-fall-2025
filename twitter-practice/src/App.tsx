import { useEffect, useState } from "react";
import "./App.css";

interface Tweet {
  username: string;
  image_link: string;
  description: string;
  likes: number;
}

interface ImageNoteProps {
  tweet: Tweet;
}

function ImageNote({ tweet }: ImageNoteProps) {
  const [liked, setLiked] = useState(false);
  const [likes, setLikes] = useState(tweet.likes);

  function handleClick() {
    if (liked) {
      setLiked(false);
      setLikes(likes - 1);
    } else {
      setLiked(true);
      setLikes(likes + 1);
    }
  }

  return (
    <div className="image-note">
      <h3>{tweet.description}</h3>
      <img width={300} src={tweet.image_link} alt={tweet.description} />
      <p>Posted by: {tweet.username}</p>
      <button onClick={handleClick}>
        {liked ? "❤️" : "🤍"} {likes}
      </button>
    </div>
  );
}

function App() {
  const [tweets, setTweets] = useState<Tweet[]>([]);

  // Fetch tweets from FastAPI backend
  useEffect(() => {
    fetch("http://localhost:8000/feed")
      .then((res) => res.json())
      .then((data) => setTweets(data))
      .catch((err) => console.error("Failed to fetch tweets:", err));
  }, []);

  return (
    <div className="image-container">
      {tweets.map((tweet, index) => (
        <ImageNote
          key={index}
          tweet={tweet}
        />
      ))}
    </div>
  );
}

export default App;
