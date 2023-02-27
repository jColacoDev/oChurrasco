import './QualityBadges.scss'
import React from 'react'

import selo_entrega from './../../../assets/images/ergoSelos/entrega.png'
import selo_garantia from './../../../assets/images/ergoSelos/garantia.png'
import selo_montagem from './../../../assets/images/ergoSelos/montagem.png'
import selo_orcamento from './../../../assets/images/ergoSelos/orcamento.png'
import selo_preco from './../../../assets/images/ergoSelos/preco.png'
import selo_suporte from './../../../assets/images/ergoSelos/suporte.png'

export default function QualityBadges() {
  return (
    <section className='QualityBadges'>
        <article>
            <figure style={{backgroundImage: `url(${selo_suporte})`}} />
            <h4>Suporte Especializado</h4>
            <p>Comerciais experientes para ajudar</p>
        </article>
        <article>
            <figure style={{backgroundImage: `url(${selo_preco})`}} />
            <h4>O melhor Preço</h4>
            <p>Garantia do melhor preço</p>
        </article>
        <article>
            <figure style={{backgroundImage: `url(${selo_orcamento})`}} />
            <h4>Orçamentos Grátis</h4>
            <p>Consulte-nos sem compromisso</p>
        </article>
        <article>
            <figure style={{backgroundImage: `url(${selo_entrega})`}} />
            <h4>Entregas em todo o país</h4>
            <p>Dispomos de viaturas próprias</p>
        </article>
        <article>
            <figure style={{backgroundImage: `url(${selo_montagem})`}} />
            <h4>Montagem</h4>
            <p>Equipas especializadas</p>
        </article>
        <article>
            <figure style={{backgroundImage: `url(${selo_garantia})`}} />
            <h4>Garantia de Qualidade</h4>
            <p>2 anos de garantia</p>
        </article>
    </section>
  )
}
