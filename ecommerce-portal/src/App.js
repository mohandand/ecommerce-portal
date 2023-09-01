import { Routes, Route } from 'react-router-dom';
import './index.scss'
import Home from './routes/home/home.component';
import Navigation from './routes/navigation/navigation.component'
import Authenication from './routes/authenitcation/authenication.component';
const App = () => {

  const Shop = () => {
    return <div>I am Shop</div>
  }
  return (
    <Routes>
      <Route path='/' element={<Navigation/>}>
      <Route  index element={<Home />} />
      <Route  path="/shop" element={<Shop />} />
      <Route  path="/auth" element={<Authenication />} />
      </Route>
    </Routes>
  );
};

export default App;