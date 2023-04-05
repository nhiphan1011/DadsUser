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
                    <div className="max-w-[550px] h-[100%] p-4 rounded-tr-[16px] rounded-l-[16px] my-5 text-primary bg-[#F2F4F5] break-all">
                        <p dangerouslySetInnerHTML={{ __html: value }}></p>
                    </div>
                </>
            )}
        </div >);
}

