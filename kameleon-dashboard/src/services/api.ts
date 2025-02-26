import axios from 'axios';
import { Site, Test } from '../types';

const API_URL = 'http://localhost:3100';

export const api = {
  async getSites(): Promise<Site[]> {
    const response = await axios.get(`${API_URL}/sites`);
    return response.data;
  },

  async getSite(id: number): Promise<Site> {
    const response = await axios.get(`${API_URL}/sites/${id}`);
    return response.data;
  },

  async getTests(): Promise<Test[]> {
    const response = await axios.get(`${API_URL}/tests`);
    return response.data;
  },

  async getTest(id: number): Promise<Test> {
    const response = await axios.get(`${API_URL}/tests/${id}`);
    return response.data;
  },
};
