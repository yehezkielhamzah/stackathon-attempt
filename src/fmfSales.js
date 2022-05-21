import React from 'react'
import axios from 'axios'

class FmfSales extends React.Component {
  state = {
    deals: [],
  }

  // async componentDidMount() {
  //   const response = await scrape.scrape("https://old.reddit.com/r/frugalmalefashion/rising/")
  //   //res.send(await scrape.scrape("https://old.reddit.com/r/frugalmalefashion/rising/"))
  //   console.log('--response--',response)
  // }

  render() {
    return (
      <div>
        <h1>FMF Sales</h1>
      </div>
    )
  }
}



export default FmfSales
