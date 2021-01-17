import React from 'react'
import youtube from './apis/youtube';
import SearchBar from './components/Searchbar';
import VideoList from './components/VideoList';
import VideoDetail from './components/VideoDetail';

class App extends React.Component {
  state = {
      videos: [],
      selectedVideo: null
  }

  handleSubmit = async (termFromSearchBar) => {
      const response = await youtube.get('/search', {
          params: {
              q: termFromSearchBar
          }
      })
      this.setState({
          videos: response.data.items
      })
      console.log("RESPONSE OBJECT: ",response);
  };
  
  handleVideoSelect = (video) => {
      this.setState({selectedVideo: video})
  }

  render() {
      return (
          <div >
              <SearchBar handleFormSubmit={this.handleSubmit}/>
              <div>
                    <div >
                        <VideoDetail video={this.state.selectedVideo}/>
                    </div>
                    <div>
                        <VideoList handleVideoSelect={this.handleVideoSelect} 
                        videos={this.state.videos}/>
                    </div>
              </div>
          </div>
      )
  }
}

export default App;
