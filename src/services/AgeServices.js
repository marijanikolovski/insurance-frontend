import HttpService from "./HttpService";

class AgeService extends HttpService {
  getAll = async () => {
    const { data } = await this.client.get('/age');
    return data;
  }
}

export const ageService = new AgeService();