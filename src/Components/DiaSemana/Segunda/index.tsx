import ModeloDia from '../ModeloDia'
import '../DiaSemana.css'

export default function Segunda(props:any){
    const manhaSegunda = [
        'Acordar',
        'Banheiro',
        'Arrumar cama',
        'Leitura',
        'Estudar'
    ]

    const tardeSegunda = [
        'Almoço',
        'Leitura',
        'Estudar'
    ]
    
    const noiteSegunda = [
        'Academia',
        'Série/Filme'
    ]

    const estudosManhaSegunda = [
        'Redação'
    ]

    const estudosTardeSegunda = [
        'Fatec'
    ]

    const estudosNoiteSegunda = [
        '-'
    ]

    return(
        <div>
            <ModeloDia
                horario={props.horario}
                manha={manhaSegunda}
                tarde={tardeSegunda}
                noite={noiteSegunda}
                estudosManha={estudosManhaSegunda}
                estudosTarde={estudosTardeSegunda}
                estudosNoite={estudosNoiteSegunda}
            />
        </div>
        
    )
}