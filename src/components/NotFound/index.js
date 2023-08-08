// Write your code here
import './index.css'

const NotFound = () => (
  <div className="not_found_container">
    <img
      src="https://assets.ccbp.in/frontend/react-js/not-found-img.png"
      alt="not found"
      className="image_not"
    />
    <h1 className="main_heading">Lost Your Way?</h1>
    <p className="description_para">
      Sorry, we cannot find that page. You will find lots to explore on the home
      page
    </p>
  </div>
)

export default NotFound
