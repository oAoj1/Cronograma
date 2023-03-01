import '../DiaSemana.css'

export default function Sexta(){
    const manhaSexta = [
        'Acordar',
        'Banheiro',
        'Arrumar cama',
        'Leitura',
        'Programar/Estudar'
    ]

    const estudosManhaSexta = [
        'Fatec'
    ]

    const tardeSexta = [
        'Almoço',
        'Leitura',
        'Programar/Estudar',
    ]

    const estudosTardeSexta = [
        'Node.JS'
    ]

    const noiteSexta = [
        'Academia',
        'Programar/Estudar',
        'Série/Filme'
    ]

    const estudosNoiteSexta = [
        'Redação'
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