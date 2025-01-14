import { useState } from 'react'
import './App.css'
import Beznadejna from './assets/IMG_6813.jpeg'
import Vasniva from './assets/IMG_6812.jpeg'
import Vecerni from './assets/IMG_6811.jpeg'
import Gallery from './gallery'

const contentByLanguage = {
  Spanish: {
    title: 'Portfolio', textCountry: 'España es un país hermoso que tiene mucho que ofrecer. Esta página estará especialmente dedicada a Lluís, uno de los mejores escaladores españoles!', flag: 'https://upload.wikimedia.org/wikipedia/commons/8/89/Bandera_de_Espa%C3%B1a.svg', things: [
      { title: 'Večerní', image: Vecerni },
      { title: 'Vášnivá', image: Vasniva },
      { title: 'Beznadějná', image: Beznadejna }
    ]
  },
  English: {
    title: 'Portfolio', textCountry: 'Spain is a beautiful country that has a lot to offer. This page is for Lluís, one of the best Spanish climbers.', flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Flag_of_the_United_Kingdom_%281-2%29.svg/1200px-Flag_of_the_United_Kingdom_%281-2%29.svg.png', things: [
      { title: 'London', image: 'https://upload.wikimedia.org/wikipedia/commons/6/67/London_Skyline_%28125508655%29.jpeg', link: 'https://en.wikipedia.org/wiki/London' }, { title: 'Stonehenge', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Stonehenge2007_07_30.jpg/1920px-Stonehenge2007_07_30.jpg', link: 'https://en.wikipedia.org/wiki/Stonehenge' }, { title: 'Buckingham Palace', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Buckingham_Palace_aerial_view_2016_%28cropped%29.jpg/1920px-Buckingham_Palace_aerial_view_2016_%28cropped%29.jpg', link: 'https://en.wikipedia.org/wiki/Buckingham_Palace' }
    ]
  }
}

function App() {
  const [text, setText] = useState('vino de la casa')
  const [customFontFamily, setCustomFontFamily] = useState('Arial')
  const [image, setImage] = useState('https://placekitten.com/200/200')
  const [language, setLanguage] = useState('Spanish')
  const [count, setCount] = useState(0)
  const onFlagClick = () => {
    let newLanguage = 'English'
    if (language == 'English') {
      newLanguage = 'Spanish'
    }
    setLanguage(newLanguage)
    setCount(count + 1)
  }
  const onImageClick = () => {
    setImage('https://placekitten.com/150/150')
  }
  const onClickHandler = () => {
    setText("¿Hola, cómo estás?")
    setCustomFontFamily("Montserrat")

  }
  return (
    <div style={{ fontFamily: "Montserrat" }}>
      <h1 onClick={onClickHandler}>{contentByLanguage[language].title}</h1>
      {contentByLanguage[language].textCountry}<br />Espero que te diviertas.
      <div style={{ fontFamily: customFontFamily }}>
        {text}
      </div>
      <div style={{ display: 'grid', placeContent: 'center' }}>
        <div
          className='thingBox'>
          <Gallery galleryID='paintings' images={contentByLanguage[language].things.map((image) =>
            ({ ...image, height: 2000, width: 1530 })
          )}></Gallery>
        </div>
        <img className='logo fancy' onClick={onFlagClick} src={contentByLanguage[language].flag} />
        <img className='logo fancy' onClick={onImageClick} src={image} />
        <div style={{ fontFamily: customFontFamily }}>
          I have clicked {count} times on the flag today.
        </div>
      </div>
    </div>)
}

export default App
