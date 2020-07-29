import React from 'react';
import { Container } from './styles';
import Forca from '../../images/forca.png';

function Title() {
    return <Container>
        <img src={Forca} alt="forca" />
        <h1>Jogo da forca</h1>
        <h4>Feito com React.js</h4>
        <h5>Autor: Lucas Sacomani Zenerato</h5>
    </Container>;
}

export default Title;