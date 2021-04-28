import React from 'react';

import axios from 'axios';

class Subdomains extends React.Component {
  state = {
    subdomains: []
  }

  componentDidMount() {
    axios.get(`https://crt.sh/?q=emagined.com&output=json`)
      .then(res => {
        const subdomains = res.data;
        this.setState({ subdomains });
      })
  }

  render() {
    return (
      <ul>
        { this.state.subdomains.map(subdomain => <li>{subdomain.common_name}</li>)}
      </ul>
    )
  }
}

export default Subdomains;