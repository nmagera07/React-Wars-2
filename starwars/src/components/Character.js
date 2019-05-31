import React from 'react'

class Characters extends React.Component {
    render() {
        return (
            <div>
                <p>{this.props.char.name}</p>
                <p>{this.props.char.films[1]}</p>
            </div>
        )
    }
}

export default Characters