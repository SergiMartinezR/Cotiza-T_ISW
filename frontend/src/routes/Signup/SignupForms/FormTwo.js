import React, { Component } from "react";
import { Link } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
// import DatePicker from "react-date-picker";
import moment from "moment";

const nameRegex = RegExp(/^[a-zA-Z_-]{0,30}$/);
const lastnameRegex = RegExp(/^[a-zA-Z\s]+$/);

const formValid = ({ formErrors, ...rest }) => {
  let valid = true;

  // validate form errors being empty
  Object.values(formErrors).forEach((val) => {
    val.length > 0 && (valid = false);
  });

  // validate the form was filled out
  // console.log('Val :')
  Object.values(rest).forEach((val) => {
    //   // if(val !== 'selectedFile'){
    //     val === null && (valid = false);
    //   // }
  });

  return valid;
};

class FormTwo extends Component {
  state = {
    firstName: null,
    lastName: null,
    location: null,
    position: null,
    industry: null,
    startDate: new Date(),
    endDate: new Date(),
    selectedFile: null,
    isStudent: false,
    semanasCotizadas: "",
    formErrors: {
      firstName: "",
      lastName: "",
      location: "",
      position: "",
      industry: "",
      startDate: "",
      endDate: "",
      semanasCotizadas: "",
      // selectedFile: ""
    },
  };

  fileChangedHandler = (event) => {
    this.setState({ selectedFile: event.target.files[0] });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    if (formValid(this.state)) {
      console.log(this.state);
      this.props.submitHandler(this.state);
    } else {
      console.error("FORM INVALID - DISPLAY ERROR MESSAGE");
    }
  };


  handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    let formErrors = { ...this.state.formErrors };

    switch (name) {
      case "firstName":
        formErrors.firstName =
          (value.length < 3 && value.length > 0
            ? "se requieren al menos 3 caracteres"
            : "") ||
          (formErrors.firstName = nameRegex.test(value)
            ? ""
            : "solo caracteres estan permitidos!");
        break;

      case "lastName":
        let spaceNum = 0;
        for (let ch in value) {
          if (value[ch] === " ") {
            spaceNum = spaceNum + 1;
          }
        }
        formErrors.lastName =
          (spaceNum > 1 ? "mas de un espacio esta prohibido" : "") ||
          (value.length < 3 ? "se requieren al menos 3 caracteres" : "") ||
          (formErrors.lastName = lastnameRegex.test(value)
            ? ""
            : "solo se permiten caracteres");
        break;
      case "semanasCotizadas":
        formErrors.semanasCotizadas = 
          (value<15 ? "Necesitas al menos 15 a??os cotizados" : "")
        break;

      case "location":
        formErrors.location =
          value.length < 3 ? "se requieren al menos 3 caracteres" : "";
        break;

      case "position":
        formErrors.position =
          value.length < 3 ? "se requieren al menos 3 caracteres" : "";
        break;

      case "industry":
        formErrors.industry =
          value.length < 3 ? "se requieren al menos 3 caracteres" : "";
        break;

      default:
        break;
    }

