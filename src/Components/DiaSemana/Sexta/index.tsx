import '../DiaSemana.css'

export default function Sexta(props:any){
    const manhaSexta = [
        'Acordar',
        'Banheiro',
        'Arrumar cama',
        'Leitura',
        'Estudar'
    ]

    const estudosManhaSexta = [
        'Curso Node.JS(Alura)'
    ]

    const tardeSexta = [
        'Almoço',
        'Leitura',
        'Programar/Estudar',
    ]

    const estudosTardeSexta = [
        'Curso Node.JS(Alura)'
    ]

    const noiteSexta = [
        'Academia',
        'Estudar',
        'Série/Filme'
    ]

    const estudosNoiteSexta = [
        'Curso Node.JS(Alura)'
    ]

    return(
        <div>
            <section className="diaSemanaContainer">
            {props.horario == 'Manhã' ? 
            <ul className="listaManha">
                
                {manhaSexta.map(manha => (
                    <li key={manha}>
                        {manha}
                    </li>
                ))} 
            </ul> : 

            props.horario == 'Tarde'  ? 
            <ul className="listaTarde">
                
                {tardeSexta.map(tarde => (
                    <li key={tarde}>
                        {tarde}
                    </li>
                ))} 
            </ul> : 

            props.horario == 'Noite' ? 
            <ul className="listaNoite">
                
                {noiteSexta.map(noite => (
                    <li key={noite}>
                        {noite}
                    </li>
                ))} 
            </ul> : 'Vai dormir'}
                
            </section>

            <hr />

            <h3 className="estudosHojeTitulo">Estudos de hoje</h3>
            <div className="estudosHojeContainer">
            {props.horario == 'Manhã' ? 
            <ul className="estudosManha">
                
                {estudosManhaSexta.map((estudos) => (
                    <li key={estudos}>
                        {estudos}
                    </li>
                ))}
            </ul> : 

        props.horario == 'Tarde' ?

            <ul className="estudosTarde">
                
                {estudosTardeSexta.map((estudos) => (
                    <li key={estudos}>
                        {estudos}
                    </li>
                ))}

            </ul> : 
            
        props.horario == 'Noite' ? 

            <ul className="estudosNoite">
                
                {estudosNoiteSexta.map((estudos) => (
                    <li key={estudos}>
                        {estudos}
                    </li>
                ))}
            </ul> : ''}
            </div>
        </div>

    )
}