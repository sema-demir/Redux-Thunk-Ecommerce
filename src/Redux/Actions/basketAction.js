import axios from "axios";

export const addToBasket = (product) => async (dispatch) => {
  //yeni bir nesne olusturp miktarını 1 olarak belirle
  const newProduct = { ...product, amount: 1 };

  //2nesneden gereksiz degerleri kaldır
  delete newProduct.specs;
  delete newProduct.color;
  delete newProduct.title;
  delete newProduct.stockAmount;

  //3 ürünü api  kaydet
  const res = await axios.post("http://localhost:3040/basket", newProduct);

  //store a yeni ürün ekle

  dispatch({
    type: "ADD",
    payload: newProduct,
  });
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
//sepette var olan ürünün miktarınnı bir arttır
export const updateItem = (product) => (dispatch) => {
  //Api da bir özellike güncellenecegi inin patch istegi attık
  axios
    .patch(`http://localhost:3040/basket/${product.id}`, {
      amount: product.amount + 1,
    })
    //istegin basarılı oldugu senaryoda reducea a haber ver
    .then(() =>
      dispatch({
        type: "UPDATE",
        payload: product.id,
      })
    );
};

//ürünü sepetten kaldır

export const removeItem = (delete_id) => (dispatch) => {
  axios
    .delete(`http://localhost:3040/basket/${delete_id}`)

    .then(() =>
      dispatch({
        type: "DELETE",
        payload: delete_id,
      })
    );
};
