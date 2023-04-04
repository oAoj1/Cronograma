import ModeloDia from '../ModeloDia'
import '../DiaSemana.css'

export default function Sexta(props:any){
    const manhaSexta = [
        'Acordar',
        'Banheiro',
        'Arrumar cama',
        'Leitura',
        'Estudar'
    ]

    const tardeSexta = [
        'Almoço',
        'Leitura',
        'Estudar',
    ]

    const noiteSexta = [
        'Academia',
        'Série/Filme'
    ]

    const estudosManhaSexta = [
        'Redação'
    ]

    const estudosTardeSexta = [
        'Redação'
    ]

    const estudosNoiteSexta = [
        '-'
    ]

    return(
        <div>
            <ModeloDia
                horario={props.horario}
                manha={manhaSexta}
                tarde={tardeSexta}
                noite={noiteSexta}
                estudosManha={estudosManhaSexta}
                estudosTarde={estudosTardeSexta}
                estudosNoite={estudosNoiteSexta}
            />
        </div>

    )
}