import Typewriter from 'typewriter-effect';
import { useState } from 'react';
import { SKILLS } from "constant/skills";
import { SelectInput } from "components";
import Bot from "../../../assets/image/Bot.png";
import ButtonSendToBot from "../../../assets/image/ButtonSendToBot.png";
import User from "../../../assets/image/User.png";
import { ArrObjectives, TextBotExam } from 'constant';
import { TypingDots } from 'components';


export interface IAssistantView {
    loading: boolean

}
const AssistantView = ({ loading }: IAssistantView) => {
    const [bot, setBot] = useState<number>(0)
    return (
        <div className="w-full h-[92vh] flex  ">
            {/* Avatar Bot */}
            <div className="w-[40%] border-[#FF008A] border-[0.5px] py-6 px-8">
                <p className="font-bold">Alley</p>
                <p>AI Assistant</p>
                <div className="flex flex-row">
                    <div className="w-[35%]"><img src={Bot} /></div>

                    <div className="w-[75%]">
                        <div className="bg-[#F2F4F5] p-4 mb-[20px] text-primary text-base rounded-r-[14px] rounded-bl-[16px]"
                        >
                            <Typewriter
                                options={{
                                    delay: 50
                                }}
                                onInit={(typewriter) => {
                                    typewriter.typeString(TextBotExam[0]).callFunction(() => {
                                        setBot(i => i + 1)
                                    }).start()
                                }}
                            />
                        </div>
                        {bot >= 1 && (
                            <div className="bg-[#F2F4F5] p-4 mb-[20px] text-primary text-base rounded-r-[14px] rounded-bl-[16px]"
                            >
                                <Typewriter
                                    options={{
                                        delay: 50
                                    }}

                                    onInit={(typewriter) => {
                                        typewriter.typeString(TextBotExam[bot]).callFunction(() => {
                                            setBot(i => i + 1)
                                        }).start()
                                    }}
                                />
                            </div>

                        )}
                        {bot >= 2 && (
                            <div className="bg-[#F2F4F5] p-4 mb-[20px] text-primary text-base rounded-r-[14px] rounded-bl-[16px]"
                            >
                                <Typewriter
                                    options={{
                                        delay: 50
                                    }}
                                    onInit={(typewriter) => {
                                        typewriter.typeString(TextBotExam[bot]).start()
                                    }}
                                />
                            </div>

                        )}

                    </div>
                </div>
            </div>
            {/* Box Chat`` */}
            <div className="w-full max-h-screen border-[#FF008A] border-[0.5px] flex flex-col ">
                <div id="boxchat" className='box-wrap h-full p-8 transition relative overflow-y-scroll overflow-x-hidden'>
                    {/* Bot */}
                    <div className="flex space-x-2">
                        <img src={Bot} alt="" className="w-[30px] h-[50px] object-contain" />
                        <div className="bg-[#F2F4F5]  max-w-[550px] h-[100%] p-4  text-primary rounded-r-[16px] rounded-bl-[16px]">
                            {`  Hi Dear,\n How is going on today?`}
                        </div>
                    </div>
                    {/* User */}
                    <div className="flex space-x-2 justify-end">
                        <div className="bg-[blue]  max-w-[550px] h-[100%] p-4  text-white rounded-tr-[16px] rounded-l-[16px]">
                            {`  Good`}
                        </div>
                        <img src={User} alt="" className="w-[50px] h-[50px] object-contain" />
                    </div>
                    {/* Bot */}
                    <div className="flex space-x-2">
                        <img src={Bot} alt="" className="w-[30px] h-[50px] object-contain" />
                        <div className="bg-[#F2F4F5]  max-w-[400px] h-[100%] p-4 mb-[10px] text-primary rounded-r-[16px] rounded-bl-[16px]">
                            {`You are a beautiful & cute girl, I think everything comes to you whether it's good or bad, you’re also smile to receive it.`}
                        </div>
                    </div>
                    <div className="flex space-x-2">
                        <img src={Bot} alt="" className="w-[30px] h-[50px] object-contain" />
                        <div className="bg-[#F2F4F5]  max-w-[400px] h-[100%] p-4 mb-[10px] text-primary rounded-r-[16px] rounded-bl-[16px]">
                            {`I know you have some concerns that need me support, let's tell me now.`}
                        </div>
                    </div>
                    {/* Choose Objective */}
                    <p className="text-primary">Choose objectives</p>
                    <div className="flex justify-between mt-10 space-x-4">
                        {ArrObjectives.map((item, i) => {
                            return (
                                <div
                                    // onClick={(e) => {
                                    //     if (countReply < 1) {
                                    //         setIndex(i);
                                    //         handleChangeText(e);
                                    //         setCountReply((countReply) => countReply + 1);
                                    //     }
                                    // }}
                                    key={i}
                                // className={`bg-[${index === i ? "blue" : "#F2F4F5"
                                //     }] w-[30%] min-h-[100px] flex justify-center items-center text-center text-[${index === i ? "white" : "primary"
                                //     }] rounded-[12px] p-6 hover:cursor-pointer`}
                                >
                                    {item}
                                </div>
                            );
                        })}
                    </div>
                    <div id={"0"} className={""}></div>
                    {loading && (
                        <div className="flex space-x-2 my-[10px]">
                            <img src="/static/media/Bot.e33d536bdd412e738363.png" alt="" className="w-[30px] h-[50px] object-contain" />
                            <div className="bg-[#F2F4F5]  max-w-[400px] h-[100%] p-4 mb-[10px] text-primary rounded-r-[16px] rounded-bl-[16px]">
                                <TypingDots />
                            </div>
                        </div>)
                    }
                </div>
                {/* <div className="flex  items-center space-x-5 absolute bottom-2 right-8">
                        <div className="bg-[#FFD4E4] w-[205px] h-[60px] flex justify-center items-center text-center text-[primary] rounded-[12px] p-6 hover:cursor-pointer">Send to us feedback to improve App better</div>
                        <div className="bg-[blue] w-[205px] h-[60px] flex justify-center items-center text-center text-[white] rounded-[12px] p-6 hover:cursor-pointer">Reset the conversation </div>
                    </div> */}
                {/* Text Box */}
                <div className='w-full flex justify-center rounded-sm relative'>
                    <input className='w-full bg-[#F2F4F5] px-[20px] py-[10px]'
                        placeholder='Type something to chat with Alley...' />
                    <button className='absolute h-[38px] top-0 right-0 text-2xl text-white p-3 bg-[blue]'
                        type='submit'>SEND</button>
                </div>
            </div>
        </div>
    );
}

export default AssistantView;