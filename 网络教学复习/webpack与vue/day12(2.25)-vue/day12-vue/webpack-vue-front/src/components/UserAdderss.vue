<template>
	<div>
		<table>
			<thead>
				<tr>
					<th>收货人</th>
					<th>电话</th>
					<th>地址</th>
				</tr>
			</thead>
			<tbody>
				<tr v-for="(item,index) in addressArr" :key="index">
					<td>{{item.uname}}</td>
					<td>{{item.phone}}</td>
					<td>{{item.addr}}</td>
				</tr>
			</tbody>
		</table>
		
		
	</div>
</template>

<script>
	export default {
		data:function(){
			return {
				addressArr:[{
					uname:"chenjunxiong",
					phone:"123456",
					addr:"昆明学院111"
				},
				{
					uname:"罗艳芬",
					phone:"13776552345",
					addr:"昆明学院2222"
				},
				{
					uname:"马伟山",
					phone:"13666676666",
					addr:"昆明学院333"
				}]
			}
		}
	}
</script>

<style>
</style>
