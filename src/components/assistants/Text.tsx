type props = {
    countReply: number,
    messageUser: string,
    messageBot: string,
    messBot: string
}
export function TextUser({ countReply, messageUser }: props) {
    return (
        <div className="flex space-x-2 justify-end items-center " id={`${countReply}user`} >
            <div className="max-w-[550px] h-[100%] p-4  text-white bg-[blue]  rounded-tr-[16px] rounded-l-[16px] my-5">
                {messageUser}
            </div>
            <img src="/static/media/User.a6f1c4e8d1b059f80da2.png"
                className="w-[50px] h-[50px] object-contain"
                alt="user" />
        </div >);
}

export function TextBot({ countReply, messageBot }: props) {
    return (
        <div className="flex space-x-2" id={`${countReply}bot`}>
            <img
                src="/static/media/Bot.e33d536bdd412e738363.png" alt="bot"
                className="w-[50px] h-[50px] object-contain" />
            <div className="bg-[#F2F4F5]  max-w-[400px] h-[100%] p-4 mb-[10px] text-primary rounded-r-[16px] rounded-bl-[16px]">
                {messageBot}
            </div>
        </div>
    )
}
export function TextBotExample({ countReply, messBot }: props) {
    return (
        <div className="flex space-x-2 my-5" id={`${countReply}bot`}>
            <img src="/static/media/Bot.e33d536bdd412e738363.png"
                alt="exam"
                className="w-[50px] h-[50px] object-contain" />
            <div className="bg-[#F2F4F5] justify-start  p-4  text-primary rounded-r-[16px] rounded-bl-[16px] max-w-[60%]">
                {messBot}
            </div>
        </div>
    )
}
export default function Reply({ countReply }: props) {

}