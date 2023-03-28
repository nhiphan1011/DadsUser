import axiosClient from "api/axiosClient";

const homeApi = {
  getBanner(bannerType: string) {
    const url = `/banners?pageId=1&bannerType=${bannerType}`;
    return axiosClient.get(url);
  },
  getlist(url: string): Promise<any> {
    // const url = "/contents?pageId=5&limit=5";
    return axiosClient.get(url);
  },
  getHomeMission(): Promise<any> {
    const url = "/contents?pageId=5&limit=5";
    return axiosClient.get(url);
  },
  getHomeShop(): Promise<any> {
    const url = "/shops?limit=5";
    return axiosClient.get(url);
  },
  getHomePlay(): Promise<any> {
    const url = "/contents?pageId=7&limit=5";
    return axiosClient.get(url);
  },
};

export default homeApi;
