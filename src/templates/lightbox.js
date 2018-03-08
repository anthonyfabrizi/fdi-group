/* global graphql */
import React from 'react'
import Gallery from 'react-photo-gallery'
import Lightbox from 'react-image-lightbox'


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
    this.props.data.galleries.images.map(image => {
      let obj = (parseInt(image.height) > parseInt(image.width)) ? { src: "https://media.graphcms.com/resize=h:400/" + image.handle, width: 3, height: 4 } : { src: "https://media.graphcms.com/resize=w:400/" + image.handle, width: 4, height: 3 }
      let img = (parseInt(image.height) > parseInt(image.width)) ? "https://media.graphcms.com/resize=h:1500/" + image.handle : "https://media.graphcms.com/resize=w:1500/" + image.handle
      photos.push(obj)
      lightBoxPhotos.push(img)
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
