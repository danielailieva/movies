import React from 'react'
import { Link } from 'react-router-dom'

export default class NavBar extends React.Component {
  render() {
    return (
      <div>
        <nav className='navbar navbar-container'>
          <div className='container'>
            <div className='navbar-header'>
              <Link className='navbar-brand text-white text-lg brand-text' to='/'>
                MoviesHunter <i class="fas fa-film"></i>
            </Link>
            </div>
            <ul className='navbar-nav ml-auto text-light d-inline-block'>
              <li className='nav-item d-inline-block mr-4'>
                <i className='fab fa-imdb' id='imdb-logo' />
              </li>
            </ul>
          </div>
        </nav>
      </div>
    )
  }
}
