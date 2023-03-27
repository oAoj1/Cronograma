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

    const estudosManhaSexta = [
        'Curso Node.JS(Alura)'
    ]

    const tardeSexta = [
        'Almoço',
        'Leitura',
        'Programar/Estudar',
    ]

    const estudosTardeSexta = [
        'Curso Node.JS(Alura)'
    ]

    const noiteSexta = [
        'Academia',
        'Estudar',
        'Série/Filme'
    ]

    const estudosNoiteSexta = [
        'Curso Node.JS(Alura)'
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