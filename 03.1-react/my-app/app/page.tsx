import Image from 'next/image'
import DEstilosEjemplo from "@/app/componentes/DEstilosEjemplo";

export default function Home() {
  return (
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <h1>Hola mundo</h1><DEstilosEjemplo/>
      </main>
  )
}
