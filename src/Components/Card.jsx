import { useDispatch, useSelector } from "react-redux";
import { addToBasket, updateItem } from "../Redux/Actions/basketAction";

const Card = ({ product }) => {
  const store = useSelector((store) => store.basket);
  const dispatch = useDispatch();

  //sepete abone ol ve sepette bu elemandan varsa onu bul
  const found = store.basket.find((i) => i.id === product.id);

  //sepette aranan eleman varsa
  const handleClick = () => {
    if (found) {
      dispatch(updateItem(found));
    } else {
      dispatch(addToBasket(product));
    }
  };

  return (
    <div className="card py-4 px-3" style={{ width: "18rem" }}>
      <div className="d-flex justify-content-center">
        <img
          src={product.image}
          alt={product.model}
          width={220}
          height={200}
          className="rounded"
        />
      </div>
      <div className="card-body">
        <h5 className="card-title">{product.title}</h5>
        <p>
          <span className="fw-bold me-2">{product.make}</span>
          <span>{product.model}</span>
        </p>
        <p className="d-flex flex-column">
          {product.specs.map((spec, i) => (
            <span key={i}>{spec}</span>
          ))}
        </p>
        <button onClick={handleClick} className="w-100">
          {found ? `Miktarı Arttır (${found.amount})` : "Sepete Ekle"}
        </button>
      </div>
    </div>
  );
};

export default Card;
