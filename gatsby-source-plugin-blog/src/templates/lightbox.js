/* global graphql */
import React from 'react'
import Gallery from 'react-photo-gallery'
import Lightbox from 'react-image-lightbox'

/*
const photos = [
  { src: 'https://source.unsplash.com/2ShvY8Lf6l0/800x599', width: 4, height: 3 },
  { src: 'https://source.unsplash.com/Dm-qxdynoEc/800x799', width: 1, height: 1 },
  { src: 'https://source.unsplash.com/qDkso9nvCg0/600x799', width: 3, height: 4 },
  { src: 'https://source.unsplash.com/iecJiKe_RNg/600x799', width: 3, height: 4 },
  { src: 'https://source.unsplash.com/epcsn8Ed8kY/600x799', width: 3, height: 4 },
  { src: 'https://source.unsplash.com/NQSWvyVRIJk/800x599', width: 4, height: 3 },
  { src: 'https://source.unsplash.com/zh7GEuORbUw/600x799', width: 3, height: 4 },
  { src: 'https://source.unsplash.com/PpOHJezOalU/800x599', width: 4, height: 3 },
  { src: 'https://source.unsplash.com/I1ASdgphUH4/800x599', width: 4, height: 3 }
];
*/

const images = [
  '//placekitten.com/1500/500',
  '//placekitten.com/4000/3000',
  '//placekitten.com/800/1200',
  '//placekitten.com/1500/1500'
];

export default class WorkGallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentImage: 0,
      lightboxIsOpen: false
    };
    this.closeLightbox = this.closeLightbox.bind(this);
    this.openLightbox = this.openLightbox.bind(this);
    this.gotoNext = this.gotoNext.bind(this);
    this.gotoPrevious = this.gotoPrevious.bind(this);
  }
  openLightbox(event, obj) {
    this.setState({
      currentImage: obj.index,
      lightboxIsOpen: true
    });
  }
  closeLightbox() {
    this.setState({
      currentImage: 0,
      lightboxIsOpen: false
    });
  }
  gotoPrevious() {
    this.setState({
      currentImage: this.state.currentImage - 1,
    });
  }
  gotoNext() {
    this.setState({
      currentImage: this.state.currentImage + 1,
    });
  }

  render() {
    const photos = [];
    const lightBoxPhotos = [];
    this.props.data.galleries.images.map(image => {console.log(image.height);
      let obj = (image.height > image.width) ? { src: "https://media.graphcms.com/resize=h:400/" + image.handle, width: 3, height: 4 } : { src: "https://media.graphcms.com/resize=w:400,h:300,fit:crop/" + image.handle, width: 4, height: 3 }
      photos.push(obj)
      lightBoxPhotos.push(image.url)
    })
    const {
      currentImage,
      lightboxIsOpen,
    } = this.state;

    return (
      <div className="pageContent">
        <Gallery photos={photos} onClick={this.openLightbox} />
        {lightboxIsOpen &&
          <Lightbox
            mainSrc={lightBoxPhotos[currentImage]}
            nextSrc={lightBoxPhotos[(currentImage + 1) % lightBoxPhotos.length]}
            prevSrc={lightBoxPhotos[(currentImage + lightBoxPhotos.length - 1) % lightBoxPhotos.length]}
            reactModalStyle={{ overlay: { zIndex: 1030 } }}
            onCloseRequest={this.closeLightbox}
            onMovePrevRequest={() => this.setState({
              currentImage: (currentImage + lightBoxPhotos.length - 1) % lightBoxPhotos.length,
            })}
            onMoveNextRequest={() => this.setState({
              currentImage: (currentImage + 1) % lightBoxPhotos.length,
            })}
          />
        }
      </div>
    )
  }
}

export const query = graphql`
  query GalleryQuery($slug: String!) {
    galleries(slug: { eq: $slug }) {
      id
      title
      slug
      images {
        handle
        height
        url
        width
      }
    }
  }
`
