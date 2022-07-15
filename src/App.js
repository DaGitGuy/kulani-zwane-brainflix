import './App.scss';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import HomePage from './pages/HomePage/HomePage';
import UploadPage from './pages/UploadPage/UploadPage'; 

const App = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path='/' exact component={HomePage} />
        <Route path='/video/:videoId' component={HomePage} />
        <Route path='/upload' exact component={UploadPage}/>
      </Switch>
    </Router>
  );
}

export default App;
