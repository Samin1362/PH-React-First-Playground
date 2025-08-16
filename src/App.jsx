import './App.css'
import Blogs from './components/Blogs/Blogs'
import Header from './components/Header/Header'
import Bookmarks from './components/Bookmarks/Bookmarks'

function App() {

  return (
    <>
      <Header></Header>
      <div className="divider"></div>

      <div className='max-w-[1280px] mx-auto flex items-center'>
          <Blogs></Blogs>
          <Bookmarks></Bookmarks>
      </div>
    </>
  )
}

export default App
