import '../DiaSemana.css'

export default function Segunda(){
    const manhaSegunda = [
        'Acordar',
        'Banheiro',
        'Arrumar cama',
        'Leitura - Como fazer amigos',
        'Estudar'
    ]

    const estudosManhaSegunda = [
        'Fatec'
    ]

    const tardeSegunda = [
        'Almoço',
        'Leitura - Código Limpo',
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
        'Redação - Tema 2023'
    ]

    return(
        <div>
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

            <hr />

            <h3 className="estudosHojeTitulo">Estudos de hoje</h3>
                <div className="estudosHojeContainer">
                <ul className="estudosManha">
                    <h2>Manhã</h2>
                    {estudosManhaSegunda.map((estudos) => (
                    <li key={estudos}>{estudos}</li>
                    ))}
                </ul>

                <ul className="estudosTarde">
                    <h2>Tarde</h2>
                    {estudosTardeSegunda.map((estudos) => (
                    <li key={estudos}>{estudos}</li>
                    ))}
                </ul>

                <ul className="estudosNoite">
                    <h2>Noite</h2>
                    {estudosNoiteSegunda.map((estudos) => (
                    <li key={estudos}>{estudos}</li>
                    ))}
                </ul>
            </div>
        </div>
        
    )
}