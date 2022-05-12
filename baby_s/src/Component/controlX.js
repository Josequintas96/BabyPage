import React from 'react';
import axios from 'axios';

class Control extends React.Component {
	state = {
        details: [],
        user: "",
        quote: "",
    };
  
    componentDidMount() {
        let data;
        axios
            // .get("http://127.0.0.1:8000/wel/")
            .get("https://gaby-val-future-baby2022.herokuapp.com/wel/")
            .then((res) => {
                data = res.data;
                this.setState({
                    details: data,
                });
            })
            .catch((err) => {});
    }
  
    renderSwitch = (param) => {
        switch (param + 1) {
            case 1:
                return "primary ";
            case 2:
                return "secondary";
            case 3:
                return "success";
            case 4:
                return "danger";
            case 5:
                return "warning";
            case 6:
                return "info";
            default:
                return "yellow";
        }
    };
  
    handleInput = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        });
    };
  
    handleSubmit = (e) => {
        e.preventDefault();
  
        axios
            .post("http://localhost:8000/wel/", {
                name: this.state.name,
				gender: this.state.gender,
				birth: this.state.birth,
                message: this.state.message,
            })
            .then((res) => {
                this.setState({
                    name: "",
                    gender: "",
					birth: "",
					message: "",
                });
            })
            .catch((err) => {});
    };
  
    render() {
        return (
            <div className="container jumbotron ">
                <form onSubmit={this.handleSubmit}>
                    <div className="input-group mb-3">
                        <div className="input-group-prepend">
                            <span className="input-group-text"
                                  id="basic-addon1">
                                {" "}
                                Name{" "}
                            </span>
                        </div>
                        <input type="text" className="form-control" 
                               placeholder="Name of the Poet/Author"
                               aria-label="Username"
                               aria-describedby="basic-addon1"
                               value={this.state.name} name="name"
                               onChange={this.handleInput} />
                    </div>

					<div className="input-group-prepend">
                            <span className="input-group-text"
                                  id="basic-addon1">
                                {" "}
                                Gender{" "}
                            </span>
                        </div>
                        <input type="text" className="form-control" 
                               placeholder="Name of the Poet/Author"
                               aria-label="Username"
                               aria-describedby="basic-addon1"
                               value={this.state.gender} name="gender"
                               onChange={this.handleInput} />

					<div className="input-group-prepend">
                            <span className="input-group-text"
                                  id="basic-addon1">
                                {" "}
                                Bithday{" "}
                            </span>
                        </div>
                        <input type="text" className="form-control" 
                               placeholder="Name of the Poet/Author"
                               aria-label="Username"
                               aria-describedby="basic-addon1"
                               value={this.state.birth} name="birth"
                               onChange={this.handleInput} />
  
                    <div className="input-group mb-3">
                        <div className="input-group-prepend">
                            <span className="input-group-text">
                               Message 
                            </span>
                        </div>
                        <textarea className="form-control " 
                                  aria-label="With textarea"
                                  placeholder="Tell us what you think of ....." 
                                  value={this.state.message} name="message" 
                                  onChange={this.handleInput}>
                        </textarea>
                    </div>
  
                    <button type="submit" className="btn btn-primary mb-5">
                        Submit
                    </button>
                </form>
  
                <hr
                    style={{
                        color: "#000000",
                        backgroundColor: "#000000",
                        height: 0.5,
                        borderColor: "#000000",
                    }}
                />
  
                {this.state.details.map((detail, id) => (
					
                    <div key={id}>
						{console.log("hello: ", id)}
                        <div className="card shadow-lg">
                            <div className={"bg-" + this.renderSwitch(id % 6) + 
                                          " card-header"}>Participant 1 {id + 1}</div>
                            <div className="card-body">
                                <blockquote className={"text-" + this.renderSwitch(id % 6) + 
                                                   " blockquote mb-0"}>
                                    <h1> {detail.name} </h1>
                                    <footer className="blockquote-footer">
                                        {" "}
                                        <cite title="Source Title">{detail.name}</cite>
                                    </footer>
									<footer className="blockquote-footer">
                                        {" "}
                                        <cite title="Source Title">{detail.gender}</cite>
                                    </footer>
                                </blockquote>
                            </div>
                        </div>
                        <span className="border border-primary "></span>
                    </div>
                ))}
            </div>
        );
    }
}

export default Control;
