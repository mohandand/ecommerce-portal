import { Routes, Route } from 'react-router-dom';
import './index.scss'
import Home from './routes/home/home.component';
import Navigation from './routes/navigation/navigation.component'
import SignIn from './routes/sigin-in/sigin-in.component';
const App = () => {

  const Shop = () => {
    return <div>I am Shop</div>
  }
  return (
    <Routes>
      <Route path='/' element={<Navigation/>}>
      <Route  index element={<Home />} />
      <Route  path="/shop" element={<Shop />} />
      <Route  path="/sign-in" element={<SignIn />} />
      </Route>
    </Routes>
  );
};

export default App;