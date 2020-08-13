import React, {Component} from 'react';
import './myProfile.less';
import './MyProfile.scss';

class MyProfile extends Component {
  constructor(props){
    super(props);
    this.state={
      name:"",
      gender:"Male",
      description:"",
      choose:false,
    }
  }
  
  handleNameChange = (event) =>{
    this.setState({
      name:event.target.value,
    })
  }

  handleGenderChange = (event)=>{
    this.setState({
        gender:event.target.value,
    })
}
handleDescriptionChange = (event)=>{
  this.setState({
    description:event.target.value,
  })
}

handleChooseChange = (event)=>{
  this.setState({
    choose:event.target.value,
  })
}

handleSubmit = () => {
  // console.log(this.state);
  alert(JSON.stringify(this.state));
  event.preventDefault();
}

  render() {
    return (
      <form className="myForm" onSubmit={this.handleSubmit}>
        <h1>My Profile</h1>
        <div className="formName">
          <label>Name</label><br></br>
          <input type="text" value={this.state.name} onChange={this.handleNameChange}
          placeholder="Your name" />
        </div>
        <div className="formGender">
          <label>Gender</label><br></br>
          <select onChange={this.handleGenderChange}>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
          </select>
        </div>
        <div className="formDescription">
          <label>Description</label><br></br>
          <input 
            type="text"
            value={this.state.description}
            onChange={this.handleDescriptionChange}
            placeholder="Description about yourself" />
        </div>
        <div className="formChoose">
          <label>
            <input type="checkbox" defaultChecked value={this.state.choose} onClick={this.handleChooseChange} />
            I have read the terms of conduct
          </label>
        </div>
        <div className="submit">
          <input 
          type="submit" 
          value="Submit" 
          style={{width:"160px",
          height:"40px"}}
          disabled={!this.state.name ||!this.state.gender ||!this.state.description ||!this.state.choose}
          onClick={this.handleSubmit}></input>
        </div>
      </form>
    );
  }
}

export default MyProfile;


