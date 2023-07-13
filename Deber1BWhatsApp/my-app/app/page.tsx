'use client'
import {useState} from "react";
import {BsFillChatLeftTextFill} from "react-icons/bs";
import {RiLoader3Line, RiMore2Fill} from "react-icons/ri";
import styled from "@emotion/styled";
import {FaUsers} from "react-icons/fa";

export default function Home() {

    const [count, setCount] = useState(0)
    const colorIconos = {
        color:'#AEBAC1',
        fontSize: '20px',
    }
  return (
      <div>
          <div className=" min-h-screen grid grid-cols-1 xl:grid-cols-4 bg-[#111B21] p-4">
              {/*Contactos*/}
              <div className="">
                  {/*Contenedor menu principal*/}
                  <div className="bg-colorMenuSuperior flex items-center justify-between p-4 h-[8vh]">
                      {/*Foto de perfil */}
                      <div>
                          <img className="w-11 h-11 object-cover rounded-full"
                               src="https://img.freepik.com/foto-gratis/retrato-hermoso-mujer-joven-posicion-pared-gris_231208-10760.jpg"/>
                      </div>
                      {/*Iconos*/}
                      <div style={colorIconos} className="flex items-center gap-8  hover:cursor-pointer">
                          <FaUsers />
                          <RiLoader3Line/>
                          <BsFillChatLeftTextFill />
                          <RiMore2Fill/>
                      </div>
                  </div>
                  <div className="h-[90vh]">Contactos</div>

              </div>

              {/*Parte de los mensajes*/}
              <div className=" xl:col-span-3"></div>
          </div>

      </div>

  )
}

