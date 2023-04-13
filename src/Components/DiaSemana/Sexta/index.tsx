import ModeloDia from '../ModeloDia'
import '../DiaSemana.css'

export default function Sexta(props:any){
    const manhaSexta = [
        'Acordar',
        'Banheiro',
        'Arrumar cama',
        'Leitura',
        'Escrever',
        'Estudar'
    ]

    const tardeSexta = [
        'Almoço',
        'Leitura',
        'Estudar',
    ]

    const noiteSexta = [
        'Estudar',
        'Série/Filme'
    ]

    const estudosManhaSexta = [
        'Redação'
    ]

    const estudosTardeSexta = [
        'Node.JS'
    ]

    const estudosNoiteSexta = [
        'Inglês'
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