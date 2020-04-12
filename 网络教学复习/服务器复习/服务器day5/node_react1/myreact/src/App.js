import React from 'react';
import $ from "jquery";//要求使用cnpm下载jquery
export default class App extends React.Component {
	constructor() {
		super();
		this.state={
			inf1:''
		}
	}
	getInf() {
		let that = this;
		$.ajax({
			url:'http://localhost:4000/getSimpleData.do',
			type:'post',
			dataType:'text',
			data:{
				id:100,
				name:'尼桑'
			},
			success(r){
				that.setState({inf1:r});
			}
		})
	}
	getPerson() {
		$.ajax({
			url:'http://localhost:4000/getObjArray.do',
			type:'post',
			dataType:'text',
			data:{
				id:100,
				name:'尼桑'
			},
			success(r){
				let list = JSON.parse(r);
				let person = null;
				for(let i=0; i<list.length; i++) {
					person = list[i];
					$("#mydiv>table").append("<tr><td>"+person.id+"</td><td>"+person.name+"</td><td>"+person.sex+"</td></tr>");
				}
			}
		})
	}
	
	updateFile() {
		let file = document.getElementById("choose").files[0];
		let formData = new FormData();
		formData.append("fileData", file);
		$.ajax({
			type: 'POST',
			url: 'http://localhost:4000/profile.do',
			data: formData,
			async: false,
			cache: false,
			contentType: false,
			processData: false,
			success: function(data) {
				$(".newImg").attr("src", data.filePath);
				// document.querySelector(".newImg").src=data.filePath;
			},
			error: function(err) {
				console.log(err.message);
			}
		})
	}
	
	render() {
		return (
			<div>
				<button onClick={this.getInf.bind(this)}>确定1</button> 
				<div>{this.state.inf1}</div> 
				<button onClick={this.getPerson.bind(this)}>得到对象烽组</button>
				<div id='mydiv'>
					<table>
					</table>
				</div>
				<div>
					<form encType='multipart/form-data' method='post'>
						<input type="file" id="choose"/>
					</form>
					<button onClick={this.updateFile.bind(this)}>上传</button>
					<img className="newImg" />
				</div>
			</div>
		);
	}
}