import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import './styles/movie.scss'

import { fetchMovie, setLoading } from '../../actions/searchActions'

import Spinner from '../layout/Spinner'

class Movie extends React.Component {

    componentDidMount() {
        this.props.fetchMovie(this.props.match.params.id)
        this.props.setLoading()
    }
    render() {
        const { loading, movie } = this.props

        let movieInfo = (
            // <div className='container'>
            //     <div className='row'>
            //         <div className='col-md-4 card card-body'>
            //             <img src={movie.Poster} className='thumbnail' alt='Poster' />
            //         </div>
            //         <div className='col-md-8'>
            //             <h2 className='mb-4'>{movie.Title}</h2>
            //             <ul className='list-group'>
            //                 <li className='list-group-item'>
            //                     <strong>Genre:</strong> {movie.Genre}
            //                 </li>
            //                 <li className='list-group-item'>
            //                     <strong>Released:</strong> {movie.Released}
            //                 </li>
            //                 <li className='list-group-item'>
            //                     <strong>Rated:</strong> {movie.Rated}
            //                 </li>
            //                 <li className='list-group-item'>
            //                     <strong>IMDB Rating:</strong> {movie.imdbRating}
            //                 </li>
            //                 <li className='list-group-item'>
            //                     <strong>Director:</strong> {movie.Director}
            //                 </li>
            //                 <li className='list-group-item'>
            //                     <strong>Writer:</strong> {movie.Writer}
            //                 </li>
            //                 <li className='list-group-item'>
            //                     <strong>Actors:</strong> {movie.Actors}
            //                 </li>
            //             </ul>
            //         </div>
            //     </div>
            //     <div className='row'>
            //         <div className='card card-body bg-dark my-5 text-light'>
            //             <div className='col-md-12'>
            //                 <h3>About </h3>
            //                 {movie.Plot}
            //                 <hr />
            //                 <a
            //                     href={'https://www.imdb.com/title/' + movie.imdbID}
            //                     target='_blank'
            //                     rel='noopener noreferrer'
            //                     className='btn btn-primary'
            //                 >
            //                     View on IMDB
            //       </a>
            //                 <Link to='/' className='btn btn-default text-light'>
            //                     Go Back To Search
            //       </Link>
            //             </div>
            //         </div>
            //     </div>
            // </div>
            
<section id='banner' class='clearfix'>
		<div id='banner_content_wrapper'>
			<div id='poster'>
				<img src={movie.Poster} alt='Deadpool Movie Poster' class='featured_image' />
				<img src="https://res.cloudinary.com/dw369yzsh/image/upload/v1470916845/play_button_ngnw1z.png" alt='Play Trailer' class='play_button' />
			</div>
			<div id='content'>
				<h2 class='title'>{movie.Title}</h2>
				<div class='ratings'>
					<i class='fa fa-star'></i>
					<i class='fa fa-star'></i>
					<i class='fa fa-star'></i>
					<i class='fa fa-star'></i>
					<i class='fa fa-star inactive'></i>
				</div>

				<p class='description'>{movie.Plot}</p>

				<p class='info'> 108 min <span>|</span> {movie.Genre} <span>|</span> {movie.Released} <span>|</span> {movie.Director}
                <span>|</span> {movie.Actors}
                </p>
			</div>
		</div>
	</section>
                      
        )

        let content = loading ? <Spinner /> : movieInfo
        return <div>{content}</div>
    }
}

const mapStateToProps = state => ({
    loading: state.movies.loading,
    movie: state.movies.movie
})

export default connect(
    mapStateToProps,
    { fetchMovie, setLoading }
)(Movie)
