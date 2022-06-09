import React, { Component } from 'react';
import './Signup.css';
import Navbar from '../../components/Navbar/Navbar';
import FormOne from './SignupForms/FormOne';
import FormTwo from './SignupForms/FormTwo';
import FormThree from './SignupForms/FormThree';
import Loader from '../../components/Loader/Loader';
import CustomAlert from '../../components/CustomAlert/CustomAlert';
import axios from '../../API/baseURL/baseURL';
import { Redirect } from 'react-router-dom';
import moment from 'moment';

class Signup extends Component {

  state = {
    loading : null,
    stage : this.props.match.params.id,
    showAlert : null,
    alertColor : null,
    alertData : null,
    redirect : null,
  }

  submitFormOne = (details) => {

    let userData = {
      email : details.email,
      password : details.password,
    }
    // console.log(userData);
    this.setState({ loading : true});

    
    axios.post('/user/create/',userData)
      .then((res)=>{
        this.setState({ loading : true});
        console.log(res);
        if(res.status === 201){
          this.setState({ loading : false });
          let userId = res.data.id;
          localStorage.setItem('userID',userId);
          this.setState({redirect : '2'});
        }
        if(res.status === 226){
          this.setState({
            loading : false,
            showAlert : true, 
            alertData : 'Ya existe un usuario con este E-mail!', 
            alertColor : 'danger'
          })
        }
      })
      .catch((err)=>{
        console.log(err);
        this.setState({
          loading : false,
          showAlert : true, 
          alertData : 'Algo salio mal!', 
          alertColor : 'danger'
        })
      })
    // setTimeout(()=>{
    //   this.setState({loading : false});
    // },6000)
  }

  submitFormTwo = (details) => {

    console.log(details);

    let userId = localStorage.getItem('userID');
    let userDetails = new FormData();
    userDetails.append('first_name',details.firstName);
    userDetails.append('last_name',details.lastName);
    if(details.selectedFile !== null){
      userDetails.append('avatar',details.selectedFile);
    }
    userDetails.append('location',details.location);
    userDetails.append('is_employed',!details.isStudent);
    userDetails.append('organization_name',details.industry);
    userDetails.append('position',details.position);
    userDetails.append('start_date',moment(details.startDate).format('YYYY-MM-DD'));
    userDetails.append('end_date',moment(details.endDate).format('YYYY-MM-DD'));

    console.log(userDetails);
    this.setState({loading : true});

    axios.post(`/user/create/profile/${userId}/`,userDetails)
      .then((res)=>{
        console.log(res);
        if(res.status === 201){
          this.setState({loading : false});
          this.setState({redirect : '3'});
          localStorage.setItem('profileID',res.data.id);
        }
      })
      .catch((err)=>{
        console.log(err);
        this.setState({loading : false});
        this.setState({
          showAlert : true, 
          alertData : 'Algo salio mal!', 
          alertColor : 'danger'
        })      
      })

    // let userId = '253';
    // const userDetails = {
    //   first_name : details.firstName,
    //   last_name : details.lastName,
    //   avatar : details.selectedFile,
    //   location : details.location,
    //   is_employed : details.isStudent,
    //   organization_name : details.industry,
    //   positon : details.position,
    //   startYear : Number(details.startDate),
    //   endYear : Number(details.endDate),
    // }
    // console.log(userDetails);
  }

  sendOTP = (details) => {

    console.log(details);
    let profileID = localStorage.getItem('profileID');
    let sendOtpData = {
      phone_number : details.phoneNumber,
      profile_id : profileID
    }
    let userID = localStorage.getItem('userID');
    
    // this.setState({loading : true});
    axios.patch(`/user/create/profile/${userID}/`,sendOtpData)
      .then((res)=>{
        console.log(res);
        // this.setState({loading : false});
        if(res.status === 202){
          this.setState({
            showAlert : true, 
            alertData : 'OTP ha sido enviado a tu numero celular', 
            alertColor : 'success'
          })
        }
      })
      .catch((err)=>{
        console.log(err.response)
        // if(err.response.status === 403){
        //   this.setState({
        //     showAlert : true, 
        //     alertData : 'Phone number already linked to an account', 
        //     alertColor : 'danger'
        //   })
        // }
        this.setState({
          showAlert : true, 
          alertData : 'Este numero celular ya esta relacionado con otra cuenta', 
          alertColor : 'danger'
        })
        // this.setState({loading : false});
      })
  }
  
  verifyOTP = (details) => {
    console.log(details);
    let verifyOtpData = {
      phone_number : details.phoneNumber,
      otp : details.otp
    }
    // this.setState({loading : true});
    this.setState({
      showAlert : true, 
      alertData : 'Por favor espera en lo que verificamos tu numero celular...', 
      alertColor : 'success'
    })
    axios.post('/user/account/verify/',verifyOtpData)
      .then((res)=>{
        console.log(res);
        // this.setState({loading : false});
        if(res.status === 200){
          this.setState({
            showAlert : true, 
            alertData : 'El numero celular ha sido verificado con exito!', 
            alertColor : 'success'
          })
          this.setState({redirect : '4'});
        }
      })
      .catch((err)=>{
        console.log(err);
        this.setState({loading : false});
        if(err.response.status === 400){
          this.setState({
            showAlert : true, 
            alertData : 'OTP expirado!', 
            alertColor : 'danger'
          })
        }
        if(err.response.status === 403){
          this.setState({
            showAlert : true, 
            alertData : 'OTP equivocado!', 
            alertColor : 'danger'
          })
        }
      })
  }


  showAlert = (alertDetails) => {
    this.setState({showAlert : true , alertData : alertDetails.alertData , alertColor : alertDetails.alertColor});  
  }

  hidePopup = () => {
    this.setState({showAlert : null});
  }

  render() {

    if(this.state.redirect === '2'){
      return <Redirect to='/userSignup/personalDetails'/>
    }
    if(this.state.redirect === '3'){
      return <Redirect to='/userSignup/otpVerification'/>
    }
    if(this.state.redirect === '4'){
      return <Redirect to='/userLogin'/>
    }

    let AlertData = null;
    if(this.state.showAlert){
      AlertData = (
        <CustomAlert hidePop={this.hidePopup} color={this.state.alertColor} content={this.state.alertData}/>
      )
    }

    let formData = <FormOne submitHandler={this.submitFormOne}/>;

    if(this.state.stage === 'register'){
      formData = <FormOne submitHandler={this.submitFormOne}/>
    }
    if(this.state.stage === 'personalDetails'){
      formData = <FormTwo submitHandler={this.submitFormTwo}/>
    }
    if(this.state.stage === 'otpVerification'){
      formData = <FormThree sendOTP={this.sendOTP} verifyOTP={this.verifyOTP} showAlert={this.showAlert}/>
    }

    if(this.state.loading){
      formData = (
        <div className='loaderWindow'>
          <Loader/>
        </div>
      )
    }

    return (
      <div>
        <Navbar/>
        {AlertData}
        <div className='signupBody'>
          <div className='signupForm'>
            {formData}
          </div>
        </div>
      </div>
    );
  }
}

export default Signup;