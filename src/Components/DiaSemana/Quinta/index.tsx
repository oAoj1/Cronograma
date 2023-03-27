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

    const estudosManhaQuinta = [
        "Curso Node.JS(Alura)"
    ]

    const tardeQuinta = [
        "Almoço", 
        "Leitura", 
        "Programar/Estudar"
    ]

    const estudosTardeQuinta = [
        "Curso Node.JS(Alura)"
    ]

    const noiteQuinta = [
        "Estudar", 
        "Série/Filme"
    ]

    const estudosNoiteQuinta = [
        "Curso Node.JS(Alura)"
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
