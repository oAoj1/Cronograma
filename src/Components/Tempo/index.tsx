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
  const coresPeriodoDia = ['#00ffff','#fccf74','#341c8c','#170d3b']

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

  }, 1000)

  useEffect(() => {
    if(periodoDia == 'Manhã'){
      document.body.style.backgroundColor = coresPeriodoDia[0]
      document.body.style.color = '#000'

    }else if(periodoDia == 'Tarde'){
      document.body.style.backgroundColor = coresPeriodoDia[1]
      document.body.style.color = '#000'

    }else if(periodoDia == 'Noite'){
      document.body.style.backgroundColor = coresPeriodoDia[2]
      document.body.style.color = '#fff'

    }else if(periodoDia == 'Madrugada'){
      document.body.style.backgroundColor = coresPeriodoDia[3]
      document.body.style.color = '#fff'
      
    }
    
  },[periodoDia])
  
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
        {diaSemana == 1 ? <Segunda/> : 
        diaSemana == 2 ? <Terça/> :
        diaSemana == 3 ? <Quarta/> :
        diaSemana == 4 ? <Quinta/> :
        diaSemana == 5 ? <Sexta/> : 
        'Descanse hoje ;)'}
      </div>
      
    </div>
  )
}