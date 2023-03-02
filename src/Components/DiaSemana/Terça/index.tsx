import '../DiaSemana.css'

export default function Terça(){
    const manhaTerca = [
        'Acordar',
        'Banheiro',
        'Arrumar cama',
        'Leitura - Como fazer amigos',
        'Psicólogo'
    ]

    const estudosManhaTerca = [
        'Psicólogo'
    ]

    const tardeTerca = [
        'Almoço',
        'Leitura - Código limpo',
        'Correr',
        'Programar/Estudar',
    ]

    const estudosTardeTerca = [
        'Curso Node.JS (Alura)'
    ]

    const noiteTerca = [
        'Estudar',
        'Série/Filme'
    ]

    const estudosNoiteTerca = [
        'Redação'
    ]

    return(
        <div>
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

            <hr />

            <h3 className="estudosHojeTitulo">Estudos de hoje</h3>
                <div className="estudosHojeContainer">
                <ul className="estudosManha">
                    <h2>Manhã</h2>
                    {estudosManhaTerca.map((estudos) => (
                    <li key={estudos}>{estudos}</li>
                    ))}
                </ul>

                <ul className="estudosTarde">
                    <h2>Tarde</h2>
                    {estudosTardeTerca.map((estudos) => (
                    <li key={estudos}>{estudos}</li>
                    ))}
                </ul>

                <ul className="estudosNoite">
                    <h2>Noite</h2>
                    {estudosNoiteTerca.map((estudos) => (
                    <li key={estudos}>{estudos}</li>
                    ))}
                </ul>
            </div>
        </div>
        
    )
}