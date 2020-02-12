import React, { Component } from 'react';
import styled from 'styled-components';
import { MEDIA_QUERIES, COLORS, FONT_SIZES } from './css/styles'

const Wraper = styled.div`
    @media (max-width: ${MEDIA_QUERIES['mobile']}px) {
       width: 98%;
       margin: 10px 1% 0% 1%;
    }
    box-sizing: border-box;
    border: 1px solid ${COLORS.borderColor};
    position: relative;
    z-index: 10;
    background: ${COLORS.white};
    float: right;
    width: 32%;
    margin: 0px 0% 0px 1px;
    padding-bottom: 10px;
    padding-top: 10px;
    font-size: ${FONT_SIZES.small};
    height: 430px;
    vertical-align: middle;
  `;


class GoogleAds extends Component {

    componentDidMount() {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
    }

    render() {
        return (
            <Wraper>
                <ins class="adsbygoogle"
                    style={{ display: "block" }}
                    data-ad-client="ca-pub-4935501060816208"
                    data-ad-slot="1303178852"
                    data-ad-format="auto"
                    data-full-width-responsive="true"></ins>
            </Wraper>
        );
    }
}

export default GoogleAds;