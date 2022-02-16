import React from 'react'
import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from 'react-image-gallery';
import { makeStyles } from '@material-ui/core/styles';
import {
  first,
  second,
  thirth,
  forth,
  five,
  six,
  seven,
  eight,
  nine,
  ten,
  eleven,
  twelve,
  thirsteen,
} from '../assets/images/index'

const useStyles = makeStyles((theme) => ({
    galleryTitle : {
        fontFamily : 'Cookie,cursive!important',
        fontSize: '60px',
        color: '#f14e95',
    }
}));

const images = [
  {
    original: first,
    thumbnail: first,
  },
  {
    original: second,
    thumbnail: second,
  },
  {
    original: thirth,
    thumbnail: thirth,
  },
  {
    original: forth,
    thumbnail: forth,
  },
  {
    original: five,
    thumbnail: five,
  },
  {
    original: six,
    thumbnail: six,
  },
  {
    original: seven,
    thumbnail: seven,
  },
  {
    original: eight,
    thumbnail: eight,
  },
  {
    original: nine,
    thumbnail: nine,
  },
  {
    original: ten,
    thumbnail: ten,
  },
  {
    original: eleven,
    thumbnail: eleven,
  },
  {
    original: twelve,
    thumbnail: twelve,
  },
  {
    original: thirsteen,
    thumbnail: thirsteen,
  },
];

const Gallery = () => {
    const classes = useStyles();
    return (
        <div style={{backgroundColor : '#f3f5f5', padding: '30px 0px'}}>
            <div className="container" >
                <div className="text-center">
                    <h2 className={classes.galleryTitle}>
                        #RamaLan22
                    </h2>
                </div>
                <div style={{width:'100%'}}>
                    <ImageGallery items={images} style={{width :'80%'}} />
                </div>
            </div>
        </div>
    )
}

export default Gallery