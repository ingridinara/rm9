import React  from 'react'
import '../style/searchbar.css'

export default class Searchbar extends React.Component {
    state = {
        term: ' '
    };

    handleChange = (event) => {
        this.setState({
            term: event.target.value
        });
    };

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.handleFormSubmit(this.state.term);
    }

    render() {
        return (
            <div className="searchbar" >
                <form  className="searchbar__form" onSubmit={this.handleSubmit} >
                        <div className="searchbar__formlabelbox">
                            <label className="searchbar__label" htmlFor="video-search">Video Search</label>
                        </div>
                        <div>
                            <input className="searchbar__input" onChange={this.handleChange} 
                            name='video-search'type="text" value={this.state.term}
                            />
                        </div>
                </form>
            </div>
        )
    }
}