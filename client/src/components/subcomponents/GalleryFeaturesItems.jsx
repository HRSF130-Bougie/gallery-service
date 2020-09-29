/* eslint-disable max-len */
/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { Component } from 'react';
import {
  GalleryFeaturesModulesTopContainer,
  GalleryFeaturesOverviewHeadingContainerHeading,
  GalleryFeaturesModulesContainerHeadingSecondary,
  GalleryTinyMarginBot,
  GalleryFeaturesModulesContainerRightContainer,
  GalleryFeaturesModulesContainerImagesContainer,
  GalleryFeaturesLeftContainerHeadingSticky,
  GalleryFeaturesModulesLeftContainerBottom,
  GalleryFeaturesModulesLeftContainer,
  ImagesSingle,
  ImagesPair,
  ImagesSkewed1,
  ImagesSkewed2,
  ImagesLarge,
  ImagesComment,
  ImagesCommentTextIcon,
  ImagesCommentTextContainer,
  ImagesCommentTextText,
  ImagesCommentTextHost,
  ImagesCommentPhoto,
} from '../../../styled/galleryFeaturesItems';

class GalleryFeaturesItems extends Component {
  renderRoomGallery() {
    const {
      name, hostname, images, index, setModalImage,
    } = this.props;
    if (images.length === 1 && index === 0) {
      return ([
        <ImagesSingle key={Math.random()} onClick={() => setModalImage(images[0].url)} src={images[0].url} id={name} />,
      ]);
    } if (images.length === 1 && !images[0].comment) {
      return ([
        <ImagesLarge key={Math.random()} onClick={() => setModalImage(images[0].url)} src={images[0].url} />,
      ]);
    } if (images.length === 1 && images[0].comment) {
      return ([
        <ImagesComment key={Math.random()}>
          <ImagesCommentTextContainer key={Math.random()}>
            <ImagesCommentTextIcon key={Math.random()} src="../../../public/img/icons/quotes.png" />
            <ImagesCommentTextText key={Math.random()}>{images[0].comment}</ImagesCommentTextText>
            <ImagesCommentTextHost key={Math.random()}>
              {hostname}
              , your host
            </ImagesCommentTextHost>
          </ImagesCommentTextContainer>
        </ImagesComment>,
        <ImagesCommentPhoto key={Math.random()} onClick={() => setModalImage(images[0].url)} src={images[0].url} />,
      ]);
    } if (images.length === 2) {
      return ([
        <ImagesPair key={Math.random()} onClick={() => setModalImage(images[0].url)} src={images[0].url} />,
        <ImagesPair key={Math.random()} onClick={() => setModalImage(images[1].url)} src={images[1].url} />,
      ]);
    } if (images.length === 3) {
      return ([
        <ImagesSingle key={Math.random()} onClick={() => setModalImage(images[0].url)} src={images[0].url} />,
        <ImagesPair key={Math.random()} onClick={() => setModalImage(images[1].url)} src={images[1].url} />,
        <ImagesPair key={Math.random()} onClick={() => setModalImage(images[2].url)} src={images[2].url} />,
      ]);
    } if (images.length === 4 && !images[3].comment) {
      return ([
        <ImagesSingle key={Math.random()} onClick={() => setModalImage(images[0].url)} src={images[0].url} />,
        <ImagesPair key={Math.random()} onClick={() => setModalImage(images[1].url)} src={images[1].url} />,
        <ImagesPair key={Math.random()} onClick={() => setModalImage(images[2].url)} src={images[2].url} />,
        <ImagesSingle key={Math.random()} onClick={() => setModalImage(images[3].url)} src={images[3].url} />,
      ]);
    } if (images.length === 4 && images[3].comment) {
      return ([
        <ImagesSingle key={Math.random()} onClick={() => setModalImage(images[0].url)} src={images[0].url} />,
        <ImagesPair key={Math.random()} onClick={() => setModalImage(images[1].url)} src={images[1].url} />,
        <ImagesPair key={Math.random()} onClick={() => setModalImage(images[2].url)} src={images[2].url} />,
        <ImagesComment key={Math.random()}>
          <ImagesCommentTextContainer key={Math.random()}>
            <ImagesCommentTextIcon key={Math.random()} src="../../../public/img/icons/quotes.png" />
            <ImagesCommentTextText key={Math.random()}>{images[3].comment}</ImagesCommentTextText>
            <ImagesCommentTextHost key={Math.random()}>
              {hostname}
              , your host
            </ImagesCommentTextHost>
          </ImagesCommentTextContainer>
        </ImagesComment>,
        <ImagesCommentPhoto key={Math.random()} onClick={() => setModalImage(images[3].url)} src={images[3].url} />,
      ]);
    } if (images.length === 5) {
      return ([
        <ImagesSingle key={Math.random()} onClick={() => setModalImage(images[0].url)} src={images[0].url} />,
        <ImagesPair key={Math.random()} onClick={() => setModalImage(images[1].url)} src={images[1].url} />,
        <ImagesPair key={Math.random()} onClick={() => setModalImage(images[2].url)} src={images[2].url} />,
        <ImagesSkewed1 key={Math.random()} onClick={() => setModalImage(images[3].url)} src={images[3].url} />,
        <ImagesSkewed2 key={Math.random()} onClick={() => setModalImage(images[4].url)} src={images[4].url} />,
      ]);
    } if (images.length === 6 && !images[5].comment) {
      return ([
        <ImagesSingle key={Math.random()} onClick={() => setModalImage(images[0].url)} src={images[0].url} />,
        <ImagesPair key={Math.random()} onClick={() => setModalImage(images[1].url)} src={images[1].url} />,
        <ImagesPair key={Math.random()} onClick={() => setModalImage(images[2].url)} src={images[2].url} />,
        <ImagesSkewed2 key={Math.random()} onClick={() => setModalImage(images[3].url)} src={images[3].url} />,
        <ImagesSkewed1 key={Math.random()} onClick={() => setModalImage(images[4].url)} src={images[4].url} />,
        <ImagesSingle key={Math.random()} onClick={() => setModalImage(images[5].url)} src={images[5].url} />,
      ]);
    } if (images.length === 6 && images[5].comment) {
      return ([
        <ImagesSingle key={Math.random()} onClick={() => setModalImage(images[0].url)} src={images[0].url} />,
        <ImagesPair key={Math.random()} onClick={() => setModalImage(images[1].url)} src={images[1].url} />,
        <ImagesPair key={Math.random()} onClick={() => setModalImage(images[2].url)} src={images[2].url} />,
        <ImagesSkewed2 key={Math.random()} onClick={() => setModalImage(images[3].url)} src={images[3].url} />,
        <ImagesSkewed1 key={Math.random()} onClick={() => setModalImage(images[4].url)} src={images[4].url} />,
        <ImagesComment key={Math.random()}>
          <ImagesCommentTextContainer key={Math.random()}>
            <ImagesCommentTextIcon key={Math.random()} src="../../../public/img/icons/quotes.png" />
            <ImagesCommentTextText key={Math.random()}>{images[5].comment}</ImagesCommentTextText>
            <ImagesCommentTextHost key={Math.random()}>
              {hostname}
              , your host
            </ImagesCommentTextHost>
          </ImagesCommentTextContainer>
        </ImagesComment>,
        <ImagesCommentPhoto key={Math.random()} onClick={() => setModalImage(images[5].url)} src={images[5].url} />,
      ]);
    } if (images.length === 7 && !images[6].comment) {
      return ([
        <ImagesSingle key={Math.random()} onClick={() => setModalImage(images[0].url)} src={images[0].url} />,
        <ImagesPair key={Math.random()} onClick={() => setModalImage(images[1].url)} src={images[1].url} />,
        <ImagesPair key={Math.random()} onClick={() => setModalImage(images[2].url)} src={images[2].url} />,
        <ImagesSingle key={Math.random()} onClick={() => setModalImage(images[3].url)} src={images[3].url} />,
        <ImagesSkewed2 key={Math.random()} onClick={() => setModalImage(images[4].url)} src={images[4].url} />,
        <ImagesSkewed1 key={Math.random()} onClick={() => setModalImage(images[5].url)} src={images[5].url} />,
        <ImagesSingle key={Math.random()} onClick={() => setModalImage(images[6].url)} src={images[6].url} />,
      ]);
    } if (images.length === 7 && images[6].comment) {
      return ([
        <ImagesSingle key={Math.random()} onClick={() => setModalImage(images[0].url)} src={images[0].url} />,
        <ImagesPair key={Math.random()} onClick={() => setModalImage(images[1].url)} src={images[1].url} />,
        <ImagesPair key={Math.random()} onClick={() => setModalImage(images[2].url)} src={images[2].url} />,
        <ImagesSingle key={Math.random()} onClick={() => setModalImage(images[3].url)} src={images[3].url} />,
        <ImagesSkewed2 key={Math.random()} onClick={() => setModalImage(images[4].url)} src={images[4].url} />,
        <ImagesSkewed1 key={Math.random()} onClick={() => setModalImage(images[5].url)} src={images[5].url} />,
        <ImagesComment key={Math.random()}>
          <ImagesCommentTextContainer key={Math.random()}>
            <ImagesCommentTextIcon key={Math.random()} src="../../../public/img/icons/quotes.png" />
            <ImagesCommentTextText key={Math.random()}>{images[6].comment}</ImagesCommentTextText>
            <ImagesCommentTextHost key={Math.random()}>
              {hostname}
              , your host
            </ImagesCommentTextHost>
          </ImagesCommentTextContainer>
        </ImagesComment>,
        <ImagesCommentPhoto key={Math.random()} onClick={() => setModalImage(images[6].url)} src={images[6].url} />,
      ]);
    } if (images.length === 8 && !images[7].comment) {
      return ([
        <ImagesSingle key={Math.random()} onClick={() => setModalImage(images[0].url)} src={images[0].url} />,
        <ImagesPair key={Math.random()} onClick={() => setModalImage(images[1].url)} src={images[1].url} />,
        <ImagesPair key={Math.random()} onClick={() => setModalImage(images[2].url)} src={images[2].url} />,
        <ImagesSkewed1 key={Math.random()} onClick={() => setModalImage(images[3].url)} src={images[3].url} />,
        <ImagesSkewed2 key={Math.random()} onClick={() => setModalImage(images[4].url)} src={images[4].url} />,
        <ImagesSingle key={Math.random()} onClick={() => setModalImage(images[5].url)} src={images[5].url} />,
        <ImagesPair key={Math.random()} onClick={() => setModalImage(images[6].url)} src={images[6].url} />,
        <ImagesPair key={Math.random()} onClick={() => setModalImage(images[7].url)} src={images[7].url} />,
      ]);
    } if (images.length === 8 && images[7].comment) {
      return ([
        <ImagesSingle key={Math.random()} onClick={() => setModalImage(images[0].url)} src={images[0].url} />,
        <ImagesPair key={Math.random()} onClick={() => setModalImage(images[1].url)} src={images[1].url} />,
        <ImagesPair key={Math.random()} onClick={() => setModalImage(images[2].url)} src={images[2].url} />,
        <ImagesSkewed1 key={Math.random()} onClick={() => setModalImage(images[3].url)} src={images[3].url} />,
        <ImagesSkewed2 key={Math.random()} onClick={() => setModalImage(images[4].url)} src={images[4].url} />,
        <ImagesPair key={Math.random()} onClick={() => setModalImage(images[5].url)} src={images[5].url} />,
        <ImagesPair key={Math.random()} onClick={() => setModalImage(images[6].url)} src={images[6].url} />,
        <ImagesComment key={Math.random()}>
          <ImagesCommentTextContainer key={Math.random()}>
            <ImagesCommentTextIcon key={Math.random()} src="../../../public/img/icons/quotes.png" />
            <ImagesCommentTextText key={Math.random()}>{images[7].comment}</ImagesCommentTextText>
            <ImagesCommentTextHost key={Math.random()}>
              {hostname}
              , your host
            </ImagesCommentTextHost>
          </ImagesCommentTextContainer>
        </ImagesComment>,
        <ImagesCommentPhoto key={Math.random()} onClick={() => setModalImage(images[7].url)} src={images[7].url} />,
      ]);
    }
    return null;
  }

