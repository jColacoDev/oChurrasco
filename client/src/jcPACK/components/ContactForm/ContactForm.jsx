import './ContactForm.scss'
import React, { useEffect, useRef, useState } from 'react'
import { validateEmail, validatePhone } from '../../utils/utils';
import emailjs from 'emailjs-com';

export default function ContactForm() {
    const [sentForm, setSentForm] = useState(false);
    const [phoneInput, setPhoneInput] = useState("");
    const [companyInput, setCompanyInput] = useState("");
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
        else if(!validatePhone(phoneInput.trim()))
            flag="o telefone";
        else if(subjectInput.trim() === "")
            flag="o assunto";
        else if(nameInput.trim() === "")
            flag="o nome";
        else if(!validateEmail(emailInput.trim()))
            flag="o email";
        else flag="";

        setErrorInput(flag);

        return flag === "" ? true : false;
    }

    function clearInputs(){
        setNameInput("");
        setEmailInput("");
        setSubjectInput("");
        setPhoneInput("");
        setCompanyInput("");
        setMessageInput("");
    }
    const sendEmail = (e) => {
        e.preventDefault();
        if(!checkInputs()) return;
    
        setSentForm(true);
    
        console.log(form.current)
        console.log(form)
        emailjs
        .sendForm(
            'service_rctrx0r',
            'template_beyjxe2',
            form.current,
            'zegNLqnQhrIr9Kpj7'
        )
        .then(
            (result) => {
                // setSentForm(true);
            },
            (error) => {
              console.log(error.text);
            }
        );

        setTimeout(() => {
            clearInputs();
            setSentForm(false);
        }, "5000");
    };
  function handleSubjectChange(event){
        setSubjectInput(event.target.value);

        if(errorInput === "o assunto" && event.target.value)
            setErrorInput("");
    }
    function handleNameChange(event){
        setNameInput(event.target.value)

        if(errorInput === "o nome" && event.target.value)
            setErrorInput("");
    }
        
    function handlePhoneChange(event){
        if(event.target.value.length < 10){
            setPhoneInput(event.target.value);
            
            if(errorInput === "o telefone" && event.target.value)
            setErrorInput("");
        }
    }
    function handleCompanyChange(event){
        setCompanyInput(event.target.value);

        if(errorInput === "a empresa" && event.target.value)
            setErrorInput("");
    }
    function handleMessageChange(event){
        setMessageInput(event.target.value)

        if(errorInput === "a mensagem" && event.target.value)
            setErrorInput("");
    }
        
    function handleEmailChange(event){
        setEmailInput(event.target.value);
        
        if(errorInput === "o email" && event.target.value)
            setErrorInput("");
            
    }

  return (
    <div className={`ContactForm`}>
        <h2>Contacte-nos</h2>
        {sentForm &&
            <section className='feedback'>
                <p>
                    Obrigado pela sua mensagem <span>{nameInput}</span>. 
                    <br />
                    <br />
                    Responderemos o mais breve possivel!
                </p>
            </section>
        }
        {!sentForm &&
            <form ref={form} className="form">
                <p type="*Nome:">
                    <input autoComplete="off"
                        required 
                        type="name" 
                        placeholder="Nome"
                        name="nameInput"
                        id="nameInput"
                        onBlur={e=>setNameInput(e.target.value.trim())}
                        onChange={handleNameChange}
                        value={nameInput}
                    />
                </p>
                <p type="*Email:">
                    <input autoComplete="off" 
                        required
                        type="email" 
                        placeholder="&#69;-&#109;ail" 
                        name="emailInput"
                        id="emailInput"
                        onBlur={e=>setEmailInput(e.target.value.trim())}
                        onChange={handleEmailChange}
                        value={emailInput}
                    />
                </p>
                <section>
                    <p type="*Assunto:">
                        <input autoComplete="off"
                            required
                            type="text"
                            placeholder="Assunto"
                            name="subjectInput"
                            id="subjectInput"
                            onBlur={e=>setSubjectInput(e.target.value.trim())}
                            onChange={handleSubjectChange}
                            value={subjectInput}
                        />
                    </p>
                    <p type="*Telefone:">
                        <input autoComplete="off"
                            required
                            type="number"
                            placeholder="Telefone"
                            name="phoneInput"
                            id="phoneInput"
                            onBlur={e=>setPhoneInput(e.target.value.trim())}
                            onChange={handlePhoneChange}
                            value={phoneInput}
                        />
                    </p>
                </section>
                <p type="Empresa:">
                    <input autoComplete="off" 
                        type="text" 
                        placeholder="Empresa"
                        name="companyInput"
                        id="companyInput"
                        onBlur={e=>setCompanyInput(e.target.value.trim())}
                        onChange={handleCompanyChange}
                        value={companyInput}
                    />
                </p>
                <p type="*Mensagem:">
                    <textarea autoComplete="off" 
                        placeholder="Mensagem"
                        onBlur={e=>setMessageInput(e.target.value.trim())}
                        onChange={handleMessageChange}
                        name="messageInput"
                        id="messageInput"
                        value={messageInput}
                    />
                </p>
                <footer> 
                    <span className='errorInput' ref={errorSpanRef}>{errorInput!=="" ? 
                        `Escreva ${errorInput}` : ""}
                    </span>
                    <button type="btnSubmit" onClick={sendEmail} id="sendLetter">
                        Enviar
                    </button>
                </footer>
            </form>
        }
        <div className='attach'>
            <span>
                <figure className='mobile'/> 91 922 40 90
            </span>
            <span>
                <figure className='email'/> geral@ergoface-lda.com
            </span>
        </div>
    </div>
  )
}
