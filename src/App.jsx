import './App.css'
import MainContainer from './components/MainContainer'
import Navbar from './components/Navbar'
import RightNews from './components/RightNews'
import PostsList from './PostsList'


function App() {

  return (
    <>
      <Navbar />
      <div className='whole'>
        <MainContainer />
        <div className='post-whole'>
          <PostsList />
        </div>
        <RightNews />
      </div>
      
    </>
  )
}

export default App
