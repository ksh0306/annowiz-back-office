import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:3000",
}); // instance 끝

function fetchProductById(id) {
  return instance.get(`/products/${id}`);
} // fetchProductById() 끝

function fetchProductsBykeyword(keyword) {
  return instance.get(`/products`, {
    params: {
      name_like: keyword,
    },
  });
} // fetchProductsBykeyword() 끝

function fetchTableDataItems() {
  return instance.post("/tableData");
} // fetchCartItems() 끝

// carts
function fetchCartItems() {
  return instance.get("/carts");
} // fetchCartItems() 끝

function createCartItem(cartItem) {
  return instance.post("/carts", cartItem);
} // createCartItem()

async function postLogin({ username, password }) {
  const url = 'http://dev.annowiz.com:18081/login';
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      username, password
    })
  });
  const { accessToken } = await response.json();

  return accessToken;
}

export {
  fetchProductById,
  fetchProductsBykeyword,
  fetchCartItems,
  createCartItem,
  fetchTableDataItems,
  postLogin,
};
