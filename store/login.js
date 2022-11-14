import { postLogin } from '@/api';

export const state = () => ({});

export const mutations = {
  SET_ACCESS_TOKEN(state, data) {
    // this.$cookies.set("adminLoginToken", "zxcagqwrdasd", {
    //   path: "/",
    //   maxAge: 60 * 60 * 24 * 7,
    // });

    localStorage.setItem('accessToken', data);
  },
};

export const actions = {
  async login({ commit }, data) {
    const { username, password } = data;
    const response = await postLogin({ username, password });
    const { data: responseData, result } = response;

    if (responseData) {
      commit('SET_ACCESS_TOKEN', responseData.accessToken);

      this.app.router.push('/projects');

      return;
    }
  },
};

export const getters = {};
