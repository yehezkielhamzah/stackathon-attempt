import React from 'react'
import axios from 'axios'

class FmfSales extends React.Component {
  state = {
    deals: [],
  }

  async componentDidMount() {
    const data = (await axios.get('/api/deals')).data
    this.setState({deals: data })
  }

  render() {
    return (
      <div>
        <h1>FMF Sales</h1>
        <ul>
          {this.state.deals.map((deal) => <li key={deal.id}>{deal.title}</li>)}
        </ul>
      </div>
    )
  }
}



export default FmfSales
