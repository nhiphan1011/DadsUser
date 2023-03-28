// import botApi from "api/botApi";
// import { SelectInput } from "components";
// import { LOCATION } from "constant/location";
// import { SKILLS } from "constant/skills";
// import { useEffect, useRef, useState } from "react";
// import Bot from "../../assets/image/Bot.png";
// import ButtonSendToBot from "../../assets/image/ButtonSendToBot.png";
// import User from "../../assets/image/User.png";
// const ArrObjectives = [
//     "I want to increase my extra income, but I have no ideas to do anythings matching with me. Let give me more advice",
//     "I want to increase my extra income, I need you to give me advice in a specific field",
//     "I want to increase my extra income, I have started before, but I haven't earned money. I want to find solutions in a specific field",
//     "I want to request creating an AI assistant which is personalized to support for my work or my business",
// ];
// const TextBotExample = [
//     "Thanks for asking me, I’m really glad to support you. Kindly give me more information to understand your capacity, so that I can analyze and give you suitable advice",
//     "Have you found your expected answer yet? ",
//     "Let's choose the topic that you want ",
//     "Here some questions you can ask me!!",
//     `Based on your skills and interests, we will help you increase your earning easily and effectively by designing a Earning Journey personalized for you. 
//   They are guidelines and supporting tools that can help you achieve your target. Kindly choose a field you want to add in your Journey.`,
//     `How do you think about your Earning Journey?`,
//     `Thank you! As your AI assistant, I am designed to be knowledgeable and helpful in a variety of topics. If you have any more questions, feel free to ask!`,
// ];
// const ArrObjectives1 = [
//     "Your daily free time",
//     "Your location",
//     "Your interest",
//     "Your skills",
//     "Are you interested in playing games"
// ]
// const YesNoButton = ["Yes, I want to ask in detail", "No, I want to ask again"];
// const YesNoButtonEnd = [
//     "Yes, I have found the expected answer. I like to talk with you more",
//     "No, I want another Earning Journey suggestion",
// ];
// const Topic = [
//     "Affiliate Marketing",
//     "Freelancing",
//     "Sell products online",
//     "Games",
//     "Start a business",
//     " Negotiate salary",
//     "Career Advancement",
//     "Improve Education and Skills",
//     "Financial control",
// ];
// const Assistant = () => {
//     const [countReply, setCountReply] = useState<number>(0);
//     const [index, setIndex] = useState<number>();
//     const [text, setText] = useState<string>("");
//     const [textBot, setTextBot] = useState<string | any>("");
//     const [textBotExample, setTextBotExample] = useState<string>("");
//     const [countTextBotExample, setCountTextBotExample] = useState<number>(0);
//     const [selected, setSelected] = useState<string>("Graphic & design");
//     const [textOptionBot, setTextOptionBot] = useState<any>([]);



//     const post = async (act: string, skill: string, topic: string) => {
//         setCountReply((countReply) => countReply + 1);
//         const source = new EventSource(`https://cms.dadsnetwork.co/api/aiLeyBot?act='${act}'&skill="${skill}"`);
//         source.onmessage = (e: any) => {
//             setTextBot(JSON.parse(e.data));
//             source.close();
//         };
//     };
//     const handleChangeSelect = (e: any) => {
//         setSelected(e.target.value);
//     };
//     const handleChangeText = async (e: any) => {
//         setText(e.target.textContent);
//     };
//     const handleAddText = async (messageUser: string, messageBot: string, countReply: number) => {
//         if (messageUser) {
//             if (countTextBotExample === 4) {
//                 var source = new EventSource(`https://cms.dadsnetwork.co/api/aiLeyBot?promptQuestion=${messageUser}`);
//                 source.onmessage = (e: any) => {
//                     setTextBot(JSON.parse(e.data));
//                     source.close();
//                 };
//             }
//             const textnode = document.createTextNode(messageUser);
//             const elementDiv = document.createElement("div");
//             const elementDivChildren = document.createElement("div");
//             const nodeImgUser = document.createElement("img");
//             nodeImgUser.setAttribute("src", User);
//             nodeImgUser.setAttribute("class", `w-[50px] h-[50px] object-contain`);
//             elementDivChildren.setAttribute(
//                 "class",
//                 `max-w-[550px] h-[100%] p-4  text-white bg-[blue]  rounded-tr-[16px] rounded-l-[16px] my-5`
//             );
//             elementDivChildren.appendChild(textnode);
//             elementDiv.setAttribute("class", "flex space-x-2 justify-end ");
//             elementDiv.setAttribute("id", `${countReply}`);
//             document.getElementsByClassName("box-wrap")[0].appendChild(elementDiv);
//             document.getElementById(`${countReply}`)?.appendChild(elementDivChildren);
//             document.getElementById(`${countReply}`)?.appendChild(nodeImgUser);
//             if (countReply > 2) setText("");
//             if (countTextBotExample < 4 || countTextBotExample > 5) {
//                 setTextBotExample(TextBotExample[countTextBotExample]);
//             }
//         }
//         if (messageBot) {
//             const a = Object.values(messageBot);
//             a.map((item, index) => {
//                 setTextBotExample(TextBotExample[countTextBotExample]);

