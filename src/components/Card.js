import React, { Component } from 'react';

export default class Card extends Component{
    constructor(props){
        super(props);

        this.state = {
            name: this.props.card.name,
            color: this.props.card.color,
            type: this.props.card.type,
            population: this.props.card.population,
            description: this.props.card.description
        }
    }


    handleClick(e){
        console.log(`Clicked ${this.state.name} card. Color is ${this.state.color}`)
    }

    handleDescriptionClick(e){
        alert(`Description: ${this.state.description}`);
    }

    render() {
        const style = {
            backgroundColor: this.state.color,
            height: '154px',
            fontSize: 'small',
            lineHeight: '22px',
            listStyleType: 'none',
            padding: '0.2em',
            margin: '0'    
        }
        if(style.backgroundColor === 'yellow'){
            style.backgroundColor = '#c6b900'
        }
        if(!this.state.color){
            style.backgroundColor = 'green'
        }

        var pop = undefined;
        if(this.state.population){
            pop = this.state.population.toLocaleString();
        }
            
        return(
            
            <div>
                <ul style={style} onClick={this.handleClick.bind(this)}>
                    <li><h3>{this.state.name}</h3></li>
                    <li>Card Type: {this.state.type}</li>
                    {pop && <li>Population: {pop}</li>}
                    {this.state.description && <li><a style={{color: 'white'}} href='#' onClick={this.handleDescriptionClick.bind(this)}>Description</a></li>}
                </ul>
            </div>
        )
    }
}