import { IProducts } from 'types/types';

class Api {
  private readonly basicURL = 'https://dummyjson.com';

  async getProducts(limit = 100): Promise<IProducts[]> {
    const request = await fetch(`${this.basicURL}/products?limit=${limit}`);
    const response = await request.json();

    return response.products;
  }
}

export const API = new Api();