//                 const botDiv = document.createElement("div");
//                 const elementBotDivChildren = document.createElement("div");
//                 const nodeImgBot = document.createElement("img");
//                 elementBotDivChildren.setAttribute(
//                     "class",
//                     ` bg-[#F2F4F5] justify-start  p-4  text-primary rounded-r-[16px] rounded-bl-[16px] max-w-[60%]`
//                 );
//                 nodeImgBot.setAttribute("src", Bot);
//                 nodeImgBot.setAttribute("class", `w-[50px] h-[50px] object-contain`);
//                 botDiv.setAttribute("id", `${countReply + index + 1}`);
//                 botDiv.setAttribute("class", `flex space-x-2 my-5 `);
//                 const textnode = document.createTextNode(item);
//                 elementBotDivChildren.appendChild(textnode);
//                 document.getElementsByClassName("box-wrap")[0].appendChild(botDiv);
//                 document.getElementById(`${countReply + index + 1}`)?.appendChild(nodeImgBot);
//                 document.getElementById(`${countReply + index + 1}`)?.appendChild(elementBotDivChildren);
//             });
//             setCountReply((countReply) => countReply + a.length);
//             setTextBot("");
//         }
//         if (Topic.includes(messageUser)) {
//             if (countTextBotExample !== 4 && countTextBotExample < 5) setTextBotExample(TextBotExample[countTextBotExample]);

//             setCountReply((countReply) => countReply + 1);
//             const source = new EventSource(
//                 `https://cms.dadsnetwork.co/api/aiLeyBot?${countTextBotExample === 3 ? `topic=${messageUser}` : `topicLv2=${messageUser}`
//                 }`
//             );

//             source.onmessage = (e: any) => {
//                 countTextBotExample === 3
//                     ? setTextOptionBot(Object.values(JSON.parse(e.data)))
//                     : setTextBot(Object.values(JSON.parse(e.data)));
//                 source.close();
//             };
//         }
//     };
//     const handleAddTextBotExample = (messBot: string) => {
//         setCountTextBotExample((countTextBotExample) => countTextBotExample + 1);
//         const botDiv = document.createElement("div");
//         const elementBotDivChildren = document.createElement("div");
//         const nodeImgBot = document.createElement("img");
//         elementBotDivChildren.setAttribute(
//             "class",
//             ` bg-[#F2F4F5] justify-start  p-4  text-primary rounded-r-[16px] rounded-bl-[16px] max-w-[60%]`
//         );
//         nodeImgBot.setAttribute("src", Bot);
//         nodeImgBot.setAttribute("class", `w-[50px] h-[50px] object-contain`);
//         botDiv.setAttribute("id", `${countReply + 1}`);
//         botDiv.setAttribute("class", `flex space-x-2 my-5 `);
//         const textnode = document.createTextNode(messBot);
//         elementBotDivChildren.appendChild(textnode);
//         document.getElementsByClassName("box-wrap")[0].appendChild(botDiv);
//         document.getElementById(`${countReply + 1}`)?.appendChild(nodeImgBot);
//         document.getElementById(`${countReply + 1}`)?.appendChild(elementBotDivChildren);
//         setCountReply((countReply) => countReply + 1);
//     };
//     const ref: any = useRef();
//     useEffect(() => {
//         if (countReply > 0) handleAddTextBotExample(textBotExample);
//     }, [textBotExample]);
//     useEffect(() => {
//         handleAddText(text, textBot, countReply);
//     }, [text]);
//     useEffect(() => {
//         handleAddText(text, textBot, countReply);
//     }, [textBot]);

//     return (
//         <div className="w-full h-full flex space-x-5 min-h-[100vh] mt-[5vh]">
//             {/* Avatar Bot */}
//             <div className="w-[40%] h-[70vh] border-[#FF008A] border-[0.5px] rounded-[12px] py-6 px-8">
//                 <p className="font-bold">Alley</p>
//                 <p>AI Assistant</p>
//                 <div className="flex flex-row">
//                     <div className="w-[35%]"><img src={Bot} /></div>

