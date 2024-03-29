import {BiSearchAlt2} from "react-icons/bi";
import {BsFilter} from "react-icons/bs";

export default function SearchBar() {
    const colorIconos = {
        color:'#AEBAC1',
        fontSize: '20px',
    }
    return(
        <>
            <div className="bg-search-input-container-background flex py-3 pl-5 items-center gap-3 h-14">
                <div className="bg-colorMenuSuperior flex items-center gap-5 px-3 py-1 rounded-lg flex-grow">
                    <div>
                        <BiSearchAlt2 style={colorIconos} className="text-panel-header-icon cursor-pointer text-l "/>
                    </div>
                    <div>
                        <input type="text" placeholder="Seach or start a new chat" className="bg-transparent text-sm focus:outline-none text-white w-full"/>

                    </div>


                </div>
                <div className="pr-5 pl-3">
                    <BsFilter style={colorIconos} className="text-panel-header-icon cursor-pointer text-l"/>
                </div>

            </div>

        </>
    )
}