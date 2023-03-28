import React, { useEffect } from "react"
import { getHello } from "./api/apiPetitions";


export default function Home() {
  const [state, setState] = React.useState<any>("");
  useEffect(() => {
    getHello(setState)
  },[])
  return (
    <>
     <h1>hola</h1>
     <br />
     <h2>{state}</h2>
    </>
  )
}
