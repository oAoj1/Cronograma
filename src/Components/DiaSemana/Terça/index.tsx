import '../DiaSemana.css'

export default function Terça(){
    const manhaTerca = [
        'Acordar',
        'Banheiro',
        'Arrumar cama',
        'Leitura',
        'Psicólogo'
    ]

    const tardeTerca = [
        'Almoço',
        'Leitura',
        'Programar/Estudar',
        'Jogar'
    ]

    const noiteTerca = [
        'Programar/Estudar',
        'Jogar',
        'Série/Filme'
    ]

    return(
        <section className="diaSemanaContainer">
            <ul className="listaManha">
                <h2>Manhã</h2>
                {manhaTerca.map(manha => (
                    <li key={manha}>
                        {manha}
                    </li>
                ))} 
            </ul>

            <ul className="listaTarde">
                <h2>Tarde</h2>
                {tardeTerca.map(tarde => (
                    <li key={tarde}>
                        {tarde}
                    </li>
                ))} 
            </ul>

            <ul className="listaNoite">
                <h2>Noite</h2>
                {noiteTerca.map(noite => (
                    <li key={noite}>
                        {noite}
                    </li>
                ))} 
            </ul>
            
        </section>
    )
}