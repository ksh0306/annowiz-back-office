import axios from 'axios';
import { Notification } from 'element-ui';

const instance = axios.create({
  baseURL: "http://localhost:3000",
});

const userService = axios.create({
  baseURL: 'http://dev.annowiz.com:18081',
  headers: { 'Content-Type': 'application/json' },
})

userService.interceptors.response.use(function (response) {
  return response;
}, (error) => {
  if (error.response) {
    const { code, message } = error.response.data.result;

    Notification({
      title: code,
      message: message,
      duration: 3000,
    });
  }
  return Promise.reject(error);
});

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

function postLogin(userData) {
  return userService.post('/login', userData);
}

export {
  fetchProductById,
  fetchProductsBykeyword,
  fetchCartItems,
  createCartItem,
  fetchTableDataItems,
  postLogin,
};
