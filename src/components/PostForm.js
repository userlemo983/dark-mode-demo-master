import React, { Component } from 'react'
import axios from 'axios';
class PostForm extends Component {
    
    constructor(props) {
        super(props)
    
        this.state = {
            user_id: '',
            user_name: '',
            prod_name: '',
            prod_desc: '',
            quantity: '',
        }
      }

    changeHandler = e => {
        this.setState({ [e.target.name]: e.target.value})
      }
    
    submitHandler = e => {
      let headers =  {
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'OPTIONS,POST,GET'
    }
        e.preventDefault()
        console.log(this.state)
        axios.post("https://fbblrzppld.execute-api.us-east-1.amazonaws.com/dev",this.state, {headers: headers})
        .then(response => {console.log(response)})
        .catch(error => {console.log(error)})
      }

  render() {
    const {userId, user_name, prod_name, prod_desc, quantity} = this.state;

    return (
      <div>
        <form onSubmit={this.submitHandler}>
            <div>
                <label>Enter your ID :
                    <input type='number' name = "userId" value={userId} onChange={this.changeHandler}/>
                </label>
            </div>
            <div>
                <label>Enter user name :
                <input type='text' name = "user_name" value={user_name} onChange={this.changeHandler}/>
                </label>
            </div>
            <div>
                <label>Enter product name :
                <input type='text' name = "prod_name" value={prod_name} onChange={this.changeHandler}/>
                </label>
            </div>
            <div>
                <label>Enter product descirption :
                <input type='text' name = "prod_desc" value={prod_desc} onChange={this.changeHandler}/>
                </label>
            </div>
            <div>
                <label>Enter product quantity :
                <input type='text' name = "quantity" value={quantity} onChange={this.changeHandler}/>
                </label>
            </div>
            <button type='submit'>Submit</button>
        </form>
      </div>
    )
  }
}

export default PostForm
