import ModeloDia from '../ModeloDia'
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