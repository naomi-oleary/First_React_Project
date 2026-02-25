import Nav from './components/Nav';
import Footer from './components/Footer';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './pages/Home';
import Books from './pages/Books';
import { books } from './data'
import BookInfo from './pages/BookInfo';

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/books" render={() => <Books books={books} />} />
          <Route path="/books/1" render={() => <BookInfo books={books} />} />
        </Switch>
        <Footer />
    </div>
    </Router>
  );
}

export default App;
