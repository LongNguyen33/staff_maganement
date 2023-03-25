import axios from "axios";
import { GET_STAFF } from "../types/actions.type";
import {
  SET_STAFF,
  DELETE_STAFF,
  ADD_STAFF,
  EDIT_STAFF,
} from "../types/mutations.type";

const state = {
  data: null,
};
const getters = {
  data: ({ data }) => data,
};
const mutations = {
  [SET_STAFF]: (state, data) => {
    state.data = data;
  },
  [DELETE_STAFF]: (state, dataId) => {
    state.data = state.data.filter((value) => value.id !== dataId);
  },
  [ADD_STAFF]: (state, data) => {
    state.data.push(data);
  },
  [EDIT_STAFF]: (state, data) => {
    const editdata = state.data.find((value) => value.id == data.id);
    if (editdata) {
      editdata.name = data.name;
      editdata.age = data.age;
    }
  },
};
const actions = {
  [DELETE_STAFF]: async ({ commit }, dataId) => {
    try {
      const response = await axios.delete(
        `https://641d4a37b556e431a87feee0.mockapi.io/staff/${dataId}`
      );
      commit(DELETE_STAFF, response.data.id);
    } catch (error) {
      console.log(error);
    }
  },
  [GET_STAFF]: async ({ commit }) => {
    try {
      const response = await axios.get(
        "https://641d4a37b556e431a87feee0.mockapi.io/staff"
      );
      commit(SET_STAFF, response.data);
    } catch (error) {
      console.log(error);
    }
  },
  [ADD_STAFF]: async ({ commit }, data) => {
    try {
      const response = await axios.post(
        "https://641d4a37b556e431a87feee0.mockapi.io/staff",
        data
      );
      commit(ADD_STAFF, response.data);
    } catch (error) {
      console.log(error);
    }
  },
  [EDIT_STAFF]: async ({ commit }, data) => {
    try {
      const response = await axios.put(
        `https://641d4a37b556e431a87feee0.mockapi.io/staff/${data.id}`,
        data
      );
      commit(EDIT_STAFF, response.data);
    } catch (error) {
      console.log(error);
    }
  },
};
export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
