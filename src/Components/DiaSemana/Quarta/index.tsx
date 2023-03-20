import '../DiaSemana.css'

export default function Quarta(props:any){

    const manhaQuarta = [
        'Acordar',
        'Banheiro',
        'Arrumar cama',
        'Leitura - Como fazer amigos',
        'Sair'
    ]

    const estudosManhaQuarta = [
        '-'
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
        'Curso Node.JS(Alura)'
    ]

    return(
        <div>
            <section className="diaSemanaContainer">
                {props.horario == 'Manhã' ? 
                    <ul className="listaManha">
                        
                        {manhaQuarta.map(manha => (
                            <li key={manha}>
                                {manha}
                            </li>
                        ))} 
                    </ul> : 

                props.horario == 'Tarde'  ? 
                    <ul className="listaTarde">
                        
                        {tardeQuarta.map(tarde => (
                            <li key={tarde}>
                                {tarde}
                            </li>
                        ))} 
                    </ul> : 

                props.horario == 'Noite' ? 
                    <ul className="listaNoite">
                        
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
                
                {props.horario == 'Manhã' ? 
                    <ul className="estudosManha">
                        
                        {estudosManhaQuarta.map((estudos) => (
                            <li key={estudos}>
                                {estudos}
                            </li>
                        ))}
                    </ul> : 

                props.horario == 'Tarde' ?

                    <ul className="estudosTarde">
                        
                        {estudosTardeQuarta.map((estudos) => (
                            <li key={estudos}>
                                {estudos}
                            </li>
                        ))}

                    </ul> : 
                    
                props.horario == 'Noite' ? 

                    <ul className="estudosNoite">
                        
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