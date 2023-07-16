import {FaUsers} from "react-icons/fa";
import {RiLoader3Line, RiMore2Fill} from "react-icons/ri";
import {BsFillChatLeftTextFill} from "react-icons/bs";
import ChatListHeader from "@/app/componentes/ChatListHeader";
import SearchBar from "@/app/componentes/SearchBar";
import List from "@/app/componentes/List";
import {useState} from "react";

export default function ChatList() {

    const [pageType, setPageType] = useState("default")
    return(
        <div className="bg-panel-header-background flex flex-col max-h-screen z-20">
            <ChatListHeader/>
            <SearchBar/>
            <List/>
        </div>
    )
}