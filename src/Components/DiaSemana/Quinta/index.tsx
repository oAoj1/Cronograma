import "../DiaSemana.css";

export default function Quarta() {
    const manhaQuinta = [
        "Acordar",
        "Banheiro",
        "Arrumar cama",
        "Leitura - Como fazer amigos",
        "Correr",
    ]

    const estudosManhaQuinta = [
        "Fatec"
    ]

    const tardeQuinta = [
        "Almoço", 
        "Leitura - Código limpo", 
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
        "Redação"
    ]

  return (
    <div>
      <section className="diaSemanaContainer">
        <ul className="listaManha">
          <h2>Manhã</h2>
          {manhaQuinta.map((manha) => (
            <li key={manha}>{manha}</li>
          ))}
        </ul>

        <ul className="listaTarde">
          <h2>Tarde</h2>
          {tardeQuinta.map((tarde) => (
            <li key={tarde}>{tarde}</li>
          ))}
        </ul>

        <ul className="listaNoite">
          <h2>Noite</h2>
          {noiteQuinta.map((noite) => (
            <li key={noite}>{noite}</li>
          ))}
        </ul>
      </section>

      <hr />

      <h3 className="estudosHojeTitulo">Estudos de hoje</h3>
      <div className="estudosHojeContainer">
        <ul className="estudosManha">
          <h2>Manhã</h2>
          {estudosManhaQuinta.map((estudos) => (
            <li key={estudos}>{estudos}</li>
          ))}
        </ul>

        <ul className="estudosTarde">
          <h2>Tarde</h2>
          {estudosTardeQuinta.map((estudos) => (
            <li key={estudos}>{estudos}</li>
          ))}
        </ul>

        <ul className="estudosNoite">
          <h2>Noite</h2>
          {estudosNoiteQuinta.map((estudos) => (
            <li key={estudos}>{estudos}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
