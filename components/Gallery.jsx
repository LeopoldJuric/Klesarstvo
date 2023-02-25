import Navbarpodstr from './Navbarpodstr'
import Socials from './Socials'
import React, { useState, useCallback } from 'react'
import ImageViewer from 'react-simple-image-viewer'

export default function Gallery () {

  const [currentImage, setCurrentImage] = useState(0);
  const [isViewerOpen, setIsViewerOpen] = useState(false);
  const images = [
    'images/gallery/IMG-20230121-WA0004.jpg',
    'images/gallery/IMG-20230121-WA0006.jpg',
    'images/gallery/IMG-20230121-WA0007.jpg',
    'images/gallery/IMG-20230121-WA0008.jpg',
    'images/gallery/IMG-20230121-WA0009.jpg',
    'images/gallery/IMG-20230121-WA0010.jpg',
    'images/gallery/IMG-20230121-WA0011.jpg',
    'images/gallery/IMG-20230121-WA0012.jpg',
    'images/gallery/IMG-20230121-WA0013.jpg',
    'images/gallery/IMG-20230121-WA0014.jpg',
    'images/gallery/IMG-20230121-WA0015.jpg',
    'images/gallery/IMG-20230121-WA0016.jpg',
    'images/gallery/IMG-20230121-WA0017.jpg',
    'images/gallery/IMG-20230121-WA0018.jpg',
    'images/gallery/IMG-20230121-WA0019.jpg',
    'images/gallery/IMG-20230121-WA0020.jpg',
    'images/gallery/IMG-20230121-WA0021.jpg',
    'images/gallery/IMG-20230121-WA0022.jpg',
    'images/gallery/IMG-20230121-WA0023.jpg',
    'images/gallery/IMG-20230121-WA0024.jpg',
    'images/gallery/IMG-20230121-WA0025.jpg',
    'images/gallery/IMG-20230121-WA0026.jpg',
    'images/gallery/IMG-20230121-WA0028.jpg',
    'images/gallery/IMG-20230121-WA0029.jpg',
    'images/gallery/IMG-20230121-WA0030.jpg',
    'images/gallery/IMG-20230121-WA0031.jpg',
    'images/gallery/IMG-20230121-WA0032.jpg',
    'images/gallery/IMG-20230121-WA0033.jpg',
    'images/gallery/IMG-20230121-WA0034.jpg',
    'images/gallery/IMG-20230121-WA0035.jpg',
    'images/gallery/IMG-20230121-WA0037.jpg',
    'images/gallery/IMG-20230121-WA0038.jpg',
    'images/gallery/IMG-20230121-WA0039.jpg',
    'images/gallery/IMG-20230121-WA0040.jpg',
    'images/gallery/IMG-20230121-WA0041.jpg',
    'images/gallery/IMG-20230121-WA0042.jpg',
    'images/gallery/IMG-20230121-WA0043.jpg',
    'images/gallery/IMG-20230121-WA0044.jpg',
    'images/gallery/IMG-20230121-WA0046.jpg',
    'images/gallery/IMG-20230121-WA0047.jpg',
    'images/gallery/IMG-20230121-WA0049.jpg',
    'images/gallery/IMG-20230121-WA0050.jpg',
    'images/gallery/IMG-20230121-WA0051.jpg',
    'images/gallery/IMG-20230121-WA0052.jpg',
    'images/gallery/IMG-20230121-WA0053.jpg',
    'images/gallery/IMG-20230121-WA0054.jpg',
    'images/gallery/IMG-20230121-WA0055.jpg',
    'images/gallery/IMG-20230121-WA0056.jpg',
    'images/gallery/IMG-20230121-WA0057.jpg',
    'images/gallery/IMG-20230121-WA0058.jpg',
    'images/gallery/IMG-20230121-WA0059.jpg',
    'images/gallery/IMG-20230121-WA0060.jpg',
    'images/gallery/IMG-20230121-WA0061.jpg',
  ];

  const openImageViewer = useCallback((index) => {
    setCurrentImage(index);
    setIsViewerOpen(true);
  }, []);

  const closeImageViewer = () => {
    setCurrentImage(0);
    setIsViewerOpen(false);
  };

  return (
    <div>
        <Navbarpodstr podstr='Galerija' />
        <div className='mt-[10rem] p-4 grid grid-cols-2 gap-4 m-auto max-w-[1040px] md:mt-[8rem] md:grid-cols-3'>
          {images.map((src, index) => (
            <img
              className='cursor-pointer'
              src={ src }
              onClick={ () => openImageViewer(index) }
              width="100%"
              key={ index }
              style={{ margin: '2px' }}
              alt=""
            />
          ))}

          {isViewerOpen && (
            <ImageViewer
              src={ images }
              currentIndex={ currentImage }
              disableScroll={ false }
              closeOnClickOutside={ true }
              onClose={ closeImageViewer }
              alt=""
            />
          )}
        </div>
        <Socials />
    </div>
  )
}



