import './SubscribeBox.scss'
import React, { useState, useEffect } from 'react'
import { GET_ALL_NEWS_SUBSCRIPTIONS } from '../../graphql/queries';
import { useMutation, useQuery } from '@apollo/client';
import { NEWS_SUBSCRIPTION_CREATE } from '../../graphql/mutations';
import { validateEmail } from '../../utils/utils';

export default function SubscribeBox() {

    const [subscriptionSent, setSubscriptionSent] = useState(false);
    const [inputError, setInputError] = useState("");
    const [newsSubscriptions, setNewsSubscriptions] = useState();
    const [inputNewsSubscription, setInputNewsSubscription] = useState({
        email: "",
        label: "general"
    });

     /* ************************************************************ */
    /* QUERIES   ************************************************* */
    const {
        called: NewsSubscriptionsCalled , 
        data: NewsSubscriptionsData , 
        loading: NewsSubscriptionsLoading, 
        error: NewsSubscriptionsError
    } = useQuery(GET_ALL_NEWS_SUBSCRIPTIONS, {
        onError: (error) => console.error("news subscriptions query error: ", error),
        fetchPolicy: "cache-and-network",
    });
    /* ************************************************************ */
    /* MUTATIONS   ********************************************* */
    const [subscriptionCreate] = useMutation(NEWS_SUBSCRIPTION_CREATE, {
        onCompleted: () =>  console.log("News subscription created"),
        onError: (error) => console.error("News subscription error: ", error)
    })
    /* ************************************************************ */
    /* useEffect   ************************************************* */
    useEffect(() => {
        setNewsSubscriptions(NewsSubscriptionsData)
    }, [NewsSubscriptionsData])
    
    useEffect(() => {
        if(newsSubscriptions?.allNewsSubscriptions)
        if(newsSubscriptions.allNewsSubscriptions[0]){
            console.log(newsSubscriptions.allNewsSubscriptions[0])
            }
    }, [newsSubscriptions])


    const handleSubscriptionChange = (e)=>{
        setInputNewsSubscription({
            ...inputNewsSubscription,
            email: e.currentTarget.value
        })
        setInputError("")
    }

    const handleSubscriptionClick = ()=>{
        if(subscriptionSent){
            setSubscriptionSent(false)
            setInputNewsSubscription({email: ""})
        }else{
            if(validateEmail(inputNewsSubscription.email)){
                subscriptionCreate({variables: {input: inputNewsSubscription}});
                setInputError("")
                setSubscriptionSent(true);
            }else{
                setInputError("*Please enter a valid email")
            }
        }
    }
  return (
    <div className='SubscribeBox'>
        <div className="subscribe-wrapper">
            <h4>SUBSCREVA A NOSSA NEWSLETTER</h4>
            {!subscriptionSent ? <p>
                    Esteja sempre à frente das novidades em mobiliário de escritório! <br /> Inscreva-se agora na nossa newsletter e receba em primeira mão todas as nossas ofertas exclusivas e lançamentos de produtos. É simples e gratuito - basta inserir o seu e-mail abaixo e clicar em 'Subscrever'.
                </p> : <p>
                    Obrigado pela subscrição! Em breve receberá todas as novidades da Ergoface diretamente na sua caixa de entrada. 
                    <br /> Até lá, continue a explorar o nosso site e descubra o melhor mobiliário de escritório para o seu espaço.
                </p>
            }
            <input type="email" 
                disabled={subscriptionSent}
                name="email" 
                className="subscribe-input" 
                placeholder="... e-mail" 
                value={inputNewsSubscription.email}
                onChange={handleSubscriptionChange}
            />
            <div onClick={handleSubscriptionClick}
                className="submit-btn"
            >{subscriptionSent ? "VOLTAR" : "SUBSCREVER"}</div>
            <footer>{inputError}</footer>
        </div>
    </div>
  )
}
