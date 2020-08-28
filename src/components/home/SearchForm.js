import React from 'react'

import { searchMovie, fetchMovies, setLoading } from '../../actions/searchActions'

import { connect } from 'react-redux'

class SearchForm extends React.Component {

    onChange = e => {
        this.props.searchMovie(e.target.value)
    }

    onSubmit = e => {
        e.preventDefault()
        this.props.fetchMovies(this.props.text)
        this.props.setLoading()
    }

    render() {
        return (
            <div className='jumbotron-fluid mt-5 text-center'>
                <div className='container'>
                    <h3 className='mb-3'>
                        <i className='fa fa-search' /> Search for a movie ,TV series ..
          </h3>
                    <form id='searchForm' onSubmit={this.onSubmit}>
                        <input
                            type='text'
                            className='form-control'
                            name='searchText'
                            placeholder='Search Movies, TV Series ...'
                            onChange={this.onChange}
                        />
                        <button type='submit' className='btn-gray'>
                            <span>Search</span>
            </button>
                    </form>
                </div>
            </div>
        )
    }
}

const mapStatesToProps = state => ({
    text: state.movies.text
})
export default connect(
    mapStatesToProps,
    { searchMovie, fetchMovies, setLoading }
)(SearchForm)
