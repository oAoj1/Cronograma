import ModeloDia from '../ModeloDia'
import '../DiaSemana.css'

export default function Quarta(props:any){

    const manhaQuarta = [
        'Acordar',
        'Banheiro',
        'Arrumar cama',
        'Estudar',
        'Escrever',
        'Leitura',
        'Estudar'
    ]

    const tardeQuarta = [
        'Almoço',
        'Leitura',
        'Estudar',
    ]

    const noiteQuarta = [
        'Estudar',
        'Série/Filme'
    ]

    const estudosManhaQuarta = [
        'Redação'
    ]
    
    const estudosTardeQuarta = [
        'Node.JS'
    ]
    
    const estudosNoiteQuarta = [
        'Inglês'
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