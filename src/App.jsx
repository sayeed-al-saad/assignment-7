import Header from "./components/Header/Header"
import Banner from "./components/Banner/Banner"
import Recipes from "./components/Recipes/Recipes"
import Bookmarks from "./components/Bookmarks/Bookmarks"

import './App.css'

function App() {

  return (
    <>
      <div className="body space-y-4">
      <Header></Header>
      <Banner></Banner>
      <div>
        <Recipes></Recipes>
        <Bookmarks></Bookmarks>
      </div>
      </div>
    </>
  )
}

export default App
