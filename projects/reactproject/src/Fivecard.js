import React from 'react'
import {withProvider} from './TProvider';
import Magician from './Tarot/Magician.jpg'
import Chariot from './Tarot/Chariot.jpg'
import Death from './Tarot/Death.jpg'
import Devil from './Tarot/Devil.jpg'
import Emperor from './Tarot/Emperor.jpg'
import Empress from './Tarot/Empress.jpg'
import Fool from './Tarot/Fool.jpg'
import Fortune from './Tarot/Fortune.jpg'
import Hangedman from './Tarot/Hangedman.jpg'
import Hermit from './Tarot/Hermit.jpg'
import Hierophant from './Tarot/Hierophant.jpg'
import Highpriestess from './Tarot/Highpriestess.jpg'
import Judgement from './Tarot/Judgement.jpg'
import Justice from './Tarot/Justice.jpg'
import Lovers from './Tarot/Lovers.jpg'
import Moon from './Tarot/Moon.jpg'
import Star from './Tarot/Star.jpg'
import Strength from './Tarot/Strength.jpg'
import Sun from './Tarot/Sun.jpg'
import Temperance from './Tarot/Temperance.jpg'
import Theworld from './Tarot/Theworld.jpg'
import Tower from './Tarot/Tower.jpg'



const one = Math.floor(Math.random()*21 + 0);
const two = Math.floor(Math.random()*21 + 0);
const three = Math.floor(Math.random()*21 + 0);
const four = Math.floor(Math.random()*21 + 0);
const five = Math.floor(Math.random()*21 + 0);
const cardImg = (num) => {
    switch (num) {
        case 0:
        return Magician;
        case 1:
        return Highpriestess;
        case 2:
        return Empress;
        case 3:
        return Emperor;
        case 4:
        return Hierophant;
        case 5:
        return Lovers;
        case 6:
        return Chariot;
        case 7:
        return Strength
        case 8:
        return Hermit;
        case 9:
        return Fortune;
        case 10:
        return Justice;
        case 11:
        return Hangedman;
        case 12:
        return Death;
        case 13:
        return Temperance;
        case 14:
        return Devil;
        case 15:
        return Tower;
        case 16:
        return Star;
        case 17:
        return Moon;
        case 18:
        return Sun;
        case 19:
        return Judgement;
        case 20:
        return Fool;
        case 21:
        return Theworld;
    }
}
const styles = {
    color: 'black',
    textAlign: 'center'
}
const FiveCard = (props) => {

    let cardArray;
    let cardArray2;
    let cardArray3;
    let cardArray4;
    let cardArray5;
    if (props.list.cards) {
        for (var i=0;i<props.list.cards.length;i++) {
        console.log(props.list.cards[0].value_int)
         if (props.list.cards[i].value_int = props.list.cards[one]) {
        //  cardArray = props.list.cards[i].map((card) =>{return (<ThreeCardMap value={card.value_int} name={card.name} meaningup={card.meaning_up} meaningdown={card.meaning_rev}/>)})
        cardArray = [
            <div>
            <h1 style={styles}>Far Past</h1>
            <img className='cardimage' src={cardImg(one)}></img>
            <h2 style={styles}>{props.list.cards[one].name}</h2>
            <p style={styles}>Upright: {props.list.cards[one].meaning_up}</p>
            <p style={styles}>Reversed: {props.list.cards[one].meaning_rev}</p>
            <p style={styles}>Number: {props.list.cards[one].value}</p>
            </div>
        ]
         }
        }
        for (i=0;i<props.list.cards.length;i++) {
        console.log(props.list.cards[0].value_int)
         if (props.list.cards[i].value_int = props.list.cards[two]) {
        //  cardArray = props.list.cards[i].map((card) =>{return (<ThreeCardMap value={card.value_int} name={card.name} meaningup={card.meaning_up} meaningdown={card.meaning_rev}/>)})
        cardArray2 = [
            <div>
            <h1 style={styles}>Past</h1>
            <img className='cardimage' src={cardImg(two)}></img>
            <h2 style={styles}>{props.list.cards[two].name}</h2>
            <p style={styles}>Upright: {props.list.cards[two].meaning_up}</p>
            <p style={styles}>Reversed: {props.list.cards[two].meaning_rev}</p>
            <p style={styles}>Number: {props.list.cards[two].value}</p>
            </div>
        ]
         }
        }
        for (i=0;i<props.list.cards.length;i++) {
        console.log(props.list.cards[0].value_int)
         if (props.list.cards[i].value_int = props.list.cards[three]) {
        cardArray3 = [
            <div>
            <h1 style={styles}>Present</h1>
            <img className='cardimage' src={cardImg(three)}></img>
            <h2 style={styles}>{props.list.cards[three].name}</h2>
            <p style={styles}>Upright: {props.list.cards[three].meaning_up}</p>
            <p style={styles}>Reversed: {props.list.cards[three].meaning_rev}</p>
            <p style={styles}>Number: {props.list.cards[three].value}</p>
            </div>
        ]
         }
        }
        for (i=0;i<props.list.cards.length;i++) {
        console.log(props.list.cards[0].value_int)
         if (props.list.cards[i].value_int = props.list.cards[four]) {
        //  cardArray = props.list.cards[i].map((card) =>{return (<ThreeCardMap value={card.value_int} name={card.name} meaningup={card.meaning_up} meaningdown={card.meaning_rev}/>)})
        cardArray4 = [
            <div>
            <h1 style={styles}>Future</h1>
            <img className='cardimage' src={cardImg(four)}></img>
            <h2 style={styles}>{props.list.cards[four].name}</h2>
            <p style={styles}>Upright: {props.list.cards[four].meaning_up}</p>
            <p style={styles}>Reversed: {props.list.cards[four].meaning_rev}</p>
            <p style={styles}>Number: {props.list.cards[four].value}</p>
            </div>
        ]
         }
        }
        for (i=0;i<props.list.cards.length;i++) {
        console.log(props.list.cards[0].value_int)
         if (props.list.cards[i].value_int = props.list.cards[five]) {
        //  cardArray = props.list.cards[i].map((card) =>{return (<ThreeCardMap value={card.value_int} name={card.name} meaningup={card.meaning_up} meaningdown={card.meaning_rev}/>)})
        cardArray5 = [
            <div>
            <h1 style={styles}>Far Future</h1>
            <img className='cardimage' src={cardImg(five)}></img>
            <h2 style={styles}>{props.list.cards[five].name}</h2>
            <p style={styles}>Upright: {props.list.cards[five].meaning_up}</p>
            <p style={styles}>Reversed: {props.list.cards[five].meaning_rev}</p>
            <p style={styles}>Number: {props.list.cards[five].value}</p>
            </div>
        ]
         }
        }
    }
    console.log (cardArray); 
    return (
        <div>
        {props.list ? 
            <div>
                <h1 style={styles}>Five Card Map</h1>
                {cardArray} 
                {cardArray2}
                {cardArray3}
                {cardArray4}
                {cardArray5}
             </div>: 
        <h4>loading</h4>
        }
        </div>

    )


}

export default withProvider(FiveCard)