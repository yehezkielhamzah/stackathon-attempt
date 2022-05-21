import React from 'react'
import axios from 'axios'
//const scrape = require('../puppeteer')
import FmfSales from './fmfSales'

class Fmf extends React.Component {
  state = {
    deals: [],
  }

  render() {
    return (
      <div>
        <h1>Stack-a-Ton of Fashion Deals</h1>
        <FmfSales></FmfSales>
      </div>
    )
  }
}



export default Fmf
