import Image from "next/image";
export default function TextArea() {
    return(
        <>
            {/*Parte de los mensajes*/}
            <div className="xl:col-span-3 border-conversation-border border-1 w-full  flex flex-col h-[100vh] border-b-4 border-b-icon-green items-center justify-center bg-[#222E35] ">
                <img src="./img/whatsAppWeb.png" alt="WhatsApp web logo" height={500} width={500}/>
            </div>
        </>
    )
}