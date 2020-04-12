import React from "react";
export default class StuList {
	getInf() {
		return (
			<table border="1" cellspacing="0" cellpadding="2">
				<tr><th>id</th><th>名字</th><th>性别</th></tr>
				<tr><td>1</td><td>小李</td><td>男</td></tr>
				<tr><td>2</td><td>朵朵</td><td>女</td></tr>
			</table> 
		);
	}
}