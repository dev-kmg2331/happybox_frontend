import Slider from "react-slick";
import React from "react";
import styled from "styled-components";
import Terms from "./Terms";
import { flexCenter } from "../../../styles/common";

function NextArrow({ onClick }) {
    return (
        <div className="slick-arrow slick-next">
            <button onClick={onClick}>
                <svg height="48" viewBox="0 0 48 48" width="48">
                    <path
                        d="M14.83 16.42l9.17 9.17 9.17-9.17 2.83 2.83-12 12-12-12z"
                        className="stroke"
                        fill="#ccc"
                    />
                    <path d="M0-.75h48v48h-48z" fill="none" />
                </svg>
            </button>
        </div>
    );
}

function PrevArrow({ onClick }) {
    return (
        <div className="slick-arrow slick-prev">
            <button onClick={onClick}>
                <svg height="48" viewBox="0 0 48 48" width="48">
                    <path
                        d="M14.83 16.42l9.17 9.17 9.17-9.17 2.83 2.83-12 12-12-12z"
                        className="stroke"
                        fill="#ccc"
                    />
                    <path d="M0-.75h48v48h-48z" fill="none" />
                </svg>
            </button>
        </div>
    );
}

const JoinSlider = () => {
    const settings = {
        dots: false,
        infinite: false,
        speed: 800,
        slidesToShow: 1,
        swipeToSlide: false,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
    };

    return (
        <S.Wrapper>
            <Slider {...settings}>
                <Terms render={<NextArrow />} />
                <Terms />
                <Terms />
            </Slider>
        </S.Wrapper>
    );
};

export default JoinSlider;

export const defaultSliderStyle = {
    maxWidth: "45vw",
    minWidth: "250px",
    borderRadius: "12px",
    backgroundColor: "white",
    margin: "auto",
    padding: "55px",
    boxShadow: "rgba(46, 46, 46, 0.3) 0px 0px 15px 0px",
};

const Wrapper = styled.section`
    .slick-list {
        width: 100%;
        overflow: hidden;
    }

    .slick-slide {
        opacity: 0;
        transition: all 0.5s ease;
    }

    .slick-current {
        opacity: 1;
        transition: all 1s ease;
    }

    .slick-track {
        display: flex;
        align-items: center;
        height: 100vh;
    }

    .slick-arrow {
        position: absolute;
        top: 50%;
        z-index: 5;
        background-color: transparent;

        :hover {
            button {
                background-color: #cccccc;

                & .stroke {
                    fill: #2e2e2e;
                }
            }
        }

        &.slick-prev {
            left: 10%;

            button svg {
                margin-right: 4px;
                transform: rotate(90deg);
            }
        }

        &.slick-next {
            right: 10%;

            button svg {
                margin-left: 4px;
                transform: rotate(-90deg);
            }
        }

        button {
            width: 50px;
            height: 50px;
            ${flexCenter}
            border-radius: 50%;
            background-color: transparent;
            transition: background-color 0.3s ease;

            & .stroke {
                transition: fill 0.3s ease;
            }
        }
    }
`;

const S = {
    Wrapper,
};
