import React from 'react'
import PhotoGallery from '../../../components/PhotoGallery/PhotoGallery'

export default function AboutUs() {
  return (
    <div className='AboutUs'>
        <h2>Sobre nós</h2>
        <section>
            <div className='parallax'>
                <figure />
            </div>
            <div>
                <p>
                A <strong><em>Ergoface Mobiliário de Escritório, Lda</em></strong> é uma empresa em Portugal que se dedica à venda de mobiliário de escritório e prestação de serviços para empresas. O seu principal objetivo é fornecer soluções que promovam o bem-estar e a produtividade dos seus clientes.
                </p><p>
                A <strong><em>Ergoface</em></strong> destaca-se pela sua preocupação com a ergonomia, ou seja, a adaptação do mobiliário e equipamento de escritório às necessidades e características individuais de cada pessoa. A empresa oferece uma vasta gama de produtos, desde cadeiras ergonómicas a secretárias ajustáveis em altura, que permitem a correção da postura e redução do desconforto físico, prevenindo assim lesões e doenças profissionais.
                </p><p>
                Mas a <strong><em>Ergoface</em></strong> não se limita a vender mobiliário de qualidade, a empresa está empenhada em melhorar a qualidade de vida dos trabalhadores, promovendo a felicidade no trabalho e o aumento da produtividade.
                </p><p>
                Em resumo, a <strong><em>Ergoface Mobiliário de Escritório, Lda</em></strong> é uma empresa que se preocupa com o bem-estar e a saúde dos seus clientes, oferecendo soluções personalizadas e inovadoras em mobiliário de escritório com ergonomia e segurança no trabalho. Com a <strong><em>Ergoface</em></strong>, os clientes podem contar com um ambiente de trabalho mais confortável, saudável e feliz.
                </p>
            </div>
        </section>
        <PhotoGallery />   
    </div>
  )
}
