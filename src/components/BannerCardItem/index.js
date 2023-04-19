// Write your code here.
const BannerCardItem = props => {
  const {bannerCardItem} = props
  const {headerText, description, className} = bannerCardsList
  return (
    <li className={className}>
      <h1 className="main-heading">{headerText}</h1>
      <p className="description">{description}</p>
      <button className="btn">Show More</button>
    </li>
  )
}
export default BannerCardItem
