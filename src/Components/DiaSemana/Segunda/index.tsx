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
        'Programar/Estudar'
    ]
    
    const noiteSegunda = [
        'Academia',
        'Estudar',
        'Série/Filme'
    ]

    const estudosManhaSegunda = [
        'Curso Node.JS(Alura)'
    ]

    const estudosTardeSegunda = [
        'Curso Node.JS(Alura)'
    ]

    const estudosNoiteSegunda = [
        'Curso Node.JS(Alura)'
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