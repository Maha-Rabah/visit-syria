import SliderAbout from './modules/Explore/components/sliderAbout/sliderAbout';
import './App.css'

function App() {
  const images = [
    '../src/modules/Explore/components/pictureComponent/image1.png',
    '../src/modules/Explore/components/pictureComponent/image2.png',
    '../src/modules/Explore/components/pictureComponent/image3.png',
    '../src/modules/Explore/components/pictureComponent/image4.png',
    '../src/modules/Explore/components/pictureComponent/image5.png',
    '../src/modules/Explore/components/pictureComponent/image6.png',
    '../src/modules/Explore/components/pictureComponent/image7.png',
    '../src/modules/Explore/components/pictureComponent/image7.png',
    '../src/modules/Explore/components/pictureComponent/image7.png',
  ];


  return (
    <>
    <SliderAbout images={images} />
    </>
  )
}

export default App;
