import React from 'react'
import axios from 'axios'
//const scrape = require('../puppeteer')
import Cards from './cards'

class Card extends React.Component {
  state = {
    deals: [],
  }

  render() {
    return (
      <div>
        <h1>Stack-a-Ton of Credit Cards</h1>
        <Cards></Cards>
      </div>
    )
  }
}

export default Card
