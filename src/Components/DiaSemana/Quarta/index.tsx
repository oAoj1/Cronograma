import ModeloDia from '../ModeloDia'
import '../DiaSemana.css'

export default function Quarta(props:any){

    const manhaQuarta = [
        'Acordar',
        'Banheiro',
        'Arrumar cama',
        'Estudar',
        'Escrever',
        'Leitura'
    ]

    const tardeQuarta = [
        'Almoço',
        'Leitura',
        'Estudar',
    ]

    const noiteQuarta = [
        'Série/Filme'
    ]

    const estudosManhaQuarta = [
        'Redação'
    ]
    
    const estudosTardeQuarta = [
        'Redação'
    ]
    
    const estudosNoiteQuarta = [
        '-'
    ]
    

    return(
        <div>
            <ModeloDia
                horario={props.horario}
                manha={manhaQuarta}
                tarde={tardeQuarta}
                noite={noiteQuarta}
                estudosManha={estudosManhaQuarta}
                estudosTarde={estudosTardeQuarta}
                estudosNoite={estudosNoiteQuarta}
            />
        </div>
        
    )
}