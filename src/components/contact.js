import React from 'react';
import Card from '@material-ui/core/Card';
import InputLabel from "@material-ui/core/InputLabel"
import Modal from "@material-ui/core/Modal"
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from "@material-ui/core/FormControl"
import OutlinedInput from '@material-ui/core/OutlinedInput';
import Input from "@material-ui/core/Input"
import AccountCircle from '@material-ui/icons/AccountCircle';
import MailOutline from '@material-ui/icons/MailOutline';
import Fade from '@material-ui/core/Fade';
import toast from 'toasted-notes';
import emailjs from 'emailjs-com';
import ProfilePic from "../images/profilePic.jpg"
import PropTypes from "prop-types"
import validator from "email-validator"
import Layout from "./layout"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import OrangeWood from '../images/THDOrangeWood.jpg'
import THD from "../images/TheHomeDepot.svg"
import Zimperium from "../images/zimperiumSecurity.svg"
import TejasMehtaResume from "../images/TejasMehtaResume.pdf"

const Contact = ({show}) => {
  const [values, setValues] = React.useState({
    name: '',
    email: '',
    message: '',
  });

  const [filledNameError, setFilledNameError] = React.useState(false);
  const [filledEmailError, setFilledEmailError] = React.useState(false);
  const [filledMessageError, setFilledMessageError] = React.useState(false)
  const [invalidEmailError, setInvalidEmailError] = React.useState(false);

  const [openModal, toggleModal] = React.useState(false)

  const colorTheme = "#1a237e";

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const invalidField = (prop) => {
      setValues({...values, [prop]: true});
  }

  const sendEmail = () => {
    setFilledNameError(values.name.length === 0);

    setFilledEmailError(values.email.length === 0);

    setFilledMessageError(values.message.length === 0);
    let validEmail = validator.validate(values.email);
    setInvalidEmailError(!validEmail);
    if (values.name.length > 0 && values.message.length > 0 && values.email.length > 0){
      if (!validEmail) {
        toast.notify('Please enter a valid email!', {
          duration: 3000
        });
      }
      else{
        let template_params = {
          "reply_to": values.email,
          "from_name": values.name,
          "message_html": values.message
        }

        let service_id = "gmail";
        let template_id = "iamtejasmehtaemail";
        let user_id = "user_YfxEKrg45LOPTKCCDRM3X";
        let sentEmail = emailjs.send(service_id, template_id, template_params, user_id);
        toggleModal(true);
        console.log(sentEmail);
      }
    }
    else {
      toast.notify('Please complete all fields!', {
        duration: 3000
      });
    }

  }

  return(
    <React.Fragment>
      <div id={"ContactUs"} style={{overflow: "hidden", marginTop: "150px"}} className={show + " dynamicContainer"}>
        <div>
          <Card style={{padding: "50px", textAlign: "center"}}>
        <h1 style={{fontWeight: 600}} id={"contactTitle"}>Let's Get in Touch!</h1>
            <hr className={"smallBlueHR"}/>
        <p>You've gotten to know me, now let me get to know you!</p>
            <div className={"contactInputDiv dynamicContainer"}>
            <FormControl fullWidth={true} className={"FormControlContact"} variant="outlined">
            <InputLabel className={"contactInputLabel"} htmlFor="outlined-adornment-name">Name</InputLabel>
            <OutlinedInput
              className={"FormControlContact"}
              id="outlined-adornment-name"
              type='text'
              error = {filledNameError}
              value={values.name}
              onChange={handleChange('name')}
              labelWidth={70}
              endAdornment={
                <InputAdornment className={"contactInputAdornment"} position="end">
                  <AccountCircle></AccountCircle>
                </InputAdornment>
              }
            />
            </FormControl>
            <div style={{marginTop: "20px"}}/>
              <FormControl fullWidth={true} className={"FormControlContact"} variant="outlined">
                <InputLabel className={"contactInputLabel"} htmlFor="outlined-adornment-email">Email</InputLabel>
                <OutlinedInput
                  className={"FormControlContact"}
                  id="outlined-adornment-email"
                  type='text'
                  error = {filledEmailError || invalidEmailError}
                  value={values.email}
                  onChange={handleChange('email')}
                  labelWidth={70}
                  endAdornment={
                    <InputAdornment className={"contactInputAdornment"} position="end">
                     <MailOutline/>
                    </InputAdornment>
                  }
                />
              </FormControl>
            <div style={{marginTop: "20px"}}/>
            <FormControl fullWidth={true} variant="outlined">
              <InputLabel style={{marginLeft: "-13px"}} htmlFor="outlined-adornment-message">Message</InputLabel>
              <Input
                label={"Message"}
                error={filledMessageError}
                id="outlined-adornment-message"
                type='text'
                multiline
                rows={3}
                value={values.message}
                onChange={handleChange('message')}
              />
            </FormControl>
              <div style={{marginTop: "20px"}}/>
              <button style={{padding: "12px 12px 12px 12px"}} onClick={sendEmail} className={"buttonBlue ripple"}>Submit</button>
            </div>
          </Card>
        </div>
      </div>
      <Modal
        className={"MainModal transitionFade"}
        open={openModal}
        onClose={() => toggleModal(false)}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <Fade in={openModal}>
        <div className={"dynamicContainer rootDivModal transitionFade"}>
        <Card style={{padding: "30px", width: "50%", marginLeft:"auto", marginRight: "auto"}}>
        <h1 className={"ModalTitle"}>Thanks {values.name} :)</h1>
          <p>We will be in touch!</p>
          <button
            style={{fontFamily: 'Material Icons', padding: "12px 12px 7px 12px"}}
            className={"buttonBlue ripple"}
            onClick={() => toggleModal(false)}
          >
            <i className="material-icons">close</i>
          </button>
        </Card>
        </div>
        </Fade>
      </Modal>
    </React.Fragment>
  )
}
Contact.propTypes = {
  show: PropTypes.string.isRequired,
}
export default Contact
