// Write your code here.
import './index.css'

const BannerCardItem = props => {
  const {bannerCardItem} = props
  const {headerText, description, className} = bannerCardItem
  return (
    <div className="bg-container">
      <li className={className}>
        <h1 className="main-heading">{headerText}</h1>
        <p className="description">{description}</p>
        <button type="button" className="btn">
          Show More
        </button>
      </li>
    </div>
  )
}
export default BannerCardItem

