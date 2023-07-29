import HttpService from "./HttpService";

class DiscountService extends HttpService {
  getAll = async () => {
    const { data } = await this.client.get('/discounts');
    return data;
  }
}

export const discountService = new DiscountService();