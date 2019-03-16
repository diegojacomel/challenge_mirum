// Modules
import React from "react";
import styled from 'styled-components';

const ThumbnailWrapper = styled('figure')`
    display: block;
    margin: 0;
    background-color: #f2f2f2;
    margin-bottom: 300px;
`

const CropperWrapper = styled('div')`
    display: block;
    max-width: 100%;
    margin: 20px auto;
    overflow: hidden;
`

class Thumbnail extends React.Component {
    state = {
        loading: false,
        thumb: null,
        thumbCropped: null
    };

    componentWillReceiveProps(nextProps) {
        if (!nextProps.file) return;

        this.setState({ loading: true }, () => {
            let reader = new FileReader();

            reader.onloadend = () => {
                this.setState({
                    loading: false,
                    thumb: reader.result
                });
            };

            reader.readAsDataURL(nextProps.file);
        });
    }

    render() {
        const { file } = this.props;
        const { loading, } = this.state;

        if (!file) { return null; }

        if (loading) { return <p>loading...</p>; }

        return (
            <ThumbnailWrapper>
                <CropperWrapper>
                    Crop here
                </CropperWrapper>
            </ThumbnailWrapper>
        );
    }
}

export default Thumbnail;

// ref='cropper'
// src={thumb}
// alt="Thumbnail"
// center={true}
// aspectRatio={1 / 1}
// cropBoxResizable={false}
// minCropBoxWidth={200}
// minCropBoxHeight={200}
// viewMode={3}
// preview=".img-preview"

// USE react-image-crop