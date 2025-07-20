import React from 'react'
import myimg from '../../assets/myimg.jpg'
import ba from '../../assets/arrow_ba.svg'
import fo from '../../assets/arrow_fo.svg'
import play from '../../assets/play_arr.svg'
import ck from '../../assets/ck.gif'
import unck from '../../assets/unck.png'
import add from '../../assets/add.png'
import dh from '../../assets/dh.png'
import wk from '../../assets/wk.jpeg'
import cl from '../../assets/cl.jpeg'


function Feature() {
  return (
    <div className='feature'>
      <div className='one div'>
        <div className='line l1'>
          <p className='st'>Select slot</p>
          <h1 className='date'>January 25, 2022</h1>
          </div>
        <div className='line l2'>
          <img src={ba} alt="" />
          <div className="dt-no">
            <p className="dy">Mon</p>
            <h1 className="no">24</h1>
          </div>
          <div className="dt-no md">
            <p className="dy">Tue</p>
            <h1 className="no">25</h1>
          </div>
          <div className="dt-no">
            <p className="dy">Wed</p>
            <h1 className="no">26</h1>
          </div>
          <img src={fo} alt="" />
        </div>
        <div className='line l3'>
          <p className="tm">10:00</p>
          <div className="ck ckd">
            <img src={ck} alt="" />
            <p className="tmt">10:00 -- 11:00</p>
          </div>
        </div>
        <div className='line l3'>
          <p className="tm">11:00</p>
          <div className="ck">
            <img src={unck} alt="" />
            <p className="tmt">11:00 -- 12:00</p>
          </div>
        </div>
        <div className='line l3'>
          <p className="tm">12:00</p>
          <div className="ck">
            <img src={add} alt="" />
            <p className="tmt">Add new event</p>
          </div>
        </div>
      </div>
      <div className='two div'></div>
      <div className='three div'>
        <div className='tr-tp'>
          <button className='tr-btn'>Try it now</button>
          <p className='tr-p'>free for personal use</p>
        </div>
        <div className='tr-bt'>
          <div className='bt-h'>Always know what your is up to</div>
          <div className='bt-dt'>
            <p></p>
            <p className='bt-md'></p>
            <p></p>
          </div>
        </div>
      </div>
      <div className='four div'>
        <div className='tp dt'>
          <div>
            <img src={myimg} alt="" />
            <p>Sophia</p>
            <span>5m ago</span>
          </div>
          <div className='cm'>Upcoming events</div>
        </div>
        <div className='md dt'>
          <div className='md-tp'>
            <p>Jan</p>
            <h2>28</h2>
          </div>
          <div className='md-bt'>
            <h1>Design sync</h1>
            <p>1pm to 9am--1pm </p>
          </div>
        </div>
        <div className='md dt'>
          <div className='md-tp' id='pk'>
            <p>Jan</p>
            <h2>29</h2>
          </div>
          <div className='md-bt'>
            <h1 className='pk'>Board meeting</h1>
            <p>1pm to 2pm--5pm </p>
          </div>
        </div>
      </div>
      <div className='five div'>
        <div className='ints'>Instantly know if someone is available </div>
        <div className='ints-play'>
          <img src={play} alt="" />
          <p>Watch how it works</p>
        </div>
      </div>
    </div>
  )
}

export default Feature
