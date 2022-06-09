import React, { Component } from "react";
import { Modal } from "react-bootstrap";

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

class ChangeUserDetailsModal extends Component {
  state = {
    firstName: null,
    lastName: null,
    location: null,
    tagline: null, 
    selectedFile: null,
    profilePic: null,
    formErrors: {
      firstName: "",
      lastName: "",
      location: "",
      tagline: ""
      // selectedFile: ""
    },
  };

  fileChangedHandler = (event) => {
    console.log(URL.createObjectURL(event.target.files[0]));
    this.setState({ 
      selectedFile: event.target.files[0],
      // profilePic : event.target.result
      profilePic: URL.createObjectURL(event.target.files[0]),
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    if (formValid(this.state)) {
      setTimeout(() => {
        this.props.editUserDetails(this.state);
        this.props.hideModal();
      }, 1000);
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
            ? "Se requieren al menos 3 caracteres"
            : "") ||
          (formErrors.firstName = nameRegex.test(value)
            ? ""
            : "solo se aceptan caracteres");
        break;

      case "lastName":
        let spaceNum = 0;
        for (let ch in value) {
          if (value[ch] === " ") {
            spaceNum = spaceNum + 1;
          }
        }
        formErrors.lastName =
          (spaceNum > 1 ? "Está prohibido poner más de un espacio" : "") ||
          (value.length < 3 ? "Se requieren al menos 3 caracteres" : "") ||
          (formErrors.lastName = lastnameRegex.test(value)
            ? ""
            : "solo se aceptan caracteres");
        break;

      case "location":
        formErrors.location =
          value.length < 3 ? "Se requieren al menos 3 caracteres" : "";
        break;

      case "tagline":
        formErrors.tagline =
          value.length < 3 ? "Se requieren al menos 3 caracteres" : "";
        break;


      default:
        break;
    }

    this.setState({ formErrors, [name]: value });
  };

  render() {
    const { formErrors } = this.state;

    return (
      <>
        <Modal
          show={true}
          animation={false}
          centered
          onHide={this.props.hideModal}
        >
          <div className="userEditDetails">
            <h5>Edita tu información persoanl</h5>
            <i onClick={this.props.hideModal} class="fas fa-times"></i>
            <form
              encType="multipart/form-data"
              className="editUserDetails"
              onSubmit={this.handleSubmit}
            >
              <div className="form-group">
                <div>
                  <label>Nombre(s): </label>
                  <input
                    type="text"
                    autoComplete="off"
                    className={
                      formErrors.firstName.length > 0
                        ? "error form-control"
                        : "form-control"
                    }
                    name="firstName"
                    placeholder="Nombre(s)"
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
                  <label>Apellido:</label>
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
                    placeholder="Apellido"
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
                  <label>Ubicación:</label>
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
                    placeholder="Tu ubicación"
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
                  <label>Tu puesto:</label>
                  <br></br>
                  <input
                    type="text"
                    className={
                      formErrors.tagline.length > 0
                        ? "error form-control"
                        : "form-control"
                    }
                    name="tagline"
                    placeholder="Tu puesto"
                    onChange={this.handleChange}
                    required
                  />
                </div>
                {formErrors.tagline.length > 0 && (
                  <span className="errorMessage">{formErrors.tagline}</span>
                )}
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
              
              <div className="modalBottom">
                <h6 className="userCloseButton" onClick={this.props.hideModal}>
                  Cerrar
                </h6>
                <button type="submit" className="userSaveButton">
                  Guardar
                </button>
                {/* <h6 type='submit' className="userSaveButton">Save</h6> */}
              </div>
            </form>
          </div>
        </Modal>
      </>
    );
  }
}

export default ChangeUserDetailsModal;
