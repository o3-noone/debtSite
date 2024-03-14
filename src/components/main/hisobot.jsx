import React from 'react'
import dataLanguage from '../data/dataLanguage'

const Hisobot = ({language}) => {
  return (
    <div className="main">
        <div className="hisobot">
          <div className="hisobot-Title">
            <div className="hisobotItem">
              <h4>{dataLanguage[`kun${language}`]}</h4>
              <div><i className="fa-solid fa-calendar-minus"></i> <i className="fa-solid fa-calendar-plus"></i></div>
              <div><p>0</p> <p>0</p></div>
            </div>
            <div className="hisobotItem">
              <h4>{dataLanguage[`hafta${language}`]}</h4>
              <div><i className="fa-solid fa-calendar-minus"></i> <i className="fa-solid fa-calendar-plus"></i></div>
              <div><p>0</p> <p>0</p></div>
            </div>
            <div className="hisobotItem">
              <h4>{dataLanguage[`oy${language}`]}</h4>
              <div><i className="fa-solid fa-calendar-minus"></i> <i className="fa-solid fa-calendar-plus"></i></div>
              <div><p>0</p> <p>0</p></div>
            </div>
          </div>
          <div className="hisobotData">
            <div className="hisobotInp">
              <input type="date" />
              <span>{dataLanguage[`sananitanlash${language}`]}</span>
            </div>
            <div className="hisobotInp">
              <i className="fa-solid fa-calendar-minus"></i> <p>ok</p>
              <span>{dataLanguage[`kirim${language}`]}</span>
            </div>
            <div className="hisobotInp">
              <i className="fa-solid fa-calendar-plus"></i> <p>ok</p>
              <span>{dataLanguage[`chiqim${language}`]}</span>
            </div>
          </div>
        </div>
      </div>
  )
}

export default Hisobot