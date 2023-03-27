import ModeloDia from '../ModeloDia'
import '../DiaSemana.css'

export default function Terça(props:any){
    const manhaTerca = [
        'Acordar',
        'Banheiro',
        'Arrumar cama',
        'Leitura',
        'Psicólogo'
    ]

    const estudosManhaTerca = [
        '-'
    ]

    const tardeTerca = [
        'Almoço',
        'Leitura',
        'Correr',
        'Programar/Estudar',
    ]

    const estudosTardeTerca = [
        'Curso Node.JS (Alura)'
    ]

    const noiteTerca = [
        'Estudar',
        'Série/Filme'
    ]

    const estudosNoiteTerca = [
        'Curso Node.JS(Alura)'
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