import axiosClient from "./axiosClient";

const homeApi = {
  getHomeMission(): Promise<any> {
    const url = "/contents?pageId=5&limit=5";
    return axiosClient.get(url);
  },
  getHomeShop(): Promise<any> {
    const url = "/shops";
    return axiosClient.get(url);
  },
  getHomePlay(): Promise<any> {
    const url = "/contents?pageId=7&limit=5";
    return axiosClient.get(url);
  },
};

export default homeApi;
