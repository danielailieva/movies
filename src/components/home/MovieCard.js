import React from 'react'
import { Link } from 'react-router-dom'
import './styles/moviecard.scss'

class MovieCard extends React.Component {
    render() {
        const { movie } = this.props
        return (
      //       <div className='col-md-3 mb-5'>
      //   <div className='card card-body bg-dark text-center h-100'>
      //     <img className='w-100 mb-2' src={movie.Poster} alt='Movie Cover' />
      //     <h5 className='text-light card-title'>
      //       {movie.Title} - {movie.Year}
      //     </h5>
      //     <Link to={'/movie/' + movie.imdbID} className='btn btn-primary'>
      //       Movie Details
      //       <i className='fas fa-chevron-right' />
      //     </Link>
      //   </div>
      // </div>
    //   <div class='example-2 card'>
    //   <div class='wrapper'>
    //     <div><img src={movie.Poster}/></div>
    //     <div class='header'>
    //       <div class='date'>
    //         <span class='day'>{movie.Year}</span>
    //       </div>
    //       <ul class='menu-content'>
    //         <li>
    //           <a href='#' class='fa fa-bookmark-o'></a>
    //         </li>
    //         <li><a href='#' class='fa fa-heart-o'><span>18</span></a></li>
    //         <li><a href='#' class='fa fa-comment-o'><span>3</span></a></li>
    //       </ul>
    //     </div>
    //     <div class='data'>
    //       <div class='content'>
    //         <span class='author'>{movie.Writer}</span>
    //         <h1 class='title'><a href='#'> {movie.Title}</a></h1>
    //         <p class='text'>{movie.Plot}</p>
    //         <Link to={'/movie/' + movie.imdbID} class='button'>Read more</Link>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <div class='example-1 card1'>
    <div class='wrapper'>
    <div><img className='img-wrapper' alt='Movie Cover' src={movie.Poster}/></div>
      <div class='date'>
        <span class='day'>{movie.Year}</span>
      </div>
      <div class='data'>
        <div class='content'>
          <span class='author'>Jane Doe</span>
          <h4 class='title'><Link  to={'/movie/' + movie.imdbID}>{movie.Title}</Link></h4>
          <p class='text'><Link  to={'/movie/' + movie.imdbID} type='submit' className='btn-gray'>Read more</Link></p>
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
