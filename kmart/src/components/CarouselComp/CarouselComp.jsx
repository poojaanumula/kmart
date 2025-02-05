import React from 'react'
import { Carousel } from 'react-bootstrap';
import woman from '../../assets/womans.jpg'
import man from '../../assets/man.jpg'
import mobileph from '../../assets/mobile.png'
import drone from '../../assets/drone.jpg'
import { Link } from 'react-router-dom';
import { ProductContext } from '../../context/ProductContextProvider';
import { useContext } from 'react';
const CarouselComp = () => {
    const { setCategory } = useContext(ProductContext);
  return (
    <div className="container mt-5">
      <Carousel className="bg-danger m-4">
        <Carousel.Item>
          <Link to= "/women" onClick={() => setCategory("women's clothing")}>
          <img
            className="d-block w-100"
            src={woman}
            alt="First slide"
            style={{ width: '100%', height: '300px', margin: '0 auto',objectFit:'contain',cursor:'pointer'}}
          />
          </Link>
          <Carousel.Caption>
            <h3 style={{fontSize:'40px', fontFamily:'cursive', cursor:'pointer'}}>Shop Women</h3>
            <p>Biggest Deals On Top Brands</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
        <Link to= "/men"  onClick={() => setCategory("men's clothing")}>
          <img
            className="d-block w-100"
            src={man}
            alt="Second slide"
            style={{ width: '100%', height: '300px', margin: '0 auto',objectFit:'contain', cursor:'pointer'}}
          />
          </Link>
          <Carousel.Caption>
            <h3 style={{fontSize:'40px', fontFamily:'cursive'}}>Shop Men</h3>
            <p>Explore Top Brands</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
        <Link to="/electronics"
            onClick={() => setCategory('electronics')}>
          <img
            className="d-block w-100"
            src={drone}
            alt="Third slide"
            style={{ width: '100%', height: '300px', margin: '0 auto',objectFit:'contain', cursor:'pointer'}}
          />
          </Link>
          <Carousel.Caption>
            <h3 style={{fontSize:'40px', fontFamily:'cursive'}}>Shop Electronics</h3>
            <p>Explore Top Brands</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  )
}

export default CarouselComp
