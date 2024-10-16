import Header from "./components/Header/Header"
import Banner from "./components/Banner/Banner"
import Recipes from "./components/Recipes/Recipes"


import './App.css'
import { useState } from "react"

function App() {

  const [bookmarks, setBookmarks] = useState([]) 

  const handleAddtoBookmark = recipe => {
    const newBookmarks = [...bookmarks, recipe];
    setBookmarks(newBookmarks);
  }

  return (
    <>
      <div className="body space-y-4">
        <Header />
        <Banner />
        <div>
          <Recipes handleAddtoBookmark={handleAddtoBookmark} bookmarks={bookmarks} /> {/* Pass both props */}
          
        </div>
      </div>
    </>
  )
}

export default App;
