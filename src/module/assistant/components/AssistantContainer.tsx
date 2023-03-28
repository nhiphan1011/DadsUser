
import axios from "axios";
import { useEffect, useRef, useState } from "react";
import AssistantView from "./AssistantView";

const AssistantContainer = () => {
    // const [countReply, setCountReply] = useState<number>(0);// số lần cục màu xanh xuất hiện
    // const [index, setIndex] = useState<number>();//
    // const [text, setText] = useState<string>("");  //text nằm trong cục màu xanh (user)/render ra trong cục xanh
    // const [textBot, setTextBot] = useState<string | any>(""); //text nằm trong cục màu xám(bot)/render ra trong cục xám
    // const [textBotExample, setTextBotExample] = useState<string>("");//
    // const [countTextBotExample, setCountTextBotExample] = useState<number>(0);// số lần con bot reply
    // const [selected, setSelected] = useState<string>("Graphic & design");//text khi user click vào
    // const [textOptionBot, setTextOptionBot] = useState<any>([]);

    // const [actSkill, setActSkill] = useState<string>("")
    // const [topic1, setTopic1] = useState<Array<any>>([])
    // const [question, setQuestion] = useState<string>("")
    // const [topicLv2, setTopicLv2] = useState<string>("")

    const [loading, setLoading] = useState<boolean>(false)


    return (
        <>
            <AssistantView
                loading={loading}
            />
        </>
    )

}

export default AssistantContainer;