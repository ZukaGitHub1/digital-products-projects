import {  Route,   Routes } from 'react-router-dom';
import './App.css';
import ProductPhone from './components/categroiesFilter/ProductPhone';
import ProductLaptop from './components/categroiesFilter/ProductLaptop';
import Main from './pages/home/Main';
import CardProducts from './components/cardProducts/CardProducts';


function CategoryPage() {
  const params = useParams();
 
  useEffect(() => {
    fetch('https://academy-products.herokuapp.com/api/products/category/${params.id}')
  }, [])

  return;
}


function App() {
  return <div className="App">
    <Routes>
      <Route  path='/' element={<Main/>}/>
      <Route path="/category/:id" element={<CategoryPage />} />
      <Route path='*' element={<div>page not found</div>}/>
    </Routes>
    </div>
 
}

export default App;
