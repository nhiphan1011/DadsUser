import axiosClient from "api/axiosClient";

const shopAPI = {
  getAllShop(id: string | undefined): Promise<any> {
    const url = `/shops${id ? `?categoryId=${id}` : ""}`;
    return axiosClient.get(url);
  },
  getAllProduct(id: string | undefined): Promise<any> {
    const url = `/products${id ? `?categoryId=${id}` : ""}`;
    return axiosClient.get(url);
  },
  get(id: string | undefined): Promise<any> {
    const url = `/categories/${id}`;
    return axiosClient.get(url);
  },
};

export default shopAPI;
