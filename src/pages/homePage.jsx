import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../Components/Loader";

const MainPage = () => {
  const store = useSelector((store) => store.products);
  const dispatch = useDispatch();
  useEffect(() => {
    axios.get("http://localhost:3040/products");
  }, []);
  return (
    <div className="container p-5">
      {/* veriler yükleniyorsa */}
      {store.isLoading && <Loader />}

      {/* hata olustu ise */}
      {store.isError && <h1 className="text-center my-5">{store.isError}</h1>}

      {/* veriler geldiyse */}
      {store?.products.map((item) => (
        <h3>{item.title}</h3>
      ))}
    </div>
  );
};

export default MainPage;
