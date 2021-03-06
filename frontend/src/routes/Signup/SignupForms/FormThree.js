import React, { Component } from "react";
import OtpInput from "react-otp-input";

class FormThree extends Component {
  state = {
    phoneNumber: "",
    otp: "",
    showOtpBox: null,
  };

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
    // console.log(this.state.phoneNumber);
  };

  handleOtpChange = (otp) => {
    this.setState({ otp : otp });
    // console.log(this.state.otp);
  };

  sendOTP = () => {
    // console.log(this.state);
    if(this.state.phoneNumber.length != 10){
      let alertDetails = {
        alertColor : 'danger',
        alertData : 'Ingresa un numero de celular basico!'
      }
      this.props.showAlert(alertDetails);
      return;
    }
    

    this.props.sendOTP(this.state);
    // let alertDetails = {
    //   alertColor : 'success',
    //   alertData : 'OTP has been sent to your Phone Number!'
    // }
    // this.props.showAlert(alertDetails);
    this.setState({ showOtpBox: true });
  };

  verifyOTP = () => {
    // let alertDetails = {
    //   alertColor : 'success',
    //   alertData : 'Verifying OTP...'
    // }
    // this.props.showAlert(alertDetails);
    this.props.verifyOTP(this.state);
    // console.log(this.state);
    this.setState({otp : ''});
  }

  render() {
    let OtpBox = null;
    if (this.state.showOtpBox) {
      OtpBox = (
        <>
          <div className="otpInputDiv">
            <label>Ingresar OTP:</label>
            <OtpInput
              value={this.state.otp}
              onChange={this.handleOtpChange}
              numInputs={6}
              separator={<span>-</span>}
            />
          </div>
          <button
            onClick={this.verifyOTP}
            style={{ marginTop: '20px', borderRadius: "0px", fontSize: "13px", width: "100%" }}
            className="btn btn-success"
          >
            Verificar OTP
          </button>
        </>
      );
    }

    return (
      <>
        <h5 className="formOneHead">Verifica tu numero celular</h5>

        <div className="form-group">
          <label>N??mero celular:</label>
          <input
            style={{ fontSize: "14px" }}
            type="number"
            name="phoneNumber"
            value={this.state.phoneNumber}
            onChange={this.handleChange}
            className="form-control"
            placeholder="Ingresa tu numero celular"
            id="phoneNumber"
            required
          />

          {/* <div className="text-danger">{this.state.errors.name}</div> */}
        </div>

        <button
          onClick={this.sendOTP}
          style={{ borderRadius: "0px", fontSize: "13px", width: "100%" }}
          className="btn btn-success"
        >
          Enviar OTP
        </button>

        {OtpBox}
      </>
    );
  }
}

export default FormThree;
