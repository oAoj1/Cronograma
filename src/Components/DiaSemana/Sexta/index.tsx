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
                <h2>Manhã</h2>
                {manhaSexta.map(manha => (
                    <li key={manha}>
                        {manha}
                    </li>
                ))} 
            </ul> : 

            props.horario == 'Tarde'  ? 
            <ul className="listaTarde">
                <h2>Tarde</h2>
                {tardeSexta.map(tarde => (
                    <li key={tarde}>
                        {tarde}
                    </li>
                ))} 
            </ul> : 

            props.horario == 'Noite' ? 
            <ul className="listaNoite">
                <h2>Noite</h2>
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
                <h2>Manhã</h2>
                {estudosManhaSexta.map((estudos) => (
                    <li key={estudos}>
                        {estudos}
                    </li>
                ))}
            </ul> : 

        props.horario == 'Tarde' ?

            <ul className="estudosTarde">
                <h2>Tarde</h2>
                {estudosTardeSexta.map((estudos) => (
                    <li key={estudos}>
                        {estudos}
                    </li>
                ))}

            </ul> : 
            
        props.horario == 'Noite' ? 

            <ul className="estudosNoite">
                <h2>Noite</h2>
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