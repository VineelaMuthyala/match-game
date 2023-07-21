import {Component} from 'react'
import ImagesListItem from '../ImagesListItem'
import TabsListItem from '../TabsListItem'
import './index.css'

class Game extends Component {
  state = {
    selectedList: [],
    isSelected: true,
    randomImage:
      'https://assets.ccbp.in/frontend/react-js/match-game/orange-img.png',
    score: 0,
    timerCount: 60,
  }

  componentDidMount() {
    this.timerId = setInterval(() => {
      this.tick()
    }, 1000)
  }

  componentWillUnmount() {
    this.clearTimer()
  }

  clearTimer = () => {
    clearInterval(this.timerId)
  }

  tick = () => {
    const {timerCount} = this.state
    if (timerCount > 0) {
      this.setState(prevState => ({timerCount: prevState.timerCount - 1}))
    }
    if (timerCount === 0) {
      this.clearTimer()
      this.setState({timerCount: 0})
    }
  }

  tabSelected = tabId => {
    const {imagesList} = this.props
    const filteredList = imagesList.filter(
      eachItem => eachItem.category === tabId,
    )
    this.setState({selectedList: filteredList, isSelected: false})
  }

  thumbnailImageSelected = id => {
    const {imagesList} = this.props
    const {randomImage} = this.state

    const matchedImage = imagesList.filter(
      eachItem => eachItem.imageUrl === randomImage,
    )

    if (matchedImage[0].id === id) {
      this.setState(prevState => ({score: prevState.score + 1}))
    }
    const randomNumber = Math.floor(Math.random() * imagesList.length)
    const images = imagesList[randomNumber].imageUrl
    this.setState({randomImage: images})
  }

  onClickPlayAgain = () => {
    this.setState({timerCount: 60, score: 0})
  }

  gameOver = () => {
    const {score} = this.state
    return (
      <div className="game-over-container">
        <img
          className="trophy-image"
          alt="trophy"
          src="https://assets.ccbp.in/frontend/react-js/match-game-trophy.png "
        />
        <h1 className="game-over-score">Your Score</h1>
        <p className="game-over-score">{score}</p>
        <button
          className="play-again-button"
          type="button"
          onClick={this.onClickPlayAgain}
        >
          <img
            className="reset-icon"
            alt="reset"
            src="https://assets.ccbp.in/frontend/react-js/match-game-play-again-img.png"
          />
          <p className="play-again-text">PLAY AGAIN</p>
        </button>
      </div>
    )
  }

  startGame = () => {
    const {tabsList, fruitsList} = this.props
    const {selectedList, isSelected, randomImage} = this.state

    const listDisplayed = isSelected ? fruitsList : selectedList
    return (
      <div className="game-body-container">
        <img className="random-image" alt="match" src={randomImage} />
        <ul className="tabs-unordered-list-container">
          {tabsList.map(eachItem => (
            <TabsListItem
              key={eachItem.tabId}
              tabsListItemDetails={eachItem}
              tabSelected={this.tabSelected}
            />
          ))}
        </ul>
        <ul className="unordered-list-container">
          {listDisplayed.map(eachItem => (
            <ImagesListItem
              key={eachItem.id}
              selectedListDetails={eachItem}
              thumbnailImageSelected={this.thumbnailImageSelected}
            />
          ))}
        </ul>
      </div>
    )
  }

  render() {
    const {score, timerCount} = this.state

    return (
      <div className="bg-container">
        <div className="nav-bar-container">
          <img
            className="game-logo"
            alt="website logo"
            src="https://assets.ccbp.in/frontend/react-js/match-game-website-logo.png"
          />
          <div className="score-container">
            <p className="score-text">
              Score:<span className="timer-text">{score}</span>
            </p>
            <img
              className="timer-logo"
              alt="timer"
              src="https://assets.ccbp.in/frontend/react-js/match-game-timer-img.png"
            />
            <p className="timer-text">{timerCount} Sec</p>
          </div>
        </div>
        {timerCount === 0 ? this.gameOver() : this.startGame()}
      </div>
    )
  }
}
export default Game
