import Typewriter from 'typewriter-effect';
import axios from "axios";
import { SelectInput, TypingDots } from "components";
import { useEffect, useRef, useState } from "react";
import Bot from "../../../assets/image/Bot.png";
import ButtonSendToBot from "../../../assets/image/ButtonSendToBot.png";
import User from "../../../assets/image/User.png";
import { API_URL } from "../constants";
import { SKILLS, ArrObjectives, TextBotExam, TextBotExample, Topic, YesNoButton, YesNoButtonEnd, YesNoButtonStart } from 'constant';


// gom state, ứng dụng spread 
const Assistant = () => {
    const [loading, setLoading] = useState<boolean>(false)
    const [index3, setIndex3] = useState<boolean>(false)
    const [index, setIndex] = useState<number>();
    const [indexStart, setIndexStart] = useState<number>(-1);
    const [indexObj, setIndexObj] = useState<number>(-1);
    const [indexYN, setIndexYN] = useState<number>(-1);
    const [indexTopic, setIndexTopic] = useState<number>(-1);
    const [indexTopic2, setIndexTopic2] = useState<number>(-1);
    const [indexOptions, setIndexOptions] = useState<number>(-1);
    const [countReply, setCountReply] = useState<number>(-1);// sau 1 click count+=1
    const [countYN, setCountYN] = useState<number>(0)
    const [text, setText] = useState<string>("");
    const [textBot, setTextBot] = useState<string | any>("");
    const [textBotExample, setTextBotExample] = useState<string>("");
    const [countTextBotExample, setCountTextBotExample] = useState<number>(0);
    const [selected, setSelected] = useState<string>("Graphic & design");
    const [textOptionBot, setTextOptionBot] = useState<any>([]);
    const [message, setMessage] = useState<string>("")
    const [email, setEmail] = useState<string>("")
    const [disabled, setDisabled] = useState<boolean>(true)
    // console.log(loading, index3, index, indexStart, indexObj, indexYN, indexTopic, indexTopic2, indexOptions, countReply, text, textBot, textBotExample, countTextBotExample, selected, textOptionBot, message, email, disabled)
    console.log('countReply', countReply)
    // console.log('index:', index)
    // console.log('text:', text)
    // console.log('textBot:', textBot)
    // console.log('message:', message)
    // console.log('indexStart:', indexStart)
    // console.log('textBotExample:', textBotExample)
    console.log('countTextBotExample:', countTextBotExample)
    // console.log('textOptionBot:', textOptionBot)

    const post = async (act: string, skill: string, topic: string, question: string, topicLv2: string, message: string) => {
        setText("")
        setLoading(true)
        if (act && skill) {
            const _act = encodeURIComponent(act)
            const _skill = encodeURIComponent(skill)
            const source = await axios.get(`${API_URL}?act=${_act}&skill=${_skill}`)
            if (source) {
                setTextBot(source.data.data)
            }
        }
        if (topic) {
            const _topic = encodeURIComponent(topic)
            const source = await axios.get(`${API_URL}?topic=${_topic}`)
            if (source) {
                setTextOptionBot(source.data.data)
            }
        }
        if (question) {
            const _question = encodeURIComponent(question)
            const source = await axios.get(`${API_URL}?promptQuestion=${_question}`)
            if (source) {
                setTextBot(source.data.data)
            }
        }
        if (topicLv2) {
            const _topicLv2 = encodeURIComponent(topicLv2)
            const source = await new EventSource(`${API_URL}?topicLv2=${_topicLv2}`)
            let count = 0
            source.addEventListener('message', function (e) {
                if (count < 5) {
                    setTextBot(e.data)
                    setText("")
                    setCountReply(countReply => countReply + 1)
                    setLoading(true)
                    count += 1;
                    if (count === 5) {
                        setLoading(false)
                        setTextBotExample(TextBotExample[6])
                        source.close()
                    }
                }
            });
        }
        if (message) {
            const _message = encodeURIComponent(message)
            const source = await axios.get(`${API_URL}?customScript=${_message}`)
            if (source) {
                setTextBot(source.data.data)
            }
            setDisabled(false)
            ref.current.focus()// auto focus sau khi bot reply
        }
        setLoading(false)

    };
    const handleChangeSelect = (e: any) => {
        setSelected(e.target.value);
    };
    const handleChangeText = async (e: any) => {
        setText(e.target.textContent);
    };
    const handleAddText = async (messageUser: string, messageBot: string, countReply: number) => {
        if (messageUser) {
            const textnode = document.createTextNode(messageUser);
            const elementDiv = document.createElement("div");
            const elementDivChildren = document.createElement("div");
            const nodeImgUser = document.createElement("img");
            nodeImgUser.setAttribute("src", User);
            nodeImgUser.setAttribute("class", `w-[50px] h-[50px] object-contain`);
            elementDivChildren.setAttribute(
                "class",
                `max-w-[550px] h-[100%] p-4  text-white bg-[blue]  rounded-tr-[16px] rounded-l-[16px] my-5`
            );
            elementDivChildren.appendChild(textnode);
            elementDiv.setAttribute("class", "flex space-x-2 justify-end items-center ");
            elementDiv.setAttribute("id", `${countReply}user`);
            document.getElementsByClassName("box-wrap")[0].appendChild(elementDiv);
            document.getElementById(`${countReply}user`)?.appendChild(elementDivChildren);
            document.getElementById(`${countReply}user`)?.appendChild(nodeImgUser);

            // CASE SELECT INDEX=0
            if (indexStart === 0) {
                if (indexObj === 0 && countReply === 1) {
                    setTextBotExample(TextBotExample[countTextBotExample])
                } else if (indexObj === 0 && indexYN === 0 && countTextBotExample === 2) {
                    setTextBotExample(TextBotExample[countTextBotExample])
                }
                // call with promptquestion
                // case index0
                else if (indexObj === 0 && indexYN === 0 && countTextBotExample === 4) {
                    post("", "", "", text, "", "")
                } else if (indexObj !== 0 && indexObj !== 3 && countReply === 3) {
                    // case index 1+2 countReply === 3 ; indexObj !== 0 ngăn case 0 khi ở countReply === 3 không bị call api
                    post("", "", "", text, "", "")
                } else if (indexObj === 3 && countReply >= 1) setIndex3(true) // case Index =3
                else if (indexObj === 0 && indexYN === 1 && countTextBotExample === 2) {// CASE NO in SELECT INDEX=0
                    console.log("RUNNING CASE NO")
                    setTextBotExample(TextBotExample[7])
                } else if ((indexObj === 1 || indexObj === 2) && countReply === 1) {
                    setCountTextBotExample(countTextBotExample => countTextBotExample + 2)
                    setTextBotExample(TextBotExample[`${countTextBotExample + 2}`])
                }
            }
        }
        if (messageBot) {
            const botDiv = document.createElement("div");
            const elementBotDivChildren = document.createElement("div");
            elementBotDivChildren.innerHTML = messageBot
            const nodeImgBot = document.createElement("img");
            elementBotDivChildren.setAttribute(
                "class",
                ` bg-[#F2F4F5] justify-start  p-4  text-primary rounded-r-[16px] rounded-bl-[16px] max-w-[60%]`
            );
            nodeImgBot.setAttribute("src", Bot);
            nodeImgBot.setAttribute("class", `w-[50px] h-[50px] object-contain`);
            botDiv.setAttribute("id", `${countReply}bot`);
            botDiv.setAttribute("class", `flex space-x-2 my-5 `);
            document.getElementsByClassName("box-wrap")[0].appendChild(botDiv);
            document.getElementById(`${countReply}bot`)?.appendChild(nodeImgBot);
            document.getElementById(`${countReply}bot`)?.appendChild(elementBotDivChildren);
            // Script (Nochat)
            if (indexStart === 0) {
                if (indexObj === 0) {
                    // countReply = 2 ,5 Case0 ; 
                    if (countReply === 2 || countReply === 5) {
                        setTextBotExample(TextBotExample[countTextBotExample])
                    }
                }
                //Case1+2 
                else if (indexObj === 1 || indexObj === 2) {
                    if (countReply === 3) {
                        setTextBotExample(TextBotExample[countTextBotExample])//call question
                    }
                }
            }
            setTextBot("")
        }
        if (Topic.includes(messageUser) && indexStart === 0) {
            // if (countTextBotExample !== 4 && countTextBotExample < 5) setTextBotExample(TextBotExample[countTextBotExample]);
            if (countTextBotExample === 3) {
                setTextBotExample(TextBotExample[countTextBotExample])
                post("", "", text, "", "", "")
            }
            else if (countTextBotExample === 5) {
                console.log("Running this case")
                console.log(loading, "LOADING")
                setLoading(true)
                setTextBotExample(TextBotExample[countTextBotExample])
                post("", "", "", "", text, "")
            }
        }
    };
    const handleAddTextBotExample = (messBot: string) => {
        const botDiv = document.createElement("div");
        const elementBotDivChildren = document.createElement("div");
        const nodeImgBot = document.createElement("img");
        elementBotDivChildren.setAttribute(
            "class",
            ` bg-[#F2F4F5] justify-start  p-4  text-primary rounded-r-[16px] rounded-bl-[16px] max-w-[60%]`
        );
        nodeImgBot.setAttribute("src", Bot);
        nodeImgBot.setAttribute("class", `w-[50px] h-[50px] object-contain`);
        botDiv.setAttribute("id", `${countReply}exam`);
        botDiv.setAttribute("class", `flex space-x-2 my-5 `);
        if (countTextBotExample >= 4) {
            elementBotDivChildren.innerHTML = messBot
        } else {
            const textnode = document.createTextNode(messBot);
            elementBotDivChildren.appendChild(textnode);
        }
        document.getElementsByClassName("box-wrap")[0].appendChild(botDiv);
        document.getElementById(`${countReply}exam`)?.appendChild(nodeImgBot);
        document.getElementById(`${countReply}exam`)?.appendChild(elementBotDivChildren);
        // if (countYN === 1 && )
        setCountTextBotExample(countTextBotExample => countTextBotExample + 1)
    };
    const handleStart = (i: number) => {
        // ref.current.focus()
        setIndexStart(i)
        setCountReply(countReply => countReply + 1)

    }
    const ref: any = useRef();
    const handleObjective = (e: any, i: number) => {
        // lúc mới start vào
        if (countReply < 1) {
            setIndexObj(i);
            handleChangeText(e);
            setCountReply(countReply => countReply + 1)
        }
        // case YN=1 và call lại lần 1
    }
    const handleSend = (e: any) => {
        // lúc select&send xuất hiện lần đầu
        if (countReply === 1) {
            setLoading(true)
            post(text, selected, "", "", "", "");
            setCountReply(countReply => countReply + 1)
        }
        // post lúc indexYN=1 (case No) và countReply = 3
        // else if (indexYN === 1 && countReply === 3) {
        //     setLoading(true)
        //     post(text, selected, "", "", "", "");
        //     setCountReply(countReply => countReply + 1)
        // }
    }
    const handleYesNoButton = (e: any, i: number) => {
        // Yes/No lần 1 
        if (countTextBotExample === 2) {
            setIndexYN(i);
            handleChangeText(e);
            setCountReply(countReply => countReply + 1)
            setCountYN(countYN => countYN + 1)// đềm số lần YN
        }

    }
    const handleTopic = (e: any, i: number) => {
        if (countTextBotExample === 3) {
            setIndexTopic(i);
            handleChangeText(e);
            setCountReply(countReply => countReply + 1)
        }
    }
    const handleOption = (e: any, i: number) => {
        // counReply=4 cho Case index0 ; =2 và khác 3 cho case index1&2
        if (countTextBotExample === 4 && countReply <= 4 && countReply !== 3) {
            setIndexOptions(i);
            handleChangeText(e);
            setCountReply((countReply) => countReply + 1);
        }
    }
    const handleTopic2 = (e: any, i: number) => {
        if (countTextBotExample === 5) {
            setIndexTopic2(i);
            handleChangeText(e);
            setCountReply((countReply) => countReply + 1);
        }
    }
    const handleEnd = (e: any, i: number) => {
        if (countTextBotExample === 6) {
            setCountReply((countReply) => countReply + 1);
            setIndex(i);
            setLoading(true)
        }
    }
    const handleChat = async () => {
        const a = await setText(message)
        post("", "", "", "", "", message)
        setMessage("")
    }
    const TopicComponent = <div className=" space-x-5 grid-cols-5 flex-wrap grid gap-4 grid-rows-2">
        {Topic.map((item, i) => {
            return (
                <div
                    onClick={(e) => handleTopic(e, i)}
                    key={i}
                    className={`flex justify-center items-center text-center rounded-[12px] p-6 hover:cursor-pointer w-full
                        bg-[${indexTopic === i ? "blue" : "#F2F4F5"}] 
                        text-[${indexTopic === i ? "white" : "primary"}] 
                        hover:bg-[${indexTopic < 0 ? "blue" : "#F2F4F5"}]
                        hover:text-[${indexTopic < 0 ? "white" : "primary"}]`}
                >{item}
                </div>
            );
        })}
    </div>
    const YesNoButtonEndComponent = () => (
        <div className="flex justify-center items-center space-x-5">
            {YesNoButtonEnd.map((item, i) => {
                return (
                    <div
                        onClick={(e) => {
                            handleEnd(e, i)
                        }}
                        key={i}
                        className={`w-[30%] flex justify-center items-center text-center rounded-[12px] p-6 hover:cursor-pointer
                        text-[${index === i ? "white" : "primary"}] 
                        bg-[${index === i ? "blue" : "#F2F4F5"}] 
                        hover: bg - [${indexTopic < 0 ? "blue" : "#F2F4F5"}]
                        hover:text-[${indexTopic < 0 ? "white" : "primary"}]`}
                    >
                        {item}
                    </div>
                );
            })}
        </div>
    )
    const Loading = () => (
        <div className="flex space-x-2 my-[10px]">
            <img src="/static/media/Bot.e33d536bdd412e738363.png" alt="" className="w-[50px]    -[50px] object-contain" />
            <div className="bg-[#F2F4F5] max-w-[400px] h-[100%] p-4 mb-[10px] text-primary rounded-r-[16px] rounded-bl-[16px]">
                <TypingDots />
            </div>
        </div>)
    const SelectAndSendComponent = (
        <div className="flex max-w-[500px] space-x-8 mx-auto mt-10 justify-center items-center">
            <div className="max-w-[300px]">
                <SelectInput
                    arr={SKILLS}
                    name="df"
                    handleChange={handleChangeSelect}
                />
            </div>

            <div
                className="flex space-x-6  items-center bg-blue-500 hover:bg-blue-600 transition hover:text-white hover:cursor-pointer hover:scale-105  py-2 px-6 rounded-[16px]"
                onClick={handleSend}
            >
                <p>Send to AiLey</p> <img src={ButtonSendToBot} alt="" className="w-[35px] h-[35px] flex items-center " />
            </div>
        </div>)
    useEffect(() => {
        document.getElementById("input")?.addEventListener("keypress", function (event) {
            if (event.key === "Enter") {
                event.preventDefault();
                document.getElementById("send")?.click();
            }
        });
    }, [])
    useEffect(() => {
        if (countReply > 0) handleAddTextBotExample(textBotExample);
    }, [textBotExample]);
    useEffect(() => {
        handleAddText(text, textBot, countReply);
    }, [text, textBot]);
    // auto scroll end
    useEffect(() => {
        const boxchat = document.getElementById('boxchat')
        const sH = boxchat?.scrollHeight
        const cH = boxchat?.clientHeight
        if (sH && cH && sH > cH) {
            boxchat.scrollTo(0, boxchat?.scrollHeight);
        }
    }, [document.getElementById('boxchat')?.scrollHeight])

    return (
        <div className="w-full h-[calc(100vh-62px)] flex  ">
            {/* Avatar Bot */}
            <div className="w-[40%] py-6 px-8">
                <p className="font-bold">Alley</p>
                <p>AI Assistant</p>
                <div className="flex flex-row">
                    <div className="w-[35%]"><img src={Bot} alt="bot" /></div>

                    <div className="w-[75%]">
                        <div className="bg-[#F2F4F5] p-4 mb-[20px] text-primary text-base rounded-r-[14px] rounded-bl-[16px]">
                            <Typewriter
                                options={{
                                    delay: 50
                                }}
                                onInit={(typewriter) => {
                                    typewriter.typeString(TextBotExam).start()
                                }}
                            />
                        </div>

                    </div>
                </div>
            </div>
            {/* Box Chat`` */}
            <div className="w-full max-h-screen flex flex-col">
                <div id="boxchat" className=' h-full p-8 transition  overflow-y-scroll overflow-x-hidden relative'>
                    <div className="flex space-x-2">
                        <img src={Bot} alt="" className="w-[50px] h-[50px] object-contain" />
                        <div className="bg-[#F2F4F5]  max-w-[400px] h-[100%] p-4 mb-[10px] text-primary rounded-r-[16px] rounded-bl-[16px]">
                            {`Please choose the kind of talking with me`}
                        </div>
                    </div>
                    <div className="flex justify-center items-center space-x-5 mb-5">
                        {YesNoButtonStart.map((item, i) => {
                            return (
                                <button
                                    onClick={async (e) => {
                                        if (countReply < 0) handleStart(i)
                                        if (i === 1 && indexStart !== 0) {
                                            await setDisabled(false)
                                            await ref.current.focus() // bấm bao nhiu lần chat now cũng auto focus
                                        }
                                        if (message.length === 0 && indexStart === 1) {
                                            setIndexStart(i)
                                            setCountReply(0)
                                        }
                                    }}
                                    key={i}
                                    className={`w-[30%] flex justify-center items-center text-center rounded-[12px] p-6 hover:cursor-pointer
                                    bg-[${indexStart === i ? "blue" : "#F2F4F5"}] 
                                    text-[${indexStart === i ? "white" : "primary"}] 
                                    hover:bg-[${countReply < 1 ? "blue" : "#F2F4F5"}]
                                    hover:text-[${countReply < 1 ? "white" : "primary"}]
                                    `}
                                >
                                    {item}
                                </button>
                            );
                        })}
                    </div>
                    <div className='box-wrap'>
                        {/*Script start Choose Objective */}
                        {indexStart === 0 && (
                            <>
                                <div className="flex space-x-2">
                                    <img src={Bot} alt="" className="w-[50px] h-[50px] object-contain" />
                                    <div className="bg-[#F2F4F5]  max-w-[400px] h-[100%] p-4 mb-[10px] text-primary rounded-r-[16px] rounded-bl-[16px]">
                                        {`I know you have some concerns that need me support, let's tell me now.`}
                                    </div>
                                </div>
                                <p className="text-primary font-bold">Choose objectives</p>
                                <div className="flex justify-between mt-5 space-x-4">
                                    {ArrObjectives.map((item, i) => {
                                        return (
                                            <div
                                                // ref={ref}
                                                onClick={(e) => {
                                                    handleObjective(e, i)
                                                }}
                                                key={i}
                                                className={`w-[30%] min-h-[100px] flex justify-center items-center text-center rounded-[12px] p-6 hover:cursor-pointer
                                                bg-[${indexObj === i ? "blue" : "#F2F4F5"}] 
                                                text-[${indexObj === i ? "white" : "primary"}] 
                                                hover:bg-[${indexObj < 0 ? "blue" : "#F2F4F5"}]
                                                hover:text-[${indexObj < 0 ? "white" : "primary"}]`}
                                            >
                                                {item}
                                            </div>
                                        );
                                    })}
                                </div>
                            </>
                        )}
                        <div id={"0"} className={""}></div>
                        {/* Index =3 */}
                        {index3 && (
                            <>
                                <div className="flex space-x-2">
                                    <img src={Bot} alt="" className="w-[50px] h-[50px] object-contain" />
                                    <div className="bg-[#F2F4F5]  max-w-[400px] h-[100%] p-4 mb-[10px] text-primary rounded-r-[16px] rounded-bl-[16px]">
                                        {`Please fill your information in the form below, team sale will contact you soon`}
                                    </div>
                                </div>
                                <div className="flex max-w-[500px] mx-auto space-x-5  mb-5 justify-center items-center">
                                    <input
                                        className='w-full min-w-[150px] px-[25px]  min-h-[38px] bg-[#EBE1FF] text-xl font-light rounded-[12px] shadow-lg border-none'
                                        placeholder='Enter your Email here'
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        type="email"
                                    />
                                    <button
                                        className='min-w-[90px] rounded-[12px] p-4 bg-[#FF008A] text-white hover:cursor-pointer '
                                        onClick={async (e) => {
                                            e.preventDefault()
                                            localStorage.setItem("mailUser", email)
                                            setTextBotExample("Submit successfully, kindly wait few days, my team will contact you via email")
                                        }}
                                    >Submit</button>
                                </div>
                            </>
                        )}
                        {/* index=0 Select&Send xuất hiện lần 1 */}
                        {countTextBotExample >= 1 && indexObj === 0 && SelectAndSendComponent}
                        {/* indexYN */}
                        {countTextBotExample >= 2 && indexObj === 0 && (
                            <div className="flex justify-center items-center space-x-5">
                                {YesNoButton.map((item, i) => {
                                    return (
                                        <div
                                            onClick={(e) => handleYesNoButton(e, i)}
                                            key={i}
                                            className={`w-[30%] flex justify-center items-center text-center rounded-[12px] p-6 hover:cursor-pointer
                                            bg-[${indexYN === i ? "blue" : "#F2F4F5"}] 
                                            text-[${indexYN === i ? "white" : "primary"}] 
                                            hover:bg-[${indexYN < 0 ? "blue" : "#F2F4F5"}]
                                            hover:text-[${indexYN < 0 ? "white" : "primary"}]
                                                `}
                                        >
                                            {item}
                                        </div>
                                    );
                                })}
                            </div>
                        )}
                        {/* YN=1 && Kindly choose again */}
                        {/* {countTextBotExample >= 3 && indexObj === 0 && indexYN === 1 && SelectAndSendComponent} */}
                        {/* index = 0 và indexYN = 0 và call Topic1 */}
                        {countTextBotExample >= 3 && indexStart === 0 && indexYN === 0 && TopicComponent}
                        {/* index = 0 và indexYN = 1 và call Topic1 */}
                        {/* {countTextBotExample >= 3 && indexStart === 0 && indexYN === 1 && <TopicComponent />} */}
                        {/* Send Bot */}
                        {textOptionBot.length > 0 && (
                            <div className={`mx-auto grid grid-cols-4 gap-6 grid-rows-${textOptionBot.length / 4} `}>
                                {textOptionBot.map((item: any, i: any) => {
                                    return (
                                        <button
                                            onClick={(e) => handleOption(e, i)}
                                            key={i}
                                            className={`option w-[full] flex justify-center items-center text-center rounded-[12px] p-6 hover:cursor-pointer
                                            bg-[${indexOptions === i ? "blue" : "#F2F4F5"}] 
                                            text-[${indexOptions === i ? "white" : "primary"}] 
                                            hover:bg-[${indexOptions < 0 ? "blue" : "#F2F4F5"}]
                                            hover:text-[${indexOptions < 0 ? "white" : "primary"}]
                                            `}>
                                            {item}
                                        </button>
                                    );
                                })}
                            </div>
                        )}
                        {indexObj === 0 && countReply >= 11 && <YesNoButtonEndComponent />}
                        {indexObj === 1 && countReply >= 9 && <YesNoButtonEndComponent />}
                        {indexObj === 2 && countReply >= 9 && <YesNoButtonEndComponent />}
                        {loading && <Loading />}
                    </div>
                </div>
                <div className="flex justify-end items-center space-x-5 mr-[15px]">
                    <div className="bg-[#FFD4E4] w-[150px] h-[50px] flex justify-center items-center text-center text-[primary] rounded-[12px] p-6 hover:cursor-pointer">Send to us feedback to improve App better</div>
                    <div
                        onClick={() => window.location.reload()}
                        className="bg-[blue] w-[150px] h-[50px] flex justify-center items-center text-center text-[white] rounded-[12px] p-6 hover:cursor-pointer">Reset the conversation </div>
                </div>

                {/* Input Chat */}
                <div className='w-full flex justify-center rounded-sm py-[10px]'>
                    <input
                        disabled={disabled}
                        ref={ref}
                        className='w-full bg-[#F2F4F5] px-[20px] py-[10px] rounded-[20px]'
                        placeholder='Type something to chat with Alley...'
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        id="input"
                    />
                    <button
                        id="send"
                        className='h-[38px] text-2xl p-3 text-[blue] rounded-[20px] hover:bg-[blue] hover:text-white'
                        onClick={(e) => {
                            e.preventDefault()
                            setCountReply(countReply => countReply + 1)
                            if (countReply >= 0) handleChat()
                            setDisabled(true)
                        }}
                    >SEND</button>
                </div>
            </div>
        </div >
    );
};

export default Assistant;
