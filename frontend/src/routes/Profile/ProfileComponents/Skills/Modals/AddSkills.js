import React, { Component } from "react";
import { Modal } from "react-bootstrap";
// import '../Experience.css';

class AddSkills extends Component {
  state = {
    skill: "",
    list: this.props.prevSkills,
  };

  handleChange = (e) => {
    this.setState({ skill: e.target.value });
    // console.log(this.state.skill);
  };

  skillsSubmit = (e) => {
    e.preventDefault();
    this.props.submitSkills(this.state.list);
  };

  addSkill = (e) => {
    // alert('ADDED SKILL');
    e.preventDefault();
    let arr = this.state.list;
    arr.push(this.state.skill);
    this.setState({
      skill: "",
      list: arr,
    });
    // console.log(this.state.list);
  }

  deleteSkill = (id) => {
    let arr = this.state.list;
    arr.splice(id,1);
    this.setState({list : arr});
  }

  render() {
    let skillsData = null;
    if(this.state.list.length === 0){
      skillsData = (
        <h6 style={{margin:'auto',color:'grey'}} >No has añadido ninguna habilidad</h6>
      )
    }
    if (this.state.list.length !== 0) {
      skillsData = this.state.list.map((skill,index)=>{
        return(
          <div>
            {skill}
            <i onClick={()=>this.deleteSkill(index)} class="deleteSkill fas fa-times"></i>
          </div>
        )
      })
    }

    return (
      <>
        <Modal
          show={true}
          animation={false}
          // centered
          onHide={this.props.hideModal}
        >
          <div className="userAddAbout">
            <h5>Agrega Habilidades</h5>
            <i onClick={this.props.hideModal} class="fas fa-times"></i>

            {/* <form onSubmit={this.skillsSubmit}> */}

            <form onSubmit={this.addSkill}>
              <div className="form-group">
                <div>
                  <label>Ingresa una habilidad que quieras añadir:</label>
                  <br></br>
                  <input
                    type="text"
                    value={this.state.skill}
                    autoComplete="off"
                    style={{
                      width: "100%",
                      padding: "4px 12px",
                      fontSize: "14px",
                    }}
                    name="lastName"
                    placeholder="¿Qué se te da mejor?"
                    onChange={this.handleChange}
                    required
                  />
                </div>
              </div>
            </form>

            <div className="displaySkillsArea">{skillsData}</div>

            <div className="modalBottom">
              <h6 className="userCloseButton" onClick={this.props.hideModal}>
                Cerrar
              </h6>
              <button onClick={this.skillsSubmit} className="userSaveButton">
                Guardar
              </button>
            </div>
            {/* </form> */}
          </div>
        </Modal>
      </>
    );
  }
}

export default AddSkills;
