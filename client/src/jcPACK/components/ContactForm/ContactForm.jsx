import './ContactForm.scss'
import React, { useEffect, useRef, useState } from 'react'

export default function ContactForm() {
    const [subjectInput, setSubjectInput] = useState("");
    const [messageInput, setMessageInput] = useState("");
    const [nameInput, setNameInput] = useState("");
    const [emailInput, setEmailInput] = useState("");
    const [errorInput, setErrorInput] = useState("");
    
    const form = useRef();
    const errorSpanRef = useRef();
    
    useEffect(() => {
        if(errorInput !== ""){
            errorSpanRef.current.classList.add("shaking");
            setTimeout(() => {
                errorSpanRef.current.classList.remove("shaking");
            }, "1000");
        }
    }, [errorInput]);

    function checkInputs() {
        let flag = "";

        if(messageInput.trim() === "")
            flag="a mensagem";
        else if(subjectInput.trim() === "")
            flag="o assunto";
        else if(nameInput.trim() === "")
            flag="o nome";
        else if(!validateEmail(emailInput))
            flag="o email";
        else flag="";

        setErrorInput(flag);

        return flag === "" ? true : false;
    }

    const sendEmail = (e) => {
        e.preventDefault();
        if(!checkInputs()) return;
    
        setSentClass("sent");
    
        emailjs
        .sendForm(
            'service_now7y2s',
            'template_xx3gpgl',
            form.current,
            'zegNLqnQhrIr9Kpj7'
        )
        .then(
            (result) => {
                // setSentClass("sent");
            },
            (error) => {
              console.log(error.text);
            }
        );
    };
  function handleSubjectChange(event){
        setSubjectInput(event.target.value);

        if(errorInput === "subject" && event.target.value)
            setErrorInput("");
    }
    function handleNameChange(event){
        setNameInput(event.target.value)

        if(errorInput === "name" && event.target.value)
            setErrorInput("");
    }
    function handleMessageChange(event){
        setMessageInput(event.target.value)

        if(errorInput === "message" && event.target.value)
            setErrorInput("");
    }
        
    function handleEmailChange(event){
        setEmailInput(event.target.value);
        
        if(errorInput === "email" && event.target.value)
            setErrorInput("");
            
    }  function handleSubjectChange(event){
        setSubjectInput(event.target.value);

        if(errorInput === "subject" && event.target.value)
            setErrorInput("");
    }
    function handleNameChange(event){
        setNameInput(event.target.value)

        if(errorInput === "name" && event.target.value)
            setErrorInput("");
    }
    function handleMessageChange(event){
        setMessageInput(event.target.value)

        if(errorInput === "message" && event.target.value)
            setErrorInput("");
    }
        
    function handleEmailChange(event){
        setEmailInput(event.target.value);
        
        if(errorInput === "email" && event.target.value)
            setErrorInput("");
            
    }

  return (
    <div className='ContactForm'>
        <form ref={form} className="form">
            <h2>Contacte-nos</h2>
            <p type="Nome:">
                <input autoComplete="off" 
                    type="name" 
                    placeholder="Nome"
                    name="name"
                    id="name"
                    onChange={handleNameChange}
                    value={nameInput}
                />
            </p>
            <p type="Email:">
                <input autoComplete="off" type="cartaType" placeholder="&#69;-&#109;ail" 
                    name="cartaType"
                    id="cartaType"
                    onChange={handleEmailChange}
                    value={emailInput}
                />
            </p>
            <p type="Assunto:">
                <input autoComplete="off" 
                    type="subjectType" 
                    placeholder="Assunto"
                    name="subject"
                    id="subject"
                    onChange={handleSubjectChange}
                    value={subjectInput}
                />
            </p>
            <p type="Mensagem:">
                <textarea autoComplete="off" 
                    placeholder="Mensagem"
                    onChange={handleMessageChange}
                    name="message"
                    id="message"
                    value={messageInput}
                />
            </p>
            <footer> 
                <span ref={errorSpanRef}>{errorInput!=="" ? 
                    `Escreva ${errorInput}` : ""}
                </span>
                <button type="btnSubmit" onClick={sendEmail} id="sendLetter">
                    Enviar
                </button>
            </footer>
            <div>
                <span /> 91 922 40 90
                <span /> geral@ergoface-lda.com
            </div>
        </form>
    </div>
  )
}
