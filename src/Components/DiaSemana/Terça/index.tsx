import ModeloDia from '../ModeloDia'
import '../DiaSemana.css'

export default function Terça(props:any){
    const manhaTerca = [
        'Acordar',
        'Banheiro',
        'Arrumar cama',
        'Leitura',
        'Estudar',
        'Escrever',
        'Psicólogo'
    ]

    const tardeTerca = [
        'Almoço',
        'Leitura',
        'Correr',
        'Estudar',
    ]

    const noiteTerca = [
        'Série/Filme'
    ]

    const estudosManhaTerca = [
        'Redação'
    ]


    const estudosTardeTerca = [
        'Redação'
    ]

    const estudosNoiteTerca = [
        '-'
    ]

    return(
        <div>
            <ModeloDia
                horario={props.horario}
                manha={manhaTerca}
                tarde={tardeTerca}
                noite={noiteTerca}
                estudosManha={estudosManhaTerca}
                estudosTarde={estudosTardeTerca}
                estudosNoite={estudosNoiteTerca}
            />
        </div>
        
    )
}