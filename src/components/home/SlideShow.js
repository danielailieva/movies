import React from 'react'
import Slider from 'react-animated-slider'
import 'react-animated-slider/build/horizontal.css'

export default class SlideShow extends React.Component {
    render() {
        const slides = [
            { title: 'The Witcher', image: 'https://i.redd.it/99ymlhomdy241.jpg'},
            { title: 'Vikings', image: 'https://i.pinimg.com/originals/03/63/1e/03631e47a3ac8d72eadaf9115e135d5c.jpg'},
            { title: 'Game of Thrones', image: 'https://i.pinimg.com/originals/40/5b/f6/405bf630691a6aba768e26ce00808ffb.jpg'},
            { title: 'The Sopranos', image: 'https://img3.goodfon.com/wallpaper/nbig/2/c5/serial-klan-soprano-semya.jpg'},
            { title: 'The Dark Knight Rises', image: 'https://cdn.wallpapersafari.com/63/34/97MWng.jpg'}
           
        ]
        return (
            <Slider autoplay={3000}>
                {slides.map((item, index) => (
                    <div
                        key={index}
                        style={{ background: `url('${item.image}') no-repeat center center` }}
                    >
                    </div>
                ))}
            </Slider>
        )
    }
}


