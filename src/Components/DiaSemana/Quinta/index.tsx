import ModeloDia from '../ModeloDia'
import "../DiaSemana.css";

export default function Quinta(props:any) {
    const manhaQuinta = [
        "Acordar",
        "Banheiro",
        "Arrumar cama",
        "Leitura",
        "Correr",
        "Estudar"
    ]

    const tardeQuinta = [
        "Almoço", 
        "Leitura", 
        "Programar/Estudar"
    ]

    const noiteQuinta = [
        "Série/Filme"
    ]

    const estudosManhaQuinta = [
        "Redação"
    ]


    const estudosTardeQuinta = [
        "Fatec"
    ]

    const estudosNoiteQuinta = [
        "-"
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
