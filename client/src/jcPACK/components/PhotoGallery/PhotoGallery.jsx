import './PhotoGallery.scss'
import React from 'react'

import pic_1 from "./../../../images/officeProPics/1.jpg"
import pic_2 from "./../../../images/officeProPics/2.jpg"
import pic_3 from "./../../../images/officeProPics/3.jpg"
import pic_4 from "./../../../images/officeProPics/4.jpg"
import pic_5 from "./../../../images/officeProPics/5.jpg"
import pic_6 from "./../../../images/officeProPics/6.jpg"
import pic_7 from "./../../../images/officeProPics/7.jpg"
import pic_8 from "./../../../images/officeProPics/8.jpg"
import pic_9 from "./../../../images/officeProPics/9.jpg"
import pic_10 from "./../../../images/officeProPics/10.jpg"
import pic_11 from "./../../../images/officeProPics/11.jpg"
import pic_12 from "./../../../images/officeProPics/12.jpg"
import pic_13 from "./../../../images/officeProPics/13.jpg"
import pic_14 from "./../../../images/officeProPics/14.jpg"
import pic_15 from "./../../../images/officeProPics/15.jpg"
import pic_16 from "./../../../images/officeProPics/17.jpg"
import pic_17 from "./../../../images/officeProPics/18.jpg"
import pic_18 from "./../../../images/officeProPics/19.jpg"

import tn_1 from "./../../../images/officeProPics/thumbnails/1.jpg"
import tn_2 from "./../../../images/officeProPics/thumbnails/2.jpg"
import tn_3 from "./../../../images/officeProPics/thumbnails/3.jpg"
import tn_4 from "./../../../images/officeProPics/thumbnails/4.jpg"
import tn_5 from "./../../../images/officeProPics/thumbnails/5.jpg"
import tn_6 from "./../../../images/officeProPics/thumbnails/6.jpg"
import tn_7 from "./../../../images/officeProPics/thumbnails/7.jpg"
import tn_8 from "./../../../images/officeProPics/thumbnails/8.jpg"
import tn_9 from "./../../../images/officeProPics/thumbnails/9.jpg"
import tn_10 from "./../../../images/officeProPics/thumbnails/10.jpg"
import tn_11 from "./../../../images/officeProPics/thumbnails/11.jpg"
import tn_12 from "./../../../images/officeProPics/thumbnails/12.jpg"
import tn_13 from "./../../../images/officeProPics/thumbnails/13.jpg"
import tn_14 from "./../../../images/officeProPics/thumbnails/14.jpg"
import tn_15 from "./../../../images/officeProPics/thumbnails/15.jpg"
import tn_16 from "./../../../images/officeProPics/thumbnails/17.jpg"
import tn_17 from "./../../../images/officeProPics/thumbnails/18.jpg"
import tn_18 from "./../../../images/officeProPics/thumbnails/19.jpg"

const pics =[
    {
        image: pic_15,
        thumbnail: tn_15,
        label: "Modern office environment with sleek chairs and furniture."
    },
    {
        image: pic_14,
        thumbnail: pic_14,
        label: "Spacious office with ergonomic chairs and comfortable furniture."
    },
    {
        image: pic_3,
        thumbnail: tn_3,
        label: "Vibrant office setting with colorful chairs and furniture."
    },
    {
        image: pic_5,
        thumbnail: tn_5,
        label: "Contemporary office space with stylish chairs and furniture."
    },
    {
        image: pic_2,
        thumbnail: tn_2,
        label: "Inviting office atmosphere with cozy chairs and furniture."
    },
    {
        image: pic_4,
        thumbnail: tn_4,
        label: "Productive workspace with functional chairs and furniture."
    },
    {
        image: pic_6,
        thumbnail: tn_6,
        label: "Minimalist office design with simple chairs and furniture."
    },
    {
        image: pic_8,
        thumbnail: tn_8,
        label: "Collaborative office setting with flexible chairs and furniture"
    },
    {
        image: pic_9,
        thumbnail: tn_9,
        label: "Eco-friendly office with sustainable chairs and furniture."
    },
    {
        image: pic_10,
        thumbnail: tn_10,
        label: "Dynamic office environment with adjustable chairs and furniture."
    },
    {
        image: pic_11,
        thumbnail: tn_11,
        label: "Creative workspace with unique chairs and furniture."
    },
    {
        image: pic_12,
        thumbnail: tn_12,
        label: "Executive office with luxurious chairs and furniture."
    },
    {
        image: pic_13,
        thumbnail: tn_13,
        label: "Tech-focused office with modern chairs and furniture."
    },
    {
        image: pic_7,
        thumbnail: tn_7,
        label: "Casual office atmosphere with laid-back chairs and furniture."
    },
    {
        image: pic_1,
        thumbnail: tn_1,
        label: "Inspiring office environment with motivational chairs and furniture."
    },
    {
        image: pic_16,
        thumbnail: tn_16,
        label: "Sophisticated office setting with elegant chairs and furniture."
    },
    {
        image: pic_17,
        thumbnail: tn_17,
        label: "Open-concept office space with airy chairs and furniture."
    },
    {
        image: pic_18,
        thumbnail: tn_18,
        label: "Futuristic office design with high-tech chairs and furniture."
    },
]
export default function PhotoGallery() {
  return (
    <div className='PhotoGallery'>

        <div id="gallery">
            {pics.map((pic, i)=>
                <div key={i+1}>
                    <img src={pic.thumbnail}/>
                    <a href={`#lightbox-${i+1}`}>{pic.label}</a>
                </div>
            )}
        </div>

        {pics.map((pic, i)=>
            <div key={i+1} className="lightbox" id={`lightbox-${i+1}`}>
                <div className="content"><img src={pic.image}/>
                    <div className="title"><b>{pic.label}</b></div><a className="close" href="#gallery"></a>
                </div>
            </div>
        )}
    </div>
  )
}
