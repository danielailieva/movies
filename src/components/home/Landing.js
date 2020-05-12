import React from 'react'

import SearchForm from './SearchForm'
import Spinner from '../layout/Spinner'
import MoviesContainer from './MoviesContainer'
import SlideShow from './SlideShow'
import { connect } from 'react-redux'

 class Landing extends React.Component {
    render() {
        const { loading } = this.props
        return (<div>
             <SlideShow />
            <div className='container'>
                <SearchForm />
            </div>
            {loading ? <Spinner /> : <MoviesContainer />}
            </div>
        )
    }
}

const mapStateToProps = state => ({
    loading: state.movies.loading
})

export default connect(mapStateToProps)(Landing)
