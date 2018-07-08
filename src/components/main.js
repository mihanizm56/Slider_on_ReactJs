import React, { Component } from 'react';

import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import styled from 'styled-components';

import Slider from './slider';

const Repair = styled.div`
  font-size: 40px;
  color: rgb(255, 255, 255);
  font-weight: 700;
  line-height:50px
  span{
  	font-size: 24px;
  	display:block;
  	line-height:30px
  }
`

const LightText = styled.div`
  font-size: 18px;
  font-weight:300;
  color: rgb(255, 255, 255);
  line-height: 28px;
  margin-top:54px;

`

const CallBtn = styled.button`
	border-radius: 22px;
  	background-color: rgb(63, 199, 219);
  	width: 247px;
  	height: 67px;
  	color:#ffffff;
 	font-size: 18px;
	font-weight:400;
	border:none;
	margin-top:32px;
`

class Main extends React.Component{
	render(){
		return(
			<Row>
				<Col lg={5}>
					<Repair>Качественный ремонт
							<span>iphone за 35 минут и гарантия 1 год</span>
					</Repair>
					<LightText>
						Оставьте заявку на бесплатную диагностику без очереди,
						и получите защитное стекло, стоимостью 1000 рублей,
						с установкой в подарок!
					</LightText>
					<CallBtn>Отправить заявку!</CallBtn>
				</Col>
				<Col lg={6} lgOffset={1}>
					<Slider />
				</Col>
			</Row>					
		)
	}
}

export default Main