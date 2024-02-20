// Write your code here
import Header from '../Header'
import './index.css'

const Home = props => {
  console.log(props)

  return (
    <>
      <Header />
      <div className="home-container">
        <img
          className="home-img1"
          alt="home"
          src="https://assets.ccbp.in/frontend/react-js/home-lg-img.png"
        />
      </div>
      <div className="home-container1">
        <img
          className="home-img2"
          alt="home"
          src="https://assets.ccbp.in/frontend/react-js/home-sm-img.png"
        />
      </div>
    </>
  )
}

export default Home
