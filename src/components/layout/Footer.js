import React from 'react'

export default class Footer extends React.Component {
  render() {
    return (
      <div>
        <div className='row'>
          <div className='col-md-12'>
            <div className='footer p-3 text-center text-light'>
              Developed By:
            <span className='font-weight-normal'>
                Daniela Ilieva
            </span>
            , Using <i className='fab fa-react' /> React JS &amp; Redux JS
            integrated with external movies data API
            <a
                href='http://www.omdbapi.com/'
                target='_blank'
                rel='noopener noreferrer'
              >
                OMDB
            </a>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

