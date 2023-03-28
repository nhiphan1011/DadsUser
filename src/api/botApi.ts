import axiosClient from "./axiosClient";

const botApi = {
  // https://cms.dadsnetwork.co/api/aiLeyBot
  postBot(act: string, skills: string, topic: string | null): Promise<any> {
    const url = `/aiLeyBot`;
    return axiosClient.post(url, { act, skills, topic });
  },
};

export default botApi;
