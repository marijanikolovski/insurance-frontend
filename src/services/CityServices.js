import HttpService from "./HttpService";

class CityService extends HttpService {
  getAll = async () => {
    const { data } = await this.client.get('/cities');
    return data;
  }
}

export const cityService = new CityService();