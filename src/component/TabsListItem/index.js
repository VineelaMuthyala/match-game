import {Component} from 'react'
import './index.css'

class TabsListItem extends Component {
  state = {colorSelected: false}

  onClickOfTab = () => {
    const {tabSelected, tabsListItemDetails} = this.props
    const {tabId} = tabsListItemDetails
    tabSelected(tabId)
    this.setState({colorSelected: true})
  }

  render() {
    const {tabsListItemDetails} = this.props
    const {displayText} = tabsListItemDetails
    const {colorSelected} = this.state

    const classname = colorSelected ? 'white' : 'yellow'

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
