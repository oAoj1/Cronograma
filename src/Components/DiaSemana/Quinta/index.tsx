import "../DiaSemana.css";

export default function Quinta(periodoDia:any) {
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
      <section className="diaSemanaContainer">
        {periodoDia == 'Manhã' ? 
            <ul className="listaManha">
                <h2>Manhã</h2>
                {manhaQuinta.map(manha => (
                    <li key={manha}>
                        {manha}
                    </li>
                ))} 
            </ul> : 

        periodoDia == 'Tarde'  ? 
            <ul className="listaTarde">
                <h2>Tarde</h2>
                {tardeQuinta.map(tarde => (
                    <li key={tarde}>
                        {tarde}
                    </li>
                ))} 
            </ul> : 

        periodoDia == 'Noite' ? 
            <ul className="listaNoite">
                <h2>Noite</h2>
                {noiteQuinta.map(noite => (
                    <li key={noite}>
                        {noite}
                    </li>
                ))} 
            </ul> : 'Vai dormir'} 
      </section>

      <hr />

      <h3 className="estudosHojeTitulo">Estudos de hoje</h3>
      <div className="estudosHojeContainer">
        {periodoDia == 'Manhã' ? 
            <ul className="estudosManha">
                <h2>Manhã</h2>
                {estudosManhaQuinta.map((estudos) => (
                    <li key={estudos}>
                        {estudos}
                    </li>
                ))}
            </ul> : 

        periodoDia == 'Tarde' ?

            <ul className="estudosTarde">
                <h2>Tarde</h2>
                {estudosTardeQuinta.map((estudos) => (
                    <li key={estudos}>
                        {estudos}
                    </li>
                ))}

            </ul> : 
            
        periodoDia == 'Noite' ? 

            <ul className="estudosNoite">
                <h2>Noite</h2>
                {estudosNoiteQuinta.map((estudos) => (
                    <li key={estudos}>
                        {estudos}
                    </li>
                ))}
            </ul> : ''}
      </div>
    </div>
  );
}
