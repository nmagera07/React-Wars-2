import React from 'react'
import './StarWars.css'
import '../App.css'

class Characters extends React.Component {
    render() {
        return (
            <div className="chars">
                
                <p>Name: {this.props.char.name}</p>
                <p>Birth Year: {this.props.char.birth_year}</p>
                <p>Gender: {this.props.char.gender}</p>
                <p>Eye Color: {this.props.char.eye_color}</p>
                
            </div>
        )
    }
}

export default Characters