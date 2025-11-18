import { useEffect, useState } from "react";
import "./Profile.css";

interface Tweet {
  username: string;
  image_link: string;
  description: string;
  likes: number;
}

interface User {
  username: string;
  email: string;
}

export default function Profile() {
  const [user, setUser] = useState<User | null>(null);
  const [tweets, setTweets] = useState<Tweet[]>([]);
  const username = localStorage.getItem("username");

  useEffect(() => {
    if (!username) return;

    // Fetch user profile from backend
    fetch(`http://localhost:8000/profile/${username}`)
      .then((res) => {
        if (!res.ok) throw new Error("User not found");
        return res.json();
      })
      .then((data) => {
        // data.user contains user info, data.tweets contains user's tweets
        setUser(data.user);
        setTweets(data.tweets);
      })
      .catch((err) => console.error("Failed to fetch profile:", err));
  }, [username]);

  if (!username) {
    return <p>Please log in to view your profile.</p>;
  }

  if (!user) {
    return <p>Loading profile...</p>;
  }

  return (
    <div className="profile-container">
      <h1>Profile</h1>

      <img
        src={`https://ui-avatars.com/api/?name=${user.username}&background=random&size=200`}
        width={200}
        alt="User Avatar"
      />

      <h2>@{user.username}</h2>
      <p>Email: {user.email}</p>

      <p><strong>{tweets.length}</strong> Tweets</p>

      <h3>Your Tweets:</h3>
      <div className="tweet-list">
        {tweets.map((tweet, index) => (
          <div key={index} className="tweet-card">
            <img src={tweet.image_link} width={200} alt={tweet.description} />
            <p>{tweet.description}</p>
            <p>Likes: {tweet.likes}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
