import '../DiaSemana.css'

export default function Terça(props:any){
    const manhaTerca = [
        'Acordar',
        'Banheiro',
        'Arrumar cama',
        'Leitura',
        'Psicólogo'
    ]

    const estudosManhaTerca = [
        '-'
    ]

    const tardeTerca = [
        'Almoço',
        'Leitura',
        'Correr',
        'Programar/Estudar',
    ]

    const estudosTardeTerca = [
        'Curso Node.JS (Alura)'
    ]

    const noiteTerca = [
        'Estudar',
        'Série/Filme'
    ]

    const estudosNoiteTerca = [
        'Curso Node.JS(Alura)'
    ]

    return(
        <div>
            <section className="diaSemanaContainer">

                {props.horario == 'Manhã' ? 
                    <ul className="listaManha">
                        <h2>Manhã</h2>
                        {manhaTerca.map(manha => (
                            <li key={manha}>
                                {manha}
                            </li>
                        ))} 
                    </ul> : 

                props.horario == 'Tarde'  ? 
                    <ul className="listaTarde">
                        <h2>Tarde</h2>
                        {tardeTerca.map(tarde => (
                            <li key={tarde}>
                                {tarde}
                            </li>
                        ))} 
                    </ul> : 

                props.horario == 'Noite' ? 
                    <ul className="listaNoite">
                        <h2>Noite</h2>
                        {noiteTerca.map(noite => (
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
                        {estudosManhaTerca.map((estudos) => (
                            <li key={estudos}>
                                {estudos}
                            </li>
                        ))}
                    </ul> : 

                props.horario == 'Tarde' ?

                    <ul className="estudosTarde">
                        <h2>Tarde</h2>
                        {estudosTardeTerca.map((estudos) => (
                            <li key={estudos}>
                                {estudos}
                            </li>
                        ))}

                    </ul> : 
                    
                props.horario == 'Noite' ? 

                    <ul className="estudosNoite">
                        <h2>Noite</h2>
                        {estudosNoiteTerca.map((estudos) => (
                            <li key={estudos}>
                                {estudos}
                            </li>
                        ))}
                    </ul> : ''}
            </div>
        </div>
        
    )
}