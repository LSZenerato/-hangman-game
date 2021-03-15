import React, { useState } from 'react';
import { Container, ForcaItems, Form } from './styles';
import Title from '../title';

const errorNumber = 2;

function Forca() {
    const [typedWord, settypedWord] = useState('');
    const [typedLetter, settypedLetter] = useState('');
    const [score, setScore] = useState(0);
    const [array, setArray] = useState([]);
    const [gameStarted, setGameStarted] = useState(false);

    const handleChangeWord = (event) => settypedWord(event.target.value);
    const handleChangeLetter = (event) => settypedLetter(event.target.value);

    const startForca = () => {
        let tempArrObj = [];
        var array = typedWord.toUpperCase().split("");

        array.map(item => {
            if (item === " ") {
                tempArrObj.push({
                    letra: 'space',
                    status: true
                });
            } else {
                tempArrObj.push({
                    letra: item,
                    status: false
                });
            }
        })

        setArray(tempArrObj);
        setGameStarted(true);
        settypedWord('');
    }

    const sendForca = () => {
        let tempArray = array;
        let correctChar = false;
        let tempScore = score;

        array.map((item, index) => {
            if (item.letra === typedLetter.toUpperCase()) {
                tempArray[index].status = true;
                correctChar = true;
            }
        });

        if (!correctChar) {
            tempScore += 1;
            alert(`Letra incorreta, você já errou ${tempScore} letras de um máximo de ${errorNumber}.`);
        }

        setArray(tempArray);
        setScore(tempScore);
        settypedLetter('');

        if (tempScore === errorNumber) loose();
        else victory();
    }

    const loose = () => {
        let word = '';
        word = word + array.map(item => item.letra !== "," && item.letra);

        setGameStarted(false);
        setScore(0);
        setArray([]);
        alert(`Você perdeu! A palavra correta era: ${word.replaceAll(',', "")}`);
    }

    const victory = () => {
        let word = '';
        word = word + array.map(item => item.letra !== "," && item.letra);
        let finished = array.filter(item => item.status === false).length;
        
        if(finished === 0) {
            setGameStarted(false);
            alert(`Você venceu! A palavra é: ${word.replaceAll(',', "")}`);
        }
    }

    return <Container>
        <Title />
        <ForcaItems>
            {
                array.map((item, index) => {
                    return <div key={index} className="item col-md-4" id={item.status ? "ok" : "nok"}>
                        <div className={!item.status ? "hidden" : undefined}>{item.letra}</div>
                    </div>
                })
            }
        </ForcaItems>
        <Form>
            <div className="form-div">
                <h2>Digite a letra palpite</h2>
                <input disabled={!gameStarted} onChange={handleChangeLetter} type="text" value={typedLetter} maxLength={1} minLength={1} />
                <button disabled={!gameStarted} className={gameStarted && "btn-end"} onClick={() => sendForca()}>Confirmar</button>
            </div>
            <div className="form-div">
                <h2>Digite a palavra da forca</h2>
                <input onChange={handleChangeWord} type="text" value={typedWord} />
                <button className="btn-start" onClick={() => startForca()}>Começar!</button>
            </div>
        </Form>
    </Container>
}

export default Forca;