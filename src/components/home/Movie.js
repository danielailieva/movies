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

            <section id='banner' class='clearfix'>
                <Link id='back-btn' to='/' title='Go back to homepage'>
                <i className='fas fa-arrow-left'></i>
            </Link>
                <div id='banner_content_wrapper'>
                    <div id='poster'>
                        <img src={movie.Poster} class='featured_image' />
                        <img src='https://res.cloudinary.com/dw369yzsh/image/upload/v1470916845/play_button_ngnw1z.png' class='play_button' />
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

                        <p class='info'>  {movie.Genre} <span>|</span> {movie.Released} <span>|</span> {movie.Director}
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
