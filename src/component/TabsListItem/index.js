import {Component} from 'react'
import './index.css'

class TabsListItem extends Component {
  onClickOfTab = () => {
    const {tabSelected, tabsListItemDetails} = this.props
    const {tabId} = tabsListItemDetails
    tabSelected(tabId)
  }

  render() {
    const {tabsListItemDetails, tabColor} = this.props
    const {displayText} = tabsListItemDetails

    const classname = tabColor ? 'yellow' : 'white'

    return (
      <li>
        <button className={classname} type="button" onClick={this.onClickOfTab}>
          {displayText}
        </button>
      </li>
    )
  }
}
export default TabsListItem
