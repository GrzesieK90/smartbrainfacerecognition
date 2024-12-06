# Smart Brain Face Recognition

A modern web application that detects faces in images using advanced AI technology. This project demonstrates the implementation of a full-stack web application with user authentication, real-time face detection, and user statistics tracking.

## 🌐 Live Demo

Visit the live application: [Smart Brain Face Recognition](https://grzesiek90.github.io/smartbrainfacerecognition/)

## 🚀 Features

- Multiple face detection in a single image
- User authentication (sign in/register)
- User statistics tracking
  - Total faces detected
  - Total images processed
- Responsive design with particle effects
- Loading spinner for better UX
- Error handling and validation
- Secure password storage
- Rate limit detection

## 🛠 Technology Stack

### Frontend
- React.js (v18.2.0)
- React Particles for background effects
- React Parallax Tilt for card effects
- Tachyons for styling
- Custom CSS for animations
- Modern ES6+ JavaScript

### Backend
- Node.js
- Express.js
- MongoDB Atlas (Database)
- JSON Web Tokens for authentication

### APIs & Services
- Clarifai API for face detection
- Render.com for hosting

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/smartbrainfacerecognition.git
```

2. Install dependencies:
```bash
cd smartbrainfacerecognition
npm install
```

3. Create a `.env` file in the root directory and add your environment variables:
```env
REACT_APP_API_URL=your_backend_url
REACT_APP_CLARIFAI_KEY=your_clarifai_api_key
```

4. Start the development server:
```bash
npm start
```

## 🔧 Configuration

The application uses the following environment variables:
- `REACT_APP_API_URL`: Backend API URL
- `REACT_APP_CLARIFAI_KEY`: Clarifai API key for face detection

## 🌟 Usage

1. Register or sign in to your account
2. Paste an image URL in the input field
3. Click "Detect" to process the image
4. View the detected faces highlighted with bounding boxes
5. Track your usage statistics in the profile section

## 🔐 Security Features

- Encrypted password storage
- Protected API endpoints
- Rate limiting
- Error handling for API failures
- Secure session management

## 📱 Responsive Design

The application is fully responsive and works on:
- Desktop browsers
- Tablets
- Mobile devices

## 🔄 Future Improvements

- Advanced user analytics
- Face recognition history
- Performance optimization
- Enhanced error handling
- API key rotation mechanism
- Multiple face detection models

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 👏 Acknowledgments

- Clarifai for their excellent face detection API
- The React community for amazing tools and libraries
- Render.com for hosting services