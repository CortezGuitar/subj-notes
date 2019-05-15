import axios from 'axios';

const instance = axios.create({
  baseURL: `https://cors-anywhere.herokuapp.com/http://test.subj.ua/api/v1/`,
  headers: { Authorization: 'Bearer 2wkoypsjcuoh2p7b5mn36s4wyyipwritpeqy' }
});

export default class SubjService {
  async getResource(url) {
    try {
      const resp = await instance.get(`${url}`);
      return resp.data;
    } catch (err) {
      return Promise.reject(err.response);
    }
  }

  async postResource(url, body) {
    try {
      const resp = await instance.post(`${url}`, body);
      return resp.data;
    } catch (err) {
      return Promise.reject(err.response);
    }
  }

  async deleteResource(url) {
    try {
      const resp = await instance.delete(`${url}`);
      return resp.data;
    } catch (err) {
      return Promise.reject(err.response);
    }
  }

  async patchResource(url, body) {
    try {
      const resp = await instance.patch(`${url}`, body);
      return resp.data;
    } catch (err) {
      return Promise.reject(err.response);
    }
  }

  getNotes = async () => {
    const resp = await this.getResource('notes');
    return resp;
  };

  createNote = async body => {
    const resp = await this.postResource('notes', body);
    return resp;
  };

  removeNote = async id => {
    const resp = await this.deleteResource(`notes/${id}`);
    return resp;
  };

  updateNote = async (id, body) => {
    const resp = await this.patchResource(`notes/${id}`, body);
    return resp;
  };
}
