import baiduImg from "./img/baidu.png";
import "./css/mycss.css";

console.log("打包css,js,图片,处理html");
console.log("html 里边引入最新打包生成的js")

document.body.innerHTML+="<h4>查看webpack打包css,js,图片,处理html</h4>";


var img=document.createElement("img");
img.src=baiduImg;
document.body.appendChild(img);
