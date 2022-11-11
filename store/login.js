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
    const accessToken = await postLogin({ username, password });

    commit('SET_ACCESS_TOKEN', accessToken);

    this.app.router.push('/projects');
  },
};

export const getters = {};
