import React from 'react';
import { Link } from 'react-router-dom';
import rentCategory from '../assets/jpg/rentCategoryImage.jpg';
import sellCategory from '../assets/jpg/sellCategoryImage.jpg';
import Slider from '../Components/Slider';

function Explore() {
  return (
    <div className='explore'>
      <header>
        <p className='pageHeader'>Explore</p>
      </header>
      <main>
        <Slider/>
        <p className='exploreCategoryHeading'> Categories</p>

        <div className='exploreCategories'>
          <Link to='/category/rent'>
            <img src={rentCategory} alt='rent' className='exploreCategoryImg' />
            <p className='exploreCategoryName'>Place for rent</p>
          </Link>

          <Link to='/category/sale'>
            <img src={sellCategory} alt='sell' className='exploreCategoryImg' />
            <p className='exploreCategoryName'>Place for sale</p>
          </Link>
        </div>
      </main>
    </div>
  );
}

export default Explore;
