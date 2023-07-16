import {FaUsers} from "react-icons/fa";
import {RiLoader3Line, RiMore2Fill} from "react-icons/ri";
import {BsFillChatLeftTextFill} from "react-icons/bs";

export default function ChatListHeader() {
    const colorIconos = {
        color:'#AEBAC1',
        fontSize: '20px',
    }
    return(
        <>
            <div className="bg-colorMenuSuperior flex items-center justify-between p-4 h-[8vh]">
                {/*Foto de perfil */}
                <div className="cursor-pointer">
                    <img className="w-11 h-11 object-cover rounded-full"
                         src="./img/me.jpg"/>
                </div>

                <div style={colorIconos} className="flex items-center gap-8  hover:cursor-pointer">
                    <FaUsers />
                    <RiLoader3Line/>
                    <BsFillChatLeftTextFill
                        href="/Chat"
                    />
                    <RiMore2Fill/>
                </div>
            </div>
        </>
    )
}