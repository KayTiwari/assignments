import React, {Component} from 'react';
import TitleScreen from './ReactComponents/TitleScreen'
import InputManager from './InputManager';
import Ship from './GameComponents/Ship';
import Invader from './GameComponents/Invader';
import { checkCollisionsFor } from './Helper';
import GameOverScreen from './ReactComponents/GameOverScreen';

const width = 800;
const height = window.innerHeight;
const ratio = window.devicePixelRatio || 1
const GameState = {
    StartScreen: 0,
    Playing: 1,
    GameOver: 2
}

class Canvas extends Component {
    constructor(){
        super();

        this.state = {
            input: new InputManager(),
            screen: {
                width: width,
                height: height,
                ratio: window.devicePixelRatio
            },
            gameState: GameState.StartScreen,
            previousState: GameState.StartScreen,
            context: null,
            score: 0
        }
        this.ship = null;
        this.invaders = [];
        this.lastStateChange = 0;
        this.previousDelta = 0;
        this.fpsLimit = 30;
        this.showControls = false;
    }

    componentDidMount(){
        this.state.input.bindKeys();
        window.addEventListener('resize', this.handleResize.bind(this, false))
        const context = this.refs.canvas.getContext('2d');
        this.setState({
            context: context
        });
        requestAnimationFrame(() => {this.update()});
    }

    componentWillMount(){
        this.state.input.unbindKeys();
    }

    handleResize(value, e){
        this.setState({
          screen : {
            width: width,
            height: height,
            ratio: window.devicePixelRatio || 1,
          }
        });
      }  

    update(currentDelta) {
        const keys = this.state.input.pressedKeys;
        if (this.state.gameState === GameState.StartScreen && keys.enter){
            this.startGame();
        }
        if (this.state.gameState === GameState.Playing) {
            this.clearBackground();
            if (this.ship !== undefined && this.ship !== null) {
                this.ship.update(keys);
                this.ship.render(this.state);
                this.renderInvaders(this.state);
            }
            checkCollisionsFor(this.ship.bullets, this.invaders);
            checkCollisionsFor([this.ship], this.invaders);
            for (var i = 0; i < this.invaders.length; i++){
                checkCollisionsFor(this.invaders[i].bullets, [this.ship]);
            }
        }
        if (this.state.gameState === GameState.GameOver && keys.enter) {
            this.setState({
                gameState: GameState.StartScreen
            })
        }
        requestAnimationFrame(() => {this.update()});
    }
    clearBackground = () => {
        const context = this.state.context;
        context.save();
        context.scale(this.state.screen.ratio, this.state.screen.ratio);
        context.fillRect(0, 0, this.state.screen.width, this.state.screen.height);
        context.globalAlpha = 1;
    }
    die = () => {
        this.setState({
            gameState: GameState.GameOver
        })
        this.ship = null;
        this.invaders = [];
        this.lastStateChange = Date.now();
    }
    
    startGame = () => {
        let ship = new Ship({
            radius: 15,
            speed: 2.5,
            onDie: this.die.bind(this),
            position: {
                x: this.state.screen.width/2,
                y: this.state.screen.height - 50
            }})
        this.ship = ship; 
        this.createInvaders(9);
        this.setState({
            gameState: GameState.Playing,
            score: 0
        });
    }
    increaseScore() {
        this.setState(prevState => ({
            score: prevState.score + 10
        }))
    }

    createInvaders(count) {
        const newPosition = {x: 100, y: 20};
        let swapStartX = true;

        for (var i = 0; i < count; i++) {
            const invader = new Invader ({
                position: {x: newPosition.x, y: newPosition.y},
                speed: 1,
                onDie: this.increaseScore.bind(this, false),
                radius: 50
            });
            newPosition.x += invader.radius + 20;

            if (newPosition.x + invader.radius + 50 >= this.state.screen.width) {
                newPosition.x = swapStartX ? 110 : 100;
                swapStartX = !swapStartX;
                newPosition.y += invader.radius + 20;
            }
            this.invaders.push(invader);
        }
    }
    renderInvaders(state) {
        let index = 0;
        let reverse = false;

        for (let invader of this.invaders) {
            if (invader.delete) {
                this.invaders.splice(index, 1);
            }
            else if (invader.position.x + invader.radius >= this.state.screen.width || invader.position.x - invader.radius <= 0) {
                reverse = true;
            } else if (invader.position.y >= this.state.screen.height) {
                this.die();
            } 
            else {
                this.invaders[index].update();
                this.invaders[index].render(state)
            }
            index++;
        }
        if (reverse) {
            this.reverseInvaders();
        }
    }
    reverseInvaders() {
        let index = 0;
        for (let invader of this.invaders) {
            this.invaders[index].reverse();
            this.invaders[index].position.y += 200;
            index++;
        }
    }

    render() {
        return (
            <div>
                {this.state.gameState === GameState.StartScreen && <TitleScreen />}
                {this.state.gameState === GameState.GameOver && <GameOverScreen score={this.state.score}/>}
                <canvas ref="canvas" id='canvas' width={this.state.screen.width * this.state.screen.ratio}
            height={this.state.screen.height * this.state.screen.ratio}/>
            </div>
        );
    }
}

export default Canvas