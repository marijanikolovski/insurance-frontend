import HttpService from "./HttpService";

class CoverageService extends HttpService {
  getAll = async () => {
    const { data } = await this.client.get('/coverages');
    return data;
  }
}

export const coverageService = new CoverageService();