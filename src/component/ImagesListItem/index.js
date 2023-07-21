import {Component} from 'react'
import './index.css'

class ImagesListItem extends Component {
  onClickOfThumbnailImage = () => {
    const {thumbnailImageSelected, selectedListDetails} = this.props
    const {id} = selectedListDetails
    thumbnailImageSelected(id)
  }

  render() {
    const {selectedListDetails} = this.props
    const {thumbnailUrl} = selectedListDetails
    return (
      <li>
        <button className="thumbnail-button" type="button">
          <img
            className="thumbnail-image"
            alt="thumbnail"
            src={thumbnailUrl}
            onClick={this.onClickOfThumbnailImage}
          />
        </button>
      </li>
    )
  }
}
export default ImagesListItem
