import '../DiaSemana.css'

export default function Quarta(){
    const manhaQuarta = [
        'Acordar',
        'Banheiro',
        'Arrumar cama',
        'Leitura',
        'Futebol'
    ]

    const tardeQuarta = [
        'Almoço',
        'Leitura',
        'Programar/Estudar',
        'Jogar'
    ]

    const noiteQuarta = [
        'Programar/Estudar',
        'Jogar',
        'Série/Filme'
    ]

    return(
        <section className="diaSemanaContainer">
            <ul className="listaManha">
                <h2>Manhã</h2>
                {manhaQuarta.map(manha => (
                    <li key={manha}>
                        {manha}
                    </li>
                ))} 
            </ul>

            <ul className="listaTarde">
                <h2>Tarde</h2>
                {tardeQuarta.map(tarde => (
                    <li key={tarde}>
                        {tarde}
                    </li>
                ))} 
            </ul>

            <ul className="listaNoite">
                <h2>Noite</h2>
                {noiteQuarta.map(noite => (
                    <li key={noite}>
                        {noite}
                    </li>
                ))} 
            </ul>
            
        </section>
    )
}