import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_747dmjc",
        "template_qtd7yok",
        form.current,
        "dLj0TUKKxzhLjwoSO"
      )
      .then(
        (result) => {
          console.log(result);
          toast.success("Mensaje enviado correctamente!", {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
          document.getElementById("myForm").reset();
        },
        (error) => {
          toast.error("Ups, mensaje no enviado!", {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        }
      );
  };

  return (
    <>
      <form id='myForm' className='contactform' ref={form} onSubmit={sendEmail}>
        <div className='row'>
          <div className='col-12 col-md-6'>
            <div className='form-group'>
              <input type='text' name='name' placeholder='TU NOMBRE' required />
            </div>
          </div>
          {/* End .col */}

          <div className='col-12 col-md-6'>
            <div className='form-group'>
              <input
                type='email'
                name='user_email'
                placeholder='TU EMAIL'
                required
              />
            </div>
          </div>
          {/* End .col */}

          <div className='col-12 col-md-12'>
            <div className='form-group'>
              <input type='text' name='subject' placeholder='ASUNTO' required />
            </div>
          </div>
          {/* End .col */}

          <div className='col-12'>
            <div className='form-group'>
              <textarea
                name='message'
                placeholder='TU MENSAJE'
                required
              ></textarea>
            </div>
          </div>
          {/* End .col */}

          <div className='col-12'>
            <button type='submit' className='button'>
              <span className='button-text'>Enviar Mensaje</span>
              <span className='button-icon fa fa-send'></span>
            </button>
          </div>
          {/* End .col */}
        </div>
      </form>
    </>
  );
};

export default Contact;
