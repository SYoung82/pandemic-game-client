import React, { Component } from 'react';
import { connect } from 'react-redux';

class Card extends Component{
    handleClick(e){
        console.log(`Clicked ${this.props.card.name} card. Color is ${this.props.card.color}`)
    }

    handleDescriptionClick(e){
        alert(`Description: ${this.props.card.description}`);
    }

    render() {
        const style = {
            backgroundColor: this.props.card.color,
            height: '154px',
            fontSize: 'small',
            lineHeight: '15px',
            listStyleType: 'none',
            padding: '0.2em',
            margin: '0',
            borderRadius: '15px',
            wordWrap: 'break-word',
            borderStyle: 'solid',
            borderColor: 'white'    
        }
        if(style.backgroundColor === 'yellow'){
            style.backgroundColor = '#c6b900'
        }
        if(!this.props.card.color){
            style.backgroundColor = 'green'
        }

        var pop = undefined;
        if(this.props.card.population){
            pop = this.props.card.population.toLocaleString();
        }
            
        return(
            
            <div>
                <ul style={style} onClick={this.handleClick.bind(this)}>
                    <li><h3>{this.props.card.name}</h3></li>
                    {pop && <li>Pop: {pop}</li>}
                    {this.props.card.description && <li><a style={{color: 'white'}} href='#' onClick={this.handleDescriptionClick.bind(this)}>Description</a></li>}
                </ul>
            </div>
        )
    }
}


export default connect()(Card)