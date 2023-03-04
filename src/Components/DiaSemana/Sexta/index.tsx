import '../DiaSemana.css'

export default function Sexta(){
    const manhaSexta = [
        'Acordar',
        'Banheiro',
        'Arrumar cama',
        'Leitura - Como fazer amigos',
        'Estudar'
    ]

    const estudosManhaSexta = [
        'Fatec'
    ]

    const tardeSexta = [
        'Almoço',
        'Leitura - Código limpo',
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
        'Redação - Tema 2023'
    ]

    return(
        <div>
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

            <hr />

            <h3 className="estudosHojeTitulo">Estudos de hoje</h3>
            <div className="estudosHojeContainer">
                <ul className="estudosManha">
                    <h2>Manhã</h2>
                    {estudosManhaSexta.map((estudos) => (
                    <li key={estudos}>{estudos}</li>
                    ))}
                </ul>

                <ul className="estudosTarde">
                    <h2>Tarde</h2>
                    {estudosTardeSexta.map((estudos) => (
                    <li key={estudos}>{estudos}</li>
                    ))}
                </ul>

                <ul className="estudosNoite">
                    <h2>Noite</h2>
                    {estudosNoiteSexta.map((estudos) => (
                    <li key={estudos}>{estudos}</li>
                    ))}
                </ul>
            </div>
        </div>

    )
}