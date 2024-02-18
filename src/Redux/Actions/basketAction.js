import axios from "axios";

export const addToBasket = (product) => async (dispatch) => {
  //yeni bir nesne olusturp miktarını 1 olarak belirle
  const newProduct = { ...product, amount: 1 };

  //2nesneden gereksiz degerleri kaldır
  delete newProduct.specs;
  delete newProduct.color;
  delete newProduct.title;
  delete newProduct.stockAmount;
  console.log(newProduct);

  //3 ürünü apiye kaydet
  const res = await axios.post("http://localhost:3040/basket", newProduct);

  //store a yeni ürün ekle
  if (res.ok) {
    dispatch({
      type: "ADD",
      payload: newProduct,
    });
  }
};
//api dan sepet verilerini alıp store u bilgilendiren
//bilgilendiren asenkron thunk aksiyonu
export const getBasket = () => (dispatch) => {
  dispatch({
    type: "SET_BASKET_LOADING",
  });
  axios
    .get("http://localhost:3040/basket")
    .then((res) =>
      dispatch({
        type: "SET_BASKET_DATA",
        payload: res.data,
      })
    )
    .catch((err) =>
      dispatch({
        type: "SET_BASKET_ERROR",
        payload: err.message,
      })
    );
};
