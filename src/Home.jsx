import React from 'react'
import { Link } from 'react-router-dom'

export const Home = () => {
  return (
    <div>
  <nav className="navbar navbar-expand-lg navbar-light fixed-top" data-spy="affix" data-offset-top={0}>
    <div className="container">
      <a className="navbar-brand" href="#"><img src="assets/imgs/logo.svg" alt="" /></a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ml-auto align-items-center">
          <li className="nav-item">
            <Link to='/heroes' className="nav-link">Home</Link>
          </li>
          <li className="nav-item">
            <Link to='/heroes' className="nav-link">Heroes</Link>
          </li>
          <li className="nav-item">
            <Link to='/about' className="nav-link">About</Link>
          </li>
        </ul>
      </div>
    </div>          
  </nav>
  {/* End of page navibation */}
  {/* Page Header */}
  <header className="header" id="home">
    <div className="container">
      <div className="infos">
        <h6 className="subtitle">Halo, saya</h6>
        <h6 className="title">Rachma Wukir Purwitasari</h6>
        <p>Website ini menampilkan daftar pahlawan di Indonesia</p>      
      </div>              
      <div className="img-holder">
        <img src="assets/imgs/man.svg" alt="" />
      </div>      
    </div>
  </header>
  </div>
  )
}
