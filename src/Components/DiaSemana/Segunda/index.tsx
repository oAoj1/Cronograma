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
                        <h2>Manhã</h2>
                        {manhaSegunda.map(manha => (
                            <li key={manha}>
                                {manha}
                            </li>
                        ))} 
                    </ul> : props.horario == 'Tarde'  ?

                    <ul className="listaTarde">
                        <h2>Tarde</h2>
                        {tardeSegunda.map(tarde => (
                            <li key={tarde}>
                                {tarde}
                            </li>
                        ))} 
                    </ul> : props.horario == 'Noite' ?

                    <ul className="listaNoite">
                        <h2>Noite</h2>
                        {noiteSegunda.map(noite => (
                            <li key={noite}>
                                {noite}
                            </li>
                        ))} 

                    </ul> : 'Vai dormir'
                }      
                
            </section>

            <hr />

            <h3 className="estudosHojeTitulo">Estudos de hoje</h3>
                <div className="estudosHojeContainer">

                {props.horario == 'Manhã' ? 
                    <ul className="estudosManha">
                        <h2>Manhã</h2>
                        {estudosManhaSegunda.map((estudos) => (
                            <li key={estudos}>
                                {estudos}
                            </li>
                        ))}
                    </ul> : 

                props.horario == 'Tarde' ?

                    <ul className="estudosTarde">
                        <h2>Tarde</h2>
                        {estudosTardeSegunda.map((estudos) => (
                            <li key={estudos}>
                                {estudos}
                            </li>
                        ))}

                    </ul> : 
                    
                props.horario == 'Noite' ? 

                    <ul className="estudosNoite">
                        <h2>Noite</h2>
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