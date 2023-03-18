import '../DiaSemana.css'

export default function Quarta(periodoDia:any){

    const manhaQuarta = [
        'Acordar',
        'Banheiro',
        'Arrumar cama',
        'Leitura - Como fazer amigos',
        'Parque'
    ]

    const estudosManhaQuarta = [
        'Parque'
    ]

    const tardeQuarta = [
        'Almoço',
        'Leitura - Código limpo',
        'Programar/Estudar',
    ]

    const estudosTardeQuarta = [
        'Curso Node.JS(Alura)'
    ]

    const noiteQuarta = [
        'Estudar',
        'Série/Filme'
    ]
    
    const estudosNoiteQuarta = [
        'Redação'
    ]

    return(
        <div>
            <section className="diaSemanaContainer">
                {periodoDia == 'Manhã' ? 
                    <ul className="listaManha">
                        <h2>Manhã</h2>
                        {manhaQuarta.map(manha => (
                            <li key={manha}>
                                {manha}
                            </li>
                        ))} 
                    </ul> : 

                periodoDia == 'Tarde'  ? 
                    <ul className="listaTarde">
                        <h2>Tarde</h2>
                        {tardeQuarta.map(tarde => (
                            <li key={tarde}>
                                {tarde}
                            </li>
                        ))} 
                    </ul> : 

                periodoDia == 'Noite' ? 
                    <ul className="listaNoite">
                        <h2>Noite</h2>
                        {noiteQuarta.map(noite => (
                            <li key={noite}>
                                {noite}
                            </li>
                        ))} 
                    </ul> : 'Vai dormir'} 
                
            </section>

            <hr />

            <h3 className='estudosHojeTitulo'>Estudos de hoje</h3>
            <div className="estudosHojeContainer">
                
                {periodoDia == 'Manhã' ? 
                    <ul className="estudosManha">
                        <h2>Manhã</h2>
                        {estudosManhaQuarta.map((estudos) => (
                            <li key={estudos}>
                                {estudos}
                            </li>
                        ))}
                    </ul> : 

                periodoDia == 'Tarde' ?

                    <ul className="estudosTarde">
                        <h2>Tarde</h2>
                        {estudosTardeQuarta.map((estudos) => (
                            <li key={estudos}>
                                {estudos}
                            </li>
                        ))}

                    </ul> : 
                    
                periodoDia == 'Noite' ? 

                    <ul className="estudosNoite">
                        <h2>Noite</h2>
                        {estudosNoiteQuarta.map((estudos) => (
                            <li key={estudos}>
                                {estudos}
                            </li>
                        ))}
                    </ul> : ''}

            </div>
            
        </div>
        
    )
}