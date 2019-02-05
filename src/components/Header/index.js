import React, { Component } from 'react'
import { Link } from 'gatsby'
import { FaFacebook, FaTwitter, FaGithub, FaMobileAlt } from 'react-icons/fa'
import logo from '../../assets/images/logo.png'

export class Header extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isActive: false,
    }
  }

  addActiveClass = () => {
    this.setState({
      isActive: !this.state.isActive,
    })
  }

  render() {
    return (
      <div className="header">
        <div className="header-container">
          <div className="header-row">
            <div className="header-brand">
              <Link to="/">
                <img src={logo} alt="" />
              </Link>
            </div>
            <div className="header-menu">
              <span className="icon">
                <a href="https://www.facebook.com/profile.php?id=100006449019856">
                  <FaFacebook />
                </a>
              </span>
              <span className="icon">
                <a href="https://twitter.com/r33fd3v">
                  <FaTwitter />
                </a>
              </span>
              <span className="icon">
                <a href="https://github.com/r33fyello">
                  <FaGithub />
                </a>
              </span>
              <span className="icon">
                <a href="tel:0262000000">
                  <FaMobileAlt/>
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Header
