// Modules
import React from "react";
import styled from 'styled-components';

const ThumbnailWrapper = styled('figure')`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0;
    background-color: #f2f2f2;
    width: 200px;
    height: 200px;
    border-radius: 100%;
    margin: 0 auto;
    overflow: hidden;
`

const ThumbnailImage = styled('img')`
    display: block;
    max-width: 100%;
`

class Thumbnail extends React.Component {
    state = {
        crop: {
            aspect: 1/1
        }
    };

    handleChange(crop) {
        this.setState({
            crop
        })
    }

    render() {
        const { state, props: { image } } = this;

        return (
            <ThumbnailWrapper>
                <ThumbnailImage
                    src={image}
                    crop={state.crop}
                    onChange={this.handleChange}
                    disabled={true}
                />
            </ThumbnailWrapper>
        );
    }
}

export default Thumbnail;