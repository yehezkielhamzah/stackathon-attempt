import React from 'react'
import axios from 'axios'

class Cards extends React.Component {
  state = {
    deals: [],
  }

  async componentDidMount() {
    const data = (await axios.get('/api/cards')).data
    this.setState({deals: data })
  }

  render() {
    return (
      <div>
        <h1>Sign-Up Bonuses</h1>
        <ul>
          {this.state.deals.map((deal) => <li key={deal.id}>{deal.title}</li>)}
        </ul>
      </div>
    )
  }
}

export default Cards