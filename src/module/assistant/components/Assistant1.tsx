

import { useEffect, useRef, useState } from "react";
import Typewriter from 'typewriter-effect';
import { notification } from "antd";
import type { NotificationPlacement } from 'antd/es/notification/interface';
import axios from "axios";
import { SelectInput, TypingDots, Reply } from "components";
import Bot from "../../../assets/image/Bot.png";
import ButtonSendToBot from "../../../assets/image/ButtonSendToBot.png";
import User from "../../../assets/image/User.png";
import { API_URL } from "../constants";
import { SKILLS, ArrObjectives, TextBotExam, TextBotExample, Topic, YesNoButton, YesNoButtonEnd, YesNoButtonStart, TextBotExamYN } from 'constant';


// gom state, ứng dụng spread 
const Assistant = () => {
    const [index, setIndex] = useState<{ start: number, obj: number, YN: number, YN1: number, topic: number, options: number, end: number }>({
        start: -1,
        obj: -1,
        YN: -1,
        YN1: -1,
        topic: -1,
        options: -1,
        end: -1,
    })
    const [text, setText] = useState<{ user: string, bot: string, exam: string }>({
        user: "",
        bot: "",
        exam: "",
    })
    const [value, setValue] = useState<{ selected: string, message: string, email: string, optionBot: Array<string> }>({
        selected: "Graphic & design",
        message: "", // value từ user, value từ input
        email: "",
        optionBot: []
    })
    const [state, setState] = useState<{ index3: boolean, showEnd: boolean }>({
        index3: false,
        showEnd: false
    })
    const [loading, setLoading] = useState<boolean>(false)
    const [disabled, setDisabled] = useState<boolean>(true)
    const [countReply, setCountReply] = useState<number>(-1);// sau 1 click count+=1
    const [countYN, setCountYN] = useState<number>(-1)// dùng để đếm caseYN
    const [countTextBotExample, setCountTextBotExample] = useState<number>(0);
    const [message, setMessage] = useState<string>("")
    const [boxChat1, setBoxChat1] = useState<Array<any>>([])
    const [boxChat2, setBoxChat2] = useState<Array<any>>([])
    const [boxChat3, setBoxChat3] = useState<Array<any>>([])
    const [boxChat4, setBoxChat4] = useState<Array<any>>([])
    const [boxChat5, setBoxChat5] = useState<Array<any>>([])
    const [boxChat6, setBoxChat6] = useState<Array<any>>([])
    const [boxChat7, setBoxChat7] = useState<Array<any>>([])
    const [boxChatEnd, setBoxChatEnd] = useState<Array<any>>([])

    const [api, contextHolder] = notification.useNotification();
    // console.log('index:', index)
    // console.log('text:', text)
    // console.log('boxChat1:', boxChat1)
    // console.log('boxChat2:', boxChat2)
    // console.log('boxChat3:', boxChat3)
    // console.log('boxChat4:', boxChat4)
    // console.log('boxChat5:', boxChat5)
    // console.log('boxChat6:', boxChat6)
    // console.log('boxChat7:', boxChat7)
    // console.log('boxChatEnd:', boxChatEnd)
    // // console.log('textBot:', textBot)
    // console.log('message:', message)
    console.log('countReply', countReply)
    // console.log('countYN:', countYN)
    // console.log('countTextBotExample:', countTextBotExample)
    // console.log('value:', value)
    const post = async (act: string, skill: string, topic: string, question: string, message: string) => {
        setText(prev => ({ ...prev, user: "" }))
        setLoading(true)
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
                setValue(prev => ({ ...prev, optionBot: source.data.data }))
            }
            // setValue(prev => ({ ...prev, optionBot: ["option1", "option2", "option3", "option4", "option5", "option6", "option7", "option8", "option9", "option10", "option11", "option12"] }))

        }
        if (question) {
            const _question = encodeURIComponent(question)
            const source = await axios.get(`${API_URL}?promptQuestion=${_question}`)
            if (source) {
                setText(prev => ({ ...prev, bot: source.data.data }))
            }
            // setText(prev => ({ ...prev, bot: "Data question" }))
        }
        if (message) {
            const _message = encodeURIComponent(message)
            const source = await axios.get(`${API_URL}?customScript=${_message}`)
            if (source) {
                setText(prev => ({ ...prev, bot: source.data.data }))
                // setText(prev => ({ ...prev, bot: "Chatting" }))
            }
            setDisabled(false)
            ref.current.focus()// auto focus sau khi bot reply
        }
        setLoading(false)
    };

    const handleChangeSelect = (e: any) => {
        setValue(prev => ({ ...prev, selected: e.target.value }));
    };
    const handleAddText = async (messageUser: string, messageBot: string, countReply: number) => {
        if (messageUser) {
            if (index.obj === 0) {
                if (countReply === 1) {
                    setBoxChat1(prev => ([...prev, { user: "user", value: messageUser }]))
                    setText(prev => ({ ...prev, exam: TextBotExample[countTextBotExample] }))
                } else if (countReply === 3) {
                    setBoxChat3(prev => ([...prev, { user: "user", value: messageUser }]))
                    if (index.YN === 0) {
                        setText(prev => ({ ...prev, exam: TextBotExample[countTextBotExample] }))
                    } else if (index.YN === 1) {
                        setText(prev => ({ ...prev, exam: TextBotExamYN[countYN] }))
                    }
                } else if (countReply === 4) {
                    if (index.YN === 0) {
                        setBoxChat4(prev => ([...prev, { user: "user", value: messageUser }]))
                        setText(prev => ({ ...prev, exam: TextBotExample[countTextBotExample] }))
                        post("", "", messageUser, "", "")
                    }
                } else if (countReply === 5) {
                    if (index.YN === 0) {
                        setBoxChat5(prev => ([...prev, { user: "user", value: messageUser }]))
                        post("", "", "", messageUser, "")
                    }
                    else if (index.YN === 1) {
                        setBoxChat5(prev => ([...prev, { user: "user", value: messageUser }]))
                        if (index.YN1 === 0) {
                            setText(prev => ({ ...prev, exam: TextBotExample[countTextBotExample] }))
                        } else if (index.YN1 === 1) {
                            setText(prev => ({ ...prev, exam: TextBotExamYN[countYN] }))
                        }
                    }
                } else if (countReply === 6) {
                    setBoxChat6(prev => ([...prev, { user: "user", value: messageUser }]))
                    setText(prev => ({ ...prev, exam: TextBotExample[countTextBotExample] }))
                    post("", "", messageUser, "", "")
                } else if (countReply === 7) {
                    if (index.YN === 1) {
                        setBoxChat7(prev => ([...prev, { user: "user", value: messageUser }]))
                        post("", "", "", messageUser, "")
                    }
                }
            } else if (index.obj === 1) {
                if (countReply === 1) {
                    setBoxChat1(prev => ([...prev, { user: "user", value: messageUser }]))
                    setText(prev => ({ ...prev, exam: TextBotExample[countTextBotExample] }))
                } else if (countReply === 2) {
                    setBoxChat2(prev => ([...prev, { user: "user", value: messageUser }]))
                    setText(prev => ({ ...prev, exam: TextBotExample[countTextBotExample] }))
                    post("", "", messageUser, "", "")
                } else if (countReply === 3) {
                    setBoxChat3(prev => ([...prev, { user: "user", value: messageUser }]))
                    post("", "", "", messageUser, "")
                    setText(prev => ({ ...prev, exam: TextBotExample[countTextBotExample] }))
                }
            } else if (index.obj === 2) {
                if (countReply === 1) {
                    setBoxChat1(prev => ([...prev, { user: "user", value: messageUser }]))
                    setState(prev => ({ ...prev, index3: true }))
                }
            } else if (index.start === 1) setBoxChat1(prev => ([...prev, { user: "user", value: messageUser }]))
        }
        if (messageBot) {
            if (index.obj === 0) {
                if (countReply === 2) {
                    setBoxChat2(prev => ([...prev, { user: "bot", value: messageBot }]))
                    setText(prev => ({ ...prev, bot: "", exam: TextBotExample[countTextBotExample] }))
                } else if (countReply === 4) {
                    if (index.YN === 0) {
                    } else if (index.YN === 1) {
                        setBoxChat4(prev => ([...prev, { user: "bot", value: messageBot }]))
                        setText(prev => ({ ...prev, bot: "", exam: TextBotExample[countTextBotExample] }))
                    }
                } else if (countReply === 5) {
                    if (index.YN === 0) {//chỗ reply sau opntion
                        setCountReply(countReply => countReply + 1)
                        setBoxChat5(prev => ([...prev, { user: "bot", value: messageBot }]))
                        setText(prev => ({ ...prev, bot: "", exam: TextBotExample[countTextBotExample] }))
                    }
                } else if (countReply === 7) {
                    if (index.YN === 1) {
                        setCountReply(countReply => countReply + 1)
                        setBoxChat7(prev => ([...prev, { user: "bot", value: messageBot }]))
                        setText(prev => ({ ...prev, bot: "", exam: TextBotExample[countTextBotExample] }))

                    }
                }
            } else if (index.obj === 1) {
                if (countReply === 3) {
                    setBoxChat3(prev => ([...prev, { user: "bot", value: messageBot }]))
                }

            } else if (index.start === 1) {
                setBoxChat1(prev => ([...prev, { user: "bot", value: messageBot }]))
                setText(prev => ({ ...prev, bot: "" }))
            }
        }
    };
    const handleAddTextBotExample = (messBot: string) => {
        if (index.obj === 0) {
            if (countReply === 1) setBoxChat1(prev => ([...prev, { user: "exam", value: messBot }]))
            else if (countReply === 2) setBoxChat2(prev => ([...prev, { user: "exam", value: messBot }]))
            else if (countReply === 3) setBoxChat3(prev => ([...prev, { user: "exam", value: messBot }]))
            else if (countReply === 4) setBoxChat4(prev => ([...prev, { user: "exam", value: messBot }]))
            else if (countReply === 5) setBoxChat5(prev => ([...prev, { user: "exam", value: messBot }]))
            else if (countReply === 6) setBoxChat6(prev => ([...prev, { user: "exam", value: messBot }]))
            else if (countReply === 8) setBoxChat7(prev => ([...prev, { user: "exam", value: messBot }]))
        } else if (index.obj === 1) {
            if (countReply === 1) setBoxChat1(prev => ([...prev, { user: "exam", value: messBot }]))
            else if (countReply === 2) setBoxChat2(prev => ([...prev, { user: "exam", value: messBot }]))// obj2 submit ; obj0 2exam, obj1 2exam 
            else if (countReply === 3) setBoxChat3(prev => ([...prev, { user: "exam", value: messBot }]))
        }
        else if (index.obj === 2) {
            if (countReply === 1) setBoxChat2(prev => ([...prev, { user: "exam", value: messBot }]))
        }
        setCountTextBotExample(countTextBotExample => countTextBotExample + 1)
    };
    const ref: any = useRef();
    const refInput: any = useRef();
    const handleStart = (i: number) => {
        ref.current.focus()
        setIndex(prev => ({ ...prev, start: i }))
        setCountReply(countReply => countReply + 1)
    }
    const handleObjective = (e: any, i: number) => {
        // lúc mới start vào
        if (countReply < 1) {
            setIndex(prev => ({ ...prev, obj: i }));
            setText(prev => ({ ...prev, user: e.target.textContent }))
            setCountReply(countReply => countReply + 1)
            if (i === 1) setCountTextBotExample(countTextBotExample => countTextBotExample + 2)
        }
    }
    const handleSend = async () => {
        // lúc select&send xuất hiện lần đầu
        setLoading(true)
        post(text.user, value.selected, "", "", "");
        setCountReply(countReply => countReply + 1)
    }
    const handleYesNoButton = async (e: any, i: number) => {
        // Chọn yes hay no cũng dc
        if (countYN < 0) setIndex(prev => ({ ...prev, YN: i })); //giữ index cho Yes/no lần 1
        else if (countYN === 0) setIndex(prev => ({ ...prev, YN1: i }));//giữ index cho Yes/no lần 2
        setText(prev => ({ ...prev, user: e.target.textContent }));
        setCountReply(countReply => countReply + 1)
        // Yes/No lần đầu, Khi chọn NO, chỉ tăng countYN khi chọn NO
        if (i === 1) setCountYN(countYN => countYN + 1)
    }
    const handleTopic = (e: any, i: number) => {
        setIndex(prev => ({ ...prev, topic: i }));
        setText(prev => ({ ...prev, user: e.target.textContent }));
        setCountReply(countReply => countReply + 1)
    }
    const handleOption = (e: any, i: number) => {
        setIndex(prev => ({ ...prev, options: i }));
        setText(prev => ({ ...prev, user: e.target.textContent }));
        setCountReply(countReply => countReply + 1);
    }
    const handleSendEmail = () => {
        axios.post('https://cms.dadsnetwork.co/api/extensions/emailContact', {
            email: value.email
        }).then(() => setBoxChatEnd(prev => ([...prev, { user: "exam", value: "Submit successfully, kindly wait few days, my team will contact you via email" }]))
        ).catch(() => openNotification("top"))
    }
    const handleChat = async () => {
        await setText((prev => ({ ...prev, user: message })))
        post("", "", "", "", message)
        setMessage("")
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
                    if (countReply === 1) handleSend()// chỉ cần countReply = 1 trong case obj = 0 vì các case khác ko có SendButton
                    else if (countReply === 3 && index.YN === 1 && countYN === 0) {
                        handleSend()
                        setCountTextBotExample(1)
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
                            if (countReply === 2) handleYesNoButton(e, i) // chọn Yes/No lần 1
                            if (countReply === 4) handleYesNoButton(e, i) // chọn Yes/No lần 1
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
    const TopicComponent = <div className=" space-x-5 grid-cols-5 flex-wrap grid gap-4 grid-rows-2">
        {Topic.map((item, i) => {
            return (
                <div
                    onClick={(e) => {
                        if (countReply === 3 && index.obj === 0 && index.YN === 0) handleTopic(e, i)
                        else if (countReply === 1 && index.obj === 1) handleTopic(e, i)
                        else if (countReply === 5 && index.YN === 1) handleTopic(e, i)
                    }}
                    key={i}
                    className={`fadeIn flex justify-center items-center text-center rounded-[12px] p-6 hover:cursor-pointer w-full
                        bg-[${index.topic === i ? "#EBE1FF" : "#F2F4F5"}] 
                        text-[${index.topic === i ? "#120360" : "primary"}] 
                        hover:bg-[${index.topic < 0 ? "#EBE1FF" : "#F2F4F5"}]
                        hover:text-[${index.topic < 0 ? "#120360" : "primary"}]`}
                >{item}
                </div>
            );
        })}
    </div>
    const OptionComponent = <div className={`mx-auto grid grid-cols-4 gap-6 grid-rows-${value.optionBot.length / 4} `}>
        {value.optionBot.map((item: any, i: any) => {
            return (
                <button
                    onClick={(e) => {
                        if (countReply === 4 && index.YN === 0) handleOption(e, i)
                        else if (countReply === 6 && index.YN === 1) handleOption(e, i)
                        else if (countReply === 2 && index.obj === 1) handleOption(e, i)
                    }}
                    key={i}
                    className={`fadeIn option w-[full] flex justify-center items-center text-center rounded-[12px] p-6 hover:cursor-pointer
        bg-[${index.options === i ? "#EBE1FF" : "#F2F4F5"}] 
        text-[${index.options === i ? "#120360" : "primary"}] 
        hover:bg-[${index.options < 0 ? "#EBE1FF" : "#F2F4F5"}]
        hover:text-[${index.options < 0 ? "#120360" : "primary"}]
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
            className='w-full min-w-[150px] px-[25px]  min-h-[38px] bg-[#EBE1FF] text-xl font-light rounded-[12px] shadow-lg border-none'
            placeholder='Enter your Email here'
            value={value.email}
            onChange={(e) => setValue(prev => ({ ...prev, email: e.target.value }))}
            type="email"
            ref={refInput}
        />
        <button
            className='min-w-[90px] rounded-[12px] p-4 bg-[#FF008A] text-white hover:cursor-pointer '
            id="sendEmail"
            onClick={async (e) => {
                if (index.obj === 0) {
                    if (index.YN === 0 && countReply === 6) handleSendEmail()
                    else if (index.YN === 1 && countReply === 8) handleSendEmail()
                } else if (index.obj === 1 && countReply === 3) handleSendEmail()
                else if (countReply === 1 && index.obj === 2) handleSendEmail()
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
    useEffect(() => {
        const handleEnter = (event: any) => {
            if (event.key === "Enter") {
                event.preventDefault();
                document.getElementById("send")?.click();
            }
        };
        ref.current?.addEventListener('keydown', handleEnter);
        return () => {
            ref.current?.removeEventListener('keydown', handleEnter)
        }
    }, [])
    useEffect(() => {
        const handleEnterEmail = (event: any) => {
            if (event.key === "Enter") {
                console.log("EventE", event)
                event.preventDefault();
                document.getElementById("sendEmail")?.click();
            }
        };
        refInput.current?.addEventListener('keydown', handleEnterEmail);
        return () => {
            refInput.current?.removeEventListener('keydown', handleEnterEmail)
        }
    }, [])
    useEffect(() => {
        if (countReply > 0) handleAddTextBotExample(text.exam);
    }, [text.exam]);
    useEffect(() => {
        handleAddText(text.user, text.bot, countReply);
    }, [text.user, text.bot]);
    // auto scroll end
    useEffect(() => {
        const boxchat = document.getElementById('boxchat')
        const boxwrap = document.getElementById('boxwrap')
        const sH = boxchat?.scrollHeight
        // const cH = boxchat?.clientHeight
        // if (sH && cH && sH > cH) 
        if (sH && sH > 197) boxwrap?.scrollTo(0, boxchat?.scrollHeight);

    }, [document.getElementById('boxchat')?.scrollHeight])
    return (
        <div className="w-full h-[calc(100vh-67.5px-62px)] md:h-[calc(100vh-62px)] flex flex-col justify-between overflow-y-scroll">
            {contextHolder}
            <div id="boxwrap"
                className='w-full md:h-[calc(100vh-67.5px-62px)] flex flex-col md:flex-row overflow-y-scroll'>
                {/* Avatar Bot */}
                <div className="w-full md:w-[40%] py-6 px-8">
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
                <div className='w-full p-8 transition '>
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
                                        if (countReply < 0) {
                                            if (i === 1) {
                                                await setDisabled(false)
                                                await ref.current.focus()
                                            }
                                            handleStart(i)
                                        }
                                        // bấm bao nhiu lần chat now cũng auto focus
                                        // if (i === 1 && index.start === 1) {
                                        //     await setDisabled(false)
                                        //     await ref.current.focus()
                                        // }
                                        // chọn chat nhưng chưa type thì vẫn chọn script đc
                                        if (message.length === 0 && index.start === 1) {
                                            setIndex(prev => ({ ...prev, start: i }))
                                            setCountReply(0)
                                        }
                                    }}
                                    key={i}
                                    className={`w-[30%] flex justify-center items-center text-center rounded-[12px] p-6 hover:cursor-pointer bg-[${index.start === i ? "#EBE1FF" : "#F2F4F5"}] text-[${index.start === i ? "#120360" : "primary"}] hover:bg-[${(countReply < 1 && index.start !== 0) ? "#EBE1FF" : "#F2F4F5"}] hover:text-[${(countReply < 1 && index.start !== 0) ? "#120360" : "primary"}]`}
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
                        {boxChat1.map((reply, index) => <Reply key={index} id={index} data={reply} />)}
                        {boxChat1.length >= 2 && index.obj === 0 && SelectAndSendComponent}
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
                        {boxChat1.length >= 2 && index.obj === 1 && TopicComponent}
                        {boxChat2.map((reply, index) => <Reply key={index} id={index} data={reply} />)}
                        {index.obj === 0 && boxChat2.length >= 2 && <YesNoButtonComponent index={index.YN} />}
                        {value.optionBot.length > 0 && index.obj === 1 && OptionComponent}
                        {boxChat3.map((reply, index) => <Reply key={index} id={index} data={reply} />)}
                        {boxChat3.length >= 2 && index.obj === 0 && index.YN === 0 && TopicComponent}
                        {boxChat3.length >= 2 && index.obj === 0 && index.YN === 1 && SelectAndSendComponent}
                        {boxChat3.length >= 3 && index.obj === 1 && RequestEndComponent}
                        {boxChat4.map((reply, index) => <Reply key={index} id={index} data={reply} />)}
                        {boxChat4.length >= 2 && index.YN === 1 && <YesNoButtonComponent index={index.YN1} />}
                        {value.optionBot.length > 0 && index.YN === 0 && OptionComponent}
                        {boxChat5.map((reply, index) => <Reply key={index} id={index} data={reply} />)}
                        {boxChat5.length >= 2 && index.YN === 1 && TopicComponent}
                        {boxChat6.map((reply, index) => <Reply key={index} id={index} data={reply} />)}
                        {boxChat6.length >= 2 && index.YN === 1 && OptionComponent}
                        {boxChat6.length >= 1 && index.YN === 0 && RequestEndComponent}
                        {boxChat7.map((reply, index) => <Reply key={index} id={index} data={reply} />)}
                        {boxChat7.length >= 3 && RequestEndComponent}
                        {/* input end in index012 */}
                        {state.showEnd && ShowEndComponent}
                        {boxChatEnd.map((reply, index) => <Reply key={index} id={index} data={reply} />)}
                        {loading && <Loading />}
                    </div>
                </div>
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
                        disabled={disabled}
                        ref={ref}
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

// export const a = 1