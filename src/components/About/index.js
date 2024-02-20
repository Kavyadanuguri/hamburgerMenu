// Write your code here
import Header from '../Header'
import './index.css'

const About = props => {
  console.log(props)

  return (
    <>
      <Header />
      <div className="about-container">
        <img
          className="about-img1"
          alt="about"
          src="https://assets.ccbp.in/frontend/react-js/about-lg-img.png"
        />
      </div>
      <div className="about-container1">
        <img
          className="about-img2"
          alt="about"
          src="https://assets.ccbp.in/frontend/react-js/about-sm-img.png"
        />
      </div>
    </>
  )
}

export default About
