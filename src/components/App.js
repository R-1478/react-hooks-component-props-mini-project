import React from "react";
import blogData from "../blog";

console.log(blogData);

function App() {
  return (
    <div className="App">
       <div className="App">
      <Header name={blogData.name}/>
      <About image={blogData.image} About={blogData.about}/>
      <ArticleList posts={blogData.posts}/>
    </div>
  </div>
  );
}

export default App;
