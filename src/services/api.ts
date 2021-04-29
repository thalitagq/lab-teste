import axios from 'axios'
require('dotenv').config()

export const api = axios.create({
  baseURL: `${process.env.REACT_APP_BASE_URL}`,
});

export const defaults = {
  headers: {
    Accept: 'application/vnd.github.v3+json'
  },
};

