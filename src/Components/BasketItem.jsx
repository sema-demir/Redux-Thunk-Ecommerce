const BasketItem = ({ product }) => {
  return (
    <div className="rounded-2 p-4 bg-white d-flex justify-content-between text-black mb-5">
      <div className="d-flex align-items-center gap-3">
        <img className="rounded-3" width={60} height={60} src={product.image} />

        <h4>
          <span>{product.make}</span>
          <span>{product.model}</span>
        </h4>

        <h4 className="text-success">{product.price} ₺</h4>
      </div>
      <div className="d-flex align-items-center gap-3">
        <h6>Miktar: {product.amount}</h6>
        <button className="btn btn-sm btn-primary">+</button>
        <button className="btn btn-sm btn-danger">-</button>
      </div>
    </div>
  );
};

export default BasketItem;
