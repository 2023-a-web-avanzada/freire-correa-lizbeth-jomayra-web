//app/componentes/DEstilosEjemplo.tsx
'use client'
import styled from "@emotion/styled";
import { css } from '@emotion/react'
import cStyles from './c_estilos.module.css'

const pinkBlue = css`
  color: orange;
`
const TituloNaranja = styled.h1`
  color: orange;
  font-size: 20px;
`
const TituloVerde = styled.h2`
  color: green;
  font-size: 15px;
`
export default function DEstilosEjemplo() {
    const misEstilos = {
        color: '#fff',
        backgroundColor: 'black',
        borderBottom : '5px solid yellow'
    }
    return(
        <>
            <TituloNaranja>Titulo 1</TituloNaranja>
            <TituloVerde>Titulo 2</TituloVerde>
            <div css = {pinkBlue}>
                Texto pink (no me vale)
            </div>
            <p className={cStyles.rojo}>Clase rojo</p>
            <p style={misEstilos}> Mis Estilos </p>
            <p style={{
                color: 'pink',
                backgroundColor: 'black',
                borderBottom : '5px solid purple'
            }
            }>Estilos en linea</p>
        </>
    )
}