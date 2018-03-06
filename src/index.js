import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search-bar';
import VideoList from './components/video-list';
const API_KEY = 'AIzaSyD9Vabzi6sX2acmsWIN7XdKDx_if6LAvOI';


class App extends Component  {
    constructor(props){
        super(props);
        
        this.state = { videos: [] };
        
        YTSearch({key: API_KEY, term: 'Miranda Lambert - Vice'}, videos => {
        this.setState({ videos })
        })
    }
    render(){
    return (
    <div> 
        <SearchBar />
        <VideoList videos={this.state.videos}/>
    </div>
    );
 }
}

ReactDOM.render(<App />, document.querySelector('.container'));