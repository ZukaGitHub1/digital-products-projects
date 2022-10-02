import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CardProductsList from "../../components/cardProducts/CardProductsList";
import SearchBar from "../../components/searchbar/SearchBar";

const CategoryPage = () => {
  const [categories, setCategories] = useState([]);
  const [result, setResult] = useState("");
  const [searchFilter, setSearchFilter] = useState([]);
  const params = useParams();

  useEffect(() => {
    fetch(
      `https://academy-products.herokuapp.com/api/products/category/${params.id}`
    )
      .then((res) => res.json())
      .then((data) => setCategories(data.data))
      .catch((err) => {
        console.error(err);
      });
  }, [params.id]);

  useEffect(() => {
    axios
      .post("https://academy-products.herokuapp.com/api/products/search", {
        query: result,
      })
      .then((res) => setSearchFilter(res.data.data));
  }, [result]);

  useEffect(() => {
    const results = searchFilter.filter((resp) =>
      resp.title.toLowerCase().includes(result.toLocaleLowerCase())
    );
    setCategories(results);
  }, [result, searchFilter]);

  const onChange = (evt) => {
    setResult(evt.target.value);
  };

  return (
    <div>
      <SearchBar value={result} onChange={onChange} />
      <CardProductsList list={categories} />
    </div>
  );
};
export default CategoryPage;