//                     <div className="w-[75%]">
//                         <div
//                             // onClick={handleChangeText}
//                             className="bg-[#F2F4F5] p-4 mb-[20px] text-primary text-base rounded-r-[14px] rounded-bl-[16px]"
//                         >
//                             Hello there! I am AiLey, your friendly AI assistant. I am here to assist you with anything you need and to
//                             make your day a little brighter.{" "}
//                         </div>
//                         <div
//                             // onClick={handleChangeText}
//                             className="bg-[#F2F4F5] p-4 mb-[20px] text-primary text-base  rounded-r-[16px] rounded-bl-[16px]"
//                         >
//                             In my free time, I love chatting with new people and learning about different cultures.
//                         </div>
//                         <div
//                             // onClick={handleChangeText}
//                             className="bg-[#F2F4F5] p-4 mb-[20px] text-primary text-base rounded-r-[16px] rounded-bl-[16px]"
//                         >
//                             I also enjoy playing games, reading books, and taking long virtual walks in the park. I'm always here to listen and have a conversation, so feel free to ask me anything!
//                         </div>
//                     </div>
//                 </div>
//             </div>
//             {/* Box Chat`` */}
//             <div className="w-full box-wrap h-[90vh] border-[#FF008A] border-[0.5px] rounded-[12px] p-8 overflow-scroll  transition">
//                 {/* Bot */}
//                 <div className="flex space-x-2">
//                     <img src={Bot} alt="" className="w-[30px] h-[50px] object-contain" />
//                     <div className="bg-[#F2F4F5]  max-w-[550px] h-[100%] p-4  text-primary rounded-r-[16px] rounded-bl-[16px]">
//                         {`  Hi Dear,\n How is going on today?`}
//                     </div>
//                 </div>
//                 {/* User */}
//                 <div className="flex space-x-2 justify-end">
//                     <div className="bg-[blue]  max-w-[550px] h-[100%] p-4  text-white rounded-tr-[16px] rounded-l-[16px]">
//                         {`  Good`}
//                     </div>
//                     <img src={User} alt="" className="w-[50px] h-[50px] object-contain" />
//                 </div>
//                 {/* Bot */}
//                 <div className="flex space-x-2">
//                     <img src={Bot} alt="" className="w-[30px] h-[50px] object-contain" />
//                     <div className="bg-[#F2F4F5]  max-w-[400px] h-[100%] p-4 mb-[10px] text-primary rounded-r-[16px] rounded-bl-[16px]">
//                         {`You are a beautiful & cute girl, I think everything comes to you whether it's good or bad, you’re also smile to receive it.`}
//                     </div>
//                 </div>
//                 <div className="flex space-x-2">
//                     <img src={Bot} alt="" className="w-[30px] h-[50px] object-contain" />
//                     <div className="bg-[#F2F4F5]  max-w-[400px] h-[100%] p-4 mb-[10px] text-primary rounded-r-[16px] rounded-bl-[16px]">
//                         {`I know you have some concerns that need me support, let's tell me now.`}
//                     </div>
//                 </div>
//                 {/* Choose Objective */}
//                 <p className="text-primary">Choose objectives</p>
//                 <div className="flex justify-between mt-10 space-x-4">
//                     {ArrObjectives.map((item, i) => {
//                         return (
//                             <div
//                                 ref={ref}
//                                 onClick={(e) => {

//                                     if (countReply < 1) {
//                                         setIndex(i);
//                                         handleChangeText(e);
//                                         setCountReply((countReply) => countReply + 1);
//                                     }
//                                 }}
//                                 key={i}
//                                 className={`bg-[${index === i ? "blue" : "#F2F4F5"
//                                     }] w-[30%] min-h-[100px] flex justify-center items-center text-center text-[${index === i ? "white" : "primary"
//                                     }] rounded-[12px] p-6 hover:cursor-pointer
//                 `}
//                             >
//                                 {item}
//                             </div>
//                         );
//                     })}
//                 </div>
//                 <p className="text-primary">Kindly fill in detail to give you stuitable advices</p>




//                 <div id={"0"} className={""}>
//                     {countReply >= 2 && (
//                         <div className="flex max-w-[500px] space-x-8 mx-auto mt-10 items-center">
//                             <div className="max-w-[300px]">
//                                 <SelectInput
//                                     arr={[{ title: "", valueArr: SKILLS }]}
//                                     name="df"
//                                     handleChange={handleChangeSelect}
//                                     dadsCoins={false}
//                                 />
//                             </div>

