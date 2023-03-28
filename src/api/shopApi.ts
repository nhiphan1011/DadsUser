import axiosClient from "./axiosClient";

const categoryApi = {
  getAllShop(): Promise<any> {
    const url = "/shops";
    return axiosClient.get(url);
  },
  getAllProduct(): Promise<any> {
    const url = "/products";
    return axiosClient.get(url);
  },
  get(id: string | undefined): Promise<any> {
    const url = `/categories/${id}`;
    return axiosClient.get(url);
  },
};

export default categoryApi;
