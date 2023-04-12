import User from "../../assets/image/User.png"
import Bot from "../../assets/image/Bot.png";
import parse from 'html-react-parser';
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
    // console.log(parse(value))

    return (
        <div className={`flex items-start ${user === "user" ? "justify-end" : "justify-start"}`}>
            {user === "user" ? (
                <>
                    <div className="max-w-[80%] h-[100%] p-4 rounded-tr-[16px] rounded-l-[16px] mb-4 text-white bg-[blue]">
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
                    <div style={{ wordBreak: "break-word" }}
                        className="max-w-[85%] h-[100%] p-4 rounded-tl-[16px] rounded-r-[16px] mb-4 text-primary bg-[#F2F4F5] break-words">
                        {parse(value)}
                        {/* <p dangerouslySetInnerHTML={{ __html: value }}></p> */}
                    </div>
                </>
            )}
        </div >);
}

