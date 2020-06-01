import React from 'react'
import { Link } from 'react-router-dom'
import './styles/moviecard.scss'

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props
    return (
      <div class='example-1 card1'>
        <div class='wrapper'>
          <div><img className='img-wrapper' alt='Movie Cover' src={movie.Poster} /></div>
          <div class='date'>
            <span class='day'>{movie.Year}</span>
          </div>
          <div class='data'>
            <div class='content'>
              <span class='author'>Jane Doe</span>
              <h4 class='title'><Link to={'/movie/' + movie.imdbID}>{movie.Title}</Link></h4>
              <p class='text'><Link to={'/movie/' + movie.imdbID} type='submit' className='btn-gray'>Read more</Link></p>
              <label for='show-menu' class='menu-button'><span></span></label>
            </div>
            <input type='checkbox' id='show-menu' />
          </div>
        </div>
      </div>
    )
  }
}

export default MovieCard
