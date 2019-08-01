import React from "react"
import PropTypes from "prop-types"
import { getApartments } from './api/index'

class ListApp extends React.Component {
  
  constructor(props){
    super(props)
    this.state = {
      apartments: []
    }
  }
  
  componentDidMount(){
    getApartments()
    .then(apartmentsJson => {
      this.setState({apartments: apartmentsJson})
    })
  }
  
  render () {
    const { apartments } = this.state 
    return (
      <React.Fragment>
        <ul>
          { 
            apartments.map((apartment, i) => {
              return <li key={i}>{apartment.address}</li>
            })
          }
        </ul>
      </React.Fragment>
    );
  }
}

export default ListApp
