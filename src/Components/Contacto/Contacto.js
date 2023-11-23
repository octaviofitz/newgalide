import React from 'react';
import { useState } from 'react';

import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

import './contacto.css';

function Contacto() {

    function sendEmail(e) {
        e.preventDefault();
    
        emailjs.sendForm(
          "service_12v7z3r",
          "template_1x8kq2e",
          e.target,
          "user_UZZRkDhqNS7u2f3QF9aOT"
        ).then(res=>{
            console.log(res);
        }).catch(err=> console.log(err));
      }
    
    
    //validaciones
    
    //validación nombre
    const [name, setName]= useState('')
    const [leyendaName, setLeyendaName]= useState('')
    const [errorName, setErrorName] = useState(false)
    const [botonName, setBotonName]= useState(false)
    
    //validación email
    const [mail, setMail]= useState('')
    const [leyendaMail, setLeyendaMail]= useState('')
    const [errorMail, setErrorMail] = useState(false)
    const [botonMail, setBotonMail]= useState(false)
    const re= /\S+@\S+\.\S+/ // eslint-disable-line
    
    
/*     //validación teléfono
    const [telefono, setTelefono]= useState('')
    const [leyendaTelefono, setLeyendaTelefono]= useState('')
    const [errorTelefono, setErrorTelefono] = useState(false)
    const [botonTelefono, setBotonTelefono]= useState(false) */
    
    //validación mensaje
    const [mensaje, setMensaje]= useState('')
    const [leyendaMensaje, setLeyendaMensaje]= useState('')
    const [errorMensaje, setErrorMensaje] = useState(false)
    const [botonMensaje, setBotonMensaje]= useState(false)
    
    //SweetAlert
    const mostrarAlerta=()=> {
      Swal.fire({
        title: "¡Tu mensaje ha sido enviado con éxito!",
        text: "En breve nos pondremos en contacto",
        icon: "success",
        timer: "1000000"
      })
    }

    return (
        <section className='contacto' id='contacto'>
            <h5 className='titulo'>CONSULTANOS<br></br><mark className='mark'>LO QUE QUIERAS</mark>, CUANDO QUIERAS!</h5>

            <Box
        component="form"
        sx={{
          '& > :not(style)': { m: 1, width: '25ch' },
        }}
        noValidate
        id='formContact'
        autoComplete="off"
        onSubmit={sendEmail}
      >
        <div className='Formulario'>
      
      
        {/* <TextField id="outlined-basic" name='nombre' label="Nombre" variant="outlined" className='Input' onChange={(e) => {
          setName(e.target.value);
          if(name.length>45){
            setErrorName(true);
            setLeyendaName("Ingrese un nombre válido");
          }else{
              setErrorName(false);
              setLeyendaName('');
              setBotonName(true)
            }
        }}
        error={errorName}
        helperText={leyendaName} /> */}

<TextField
  id="outlined-basic"
  name='nombre'
  label="Nombre"
  variant="outlined"
  className='Input'
  onChange={(e) => {
    const valorNombre = e.target.value;
    setName(valorNombre);

    if (valorNombre.trim() === '') {
      setErrorName(true);
      setLeyendaName("Ingrese un nombre");
      setBotonName(false); // Desactivar el botón si el campo está vacío
    } else if (valorNombre.length > 45) {
      setErrorName(true);
      setLeyendaName("Ingrese un nombre válido (máximo 45 caracteres)");
      setBotonName(false); // Desactivar el botón si el nombre es demasiado largo
    } else {
      setErrorName(false);
      setLeyendaName('');
      setBotonName(true);
    }
  }}
  error={errorName}
  helperText={leyendaName}
/>


        {/* <TextField id="filled-basic" name='mail' label="Correo" variant="outlined" className='Input'  onChange={(e) => {
          setMail(e.target.value);
          if(!re.test(mail)){
            setErrorMail(true);
            setLeyendaMail("Ingrese un correo electrónico válido");
          }else{
              setErrorMail(false);
              setLeyendaMail('');
              setBotonMail(true)
            }
        }}
        error={errorMail} 
        helperText={leyendaMail}
        /> */}

<TextField
  id="filled-basic"
  name="mail"
  label="Correo"
  variant="outlined"
  className="Input"
  onChange={(e) => {
    const valorEmail = e.target.value;
    setMail(valorEmail);

    if (!re.test(valorEmail) || valorEmail.trim() === '') {
      setErrorMail(true);
      setLeyendaMail("Ingrese un correo electrónico válido");
      setBotonMail(false); // Desactivar el botón si el campo está vacío o el correo no es válido
    } else {
      setErrorMail(false);
      setLeyendaMail('');
      setBotonMail(true);
    }
  }}
  error={errorMail}
  helperText={leyendaMail}
/>


        {/* <TextField id="standard-basic" name='telefono' label="Teléfono" variant="outlined" className='Input' type='number' onChange={(e) => {
          setTelefono(e.target.value);
          if(telefono.length<6 || telefono.length>25){
            setErrorTelefono(true);
            setLeyendaTelefono("Ingrese un número de contacto válido");
          }else{
              setErrorTelefono(false);
              setLeyendaTelefono('');
              setBotonTelefono(true)
            }
        }}
        error={errorTelefono} 
        helperText={leyendaTelefono}/> */}


       {/*  <TextField
          id="filled-multiline-static"
          label="Mensaje"
          name='msg'
          multiline
          rows={4}
          className='Input'
          onChange={(e) => {
            setMensaje(e.target.value);
            if(mensaje.length<0 || mensaje.length>5000){
              setErrorMensaje(true);
              setLeyendaMensaje("Mensaje Vacío");
            }else{
                setErrorMensaje(false);
                setLeyendaMensaje('');
                setBotonMensaje(true)
              }
          }}
          error={errorMensaje} 
          helperText={leyendaMensaje}
        /> */}
<TextField
  id="filled-multiline-static"
  label="Mensaje"
  name='msg'
  multiline
  rows={4}
  className='Input'
  onChange={(e) => {
    const valorMensaje = e.target.value;
    setMensaje(valorMensaje);

    if (valorMensaje.trim() === '') {
      setErrorMensaje(true);
      setLeyendaMensaje("Ingrese un mensaje");
      setBotonMensaje(false); // Desactivar el botón si el campo está vacío
    } else if (valorMensaje.length > 5000) {
      setErrorMensaje(true);
      setLeyendaMensaje("Mensaje demasiado largo (máximo 5000 caracteres)");
      setBotonMensaje(false); // Desactivar el botón si el mensaje es demasiado largo
    } else {
      setErrorMensaje(false);
      setLeyendaMensaje('');
      setBotonMensaje(true);
    }
  }}
  error={errorMensaje}
  helperText={leyendaMensaje}
/>



{
         botonName===true &&  botonMail===true && botonMensaje===true
            ? <button className='button'
            type='submit' onClick={()=>mostrarAlerta()}>
                    Enviar
                </button>       
               :
               <button className='button'
           type='submit' disabled>
                   Enviar
               </button>   
            }

        </div>
     </Box>

        </section>
    );
}

export default Contacto;