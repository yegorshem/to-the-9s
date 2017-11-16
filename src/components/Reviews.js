import React, {Component} from 'react'

export default class Review extends Component{
	constructor(){
		super();
		this.state ={
			submitted:false,
			name:'',
			email:'',
			message:''
		}
		this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
	}
	handleSubmit(e){
		e.preventDefault();
		this.setState({
			submitted:true,
			name:'',
			email:'',
			message:''
		});
	}
	handleChange(e){
		const t=e.target
		const name = t.name;
		const value = t.value;
		this.setState({[name]:value})
	}
	render(){
		console.log(this.state.submitted)
 		return(
      <div id="reviews" className="content">
				<div className="blkText">
          <h3>Tell us about your experience...</h3>
            <p> "Thank you so much for making the end of our special night so memorable.  You were absolutely amazing and so accommodating.  Your customer service couldn't have been better.  The limo was beautiful and the seats were so comfortable.  The kids had so much fun being in a limo for the first time!  Thank you, thank you so incredibly much.  We definitely will refer you if anyone we know needs a limo."     - Melyssa</p>
            <p>"Our experience with you was perfect, to say the least.  You are a very professional and warm hearted person that put up with a huge party of people with a lot of demands.  You were there with an umbrella when the rain surprised us and a calm face and smile for me to focus on when things were getting overwhelming.  The service was amazing and we didn't feel rushed at all.  Thank you for taking your time, for having patience and for being the cherry on top of our ice cream on a very intense day that turned out absolutely beautiful and perfect."     -Oana</p>
				</div>
				<div> <h4 className={this.state.submitted? "success" :"hidden"} >Successfully submitted</h4></div>
				<form   onSubmit={this.handleSubmit} className={this.state.submitted? "hidden" :"form"}>
				
					<label id="name">
						Name
						<input
						name="name"
						value={this.state.name}
						onChange={this.handleChange}
						/>
					</label>
				
					<label id="email">
						Email
						<input
						name="email"
						value={this.state.email}
						onChange={this.handleChange}
						/>
					</label>
				
					<label id="message">
						Add a brief message
					</label>
					<textarea id="messageArea"
						name="message"
						value={this.state.message}
						onChange={this.handleChange}
						/>
				
					<input id ="submit" type="submit" value="Submit email"/>
				</form>
      </div>
  	)
	}	
}