import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../Components/Loader";
import { getData } from "../Redux/Actions/productActions";
import Card from "../Components/Card";
import { getBasket } from "../Redux/Actions/basketAction";

const HomePage = () => {
  const store = useSelector((store) => store.products);
  const dispatch = useDispatch();

  useEffect(() => {
    //aksiyon api istegini arka planda yapar
    dispatch(getData());

    //sepetteki verileri al
    dispatch(getBasket());
  }, []);

  return (
    <div className="container">
      {/* veriler yükleniyorsa */}
      {store.isLoading && <Loader />}

      {/* hata olustu ise */}
      {store.isError && <h1 className="text-center my-5">{store.isError}</h1>}

      {/* veriler geldiyse */}
      <div className="d-flex flex-wrap gap-5 justify-content-center my-5">
        {store?.products.map((product) => (
          <Card key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