    this.setState({ formErrors, [name]: value });
  };

  // handleClick = (e) => {
  //   this.refs.fileUploader.click();
  // }

  render() {
    const { formErrors } = this.state;

    return (
      <>
        <h5 className="formOneHead formTwoHead">Detalles personales</h5>
        {/* <i class="fas fa-plus-circle" onClick={this.handleClick} style={{cursor:'pointer'}}></i>
        <input type="file" id="file" ref="fileUploader" style={{display: "none"}}/> */}
        <form
          encType="multipart/form-data"
          className="signupFormTwo"
          onSubmit={this.handleSubmit}
        >
          <div className="form-group">
            <div>
              <label>Nombre:</label>
              <input
                type="text"
                autoComplete="off"
                className={
                  formErrors.firstName.length > 0
                    ? "error form-control"
                    : "form-control"
                }
                name="firstName"
                placeholder="Nombre"
                onChange={this.handleChange}
                required
              />
            </div>
            {formErrors.firstName.length > 0 && (
              <span className="errorMessage">{formErrors.firstName}</span>
            )}
          </div>

          <div className="form-group">
            <div>
              <label>Apellidos:</label>
              <br></br>
              <input
                type="text"
                autoComplete="off"
                className={
                  formErrors.lastName.length > 0
                    ? "error form-control"
                    : "form-control"
                }
                name="lastName"
                placeholder="Apellidos"
                onChange={this.handleChange}
                required
              />
            </div>
            {formErrors.lastName.length > 0 && (
              <span className="errorMessage">{formErrors.lastName}</span>
            )}
          </div>

          <div className="form-group">
            <div>
              <label>Ubicaci??n:</label>
              <br></br>
              <input
                type="text"
                autoComplete="off"
                className={
                  formErrors.location.length > 0
                    ? "error form-control"
                    : "form-control"
                }
                name="location"
                placeholder="Tu ubicaci??n"
                onChange={this.handleChange}
                required
              />
            </div>
            {formErrors.location.length > 0 && (
              <span className="errorMessage">{formErrors.location}</span>
            )}
          </div>

          <div className="form-group">
            <div>
              <label>Puesto:</label>
              <br></br>
              <input
                type="text"
                className={
                  formErrors.position.length > 0
                    ? "error form-control"
                    : "form-control"
                }
                name="position"
                placeholder="Tu puesto"
                onChange={this.handleChange}
                required
              />
            </div>
            {formErrors.position.length > 0 && (
              <span className="errorMessage">{formErrors.position}</span>
            )}
          </div>

          <div className="form-group">
            <div>
              <label>Empresa:</label>
              <br></br>
              <input
                type="text"
                autoComplete="off"
                className={
                  formErrors.industry.length > 0
                    ? "error form-control"
                    : "form-control"
                }
                name="industry"
                placeholder="Ingresa tu empresa"
                onChange={this.handleChange}
                required
              />
            </div>
            {formErrors.industry.length > 0 && (
              <span className="errorMessage">{formErrors.industry}</span>
            )}
          </div>

          <div className="form-group">
            <div>

            <label>A??os Cotizadas:</label>
            <input
              style={{ fontSize: "14px" }}
              type="number"
              name="semanasCotizadas"
              className={
                formErrors.semanasCotizadas>0
                  ? "error form-control"
                  : "form-control"
              }
              value={this.state.semanasCotizadas}
              onChange={this.handleChange}
              placeholder="Ingresa tus A??os cotizadas"
              id="semanasCotizadas"
              required
            />

            </div>
            {formErrors.semanasCotizadas.length > 0 && (
              <span className="errorMessage">{formErrors.semanasCotizadas}</span>
            )}
            {/* <div className="text-danger">{this.state.errors.name}</div> */}
          </div>

          {/* <div className="form-group formTwoDateSection">
            <div
              className="formTwoDates formTwoDateOne"
              style={{ marginRight: "40px" }}
            >
              <div>
                <label>Start-Year :</label>
                <br></br>
                <input
                  type="number"
                  min="1970"
                  max="2022"
                  autoComplete="off"
                  className={
                    formErrors.startDate.length > 0
                      ? "error form-control"
                      : "form-control"
                  }
                  name="startDate"
                  placeholder="Year"
                  onChange={this.handleChange}
                  required
                />
              </div>
              {formErrors.startDate.length > 0 && (
                <span className="errorMessage">{formErrors.startDate}</span>
              )}
            </div> */}

          <div className="form-group formTwoDateSection">
            <div
              className="formTwoDates formTwoDateOne"
              style={{ marginRight: "40px" }}
            >
              <div>
                <label>Fecha de inicio:</label>
                <br></br>
                <DatePicker
                  selected={this.state.startDate}
                  // onChange={(date) => this.changeStartDate(date)}
                  onChange={(date) => this.setState({ startDate: date })}
                  required={true}
                  dateFormat="dd/MM/yyyy"
                />
              </div>
              {formErrors.startDate.length > 0 && (
                <span className="errorMessage">{formErrors.startDate}</span>
              )}
            </div>
            <div
              className="formTwoDates formTwoDateOne"
              style={{ marginRight: "40px" }}
            >
              <div>
                <label>Fecha de termino:</label>
                <br></br>
                <DatePicker
                  selected={this.state.endDate}
                  onChange={(date) => this.setState({ endDate: date })}
                  required={true}
                  dateFormat="dd/MM/yyyy"
                />
              </div>
              {formErrors.startDate.length > 0 && (
                <span className="errorMessage">{formErrors.endDate}</span>
              )}
            </div>

            {/* <div className="form-group formTwoDateSection">
            <div
              className="formTwoDates formTwoDateOne"
              style={{ marginRight: "40px" }}
            >
              <div>
                <label>Start-Year :</label>
                <br></br>
                <DatePicker
                  format={"yyyy-MM-dd"}
                  onChange={(value) =>{
                    this.setState({ startDate: value });
                    setTimeout(()=>{
                      console.log(this.state.startDate);
                    },4000)
                  }
                    
                  } 
                  value={this.state.startDate}
                />
              </div>
              {formErrors.startDate.length > 0 && (
                <span className="errorMessage">{formErrors.startDate}</span>
              )}
            </div> */}

            {/* <div className="formTwoDates formTwoDateTwo">
              <div>
                <label>End-Year :</label>
                <br></br>
                <input
                  type="number"
                  min="1970"
                  max="2030"
                  autoComplete="off"
                  className={
                    formErrors.endDate.length > 0
                      ? "error form-control"
                      : "form-control"
                  }
                  name="endDate"
                  placeholder="Year"
                  onChange={this.handleChange}
                  required
                />
              </div>
              {formErrors.endDate.length > 0 && (
                <span className="errorMessage">{formErrors.endDate}</span>
              )}
            </div> */}
          </div>

          <div className="form-group">
            <label>Imagen de perfil: </label>
            <br></br>
            <div>
              <input
                name="img"
                onChange={this.fileChangedHandler}
                type="file"
                style={{ width: "100%" }}
              ></input>
            </div>
          </div>

          <div className="form-group">
            <input
              type="checkbox"
              style={{ marginRight: "7px", transform: "translateY(1px)" }}
              // checked={!this.state.isStudent}
              // onChange={this.handleStudentChange}
              onChange={() => {
                this.setState({ isStudent: !this.state.isStudent });
                console.log(this.state);
              }}
            // defaultChecked={!this.state.isStudent}
            />
            <label>Soy un estudiante</label>
          </div>

          <div style={{ textAlign: "center" }}>
            <button
              type="submit"
              className="btn btn-dark"
              style={{ width: "50%" }}
            >
              Ingresar
            </button>
            <Link to="/userLogin" className="link">
              <h6
                style={{ fontSize: "12px", marginTop: "4px", color: "black" }}
              >
                ??Ya tienes una cuenta? ??Inicia sesion!
              </h6>
            </Link>
          </div>
        </form>
      </>
    );
  }
}

export default FormTwo;
