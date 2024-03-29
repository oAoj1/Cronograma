import ModeloDia from '../ModeloDia'
import '../DiaSemana.css'

export default function Segunda(props:any){
    const manhaSegunda = [
        'Acordar',
        'Banheiro',
        'Arrumar cama',
        'Leitura',
        'Escrever',
        'Estudar'
    ]

    const tardeSegunda = [
        'Almoço',
        'Leitura',
        'Estudar'
    ]
    
    const noiteSegunda = [
        'Academia',
        'Estudar',
        'Série/Filme'
    ]

    const estudosManhaSegunda = [
        'Redação'
    ]

    const estudosTardeSegunda = [
        'Node.JS'
    ]

    const estudosNoiteSegunda = [
        'Inglês'
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