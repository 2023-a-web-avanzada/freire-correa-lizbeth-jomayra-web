import ChatHeader from "@/app/componentes/Chat/ChatHeader";
import ChatContainer from "@/app/componentes/Chat/ChatContainer";
import MessageBar from "@/app/componentes/Chat/MessageBar";

export default function Chat() {
    return(

            <main className="xl:col-span-3   w-full bg-conversation-panel-background flex flex-col h-[100vh] z-10">
                <ChatHeader/>
                <ChatContainer/>
                <MessageBar/>
            </main>

    )
}