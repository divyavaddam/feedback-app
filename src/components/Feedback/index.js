// Write your React code here.
import {Component} from 'react'

import './index.css'

class Feedback extends Component {
  state = {
    isFeedbackSelected: false,
  }

  onButtonClick = () => {
    this.setState({isFeedbackSelected: true})
  }

  renderEmojis = () => {
    const {resources} = this.props
    const {emojis} = resources
    return (
      <div className="card-container">
        <h1 className="heading">
          How satisfied are you with our <br /> customer support performance?
        </h1>
        <ul className="unordered-list">
          {emojis.map(emoji => (
            <li className="list" key={emoji.id}>
              <button
                className="button"
                type="button"
                onClick={this.onButtonClick}
              >
                <img src={emoji.imageUrl} alt={emoji.name} className="img" />
              </button>
              <p className="para">{emoji.name}</p>
            </li>
          ))}
        </ul>
      </div>
    )
  }

  renderFeedback = () => {
    const {resources} = this.props
    const {loveEmojiUrl} = resources
    return (
      <div className="feedback-container">
        <img src={loveEmojiUrl} className="heart-emoji" alt="love emoji" />
        <h1 className="thank-you">Thank You!</h1>
        <p className="para-1">
          We will use your feedback to improve our customer support <br />{' '}
          performance
        </p>
      </div>
    )
  }

  render() {
    const {isFeedbackSelected} = this.state
    return (
      <div className="bg-container">
        {isFeedbackSelected ? this.renderFeedback() : this.renderEmojis()}
      </div>
    )
  }
}

export default Feedback
