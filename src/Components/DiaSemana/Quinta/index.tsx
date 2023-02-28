import '../DiaSemana.css'

export default function Quarta(){
    const manhaQuinta = [
        'Acordar',
        'Banheiro',
        'Arrumar cama',
        'Leitura',
        'Futebol'
    ]

    const tardeQuinta = [
        'Almoço',
        'Leitura',
        'Programar/Estudar',
        'Jogar'
    ]

    const noiteQuinta = [
        'Programar/Estudar',
        'Jogar',
        'Série/Filme'
    ]

    return(
        <section className="diaSemanaContainer">
            <ul className="listaManha">
                <h2>Manhã</h2>
                {manhaQuinta.map(manha => (
                    <li key={manha}>
                        {manha}
                    </li>
                ))} 
            </ul>

            <ul className="listaTarde">
                <h2>Tarde</h2>
                {tardeQuinta.map(tarde => (
                    <li key={tarde}>
                        {tarde}
                    </li>
                ))} 
            </ul>

            <ul className="listaNoite">
                <h2>Noite</h2>
                {noiteQuinta.map(noite => (
                    <li key={noite}>
                        {noite}
                    </li>
                ))} 
            </ul>
            
        </section>
    )
}