//                             <div
//                                 className="flex space-x-6  items-center bg-blue-500 hover:bg-blue-600 transition hover:text-white hover:cursor-pointer hover:scale-105  py-2 px-6 rounded-[16px]"
//                                 onClick={() => {
//                                     if (countReply < 3) {
//                                         post(text, selected, "");
//                                     }
//                                 }}
//                             >
//                                 <p>Send to AiLey</p> <img src={ButtonSendToBot} alt="" className="w-[35px] h-[35px] flex items-center " />
//                             </div>
//                         </div>
//                     )}
//                     {countTextBotExample >= 2 && (
//                         <div className="flex justify-center items-center space-x-5">
//                             {YesNoButton.map((item, i) => {
//                                 return (
//                                     <div
//                                         ref={ref}
//                                         onClick={(e) => {
//                                             if (countTextBotExample == 2) {
//                                                 setIndex(i);
//                                                 handleChangeText(e);
//                                                 setCountReply((countReply) => countReply + 1);
//                                             }
//                                         }}
//                                         key={i}
//                                         className={`bg-[${index === i ? "blue" : "#F2F4F5"
//                                             }] w-[30%] flex justify-center items-center text-center text-[${index === i ? "white" : "primary"
//                                             }] rounded-[12px] p-6 hover:cursor-pointer
//    `}
//                                     >
//                                         {item}
//                                     </div>
//                                 );
//                             })}
//                         </div>
//                     )}
//                     {countTextBotExample >= 3 && (
//                         <div className=" space-x-5 grid-cols-5 flex-wrap grid gap-4 grid-rows-2">
//                             {Topic.map((item, i) => {
//                                 return (
//                                     <div
//                                         ref={ref}
//                                         onClick={(e) => {
//                                             if (countTextBotExample == 3) {
//                                                 setIndex(i);
//                                                 handleChangeText(e);
//                                                 setCountReply((countReply) => countReply + 1);
//                                             }
//                                         }}
//                                         key={i}
//                                         className={`bg-[${index === i ? "blue" : "#F2F4F5"
//                                             }]  flex justify-center items-center text-center text-[${index === i ? "white" : "primary"
//                                             }] rounded-[12px] p-6 hover:cursor-pointer w-full 
//    `}
//                                     >
//                                         {item}
//                                     </div>
//                                 );
//                             })}
//                         </div>
//                     )}
//                     {/* Send Bot */}
//                     {textOptionBot.length > 0 && (
//                         <div className={`mx-auto grid grid-cols-4 gap-6 grid-rows-${textOptionBot.length / 4} `}>
//                             {textOptionBot.map((item: any, i: any) => {
//                                 return (
//                                     <div
//                                         ref={ref}
//                                         onClick={(e) => {
//                                             if (countTextBotExample == 4) {
//                                                 setIndex(i);
//                                                 handleChangeText(e);
//                                                 setCountReply((countReply) => countReply + 1);
//                                             }
//                                         }}
//                                         key={i}
//                                         className={`bg-[${index === i ? "blue" : "#F2F4F5"
//                                             }] w-[full] flex justify-center items-center text-center text-[${index === i ? "white" : "primary"
//                                             }] rounded-[12px] p-6 hover:cursor-pointer
// `}
//                                     >
//                                         {item}
//                                     </div>
//                                 );
//                             })}
//                         </div>
//                     )}
//                     {countTextBotExample >= 5 && (
//                         <div className="space-x-5 grid-cols-5 flex-wrap grid gap-4 grid-rows-2">
//                             {Topic.map((item, i) => {
//                                 return (
//                                     <div
//                                         ref={ref}
//                                         onClick={(e) => {
//                                             if (countTextBotExample == 5) {
//                                                 setIndex(i);
//                                                 handleChangeText(e);
//                                                 setCountReply((countReply) => countReply + 1);
//                                             }
//                                         }}
//                                         key={i}
//                                         className={`bg-[${index === i ? "blue" : "#F2F4F5"
//                                             }] w-[full] flex justify-center items-center text-center text-[${index === i ? "white" : "primary"
//                                             }] rounded-[12px] p-6 hover:cursor-pointer
//    `}
//                                     >
//                                         {item}
//                                     </div>
//                                 );
//                             })}
//                         </div>
//                     )}
//                     {countTextBotExample >= 6 && (
//                         <div className="flex justify-center items-center space-x-5">
//                             {YesNoButtonEnd.map((item, i) => {
//                                 return (
//                                     <div
//                                         ref={ref}
//                                         onClick={(e) => {
//                                             if (countTextBotExample == 6) {
//                                                 setIndex(i);
//                                                 handleChangeText(e);
//                                                 setCountReply((countReply) => countReply + 1);
//                                             }
//                                         }}
//                                         key={i}
//                                         className={`bg-[${index === i ? "blue" : "#F2F4F5"
//                                             }] w-[30%] flex justify-center items-center text-center text-[${index === i ? "white" : "primary"
//                                             }] rounded-[12px] p-6 hover:cursor-pointer
// `}
//                                     >
//                                         {item}
//                                     </div>
//                                 );
//                             })}
//                         </div>
//                     )}
//                 </div>
//             </div>
//         </div>
//     );
// };
// export default Assistant;


import { AssistantContainer as Assistant } from "module/assistant";


export default Assistant;
