import { useEffect, useState,useContext } from "react";
import { Link } from "react-router-dom";
import UserContext from '../../userconxtext/Usercontext';
import AvatarComponent from '../avatar/AvatarComponent';

const ALLPRODUCTS = "https://academy-products.herokuapp.com/api/categories";

const Sidebar = () => {
const user = useContext(UserContext);
  const [navigation, setNavigation] = useState([]);
  useEffect(() => {
    fetch(ALLPRODUCTS)
      .then((res) => res.json())
      .then((data) => {
        setNavigation(data.data)});
  }, []);
 
  return (
    <div>
      <div className="sidebar">

      <AvatarComponent  detail={user}  />
      
      <h3>კატეგორია</h3>
        {navigation.map((cat) => (
          <Link key={cat.id} to={`/main/category/${cat.id}`}>
          <div  className="to-right">
            <button   className="menu-item">
              {cat.title}
            </button>
          </div>
          </Link>
        ))}

      </div>
    </div>
  );
};

export default Sidebar;
