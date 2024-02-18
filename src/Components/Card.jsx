import { useDispatch } from "react-redux";
import { addToBasket } from "../Redux/Actions/basketAction";
const Card = ({ product }) => {
  const dispatch = useDispatch();
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
        <button
          onClick={() => dispatch(addToBasket(product))}
          className="w-100"
        >
          Sepete Ekle
        </button>
      </div>
    </div>
  );
};

export default Card;
