import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Register from './components/Register';
import Login from './components/Login'
import Home from './components/Home';
import './App.css';

function App() {
  const router = createBrowserRouter([
    {
      element:<Register/>,
      path:'/register'
    },
    {
      element:<Login/>,
      path:'/login'
    },
    {
      element:<Home/>,
      path:'/home'
    }

    
  ])
  return (
  <RouterProvider router={router}/>
  );
}

export default App;
