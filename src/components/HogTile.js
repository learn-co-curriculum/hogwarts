import React from 'react'

export default class HogTile extends React.Component { 

    state = { 
        isClicked: false 
    }

    renderImage = () => {
        let newName = this.props.name;
        newName = newName.replace(/\s/g, "_").toLowerCase()
        return newName;
    }

    handleClick = () => { 
        this.setState({ 
            isClicked: true
        })
    }
    
    render(){
        return(
        <div className='ui eight wide column' onClick={this.handleClick}>
            <p>{this.props.name}</p>
            <img src={require(`../hog-imgs/${this.renderImage()}.jpg`)} />
            {this.state.isClicked ? 
            <div>
                <p>{this.props.specialty}</p>
                <p>{this.props.medal}</p>
                <p>{this.props.weight}</p> 
            </div>
            : null }
        </div>
        )
    }
}