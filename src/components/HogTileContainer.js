import React from 'react'
import HogTile from './HogTile.js'


export default class HogTileContainer extends React.Component { 

    state = { 
        isGreased: false,
        isSorted: false, 
        isWeighted: false
    }

    renderHogs = (hogs) => {
        return (
            hogs.map(hog => {
             return <HogTile 
             name={hog.name}
             specialty={hog.specialty}
             medal={hog['highest medal achieved']}
             weight={hog.weight}/>
            })
        )
    } 

    handleClick = () => { 
        this.setState({ 
            isGreased: !this.state.isGreased
        })
    }

    handleSortClick = () => { 
        this.setState({ 
            isSorted: !this.state.isSorted
        })
    }

    handleWeightClick = () => { 
        this.setState({ 
            isWeighted: !this.state.isWeighted
        })
    } 

    sortChubbies = () => {
        let hogs = this.props.hogs
        
        if(this.state.isGreased){
            hogs = hogs.filter(hog => hog.greased)
        }else if(this.state.isSorted){
            hogs= hogs.sort(function(hog1, hog2){
                return hog1.name.localeCompare(hog2.name)
            })
        }else if(this.state.isWeighted){
            hogs = hogs.sort(function(hog1,hog2){
                return hog1.weight-hog2.weight
            })
        }
        return this.renderHogs(hogs);

    }



    render(){ 
        console.log(this.state)
        return(
    <div>
        <button onClick={this.handleClick}>FILTER THE GREASERS</button> 
        <button onClick={this.handleSortClick}>SORT THESE PIGS</button>
        <button onClick={this.handleWeightClick}>SORT BY CHUBCHUB</button>
        <p/> 
        <div className='ui grid container'>
        
            {this.sortChubbies()}
            {/* {this.state.isGreased ? this.renderHogs((this.props.hogs.filter(hog => hog.greased))) : this.renderHogs(this.props.hogs)} */}
        </div>
    </div>
        )
    }
}