import { Component } from 'react';
import Navigation from './Components/Navigation/Navigation';
import SignIn from './Components/SignIn/SignIn';
import Register from './Components/Register/Register';
import Logo from './Components/Logo/Logo';
import ImgLinkForm from './Components/ImgLinkForm/ImgLinkForm';
import FaceRecognition from './Components/FaceRecognition/FaceRecognition';
import Rank from './Components/Rank/Rank';
import Particles from './Components/Particles/Particles';
import './App.css';

const initialState = {
  input: '',
  imageUrl: '',
  boxes: [],
  route: 'signin',
  isSignedIn: false,
  error: null,
  user: {
    id: '',
    name: '',
    email: '',
    facesDetected: 0,
    imagesProcessed: 0,
    joined: ''
  }
};

class App extends Component {
  constructor() {
    super();
    this.state = initialState;
  }

  loadUser = (data) => {
    this.setState({
      user: {
        id: data._id,
        name: data.name,
        email: data.email,
        facesDetected: data.facesDetected || 0,
        imagesProcessed: data.imagesProcessed || 0,
        joined: data.joined
      }
    });
  };

  calcFaceLocations = (data) => {
    try {
      if (!data?.outputs?.[0]?.data?.regions) {
        console.log('No faces detected in the image');
        return [];
      }
      
      const image = document.getElementById('inputimage');
      const width = Number(image.width);
      const height = Number(image.height);
      
      return data.outputs[0].data.regions.map(face => {
        const clarifaiFace = face.region_info.bounding_box;
        return {
          leftCol: clarifaiFace.left_col * width,
          topRow: clarifaiFace.top_row * height,
          rightCol: width - (clarifaiFace.right_col * width),
          bottomRow: height - (clarifaiFace.bottom_row * height)
        };
      });
    } catch (error) {
      console.error('Error calculating face locations:', error);
      return [];
    }
  };

  dispFaceBoxes = (boxes) => {
    this.setState({ boxes: boxes });
  };

  onInputChange = (e) => {
    this.setState({ input: e.target.value });
  };

  onPictureSubmit = () => {
    this.setState({ 
      imageUrl: this.state.input,
      error: null,
      boxes: []
    });

    fetch('https://smart-brain-api-cioh.onrender.com/imageurl', {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        input: this.state.input
      })
    })
    .then(response => {
      if (!response.ok) {
        return response.json().then(err => {
          throw new Error(err.message || 'Error processing image');
        });
      }
      return response.json();
    })
    .then(response => {
      console.log('API Response:', response);
      
      if (response && response.outputs) {
        const boxes = this.calcFaceLocations(response);
        this.dispFaceBoxes(boxes);
        
        const facesCount = boxes.length;
        
        if (facesCount > 0) {
          fetch('https://smart-brain-api-cioh.onrender.com/image', {
            method: 'put',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              id: this.state.user.id,
              facesCount: facesCount
            })
          })
          .then(response => {
            if (!response.ok) {
              throw new Error('Network response was not ok');
            }
            return response.json();
          })
          .then(stats => {
            this.setState(prevState => ({
              user: {
                ...prevState.user,
                facesDetected: stats.facesDetected,
                imagesProcessed: stats.imagesProcessed
              }
            }));
          })
          .catch(err => {
            console.error('Error updating stats:', err);
            this.setState({ 
              error: 'Error updating statistics. Please try again.' 
            });
          });
        }
      } else {
        console.error('Invalid API response structure:', response);
        this.setState({ 
          error: 'Invalid response from server. Please try again.' 
        });
      }
    })
    .catch(err => {
      console.error('Error in fetching API:', err);
      this.setState({ 
        boxes: [],
        error: err.message || 'Error processing image. Please try again.'
      });
    });
  };

  onRouteChange = (route) => {
    if (route === 'signout') {
      this.setState(initialState);
    } else if (route === 'home') {
      this.setState({ isSignedIn: true });
    }
    this.setState({ route: route });
  };

  render() {
    const { isSignedIn, imageUrl, route, boxes, error } = this.state;
    return (
      <div className="App">
        <div className="particles">
          <Particles />
        </div>
        <Navigation isSignedIn={isSignedIn} onRouteChange={this.onRouteChange} />
        {route === 'home'
          ? <div>
              <Logo />
              <Rank 
                name={this.state.user.name} 
                stats={{
                  facesDetected: this.state.user.facesDetected,
                  imagesProcessed: this.state.user.imagesProcessed
                }} 
              />
              <ImgLinkForm onInputChange={this.onInputChange} onPictureSubmit={this.onPictureSubmit} />
              {error && (
                <div className="center">
                  <p className="f3 dark-red">{error}</p>
                </div>
              )}
              <FaceRecognition boxes={boxes} imageUrl={imageUrl} />
            </div>
          : (route === 'signin'
            ? <SignIn loadUser={this.loadUser} onRouteChange={this.onRouteChange} />
            : <Register loadUser={this.loadUser} onRouteChange={this.onRouteChange} />
          )
        }
      </div>
    );
  }
}

export default App;
