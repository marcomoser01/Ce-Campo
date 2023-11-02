import React, { Component } from 'react';
import './Style.css';
import dataFromJson from '../../Testi/PresentazioniHome.json';

export default class ChiSiamo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
    };
  }

  componentDidMount() {
    const { title } = this.props;
    const matchingData = dataFromJson.find((item) => item.title === title);
    this.setState({ data: matchingData });

  }

  renderSinistra(data) {
    return (
      <>
        <div className='descrizione-chisiamo'>
          <div className='descrizione-chisiamo-titolo'>{data.title}</div>
          <div className='descrizione-chisiamo-descrizione'>{data.description}</div>
          <input type='button' className='descrizione-chisiamo-bottone' />
        </div>
        <div className='immagine-chisiamo'></div>
      </>
    );
  }

  renderDestra(data) {
    return (
      <>
        <div className='immagine-chisiamo'></div>
        <div className='descrizione-chisiamo'>
          <div className='descrizione-chisiamo-titolo'>{data.title}</div>
          <div className='descrizione-chisiamo-descrizione'>{data.description}</div>
          <input type='button' className='descrizione-chisiamo-bottone' />
        </div>
      </>
    );
  }


  render() {
    const { posizione } = this.props;
    const { data } = this.state;
    const isPosizioneDestra = posizione === 'destra';

    if (!data) {
      return null; // Ritorna null se i dati non sono stati ancora caricati
    }

    // Determina le colonne CSS in base alla posizione
    const gridColumns = isPosizioneDestra ? '40% 60%' : '60% 40%';
    return (
      <div className="chisiamo" style={{ gridTemplateColumns: gridColumns }}>
        {data && (isPosizioneDestra ? this.renderDestra(data) : this.renderSinistra(data))}

      </div>
    );
  }
}
