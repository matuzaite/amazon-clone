import './App.css';
import Header from './components/Header';
import Cart from './components/Cart';
import Home from './components/Home';
import { useState, useEffect } from 'react';
import { db, auth } from './firebase';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Login from './components/Login';

function App() {

  const [cartItems, setCartItems] = useState([]);

  const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')));

  const getCartItems = () => {
    db.collection('cart-items').onSnapshot((snapshot) => {
      let tempItems = [];
      tempItems = snapshot.docs.map((doc) => ({
        id: doc.id,
        product: doc.data()
      }))
      setCartItems(tempItems);
    })
  }

  const signOut = () => {
    auth.signOut().then(() => {
      setUser(null);
      localStorage.removeItem('user')
    })
  }

  useEffect(() => {
    getCartItems()
  }, []);

  return (
    <Router>
      {
        !user ? (<Login setUser={setUser} />
        ) : (
      <div className="App">
              <Header
                user={user}
                cartItems={cartItems}
                signOut={signOut}
              />
              
          <Switch>
  
            <Route path='/cart'>
              <Cart cartItems={cartItems} />
            </Route>
  
            <Route path='/'>
              <Home />
            </Route>
  
          </Switch>
      </div>  
        )
      }
  </Router>
  );
}

export default App;
