import '../DiaSemana.css'

export default function Segunda(){
    const manhaSegunda = [
        'Acordar',
        'Banheiro',
        'Arrumar cama',
        'Leitura',
        'Programar/Estudar'
    ]

    const tardeSegunda = [
        'Almoço',
        'Leitura',
        'Programar/Estudar',
        'Jogar'
    ]

    const noiteSegunda = [
        'Academia',
        'Programar/Estudar',
        'Jogar',
        'Série/Filme'
    ]

    return(
        <section className="diaSemanaContainer">
            <ul className="listaManha">
                <h2>Manhã</h2>
                {manhaSegunda.map(manha => (
                    <li key={manha}>
                        {manha}
                    </li>
                ))} 
            </ul>

            <ul className="listaTarde">
                <h2>Tarde</h2>
                {tardeSegunda.map(tarde => (
                    <li key={tarde}>
                        {tarde}
                    </li>
                ))} 
            </ul>

            <ul className="listaNoite">
                <h2>Noite</h2>
                {noiteSegunda.map(noite => (
                    <li key={noite}>
                        {noite}
                    </li>
                ))} 
            </ul>
            
        </section>
    )
}