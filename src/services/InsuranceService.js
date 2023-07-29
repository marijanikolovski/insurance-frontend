import HttpService from "./HttpService";

class InsuranceService extends HttpService {
  insurance = async (insurance) => {
    const { data } = await this.client.post('/total', insurance);
    return data;
  }
}

export const insuranceService = new InsuranceService();