  renderStickyClass() {
    const { sticky } = this.props;
    if (sticky === 0) {
      return null;
    } if (sticky === 1) {
      return 'gallery-feature-left-container-heading-sticky';
    }
    return null;
  }

  renderPositionClass() {
    const { sticky } = this.props;
    if (sticky === 2) {
      return 'gallery-features-modules-left-container-bottom';
    }
    return 'gallery-features-modules-left-container';
  }

  render() {
    const { amenities, name } = this.props;
    const features = amenities.reduce((string, feature, index) => {
      if (index !== amenities.length - 1) {
        return `${string + feature} · `;
      }
      return string + feature;
    }, '');

    return (
      <>
        <GalleryFeaturesModulesTopContainer>
          <div className={this.renderPositionClass()}>
            <div className={this.renderStickyClass()}>
              <GalleryFeaturesOverviewHeadingContainerHeading>{name}</GalleryFeaturesOverviewHeadingContainerHeading>
              <GalleryTinyMarginBot />
              <GalleryFeaturesModulesContainerHeadingSecondary><span>{features}</span></GalleryFeaturesModulesContainerHeadingSecondary>
            </div>
          </div>
          <GalleryFeaturesModulesContainerRightContainer id={name}>
            <GalleryFeaturesModulesContainerImagesContainer>
              {this.renderRoomGallery()}
            </GalleryFeaturesModulesContainerImagesContainer>
          </GalleryFeaturesModulesContainerRightContainer>
        </GalleryFeaturesModulesTopContainer>
      </>
    );
  }
}

export default GalleryFeaturesItems;
