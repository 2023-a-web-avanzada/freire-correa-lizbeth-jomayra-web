'use client'
import {useState} from "react";
import {BsFillChatLeftTextFill} from "react-icons/bs";
import {RiLoader3Line, RiMore2Fill} from "react-icons/ri";
import styled from "@emotion/styled";
import {FaUsers} from "react-icons/fa";
import ChatList from "@/app/componentes/ChatList";
import TextArea from "@/app/componentes/TextArea";
import Chat from "@/app/componentes/Chat/Chat";
export default function Home() {

  return (
      <main className="grid grid-cols-main h-screen w-screen max-h-screen max-w-full over xl:grid-cols-4 ">
          <ChatList/>
          {/*<TextArea/>*/}
          <Chat/>
      </main>
  )
}

