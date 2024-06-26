import React, { Component } from 'react'

class SearchBar extends Component {
    constructor(props) {
        super(props)

        this.state = {
            searchTerm: ''
        }

        this.inputRef = React.createRef()
    }

    componentDidMount() {
        this.inputRef.current.focus()
    }

    onInputChange(term) {
        this.setState({ searchTerm: term })
        this.props.onSearchTermChange(term)
    }

    render() {
        return (
            <div className='row my-5'>
                <input
                    type="text"
                    placeholder="Search..."
                    className='justify-content-center w-75 mx-auto rounded p-3'
                    value={this.state.searchTerm}
                    onChange={(event) => this.onInputChange(event.target.value)}
                    ref={this.inputRef} />
            </div>
        )
    }
}

export default SearchBar