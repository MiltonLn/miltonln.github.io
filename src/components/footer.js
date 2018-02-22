import React, { Component } from 'react'


export class Footer extends Component {
  render() {
    return <footer className="footer text-center">
      <div className="container">
      <small className="copyright">
        Copyright @ Milton Lenis { new Date().getFullYear() }
      </small>
      </div>
    </footer>
  }
}