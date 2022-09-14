import { useEffect, useState } from "react";

const ALLPRODUCTS = "https://academy-products.herokuapp.com/api/categories";

const Sidebar = () => {

  const [navigation, setNavigation] = useState([]);
  const [operation, setOperation] = useState(null);
  useEffect(() => {
    fetch(ALLPRODUCTS)
      .then((res) => res.json())
      .then((data) => {
        setOperation(data.sucess)
        setNavigation(data.data)});
  }, []);
 function handleCHange(){
     setOperation(pres => !pres)

  }
  return (
    <div>
      <div className="sidebar">
      <h3>კატეგორია</h3>
        {navigation.map((index) => (
          <div className="to-right">
            <button onChange={handleCHange}  className="menu-item">
              {index.title}
            </button>
          </div>
        ))}

      </div>
    </div>
  );
};

export default Sidebar;
