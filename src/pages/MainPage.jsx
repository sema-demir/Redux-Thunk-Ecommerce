//apiden ürün verilerini alıp yüklneme durumunu veya hata durumunu
//store da saklayalım
import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setError,
  setLoading,
  setProducts,
} from "../Redux/Actions/productActions";
import Loader from "../Components/Loader";

const MainPage = () => {
  const store = useSelector((store) => store.products);
  const dispatch = useDispatch();
  useEffect(() => {
    //1. İstegin basladıgını store a bildir bir bilgiyi stora aktarmak
    //için gerekli ilk işlem dispatch
    dispatch(setLoading());

    axios
      .get("http://localhost:3040/products")
      //2.istegin basrılı olduugunu store a bildir
      .then((res) => dispatch(setProducts(res.data)))

      //3.istegin basraısız oldugunu store a bildir
      .catch((err) => dispatch(setError(err.message)));
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
