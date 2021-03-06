import styled from 'styled-components';

export const RoomImagesContainer = styled.div`
max-width: 1120px;
padding-bottom: 18px;
`;

export const OverviewHeading = styled.h2`
font-family: 'Airbnb Cereal App Medium';
color: rgb(34, 34, 34);
font-size: 22px;
line-height: 30px;
font-weight: 400px;
`;

export const HeadingSecondary = styled.h2`
display: block;

max-width: 362px;
width:100%;

font-family: 'Airbnb Cereal App Light';
color: rgb(34, 34, 34);
font-size: 14px;
line-height: 20px;
font-weight: 400px;
`;

export const TinyMarginBot = styled.div`
margin-bottom: 6px !important;
`;

export const RightContainer = styled.div`
grid-column: 2;
width: 100%;
`;

export const ImagesContainer = styled.div`
display: flex;
gap: 10px;
flex-wrap: wrap;
justify-content: space-around;
`;

export const LeftContainerStickyContainer = styled.div`
position: -webkit-sticky;
position: sticky;
top: 68px;
`;

export const LeftContainer = styled.div`
grid-column: 1;

width: 100%;
height: 100%;

padding-bottom: 48px;
`;

// ----------//
// IMAGE GRID//
// ----------//

export const ImagesSingle = styled.img`
object-fit: cover;
vertical-align: bottom;
width: 100%;
max-height: 500px;

&:hover {
    cursor: pointer;
    -webkit-filter: brightness(85%);
    transition: -webkit-filter 0.3s;
}
`;

export const ImagesPair = styled.img`
object-fit: cover;
vertical-align: bottom;
height: auto;
width: 49.3%;
max-height: 487px;

&:hover {
    cursor: pointer;
    -webkit-filter: brightness(85%);
    transition: -webkit-filter 0.3s;
}
`;

export const ImagesSkewed1 = styled.img`
object-fit: cover;
vertical-align: bottom;
height: auto;
width: 65.6%;

&:hover {
    cursor: pointer;
    -webkit-filter: brightness(85%);
    transition: -webkit-filter 0.3s;
}
`;

export const ImagesSkewed2 = styled.img`
object-fit: cover;
vertical-align: bottom;
height: auto;
width: 33.05%;

&:hover {
    cursor: pointer;
    -webkit-filter: brightness(85%);
    transition: -webkit-filter 0.3s;
}
`;

export const ImagesLarge = styled.img`
object-fit: cover;
vertical-align: bottom;
width: 100%;
height: 180%;
max-height: 1000px;

&:hover {
    cursor: pointer;
    -webkit-filter: brightness(85%);
    transition: -webkit-filter 0.3s;
}
`;

export const ImagesComment = styled.div`
object-fit: cover;
vertical-align: bottom;
background-color: F7F7F7;
width: 65.6%;
max-height: 320px;
display: flex;
align-items: center;
`;

export const ImagesCommentTextContainer = styled.div`
padding: 64px;
`;

export const ImagesCommentTextIcon = styled.img`
padding-top: -6px;
`;

export const ImagesCommentTextText = styled.div`
padding-top: 20px;

font-family: 'Airbnb Cereal App Light';
color: rgb(34, 34, 34);
font-size: 18px;
line-height: 28px;
padding-bottom: 16px;
`;

export const ImagesCommentTextHost = styled.div`
padding-top: 14px;
font-family: 'Airbnb Cereal App Medium';
color: rgb(34, 34, 34);
font-size: 14px;
line-height: 18px;
`;

export const ImagesCommentPhoto = styled.img`
object-fit: cover;
vertical-align: bottom;
height: 320px;
width: 33.05%;

&:hover {
    cursor: pointer;
    -webkit-filter: brightness(85%);
    transition: -webkit-filter 0.3s;
}
`;

// export const ImagesSingleContainer = styled.div`
// object-fit: cover;
// vertical-align: bottom;
// width: 100%;
// max-height: 500px;

// &:hover {
//     cursor: pointer;
//     -webkit-filter: brightness(85%);
//     transition: -webkit-filter 0.3s;
// }
// `;

// export const ImagesSingle = styled.img`
// object-fit: cover;
// vertical-align: bottom;
// width: 100%;
// max-height: 500px;

// &:hover {
//     cursor: pointer;
//     -webkit-filter: brightness(85%);
//     transition: -webkit-filter 0.3s;
// }
// `;

// export const ImagesPair = styled.img`
// object-fit: cover;
// vertical-align: bottom;
// height: auto;
// width: 49.3%;
// max-height: 487px;

// &:hover {
//     cursor: pointer;
//     -webkit-filter: brightness(85%);
//     transition: -webkit-filter 0.3s;
// }
// `;

// export const ImagesSkewed1 = styled.img`
// object-fit: cover;
// vertical-align: bottom;
// height: auto;
// width: 65.6%;

// &:hover {
//     cursor: pointer;
//     -webkit-filter: brightness(85%);
//     transition: -webkit-filter 0.3s;
// }
// `;

// export const ImagesSkewed2 = styled.img`
// object-fit: cover;
// vertical-align: bottom;
// height: auto;
// width: 33.05%;

// &:hover {
//     cursor: pointer;
//     -webkit-filter: brightness(85%);
//     transition: -webkit-filter 0.3s;
// }
// `;

// export const ImagesLarge = styled.img`
// object-fit: cover;
// vertical-align: bottom;
// width: 100%;
// height: 180%;
// max-height: 1000px;

// &:hover {
//     cursor: pointer;
//     -webkit-filter: brightness(85%);
//     transition: -webkit-filter 0.3s;
// }
// `;

// export const ImagesComment = styled.div`
// object-fit: cover;
// vertical-align: bottom;
// background-color: F7F7F7;
// width: 65.6%;
// max-height: 320px;
// display: flex;
// align-items: center;
// `;

// export const ImagesCommentTextContainer = styled.div`
// padding: 64px;
// `;

// export const ImagesCommentTextIcon = styled.img`
// padding-top: -6px;
// `;

// export const ImagesCommentTextText = styled.div`
// padding-top: 20px;

// font-family: 'Airbnb Cereal App Light';
// color: rgb(34, 34, 34);
// font-size: 18px;
// line-height: 28px;
// padding-bottom: 16px;
// `;

// export const ImagesCommentTextHost = styled.div`
// padding-top: 14px;
// font-family: 'Airbnb Cereal App Medium';
// color: rgb(34, 34, 34);
// font-size: 14px;
// line-height: 18px;
// `;

// export const ImagesCommentPhoto = styled.img`
// object-fit: cover;
// vertical-align: bottom;
// height: 320px;
// width: 33.05%;

// &:hover {
//     cursor: pointer;
//     -webkit-filter: brightness(85%);
//     transition: -webkit-filter 0.3s;
// }
// `;
