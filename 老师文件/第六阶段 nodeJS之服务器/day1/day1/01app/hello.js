//����httpģ��    ����ģ��
const http = require("http");


//����һ�����������������ĵ�ַ��localhost:9999    127.0.0.1:9999
http.createServer(function(request, response) {
	// ���� HTTP ͷ�� 
    // HTTP ״ֵ̬: 200 : OK
    // ��������: text/html
    response.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
	
	//��ͻ��˷�������
	response.write("<h1>hello node</h1>");
	
	//end��ʾ��������
	response.end()
	
}).listen("9999"); //9999��ʾ����Ķ˿ں�



console.log("server runing at port 9999...")