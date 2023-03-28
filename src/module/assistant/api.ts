import axiosClient from "api/axiosClient";
import { parse } from 'node-html-parser'
const assistantApi = {
    getActSkill(act: string, skill: string): Promise<any> {
        const _act = parse(encodeURIComponent(act));
        const _skill = parse(encodeURIComponent(skill))
        const url = `aiLeyBot?act=${_act}&skill=${_skill}`;
        return axiosClient.get(url);
    },
    getTopic(topic: string): Promise<any> {
        const _topic = parse(encodeURIComponent(topic))
        const url = `aiLeyBot?topic=${_topic}`;
        return axiosClient.get(url);
    },
    getPromptQuestion(question: string): Promise<any> {
        const _question = parse(encodeURIComponent(question))
        const url = `aiLeyBot?promptQuestion=${_question}`;
        return axiosClient.get(url);
    },

}
export default assistantApi;