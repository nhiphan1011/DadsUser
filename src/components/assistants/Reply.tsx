import User from "../../assets/image/User.png"
import Bot from "../../assets/image/Bot.png";

type props = {
    id: number,
    key: number,
    data: {
        user: string,
        value: string
    }
}
export default function Reply({ data }: props) {
    const { user, value } = data
    return (
        <div className={`flex space-x-2 items-center ${user === "user" ? "justify-end" : "justify-start"}`}>
            {user === "user" ? (
                <>
                    <div className="max-w-[550px] h-[100%] p-4 rounded-tr-[16px] rounded-l-[16px] my-5 text-white bg-[blue]">
                        {value}
                    </div>
                    <img alt={`${user}`}
                        className="w-[50px] h-[50px] object-contain"
                        src={User} />
                </>
            ) : (
                <>
                    <img alt={`${user}`}
                        className="w-[50px] h-[50px] object-contain"
                        src={Bot} />
                    <div className="max-w-[550px] h-[100%] p-4 rounded-tr-[16px] rounded-l-[16px] my-5 text-primary bg-[#F2F4F5]">
                        {value}
                    </div>
                </>
            )}
        </div >);
}

// export function TextBot({ countReply, messageBot }: props) {
//     return (
//         <div className="flex space-x-2" id={`${countReply}bot`}>
//             <img
//                 src="/static/media/Bot.e33d536bdd412e738363.png" alt="bot"
//                 className="w-[50px] h-[50px] object-contain" />
//             <div className="bg-[#F2F4F5]  max-w-[400px] h-[100%] p-4 mb-[10px] text-primary rounded-r-[16px] rounded-bl-[16px]">
//                 {messageBot}
//             </div>
//         </div>
//     )
// }
// export function TextBotExample({ countReply, messBot }: props) {
//     return (
//         <div className="flex space-x-2 my-5" id={`${countReply}bot`}>
//             <img src="/static/media/Bot.e33d536bdd412e738363.png"
//                 alt="exam"
//                 className="w-[50px] h-[50px] object-contain" />
//             <div className="bg-[#F2F4F5] justify-start  p-4  text-primary rounded-r-[16px] rounded-bl-[16px] max-w-[60%]">
//                 {messBot}
//             </div>
//         </div>
//     )
// }
// export default function Reply({ countReply }: props) {

// }