import {BiSearchAlt2} from "react-icons/bi";
import {MdCall} from "react-icons/md";
import {IoVideocam} from "react-icons/io5";
import {BsThreeDotsVertical} from "react-icons/bs";

export default function ChatHeader() {
    const colorIconos = {
        color:'#AEBAC1',
        fontSize: '20px',
    }
    return(
        <>
            <div className="h-[8vh]  px-4 py-3 flex justify-between items-center bg-colorMenuSuperior z-10">
                <div className="flex items-center justify-center gap-6 ">
                    <img className="w-11 h-11 object-cover rounded-full" type="sm" src="https://as2.ftcdn.net/v2/jpg/03/61/64/85/1000_F_361648530_mg5GX0tKcHEbKYSXKpVr2XujrP2qRau3.jpg" />
                    <div className="flex flex-col">
                        <span className="text-primary-strong ">Demo</span>
                        <span className="text-secondary text-sm ">Online/offline</span>
                    </div>
                </div>
                <div style={colorIconos} className="flex gap-6 cursor-pointer">
                    <MdCall/>
                    <IoVideocam/>
                    <BiSearchAlt2/>
                    <BsThreeDotsVertical/>

                </div>

            </div>
        </>
    )
}