import { Fragment } from "react"

export function Mateo(){

    let universidad='CESDE'

    return(
        <>
            <h1>Buenos dias...</h1>
            {/*<h4>Mi nombre es Mateo</h4>*/}
            <h5>Y estudio en {universidad}</h5>
            <h6>Y la suma de 5 + 1 es: {5+1} </h6>
        </>
    )
}