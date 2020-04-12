import React from "react"
export default class App1 extends React.Component {
	constructor() {
	    super();
	}
	
	getView() {
		return (
			<ul>
				<li>函数名.prototype的类型是一个特殊对象</li>
				<li>也可以使用函数创建的对象.constructor.prototype=函数名.prototype</li>
				<li>可以使用prototype.成员=值的形式为该对象加成员</li>
				<li>函数创建的对象，获取值 "对象.成员名" 如果对象中没有该成员，
					就是获取到函数.prototype中的成员，如果prototype中也没有，则
					会再向上找，直到找到或找不到为至
				</li>
				<li>函数创建的对象.成员="值", 为对象增加成员或修改值。
					如果prototype中有同名的成员名，则该对象就访问不到prototype中的同
					同成员了。除非 对象.constructor.prototype.成员才能访问到
				</li>
			</ul>
		);
	}
	
	render() {
		return (
			<div>
			   {this.getView()}
			</div>
		);
	}
}