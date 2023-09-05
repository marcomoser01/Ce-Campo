import React, { Component } from 'react'
import './Style.css'

export default class ChiSiamo extends Component {
  render() {
    return (
        <div className="container-chisiamo">
            <div className='descrizione-chisiamo'>
              <div className='descrizione-chisiamo-titolo'>Chi Siamo</div>
              <div className='descrizione-chisiamo-descrizione'>C’è Campo è un’associazione di volontariato nata nel nel 2020 con lo scopo di aiutare chi ha più bisogno e creare opportunità per giovani di vivere momenti in cui potersi sperimentare in questo bellissimo</div>
              <input type='button' className='descrizione-chisiamo-bottone' />
            </div>
            <div className='immagine-chisiamo'></div>
        </div>
    )
  }
}