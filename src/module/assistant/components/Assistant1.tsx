
import { useEffect, useRef, useState } from "react";
import Typewriter from 'typewriter-effect';
import { Button, Modal, Space, notification } from "antd";
import type { NotificationPlacement } from 'antd/es/notification/interface';
import axios from "axios";
import { SelectInput, TypingDots, Reply } from "components";
import Bot from "../../../assets/image/Bot.png";
import ButtonSendToBot from "../../../assets/image/ButtonSendToBot.png";
import { API_URL } from "../constants";
import { SKILLS, ArrObjectives, TextBotExam, TextBotExample, Topic, YesNoButton, YesNoButtonStart, TextBotExamYN } from 'constant';

const Assistant = () => {
    const [index, setIndex] = useState<{ start: number, obj: number, YN: number, YN1: number, topic: number, options: Array<number>, end: number }>({
        start: -1,
        obj: -1,
        YN: -1,
        YN1: -1,
        topic: -1,
        options: [],
        end: -1,
    })
    const [text, setText] = useState<{ user: string, bot: string, exam: string }>({
        user: "",
        bot: "",
        exam: "",
    })
    const [value, setValue] = useState<{ selected: string, message: string, email: string, optionBot: Array<string>, heightOptions: number | undefined }>({
        selected: "Graphic & design",
        message: "", // value từ user, value từ input
        email: "",
        optionBot: [],
        heightOptions: 0
    })
    const [state, setState] = useState<{ start: boolean, index3: boolean, showEnd: boolean, loading: boolean, ask: boolean, again: boolean, request: boolean, btnDisable: boolean, disabled: boolean }>({
        start: false,
        index3: false,
        showEnd: false,
        loading: false,
        ask: false, //modal xuất hiện
        again: false, //vẫn còn hỏi tiếp
        request: false,
        btnDisable: false,
        disabled: true//input disable
    })
    const [count, setCount] = useState<{ reply: number, YN: number, textBotExample: number }>({
        reply: -1,// sau 1 click count+=1
        YN: -1,// dùng để đếm caseYN
        textBotExample: 0
    })
    const [message, setMessage] = useState<string>("")
    const [boxChat, setBoxChat] = useState<{ boxChat1: Array<any>, boxChat2: Array<any>, boxChat3: Array<any>, boxChat4: Array<any>, boxChat5: Array<any>, boxChat6: Array<any>, boxChat7: Array<any>, boxChatEnd: Array<any>, }>({
        boxChat1: [],
        boxChat2: [],
        boxChat3: [],
        boxChat4: [],
        boxChat5: [],
        boxChat6: [],
        boxChat7: [],
        boxChatEnd: [],
    })
    const [api, contextHolder] = notification.useNotification();
    const post = async (act: string, skill: string, topic: string, question: string, message: string) => {
        setText(prev => ({ ...prev, user: "" }))
        setState(prev => ({ ...prev, btnDisable: true, loading: true, disabled: true }))
        if (act && skill) {
            const _act = encodeURIComponent(act)
            const _skill = encodeURIComponent(skill)
            const source = await axios.get(`${API_URL}?act=${_act}&skill=${_skill}`)
            if (source) {
                setText(prev => ({ ...prev, bot: source.data.data }))
            }
            // setText(prev => ({ ...prev, bot: "Call Data lần 1" }))
        }
        if (topic) {
            const _topic = encodeURIComponent(topic)
            const source = await axios.get(`${API_URL}?topic=${_topic}`)
            if (source) {
                await setValue(prev => ({ ...prev, optionBot: source.data.data }))
            }
            if (document.getElementById("boxwrap")?.scrollHeight) setValue(prev => ({ ...prev, heightOptions: document.getElementById("boxwrap")?.scrollHeight }))
            // setValue(prev => ({ ...prev, optionBot: ["option1", "option2", "option3", "option4", "option5", "option6", "option7", "option8", "option9", "option10", "option11", "option12"] }))

        }
        if (question) {
            const _question = encodeURIComponent(question)
            const source = await axios.get(`${API_URL}?promptQuestion=${_question}`)
            if (source) {
                setText(prev => ({ ...prev, bot: source.data.data }))
                setText(prev => ({ ...prev, bot: "" }))
            }
            // setText(prev => ({ ...prev, bot: "Data question" }))
        }
        if (message) {
            const _message = encodeURIComponent(message)
            const source = await axios.get(`${API_URL}?customScript=${_message}`)
            if (source) {
                setText(prev => ({ ...prev, bot: source.data.data }))
            }
            // setText(prev => ({ ...prev, bot: "Chatting" }))
            // auto focus sau khi bot reply
            setState(prev => ({ ...prev, disabled: false }))
            ref.current.focus()
        }
        setState(prev => ({ ...prev, btnDisable: false, loading: false }))
    };

    const handleChangeSelect = (e: any) => {
        setValue(prev => ({ ...prev, selected: e.target.value }));
    };
    const handleAddText = async (messageUser: string, messageBot: string, countReply: number) => {
        if (messageUser) {
            if (index.obj === 0) {
                if (countReply === 1) {
                    setBoxChat(prev => ({ ...prev, boxChat1: [...boxChat.boxChat1, { user: "user", value: messageUser }] }))
                    setText(prev => ({ ...prev, exam: TextBotExample[count.textBotExample] }))
                } else if (countReply === 3) {
                    setBoxChat(prev => ({ ...prev, boxChat3: [...boxChat.boxChat3, { user: "user", value: messageUser }] }))
                    if (index.YN === 0) {
                        setText(prev => ({ ...prev, exam: TextBotExample[count.textBotExample] }))
                    } else if (index.YN === 1) {
                        setText(prev => ({ ...prev, exam: TextBotExamYN[count.YN] }))
                    }
                } else if (countReply === 4) {
                    if (index.YN === 0) {
                        setBoxChat(prev => ({ ...prev, boxChat4: [...boxChat.boxChat4, { user: "user", value: messageUser }] }))
                        setText(prev => ({ ...prev, exam: TextBotExample[count.textBotExample] }))
                        post("", "", messageUser, "", "")
                    }
                } else if (countReply === 5) {
                    if (index.YN === 0) {
                        setBoxChat(prev => ({ ...prev, boxChat5: [...boxChat.boxChat5, { user: "user", value: messageUser }] }))
                        post("", "", "", messageUser, "")
                    } else if (index.YN === 1) {
                        setBoxChat(prev => ({ ...prev, boxChat5: [...boxChat.boxChat5, { user: "user", value: messageUser }] }))
                        if (index.YN1 === 0) {
                            setText(prev => ({ ...prev, exam: TextBotExample[count.textBotExample] }))
                        } else if (index.YN1 === 1) {
                            setText(prev => ({ ...prev, exam: TextBotExamYN[count.YN] }))
                        }
                    }
                } else if (countReply === 6) {
                    setBoxChat(prev => ({ ...prev, boxChat6: [...boxChat.boxChat6, { user: "user", value: messageUser }] }))
                    setText(prev => ({ ...prev, exam: TextBotExample[count.textBotExample] }))
                    post("", "", messageUser, "", "")
                } else if (countReply === 7) {
                    if (index.YN === 1) {
                        setBoxChat(prev => ({ ...prev, boxChat7: [...boxChat.boxChat7, { user: "user", value: messageUser }] }))
                        post("", "", "", messageUser, "")
                    }
                }
            } else if (index.obj === 1) {
                if (countReply === 1) {
                    setBoxChat(prev => ({ ...prev, boxChat1: [...boxChat.boxChat1, { user: "user", value: messageUser }] }))
                    setText(prev => ({ ...prev, exam: TextBotExample[count.textBotExample] }))
                } else if (countReply === 2) {
                    setBoxChat(prev => ({ ...prev, boxChat2: [...boxChat.boxChat2, { user: "user", value: messageUser }] }))
                    setText(prev => ({ ...prev, exam: TextBotExample[count.textBotExample] }))
                    post("", "", messageUser, "", "")
                } else if (countReply === 3) {
                    setBoxChat(prev => ({ ...prev, boxChat3: [...boxChat.boxChat3, { user: "user", value: messageUser }] }))
                    post("", "", "", messageUser, "")
                } else if (state.again) {
                    setBoxChat(prev => ({ ...prev, boxChat3: [...boxChat.boxChat3, { user: "user", value: messageUser }] }))
                    post("", "", "", messageUser, "")
                }
            } else if (index.obj === 2) {
                if (countReply === 1) {
                    setBoxChat(prev => ({ ...prev, boxChat1: [...boxChat.boxChat1, { user: "user", value: messageUser }] }))
                    setState(prev => ({ ...prev, index3: true }))
                }
            } else if (index.start === 1) setBoxChat(prev => ({ ...prev, boxChat1: [...boxChat.boxChat1, { user: "user", value: messageUser }] }))
        }
        if (messageBot) {
            if (index.obj === 0) {
                if (countReply === 2) {
                    setBoxChat(prev => ({ ...prev, boxChat2: [...boxChat.boxChat2, { user: "bot", value: messageBot }] }))
                    setText(prev => ({ ...prev, bot: "", exam: TextBotExample[count.textBotExample] }))
                } else if (countReply === 4) {
                    if (index.YN === 0) {
                    } else if (index.YN === 1) {
                        setBoxChat(prev => ({ ...prev, boxChat4: [...boxChat.boxChat4, { user: "bot", value: messageBot }] }))
                        setText(prev => ({ ...prev, bot: "", exam: TextBotExample[count.textBotExample] }))
                    }
                } else if (countReply === 5) {
                    if (index.YN === 0) {//chỗ reply sau option
                        if (state.again === false) {
                            setBoxChat(prev => ({ ...prev, boxChat5: [...boxChat.boxChat5, { user: "bot", value: messageBot }] }))
                            setTimeout(() => {
                                setState(prev => ({ ...prev, ask: true }))
                            }, 2000)

                        }
                        else if (state.again) {
                            setBoxChat(prev => ({ ...prev, boxChat5: [...boxChat.boxChat5, { user: "bot", value: messageBot }] }))
                            setText(prev => ({ ...prev, bot: "" }))
                            if (index.options.length < value.optionBot.length) setTimeout(() => {
                                setState(prev => ({ ...prev, ask: true }))
                            }, 2000);
                            else {
                                setText(prev => ({ ...prev, bot: "", exam: TextBotExample[count.textBotExample] }))
                                setState(prev => ({ ...prev, request: true }))
                            }
                        }
                    }
                } else if (countReply === 7) {
                    if (index.YN === 1) {
                        if (state.again === false) {
                            setBoxChat(prev => ({ ...prev, boxChat7: [...boxChat.boxChat7, { user: "bot", value: messageBot }] }))
                            setTimeout(() => {
                                setState(prev => ({ ...prev, ask: true }))
                            }, 2000)
                        }
                        else if (state.again) {
                            setBoxChat(prev => ({ ...prev, boxChat7: [...boxChat.boxChat7, { user: "bot", value: messageBot }] }))
                            setText(prev => ({ ...prev, bot: "" }))
                            if (index.options.length < value.optionBot.length) setTimeout(() => {
                                setState(prev => ({ ...prev, ask: true }))
                            }, 2000);
                            else {
                                setText(prev => ({ ...prev, bot: "", exam: TextBotExample[count.textBotExample] }))
                                setState(prev => ({ ...prev, request: true }))
                            }
                        }

                    }
                }
            } else if (index.obj === 1) {
                if (countReply === 3 && state.again === false) {
                    setBoxChat(prev => ({ ...prev, boxChat3: [...boxChat.boxChat3, { user: "bot", value: messageBot }] }))
                    setTimeout(() => {
                        setState(prev => ({ ...prev, ask: true }))
                    }, 2000);
                } else if (state.again) {
                    setBoxChat(prev => ({ ...prev, boxChat3: [...boxChat.boxChat3, { user: "bot", value: messageBot }] }))
                    setText(prev => ({ ...prev, bot: "" }))
                    if (index.options.length < value.optionBot.length) setTimeout(() => {
                        setState(prev => ({ ...prev, ask: true }))
                    }, 2000);
                    else {
                        setText(prev => ({ ...prev, bot: "", exam: TextBotExample[count.textBotExample] }))
                        setState(prev => ({ ...prev, request: true }))
                    }
                }
            } else if (index.start === 1) {
                setBoxChat(prev => ({ ...prev, boxChat1: [...boxChat.boxChat1, { user: "bot", value: messageBot }] }))
                setText(prev => ({ ...prev, bot: "" }))
            }
        }
    };
    const handleAddTextBotExample = (messBot: string) => {
        if (index.obj === 0) {
            if (count.reply === 1) setBoxChat(prev => ({ ...prev, boxChat1: [...boxChat.boxChat1, { user: "exam", value: messBot }] }))
            else if (count.reply === 2) setBoxChat(prev => ({ ...prev, boxChat2: [...boxChat.boxChat2, { user: "exam", value: messBot }] }))
            else if (count.reply === 3) setBoxChat(prev => ({ ...prev, boxChat3: [...boxChat.boxChat3, { user: "exam", value: messBot }] }))
            else if (count.reply === 4) setBoxChat(prev => ({ ...prev, boxChat4: [...boxChat.boxChat4, { user: "exam", value: messBot }] }))
            else if (count.reply === 5) setBoxChat(prev => ({ ...prev, boxChat5: [...boxChat.boxChat5, { user: "exam", value: messBot }] }))
            else if (count.reply === 6) setBoxChat(prev => ({ ...prev, boxChat6: [...boxChat.boxChat6, { user: "exam", value: messBot }] }))
            else if (count.reply === 7) setBoxChat(prev => ({ ...prev, boxChat7: [...boxChat.boxChat7, { user: "exam", value: messBot }] }))
        } else if (index.obj === 1) {
            if (count.reply === 1) setBoxChat(prev => ({ ...prev, boxChat1: [...boxChat.boxChat1, { user: "exam", value: messBot }] }))
            else if (count.reply === 2) setBoxChat(prev => ({ ...prev, boxChat2: [...boxChat.boxChat2, { user: "exam", value: messBot }] }))// obj2 submit ; obj0 2exam, obj1 2exam 
            else if (count.reply >= 3) setBoxChat(prev => ({ ...prev, boxChat3: [...boxChat.boxChat3, { user: "exam", value: messBot }] }))
        }
        else if (index.obj === 2) {
            if (count.reply === 1) setBoxChat(prev => ({ ...prev, boxChat2: [...boxChat.boxChat2, { user: "exam", value: messBot }] }))
        }
        setCount(prev => ({ ...prev, textBotExample: count.textBotExample + 1 }))
        // setCountTextBotExample(countTextBotExample => countTextBotExample + 1)
    };
    const ref: any = useRef();
    const handleStart = (i: number) => {
        ref.current.focus()
        setIndex(prev => ({ ...prev, start: i }))
        setCount(prev => ({ ...prev, reply: count.reply + 1 }))
        // setCountReply(countReply => countReply + 1)
    }
    const handleObjective = (e: any, i: number) => {
        // lúc mới start vào
        if (count.reply < 1) {
            setIndex(prev => ({ ...prev, obj: i }));
            setText(prev => ({ ...prev, user: e.target.textContent }))
            setCount(prev => ({ ...prev, reply: count.reply + 1 }))
            // setCountReply(countReply => countReply + 1)
            if (i === 1) setCount(prev => ({ ...prev, textBotExample: count.textBotExample + 1 }))
            // setCountTextBotExample(countTextBotExample => countTextBotExample + 2)
        }
    }
    const handleSend = async () => {
        // lúc select&send xuất hiện lần đầu
        setState(prev => ({ ...prev, loading: true }))
        post(text.user, value.selected, "", "", "");
        setCount(prev => ({ ...prev, reply: count.reply + 1 }))
        // setCountReply(countReply => countReply + 1)
    }
    const handleYesNoButton = async (e: any, i: number) => {
        // Chọn yes hay no cũng dc
        if (count.YN < 0) setIndex(prev => ({ ...prev, YN: i })); //giữ index cho Yes/no lần 1
        else if (count.YN === 0) setIndex(prev => ({ ...prev, YN1: i }));//giữ index cho Yes/no lần 2
        setText(prev => ({ ...prev, user: e.target.textContent }));
        setCount(prev => ({ ...prev, reply: count.reply + 1 }))// setCountReply(countReply => countReply + 1)
        // Yes/No lần đầu, Khi chọn NO, chỉ tăng countYN khi chọn NO
        if (i === 1) setCount(prev => ({ ...prev, YN: count.YN + 1 })) //setCountYN(countYN => countYN + 1)
    }
    const handleTopic = (e: any, i: number) => {
        setIndex(prev => ({ ...prev, topic: i }));
        setText(prev => ({ ...prev, user: e.target.textContent }));
        setCount(prev => ({ ...prev, reply: count.reply + 1 }))//setCountReply(countReply => countReply + 1)
    }
    const handleOption = (e: any, i: number) => {
        setIndex(prev => ({ ...prev, options: [...index.options, i] }));
        setText(prev => ({ ...prev, user: e.target.textContent }));
        if (state.again === false) setCount(prev => ({ ...prev, reply: count.reply + 1 }))//setCountReply(countReply => countReply + 1);
    }
    const handleSendEmail = () => {
        axios.post('https://cms.dadsnetwork.co/api/extensions/emailContact', {
            email: value.email
        }).then(() => setBoxChat(prev => ({ ...prev, boxChatEnd: [...boxChat.boxChatEnd, { user: "exam", value: "Submit successfully, kindly wait few days, my team will contact you via email" }] }))
        ).catch(() => openNotification("top"))
    }
    const handleChat = async () => {
        await setText((prev => ({ ...prev, user: message })))
        post("", "", "", "", message)
        setMessage("")
        ref.current.focus()
    }
    const handleChatEnter = (e: any) => {
        if (e.key === "Enter") {
            e.preventDefault();
            document.getElementById("send")?.click();
        }
    }
    const handleSubmitEnter = (e: any) => {
        if (e.key === "Enter") {
            e.preventDefault();
            document.getElementById("sendEmail")?.click();
        }
    }
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
                    name="skills"
                    handleChange={handleChangeSelect}
                />
            </div>
            <div
                className="flex space-x-6  items-center bg-blue-500 hover:bg-blue-600 transition hover:text-white hover:cursor-pointer hover:scale-105  py-2 px-6 rounded-[16px]"
                onClick={(e) => {
                    if (count.reply === 1) handleSend()// chỉ cần .r= 1 trong case obj = 0 vì các case khác ko có SendButton
                    else if (count.reply === 3 && index.YN === 1 && count.YN === 0) {
                        handleSend()
                        setCount(prev => ({ ...prev, setCountTextBotExample: 1 }))//setCountTextBotExample(1)
                    }
                }}
            >
                <p>Send to AiLey</p> <img src={ButtonSendToBot} alt="buttonSend" className="w-[35px] h-[35px] flex items-center " />
            </div>
        </div>)
    const YesNoButtonComponent = ({ index }: { index: number }) => (
        <div className="flex justify-center items-center space-x-5">
            {YesNoButton.map((item, i) => {
                return (
                    <div
                        onClick={(e) => {
                            if (count.reply === 2) handleYesNoButton(e, i) // chọn Yes/No lần 1
                            if (count.reply === 4) handleYesNoButton(e, i) // chọn Yes/No lần 1
                        }}
                        key={i}
                        className={`w-[30%] flex justify-center items-center text-center rounded-[12px] p-6 hover:cursor-pointer
                        bg-[${index === i ? "#EBE1FF" : "#F2F4F5"}] 
                        text-[${index === i ? "#120360" : "primary"}] 
                        hover:bg-[${index < 0 ? "#EBE1FF" : "#F2F4F5"}]
                        hover:text-[${index < 0 ? "#120360" : "primary"}]
                            `}
                    >
                        {item}
                    </div>
                );
            })}
        </div>
    )
    const TopicComponent = <div className=" space-x-5 flex flex-wrap justify-center">
        {Topic.map((item, i) => {
            return (
                <div
                    onClick={(e) => {
                        if (count.reply === 3 && index.obj === 0 && index.YN === 0) handleTopic(e, i)
                        else if (count.reply === 1 && index.obj === 1) handleTopic(e, i)
                        else if (count.reply === 5 && index.YN === 1) handleTopic(e, i)
                    }}
                    key={i}
                    className={`w-fit max-w-[23%] md:max-w-[30%] md:min-w-[18%] fadeIn flex justify-center items-center text-center rounded-[12px] my-2 p-6 hover:cursor-pointer break-words
                        bg-[${index.topic === i ? "#EBE1FF" : "#F2F4F5"}] 
                        text-[${index.topic === i ? "#120360" : "primary"}] 
                        hover:bg-[${index.topic < 0 ? "#EBE1FF" : "#F2F4F5"}]
                        hover:text-[${index.topic < 0 ? "#120360" : "primary"}]`}
                >{item}
                </div>
            );
        })}
    </div>
    const OptionComponent = <div className={`space-x-5 flex flex-wrap justify-center `}>
        {value.optionBot.map((item: any, i: any) => {
            return (
                <button
                    disabled={state.btnDisable}
                    onClick={(e) => {
                        setState(prev => ({ ...prev, btnDisable: true }))
                        if (count.reply === 4 && index.YN === 0) handleOption(e, i)
                        else if (count.reply === 6 && index.YN === 1) handleOption(e, i)
                        else if (count.reply === 2 && index.obj === 1) handleOption(e, i)
                        else if (state.again) handleOption(e, i)
                    }}
                    key={i}
                    className={`fadeIn w-fit max-w-[20%] min-w-[20%] option flex justify-center items-center text-center rounded-[12px] my-2 p-6 first-letter:p-6 hover:cursor-pointer break-words
        bg-[${index.options.includes(i) ? "#EBE1FF" : "#F2F4F5"}] 
        text-[${index.options.includes(i) ? "#120360" : "primary"}] 
        hover:bg-[${!index.options.includes(i) && state.btnDisable === false && state.request === false ? "#EBE1FF" : "#F2F4F5"}]
        hover:text-[${!index.options.includes(i) && state.btnDisable === false && state.request === false ? "#120360" : "primary"}]
        `}>
                    {item}
                </button>
            );
        })}
    </div>
    const RequestEndComponent = <button
        onClick={() => {
            setIndex(prev => ({ ...prev, end: 0 }))
            setState(prev => ({ ...prev, showEnd: true }))
        }}
        className={`w-[30%] flex justify-center items-center text-center rounded-[12px] p-6 m-auto my-5 hover:cursor-pointer
            bg-[${index.end === 0 ? "#EBE1FF" : "#F2F4F5"}] 
            text-[${index.end === 0 ? "#120360" : "primary"}] 
            hover:bg-[${index.end < 0 ? "#EBE1FF" : "#F2F4F5"}]
            hover:text-[${index.end < 0 ? "#120360" : "primary"}]`}
    >
        Request a early demo
    </button>
    const ShowEndComponent = <div className="flex max-w-[500px] mx-auto space-x-5  mb-5 justify-center items-center">
        <input
            onKeyDown={(e) => handleSubmitEnter(e)}
            className='w-full min-w-[150px] px-[25px]  min-h-[38px] bg-[#EBE1FF] text-xl font-light rounded-[12px] shadow-lg border-none'
            placeholder='Enter your Email here'
            value={value.email}
            onChange={(e) => setValue(prev => ({ ...prev, email: e.target.value }))}
            type="email"
            id="inputEmail"
        />
        <button
            className='min-w-[90px] rounded-[12px] p-4 bg-[#FF008A] text-white hover:cursor-pointer '
            id="sendEmail"
            onClick={async (e) => {
                if (index.obj === 0) {
                    if (index.YN === 0 && count.reply === 5) handleSendEmail()
                    else if (index.YN === 1 && count.reply === 7) handleSendEmail()
                } else if (index.obj === 1 && count.reply === 3) handleSendEmail()
                else if (count.reply === 1 && index.obj === 2) handleSendEmail()
            }}
        >Submit</button>
    </div >
    const openNotification = (placement: NotificationPlacement) => {
        api.warning({
            message: `Notification`,
            description:
                "Your email is invalid",
            placement
        });
    };
    console.log("value", value.heightOptions)
    const AskAgain = () => {
        const handleOk = async () => {
            setState(prev => ({ ...prev, ask: false, again: true }))
        }

        const handleCancel = () => {
            setState(prev => ({ ...prev, ask: false, again: false, request: true }))
            setText(prev => ({ ...prev, bot: "", exam: TextBotExample[count.textBotExample] }))
        };

        return (

            <Modal
                closable={false}
                centered={true}
                open={state.ask}
                title="Notification"
                onOk={handleOk}
                onCancel={handleCancel}
                footer={[
                    <Button key="back" onClick={handleCancel}>
                        Go to end
                    </Button>,
                    <Button className="bg-[#1677ff]" key="submit" type="primary" onClick={handleOk}>
                        OK
                    </Button>,
                ]}
            >
                <p>Do you want to ask again ?</p>
            </Modal>

        )
    }
    useEffect(() => {
        if (count.reply > 0) handleAddTextBotExample(text.exam);
    }, [text.exam]);
    useEffect(() => {
        handleAddText(text.user, text.bot, count.reply);
    }, [text.user, text.bot]);
    // auto scroll end
    useEffect(() => {
        const box = document.getElementById("boxwrap")
        if (box) box.scrollTop = box.scrollHeight
    }, [document.getElementById("boxwrap")?.scrollHeight, boxChat])
    useEffect(() => {
        const box = document.getElementById("boxwrap")
        if (state.again && box && value.heightOptions) box.scrollTop = value.heightOptions
    }, [document.getElementById("boxwrap")?.scrollHeight, state.again])
    return (
        <div className="w-full h-[calc(100vh-67.5px-62px)] md:h-[calc(100vh-62px)] flex flex-col justify-between ">
            {contextHolder}
            <div className='md:h-[calc(100vh-108px-62px)] flex flex-col md:flex-row  '>
                {/* Avatar Bot */}
                <div className="w-full md:w-[40%] pt-6 px-8">
                    <p className="font-bold">Alley</p>
                    <p>AI Assistant</p>
                    <div className="flex flex-row">
                        <div className="w-[35%]"><img src={Bot} alt="bot" /></div>
                        <div className="w-[75%]">
                            <div className="bg-[#F2F4F5] p-4  text-primary text-base rounded-r-[14px] rounded-bl-[16px]">
                                <Typewriter
                                    options={{
                                        delay: 1
                                    }}
                                    onInit={(typewriter) => {
                                        typewriter.typeString(TextBotExam).callFunction(() => setState(prev => ({ ...prev, start: true }))).start()
                                    }}
                                />
                            </div>

                        </div>
                    </div>
                </div>
                {/* Box Chat`` */}
                {state.start && <div id="boxwrap" className='w-full md:w-[60%] p-8 transition overflow-y-scroll'>
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
                                        if (count.reply < 0) {
                                            if (i === 1) {
                                                await setState(prev => ({ ...prev, disabled: false }))
                                                await ref.current.focus()
                                            }
                                            handleStart(i)
                                        }
                                        // bấm bao nhiu lần chat now cũng auto focus
                                        if (i === 1 && index.start === 1) await ref.current.focus()
                                        // chọn chat nhưng chưa type thì vẫn chọn script đc
                                        if (message.length === 0 && index.start === 1 && i === 0) {
                                            setIndex(prev => ({ ...prev, start: i }))
                                            setCount(prev => ({ ...prev, reply: 0 }))//setCountReply(0)
                                            setState(prev => ({ ...prev, disabled: true }))
                                        }
                                    }}
                                    key={i}
                                    className={`w-[30%] flex justify-center items-center text-center rounded-[12px] p-6 hover:cursor-pointer 
                                    bg-[${index.start === i ? "#EBE1FF" : "#F2F4F5"}] text-[${index.start === i ? "#120360" : "primary"}] hover:bg-[${(count.reply < 1 && index.start !== 0) ? "#EBE1FF" : "#F2F4F5"}] hover:text-[${(count.reply < 1 && index.start !== 0) ? "#120360" : "primary"}]`}
                                >
                                    {item}
                                </button>
                            );
                        })}
                    </div>
                    <div id="boxchat" className='box-wrap'>
                        {/*Script start Choose Objective */}
                        {index.start === 0 && (
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
                                                onClick={(e) => {
                                                    handleObjective(e, i)
                                                }}
                                                key={i}
                                                className={`fadeIn w-[30%] min-h-[100px] flex justify-center items-center text-center rounded-[12px] p-6 hover:cursor-pointer bg-[${index.obj === i ? "#EBE1FF" : "#F2F4F5"}] text-[${index.obj === i ? "#120360" : "primary"}] hover:bg-[${index.obj < 0 ? "#EBE1FF" : "#F2F4F5"} hover:text-[${index.obj < 0 ? "#120360" : "primary"}]`}
                                            >
                                                {item}
                                            </div>
                                        );
                                    })}
                                </div>
                            </>
                        )}
                        {boxChat.boxChat1.map((reply, index) => <Reply key={index} id={index} data={reply} />)}
                        {boxChat.boxChat1.length >= 2 && index.obj === 0 && SelectAndSendComponent}
                        {state.index3 && (
                            <>
                                <div className="flex space-x-2">
                                    <img src={Bot} alt="" className="w-[50px] h-[50px] object-contain" />
                                    <div className="bg-[#F2F4F5]  max-w-[400px] h-[100%] p-4 mb-[10px] text-primary rounded-r-[16px] rounded-bl-[16px]">
                                        {`Please fill your information in the form below, team sale will contact you soon`}
                                    </div>
                                </div>
                                {ShowEndComponent}
                            </>
                        )}
                        {boxChat.boxChat1.length >= 2 && index.obj === 1 && TopicComponent}
                        {boxChat.boxChat2.map((reply, index) => <Reply key={index} id={index} data={reply} />)}
                        {index.obj === 0 && boxChat.boxChat2.length >= 2 && <YesNoButtonComponent index={index.YN} />}
                        {value.optionBot.length > 0 && index.obj === 1 && OptionComponent}
                        {boxChat.boxChat3.map((reply, index) => <Reply key={index} id={index} data={reply} />)}
                        {boxChat.boxChat3.length >= 2 && index.obj === 0 && index.YN === 0 && TopicComponent}
                        {boxChat.boxChat3.length >= 2 && index.obj === 0 && index.YN === 1 && SelectAndSendComponent}
                        {/* {boxChat3.length >= 3 && index.obj === 1 && RequestEndComponent} */}
                        {boxChat.boxChat3.length >= 3 && index.obj === 1 && state.request && RequestEndComponent}
                        {boxChat.boxChat3.length >= 3 && index.obj === 1 && <AskAgain />}
                        {boxChat.boxChat4.map((reply, index) => <Reply key={index} id={index} data={reply} />)}
                        {boxChat.boxChat4.length >= 2 && index.YN === 1 && <YesNoButtonComponent index={index.YN1} />}
                        {value.optionBot.length > 0 && index.YN === 0 && OptionComponent}
                        {boxChat.boxChat5.map((reply, index) => <Reply key={index} id={index} data={reply} />)}
                        {boxChat.boxChat5.length >= 2 && index.YN === 1 && TopicComponent}
                        {boxChat.boxChat5.length >= 2 && index.YN === 0 && state.request && RequestEndComponent}
                        {boxChat.boxChat6.map((reply, index) => <Reply key={index} id={index} data={reply} />)}
                        {boxChat.boxChat6.length >= 2 && index.YN === 1 && OptionComponent}
                        {boxChat.boxChat7.map((reply, index) => <Reply key={index} id={index} data={reply} />)}
                        {boxChat.boxChat7.length >= 3 && state.request && RequestEndComponent}
                        {/* input end in index012 */}
                        {state.showEnd && ShowEndComponent}
                        {boxChat.boxChatEnd.map((reply, index) => <Reply key={index} id={index} data={reply} />)}
                        {state.loading && <Loading />}
                        {state.ask && <AskAgain />}
                    </div>
                </div>}
            </div>

            {/* button feedback and reset */}
            <div className='boxchat-footer md:w-[70%] md:ml-auto mt-[10px]'>
                <div className="flex justify-end items-center space-x-5 mr-[15px]">
                    <div className="bg-[#FFD4E4] w-[150px] h-[50px] flex justify-center items-center text-center text-[primary] rounded-[12px] p-6 hover:cursor-pointer">Send to us feedback to improve App better</div>
                    <div
                        onClick={() => window.location.reload()}
                        className="bg-[blue] w-[150px] h-[50px] flex justify-center items-center text-center text-[white] rounded-[12px] p-6 hover:cursor-pointer">Reset the conversation </div>
                </div>
                {/* Input Chat */}
                <div className='w-full flex justify-center rounded-sm py-[10px] '>
                    <input
                        disabled={state.disabled}
                        ref={ref}
                        onKeyDown={e => handleChatEnter(e)}
                        className='w-full bg-[#F2F4F5] px-[20px] py-[10px] rounded-[20px]'
                        placeholder='Type something to chat with Alley...'
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                    />
                    <button
                        id="send"
                        className='h-[38px] text-2xl p-3 text-[blue] rounded-[20px] hover:bg-[blue] hover:text-white'
                        onClick={(e) => {
                            e.preventDefault()
                            setCount(prev => ({ ...prev, reply: count.reply + 1 })) //setCountReply(countReply => countReply + 1)
                            if (count.reply >= 0) handleChat()
                            setState(prev => ({ ...prev, disabled: false }))
                        }}
                    >SEND</button>
                </div>
            </div>

        </div >
    );
};

export default Assistant;

// export const a = 1