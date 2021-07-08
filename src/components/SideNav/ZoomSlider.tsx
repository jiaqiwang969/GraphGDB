import styled from "styled-components";
import { Theme } from '../../models/Theme';

interface Props {
    theme: Theme;
}

const sliderThumbStyles = (props: Props) => (`
    width:16px;
    height:16px;
    cursor: pointer;
    background: ${props.theme.slider.background};
    border: 1px solid;
    border-color: ${props.theme.slider.foreground};
    border-radius: 200px;
    
`);

const sliderTrackStyles = (props: Props) => (`
    width:100%;
    height:3px;
    cursor: pointer;
    background: ${props.theme.slider.background};
    border: none;
    border-radius: 200px;
`);

const ZoomSlider = styled.div`
    width: 250px;
    height: 25px;
    background-color: transparent;
    border: none;
    .slider {
        -webkit-appearance: none;
        width: 100%;
        height: 25px;
        background: transparent;

        &::-webkit-slider-thumb {
            -webkit-appearance: none;
            appearance:none
            ${(props) => sliderThumbStyles(props)}
        }

        &::-moz-range-thumb {
            ${(props) => sliderThumbStyles(props)}
        }

        &::-moz-focus-outer {
            border: 0; /* removes dotted border when clicked on in firefox */
        }

        &::-ms-track {
            width: 100%;
            background: transparent; 
            border-color: transparent;
            color: transparent;
        }

        &::-webkit-slider-runnable-track{
            ${(props) => sliderTrackStyles(props)}

        }

        &::-moz-range-track{
            ${(props) => sliderTrackStyles(props)}

        }

        &::-ms-track {
            ${(props) => sliderTrackStyles(props)}
        }
    }
`

export default ZoomSlider