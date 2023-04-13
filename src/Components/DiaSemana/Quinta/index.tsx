import ModeloDia from '../ModeloDia'
import "../DiaSemana.css";

export default function Quinta(props:any) {
    const manhaQuinta = [
        "Acordar",
        "Banheiro",
        "Arrumar cama",
        "Leitura",
        "Escrever",
        "Estudar"
    ]

    const tardeQuinta = [
        "Almoço", 
        "Leitura", 
        "Estudar"
    ]

    const noiteQuinta = [
        'Academia',
        'Estudar',
        "Série/Filme"
    ]

    const estudosManhaQuinta = [
        "Redação"
    ]


    const estudosTardeQuinta = [
        "Node.JS"
    ]

    const estudosNoiteQuinta = [
        "Inglês"
    ]

  return (
    <div>
        <ModeloDia
            horario={props.horario}
            manha={manhaQuinta}
            tarde={tardeQuinta}
            noite={noiteQuinta}
            estudosManha={estudosManhaQuinta}
            estudosTarde={estudosTardeQuinta}
            estudosNoite={estudosNoiteQuinta}
        />
    </div>
  );
}
