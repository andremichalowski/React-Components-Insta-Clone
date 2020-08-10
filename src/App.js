import React, { useState, setPosts } from "react";
import SearchBar from "./components/SearchBar/SearchBar";
import LikeSection from "./components/Posts/LikeSection";
import Posts from "./components/Posts/PostsCard";
import Post from "./components/Posts/Post";
import dummyData from "./dummy-data";

import "./App.css";

const App = () => {
  const [data] = useState(dummyData);
  // const [searchBar, setSearchBar]= useState(SearchBar)

  const likePost = (postId) => {
    setPosts(
      data.map((i) => {
        if (i == postId) {
          return postId + 1;
        }
        return i;
      })
    );
  };

  return (
    <div className="App">
      <SearchBar />
      <Posts postData={data} likePost={likePost} />
    </div>
  );
};

export default App;
