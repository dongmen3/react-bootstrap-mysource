
import React, { Component } from 'react'

export default class AddPaper extends Component {
    constructor(props){
        super(props);
        this.state = {
            title:'',
            category:'',
            content:'',
        }
    }

    changeHandler = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }

    submitHandler = (e) => {
        e.preventDefault();
        console.log(this.state);

        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(this.state )
        };
        fetch('http://localhost:8080/add', requestOptions)
            .then(response => response.json())

       // const encodedString = Buffer.from( this.state.content, 'utf8');
       // console.log('------en------'+ encodedString);
       // const decodedString = Buffer.from(encodedString, 'utf8').toString('ascii');
       // console.log('------de------'+ decodedString);
    }

    render() {
        const {title, category, content} = this.state;
        return (
            <div>
            <h2>Add New Paper</h2>
            <form onSubmit={this.submitHandler}>
                <div>
                    <label>Title: </label>
                    <input type="text" name="title" value={title} onChange={this.changeHandler}/>
                </div>
                <div>
                    <label>Select Category: </label>
                    <select name="category" value={category} onChange={this.changeHandler}>
                        <option value="Java">Java</option>
                        <option value="java1">Java1</option>
                        <option value="java2">Java2</option>
                        <option value="java3">Java3</option>
                        <option value="java4">Java4</option>
                        <option value="java5">Java5</option>
                        <option value="java6">Java6</option>
                        <option value="java7">Java7</option>
                    </select>
                </div>
                <div>
                    <label>Content:</label>
                    <textarea name="content" value={content} rows="20" cols="100" onChange={this.changeHandler}/>
                </div>

                <button type="submit">Submit</button>
            </form>
        </div>
        )
    }
}

