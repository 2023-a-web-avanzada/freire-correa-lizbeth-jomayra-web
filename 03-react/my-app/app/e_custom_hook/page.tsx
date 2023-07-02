'use client'
import {useEffect} from "react";
import {MonedasConst} from "@/app/e_custom_hook/const/monedas.const";
import useSelectMoneda from "@/app/e_custom_hook/hooks/useSelectMoneda";

export default function page(){
    const  [moneda, UseSelectMonedas] = useSelectMoneda('Monedas global 2', MonedasConst)

    useEffect(
        ()=>{
            console.log(moneda);
        },
        [moneda]
    )
    return (
        <>
            {UseSelectMonedas}
        </>
    )
}