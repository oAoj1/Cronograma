import '../DiaSemana.css'

export default function Segunda(props:any){
    const manhaSegunda = [
        'Acordar',
        'Banheiro',
        'Arrumar cama',
        'Leitura',
        'Estudar'
    ]

    const estudosManhaSegunda = [
        'Curso Node.JS(Alura)'
    ]

    const tardeSegunda = [
        'Almoço',
        'Leitura',
        'Programar/Estudar'
    ]

    const estudosTardeSegunda = [
        'Curso Node.JS(Alura)'
    ]

    const noiteSegunda = [
        'Academia',
        'Estudar',
        'Série/Filme'
    ]

    const estudosNoiteSegunda = [
        'Curso Node.JS(Alura)'
    ]

    return(
        <div>
            <section className="diaSemanaContainer">

                {props.horario == 'Manhã' ? 

                    <ul className="listaManha">
        
                        {manhaSegunda.map(manha => (
                            <li key={manha}>
                                {manha}
                            </li>
                        ))} 
                    </ul> : props.horario == 'Tarde'  ?

                    <ul className="listaTarde">
                        
                        {tardeSegunda.map(tarde => (
                            <li key={tarde}>
                                {tarde}
                            </li>
                        ))} 
                    </ul> : props.horario == 'Noite' ?

                    <ul className="listaNoite">
                        
                        {noiteSegunda.map(noite => (
                            <li key={noite}>
                                {noite}
                            </li>
                        ))} 

                    </ul> : 'Vai dormir'
                }      
                
            </section>

            <hr />

            <h3 className="estudosHojeTitulo">Estudos</h3>
                <div className="estudosHojeContainer">

                {props.horario == 'Manhã' ? 
                    <ul className="estudosManha">
                        
                        {estudosManhaSegunda.map((estudos) => (
                            <li key={estudos}>
                                {estudos}
                            </li>
                        ))}
                    </ul> : 

                props.horario == 'Tarde' ?

                    <ul className="estudosTarde">
                        
                        {estudosTardeSegunda.map((estudos) => (
                            <li key={estudos}>
                                {estudos}
                            </li>
                        ))}

                    </ul> : 
                    
                props.horario == 'Noite' ? 

                    <ul className="estudosNoite">
                        
                        {estudosNoiteSegunda.map((estudos) => (
                            <li key={estudos}>
                                {estudos}
                            </li>
                        ))}
                        
                    </ul> : ''}
 
            </div>
        </div>
        
    )
}