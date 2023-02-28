import '../DiaSemana.css'

export default function Sexta(){
    const manhaSexta = [
        'Acordar',
        'Banheiro',
        'Arrumar cama',
        'Leitura',
        'Programar/Estudar'
    ]

    const tardeSexta = [
        'Almoço',
        'Leitura',
        'Programar/Estudar',
        'Jogar'
    ]

    const noiteSexta = [
        'Academia',
        'Programar/Estudar',
        'Jogar',
        'Série/Filme'
    ]

    return(
        <section className="diaSemanaContainer">
            <ul className="listaManha">
                <h2>Manhã</h2>
                {manhaSexta.map(manha => (
                    <li key={manha}>
                        {manha}
                    </li>
                ))} 
            </ul>

            <ul className="listaTarde">
                <h2>Tarde</h2>
                {tardeSexta.map(tarde => (
                    <li key={tarde}>
                        {tarde}
                    </li>
                ))} 
            </ul>

            <ul className="listaNoite">
                <h2>Noite</h2>
                {noiteSexta.map(noite => (
                    <li key={noite}>
                        {noite}
                    </li>
                ))} 
            </ul>
            
        </section>
    )
}