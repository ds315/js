
import styled, { createGlobalStyle, css } from 'styled-components';
import { NavLink } from 'react-router-dom';

import 'highcharts/css/highcharts.css';

export const darkTheme = {back: '#444', text: '#eee', moon: 'none', sun: 'block'}
export const lightTheme = {back: 'white', text: 'black', moon: 'block', sun: 'none'}

export const Global = createGlobalStyle
`
	* { margin: 0;  color: ${props => props.theme.text} }
	::-webkit-scrollbar { width: 0 }

	body { text-align: center;  background: fixed url('http://asuprog.ru/img/bg.jpg') }

	.sun {
		width: 26px;  height: 26px;  fill: none;  stroke-width: 2;  cursor: pointer;
		stroke: ${props => props.theme.text};  display: ${props => props.theme.sun}
	}
	.moon {
		width: 24px;  height: 24px;  fill: none;  stroke-width: 1.5;  cursor: pointer;
		stroke: ${props => props.theme.text};  display: ${props => props.theme.moon}
	}

	${props => props.dark && `.highcharts
	{
		&-background { fill: ${props.theme.back} }
		&-title { fill: ${props.theme.text} }
		&-subtitle { fill: ${props.theme.text} }
		&-grid-line { stroke: #555 }
		&-axis-line { stroke: #aaa }
		&-axis-title { fill: ${props.theme.text} }
		&-axis-labels { fill: ${props.theme.text} }
	}`}
`

export const Main = styled.div
`
	display: inline-block;  width: 920px;  background: ${props => props.theme.back}
`

export const Head = styled.h1
`
	padding: 15px 0;  color: white;

	${props => props.top ?
		'background: #0c6;  font: 32px arial;  margin: 50px 0 20px' :
		'background: blue;  font: 20px arial;  margin: 20px 0;  text-align: left;  text-indent: 5%'
	}
`

export const Text = styled.p
`
	display: inline-block;  width: 90%;  font: 16px arial;

	${props => props.bold ?
		'padding: 15px 0;  text-align: left;  font-weight: bold' :
		'padding: 10px 0;  text-align: justify;  text-indent: 30px'
	}
`

export const Bold = styled.b `font-weight: bold`

export const Divider = styled.hr
`
	display: inline-block;  width: 90%;  margin: 10px 0;
	border: 1px solid ${props => props.theme.back};  border-bottom: 1px dashed #aaa
`

export const StyledView = styled.div
`
	position: fixed;  left: 0;  top: 0;  width: 100%;  height: 100%;  background: black;  z-index: 3;

	${props => props.show ?
		'visibility: visible;  opacity: 1;  transition: opacity 0.5s linear' :
		'visibility: hidden;  opacity: 0;  transition: opacity 0.5s linear, visibility 0s linear 0.5s'
	}
`

export const StyledBar = styled.div
`
	width: 100%;  height: 50px;  position: fixed;  z-index: 2;  background: hsla(0, 0%, 70%, 0.6);
	display: flex;  justify-content: space-between;  align-items: center;  backdrop-filter: blur(3px)
`

const buttonMixin = css
`
	margin: 5px;  padding: 7px 15px;  transition: background 0.3s ease-in-out;
	font: 20px arial;  border-radius: 5px;

	&:hover { background: #0c9;  color: white }
`

export const Link = styled(NavLink)
`
	${buttonMixin}
	color: inherit;  text-decoration: none;

	&.active {
		background: #eee;  color: black;
		&:hover { background: #0c9;  color: white }
	}
`
