import './Tempo.css'
import { useState,useEffect } from 'react'
import Segunda from '../DiaSemana/Segunda'
import Terça from '../DiaSemana/Terça'
import Quarta from '../DiaSemana/Quarta'
import Quinta from '../DiaSemana/Quinta'
import Sexta from '../DiaSemana/Sexta'
import { BsSun,BsSunset,BsFillMoonFill,BsFillMoonStarsFill } from 'react-icons/bs'

export default function Tempo(){

  var criarData = new Date()
  const diaSemana = criarData.getDay()
  const diaAtual = String(criarData.getDate()).padStart(2,'0')
  const mes = String(criarData.getMonth() + 1).padStart(2,'0')

  const [periodoDia,setPeriodoDia] = useState<string>()
  const [icon,setIcon] = useState<any>()
  const coresFundoPeriodoDia = ['#00ffff','#fccf74','#341c8c','#170d3b']
  const corTextoPeriodoDia = ['#000','#fff']

  const coresManha = {
    backgroundColor: coresFundoPeriodoDia[0],
    color:corTextoPeriodoDia[0]
  }
    
  const coresTarde = {
    backgroundColor: coresFundoPeriodoDia[1],
    color:corTextoPeriodoDia[0]
  }

  const coresNoite = {
    backgroundColor: coresFundoPeriodoDia[2],
    color:corTextoPeriodoDia[1]
  }

  const coresMadrugada = {
    backgroundColor: coresFundoPeriodoDia[3],
    color:corTextoPeriodoDia[1]
  }

  const diasFormatado = 
    diaSemana == 0 ? 'Domingo' : 
    diaSemana == 1 ? 'Segunda-Feira' : 
    diaSemana == 2 ? 'Terça-Feira' :
    diaSemana == 3 ? 'Quarta-Feira' : 
    diaSemana == 4 ? 'Quinta-Feira' : 
    diaSemana == 5 ? 'Sexta-Feira' : 
    diaSemana == 6 ? 'Sabado' : ''
    
  setInterval(() => {
    const criarHoras = criarData.getHours()
    const criarMinutos = criarData.getMinutes()

    if(criarHoras >= 0 && criarHoras <= 5){
      setPeriodoDia('Madrugada')
      setIcon(<BsFillMoonFill/>)

    }else if(criarHoras >= 6 && criarHoras <= 11){
      setPeriodoDia('Manhã')
      setIcon(<BsSun/>)

    }else if(criarHoras >= 12 && criarHoras <= 17){
      setPeriodoDia('Tarde')
      setIcon(<BsSunset/>)

    }else if(criarHoras >= 18 && criarHoras <= 23){
      setPeriodoDia('Noite')
      setIcon(<BsFillMoonStarsFill/>)
      
    }

    if(criarHoras === 0 && criarMinutos == 0 || criarHoras === 6 && criarMinutos == 0 || criarHoras === 12 && criarMinutos == 0 || criarHoras === 18 && criarMinutos == 0){
      recarregarPagina()

    }

  }, 1000)

  useEffect(() => {
    if(periodoDia == 'Manhã'){
      mudarCores(coresManha.backgroundColor,coresManha.color)

    }else if(periodoDia == 'Tarde'){
      mudarCores(coresTarde.backgroundColor,coresTarde.color)

    }else if(periodoDia == 'Noite'){
      mudarCores(coresNoite.backgroundColor,coresNoite.color)

    }else if(periodoDia == 'Madrugada'){
      mudarCores(coresMadrugada.backgroundColor,coresMadrugada.color)
      
    }
    
  },[periodoDia])

  function recarregarPagina(){
    window.location.reload()
  }

  function mudarCores(corFundo:any,corTexto:any){
    document.body.style.backgroundColor = corFundo 
    document.body.style.color = corTexto
  }
  
  return(
    <div className="tempoContainer">

      <div className="infoDia">

        <div className="periodoDia">
          <span>{periodoDia}{icon}</span>
        </div>
        
        <div className="dia">
          <span>{diasFormatado}</span>
          <span>{diaAtual}/{mes}</span>
        </div>
        
      </div>

      <div className="atividadesDia">
        {diaSemana == 1 ? <Segunda periodoDia={periodoDia} /> : 
        diaSemana == 2 ? <Terça periodoDia={periodoDia}/> :
        diaSemana == 3 ? <Quarta periodoDia={periodoDia}/> :
        diaSemana == 4 ? <Quinta periodoDia={periodoDia}/> :
        diaSemana == 5 ? <Sexta periodoDia={periodoDia}/> : 
        'Descanse hoje ;)'}
      </div>
      
    </div>
  )
}