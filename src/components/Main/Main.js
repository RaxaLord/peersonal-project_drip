import React from 'react';
import './Main.css';
import { Link } from 'react-router-dom';

export default function Main() {
  return (
    <div className='main'>
      <div>
        <Link to='/login'>
          <h3>Sign up for weekly emails and exclusive offers!</h3>
        </Link>
      </div>

      <div className='lookbook-cover'>
        <h1>
          USE CODE: "HIPPY420" <br />
          FOR 20% OFF YOUR FIRST PURCHASE!
        </h1>
      </div>

      <Link to='/shop'>
        <img
          src='https://cdn.shopify.com/s/files/1/0866/4890/files/supremebannerslideshow2.jpg?v=1573061210'
          alt='banner'
          className='main-banner'
        />
      </Link>

      <div className='main-photos-container'>
        <img
          src='https://i.pinimg.com/originals/93/d6/88/93d688413fb35ee826f193210077266f.jpg'
          alt='shirts'
          className='main-photos'
        />
        <img
          src='https://ae01.alicdn.com/kf/HTB1UOjpXYys3KVjSZFnq6xFzpXaa/Hot-Big-Pockets-Cargo-pants-women-High-Waist-Loose-Streetwear-pants-Baggy-Tactical-Trouser-hip-hop.jpg'
          alt='pants'
          className='main-photos'
        />
        <img
          src='https://i.pinimg.com/736x/30/a9/62/30a9626178a7a3198bd7954a48a241be.jpg'
          alt='shoes'
          className='main-photos'
        />
      </div>
    </div>
  );
}
