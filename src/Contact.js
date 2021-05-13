import "./Contact.css"
import emailjs from "emailjs-com";
import { useTranslation } from 'react-i18next';

function Contact(){
    function sendEmail(e) {
        e.preventDefault();

    emailjs.sendForm('service_9d12e4f', 'template_faz7esm', e.target, 'user_AIyPGTq4uQ9OS7B4DfAe0')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset()
    }

    function validateForm(e){  
        
        var name=document.myform.name.value;   
        var subj=document.myform.subject.value;  
        var msg=document.myform.message.value;  

        if (name==null || name==""){  
          alert("Name can't be blank");  
          return false;  
        }else if(subj==null || subj ==""){  
          alert("Subject can't be blank");  
          return false;  
        } else if(msg==null || msg ==""){  
            alert("Message can't be blank");  
            return false;  
        }
        else if(msg.length<50){  
            alert("Your message should have at least 50 characters");  
            return false;  
        }

        sendEmail(e);
        return true;
    }  


    const{t, i18n} = useTranslation();

    return(
        
    <div className="content-section-c">
    
    <div>
        <h1 className="title-c"> {t('Contact.1')} </h1>
        <div className="icons">
                <p><i className="fa fa-briefcase"></i> DentalWEB </p>
                <p><i className="fa fa-home"></i> Str. Mihai Viteazu, Nr.20A </p>
                <p><i className="fa fa-mobile"></i> 075234512 </p>
                <p><i className="fa fa-phone"></i> 023045233 </p>
                <p><i className="fa fa-envelope"></i> contact@dentalweb.ro </p>
                <p><i className="fa fa-calendar"></i> {t('calendar.1')} </p>
                <p><i className="fa fa-bell"></i> 9:00-18:00 </p>
        </div>
    </div>
        
        <div className="containerForm">
            <form name="myform" onSubmit={validateForm}>
                    <div className="row pt-5 mx-auto">
                        <div className="col-8 form-group mx-auto">
                            <input type="text" className="form-control" placeholder="Nume / Name / Name" name="name"/>
                        </div>
                        <div className="col-8 form-group pt-2 mx-auto">
                            <input type="email" className="form-control" placeholder="Adresa de email / Email address / E-Mail-Addresse" name="email"/>
                        </div>
                        <div className="col-8 form-group pt-2 mx-auto">
                            <input type="text" className="form-control" placeholder="Subiect / Subject / Thema" name="subject"/>
                        </div>
                        <div className="col-8 form-group pt-2 mx-auto">
                            <textarea className="form-control" id="" cols="30" rows="8" placeholder="Mesajul tau / Your message / Deine Botschaft" name="message"></textarea>
                        </div>
                        <div className="col-8 pt-3 mx-auto">
                            <input type="submit" className="btn btn-info" value="Send Message"></input>
                        </div>
                    </div>
                </form>
            </div>
    </div>
    );
}

export default Contact;