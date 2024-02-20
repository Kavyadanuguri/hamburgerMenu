// Write your code here
import './index.css'

const NotFound = props => {
  console.log(props)
  return (
    <div className="not-container">
      <img
        className="not-img1"
        src="https://assets.ccbp.in/frontend/react-js/not-found-img.png"
        alt="not found"
      />
      <h2 className="not-h2">Lost your way?</h2>
      <p className="not-p1">
        Sorry, we cannot find that page. You will find lots to explore on the
        home page
      </p>
    </div>
  )
}

export default NotFound
