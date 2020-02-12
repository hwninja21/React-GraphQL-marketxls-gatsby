import styled from "styled-components"
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css'
import { Table, Tr, Td } from 'react-super-responsive-table'

export const COLORS = {
  white: '#FFFFFF',
  red: '#F23636',
  darkSilver: "#242729",
  green: '#00B21F',
  borderColor: '#dcdfe6',
  lightSilver: '#F3F4F5',
  blue: '#5390F0',
  darkBlue: '#396CB7',
  black: '#242729',
  gold: '#FBA944',
  semiGold: 'rgba(255,189,10,0.5)',
}


export const MARGIN = {
  default: '120px 145px',
}

export const FONT_SIZES = {
  xsmall: '12px',
  small: '14px',
  medium: '16px',
  large: '18px',
  xlarge: '22px',
  xxlarge: '30px',
  huge: '48px',
}

export const FONT_WEIGHTS = {
  normal: 400,
  bold: 700,
}


export const SHADOW =
  '0px 2px 20px 0px rgba(0,0,0,0.075), 0px 4px 30px 0px rgba(0,0,0,0.025)'

export const EASING = 'cubic-bezier(0.645, 0.045, 0.355, 1)'
export const TRANSITION = 'all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1)'


export const HEADER_HEIGHT = '60px'
export const Similarstock_HEIGHT = '30px'


export const GRADIENT = `linear-gradient(to bottom, #3466AE, #5390F1)`

export const MEDIA_QUERIES = {
  tiny: 450,
  mobile: 768,
  desktop: 1100,
}

//tables

//Financial Statment Styling
export const Wraper = styled.div`
@media (max-width: 768px) {
 // display: block;
  margin: 0%;
}
  display: none;
  margin: 30px 3% 2% 3%;
  box-sizing: border-box;
  border: 1px solid ${COLORS.borderColor};
  background: #FFFFFF;
  position: relative;
  z-index: 10;
  color: #777777; 
  font-size: 1em;
`;

export const Wrapertable = styled(Table)`
@media (max-width: 768px) {
  width: 100%;
  border-top: 2px solid #777777;
}
  width: 100%;
  border-top: 2px solid #777777;
`;

export const Wrapercap = styled.caption`
@media (max-width: 768px) {
  font-size: 1.2em;
}
  caption-side: top;
  text-align: 0 auto;
  font-size: 1.5em;
  color: #333333;
  margin-left: 5px;
`;

export const Wraperrow = styled(Tr)`
@media (max-width: 768px) {
  margin: 0px;
}
  margin: 15px;
  &:nth-child(odd) {
    background: #F3F4F5;
  }
`;

export const Wraperdata = styled(Td)`
@media (max-width: 768px) {
  padding: 0em;
}
  padding: 0.45em;
`;

// Stock Analysis style

export const SWrapertablediv = styled.div`
@media (max-width: ${MEDIA_QUERIES['mobile']}px) {
  display: block;
  font-size: 1em;
  width: 100%;
  margin: 10px 0% 0% 0%;
}
  box-sizing: border-box;
  border: 1px solid ${COLORS.borderColor};
  background: ${COLORS.white};
  width: 32%;
`;

export const SNoteWraper = styled.p`
   padding-top: 15px;
   font-size: 14px;
   margin-left: 5px;
`;

export const SWraper = styled.div`
@media (max-width: ${MEDIA_QUERIES['mobile']}px) {
  display: block;
  margin: 10px 1% 0% 1%;
}
  margin: 30px 3% 0px 3%;
  display: flex;
  position: relative;
  z-index: 10;
  color:  ${COLORS.darkSilver}; 
  font-size: 1em;
  justify-content: space-around;
`;

export const SWrapertable = styled.table`
  width: 100%;
  border-top: 2px solid  ${COLORS.darkSilver};
`;

export const SWrapercap = styled.caption`
  caption-side: top;
  text-align: center;
  font-size: ${FONT_SIZES.xlarge};
  color: ${COLORS.black};
  text-transform: capitalize;

`;

export const SWraperrow = styled.tr`
  margin: 15px;
  width: 100%;
  &:nth-child(odd) {
    background: ${COLORS.lightSilver};
  }
`;

export const SWraperdata = styled.td`
  color: ${props => isNaN(parseFloat(props.data)) === true ? `${COLORS.black}` : (parseFloat(props.data).toString()[0] === '-' ? '#F23636' : '#00B21F')};
  font-weight: bold;
  text-align: center;
  text-transform: capitalize;
  `;

export const SWraperlabel = styled.td`
  padding: 0.45em;
  font-weight: normal;
  text-align: left;
`;
