import { GrBook } from 'react-icons/gr'
import '../DiaSemana.css'
import { IPeriodos } from '../../../Interface/IPeriodos'

export default function ModeloDia({
    manha,
    tarde,
    noite,
    estudosManha,
    estudosTarde,
    estudosNoite,
    horario
}:IPeriodos<string[]>){
    return(
        <div>
            <section className="diaSemanaContainer">

                {horario == 'Manhã' ? 

                    <ul className="listaManha">
        
                        {manha.map((manha:string) => (
                            <li key={manha}>
                                {manha}
                            </li>
                        ))} 
                    </ul> : horario == 'Tarde'  ?

                    <ul className="listaTarde">
                        
                        {tarde.map((tarde:string) => (
                            <li key={tarde}>
                                {tarde}
                            </li>
                        ))} 
                    </ul> : horario == 'Noite' ?

                    <ul className="listaNoite">
                        
                        {noite.map((noite:string) => (
                            <li key={noite}>
                                {noite}
                            </li>
                        ))} 

                    </ul> : 'Vai dormir'
                }      
                
            </section>

            <hr />

            <h3 className="estudosHojeTitulo">Estudos<GrBook/></h3>
                <div className="estudosHojeContainer">

                {horario == 'Manhã' ? 
                    <ul className="estudosManha">
                        
                        {estudosManha.map((estudos:string) => (
                            <li key={estudos}>
                                {estudos}
                            </li>
                        ))}
                    </ul> : 

                horario == 'Tarde' ?

                    <ul className="estudosTarde">
                        
                        {estudosTarde.map((estudos:string) => (
                            <li key={estudos}>
                                {estudos}
                            </li>
                        ))}

                    </ul> : 
                    
                horario == 'Noite' ? 

                    <ul className="estudosNoite">
                        
                        {estudosNoite.map((estudos:string) => (
                            <li key={estudos}>
                                {estudos}
                            </li>
                        ))}
                        
                    </ul> : ''}
 
            </div>
        </div>
        
    )
}