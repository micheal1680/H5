<template>
	<div class="login">

		<el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
			<el-menu-item index="1">登录</el-menu-item>
			<el-menu-item index="2">注册</el-menu-item>
		</el-menu>

		<el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm" v-if="elMenuIndex=='1'">
			<el-form-item label="用户名" prop="name">
				<el-input v-model="ruleForm.name"></el-input>
			</el-form-item>
			<el-form-item label="密码" prop="password">
				<el-input v-model="ruleForm.password" type="password"></el-input>
			</el-form-item>

			<el-form-item>
				<el-button type="primary" @click="submitForm('ruleForm')">登录</el-button>
				<el-button @click="resetForm('ruleForm')">重置</el-button>
			</el-form-item>
		</el-form>

		<el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm" v-else>
			<el-form-item label="上传头像" prop="logoImg">
				<el-upload class="avatar-uploader" action="http://localhost:8888/imgUpload/" :show-file-list="false" :on-success="handleAvatarSuccess"
				 :before-upload="beforeAvatarUpload">
					<img v-if="imageUrl" :src="imageUrl" class="avatar">
					<i v-else class="el-icon-plus avatar-uploader-icon"></i>
				</el-upload>
			</el-form-item>
			<el-form-item label="用户名" prop="name">
				<el-input v-model="ruleForm.name"></el-input>
			</el-form-item>
			<el-form-item label="密码" prop="password">
				<el-input v-model="ruleForm.password" type="password"></el-input>
			</el-form-item>

			<el-form-item>
				<el-button type="primary" @click="registerForm('ruleForm')">注册</el-button>
				<el-button @click="resetForm('ruleForm')">重置</el-button>
			</el-form-item>
		</el-form>


	</div>
</template>

<script>
	export default {
		data() {
			var myvalidate = function(context, value, callback) {
				if ((/^(?=.*\d+)(?=.*[a-zA-Z]+)(?=.*[_]+).{6,16}$/igm).test(value)) {
					callback()
				} else {
					callback(new Error("必须包含字母数字下划线,6~16位"))
				}
			}

			return {
				elMenuIndex:"1",
				imageUrl: "",
				activeIndex: '1',
				ruleForm: {
					name: '',
					password: ""
				},
				rules: {
					name: [{
							required: true,
							message: '请输入用户名',
							trigger: 'blur'
						},
						{
							min: 6,
							max: 16,
							message: '长度在 6 到 16 个字符',
							trigger: 'blur'
						}
					],
					password: [{
							required: true,
							message: '请输入密码',
							trigger: 'blur'
						},
						{
							min: 6,
							max: 16,
							message: '长度在 6 到 16 个字符',
							trigger: 'blur'
						},
						{
							validator: myvalidate,
							trigger: 'blur'
						}
					]
				}
			};
		},
		methods: {
			handleAvatarSuccess(res, file) {
				console.log(res);
				console.log(file);
				this.imageUrl=res.data[0];
				// this.imageUrl = URL.createObjectURL(file.raw);
			},
			beforeAvatarUpload(file) {
				console.log(file.type)
				const isJPG = file.type === 'image/jpeg'||file.type==="image/x-icon";
				const isLt2M = file.size / 1024 / 1024 < 2;

				if (!isJPG) {
					this.$message.error('上传头像图片只能是 JPG 格式!');
				}
				if (!isLt2M) {
					this.$message.error('上传头像图片大小不能超过 2MB!');
				}
				return isJPG && isLt2M;
			},
			handleSelect(key, keyPath) {
				console.log(key, keyPath);
				this.elMenuIndex=key;
			},
			submitForm(formName) {
				this.$refs[formName].validate((valid) => {
					console.log(valid)
					if (valid) {
						alert('submit!');
					} else {
						console.log('error submit!!');
						return false;
					}
				});
			},
			registerForm(formName){
				this.$refs[formName].validate((valid) => {
					if (valid) {
						this.axios.post("/resgiter",{
							username:this.ruleForm.name,
							pwd:this.ruleForm.password,
							imgurl:this.imageUrl
						}).then(res=>{
							console.log(res);
							if(res.data.code==0){
								this.$message({
								          message: '恭喜你,注册成功',
								          type: 'success'
								});
								this.elMenuIndex="1";
							}else {
								this.$message.error('用户名已存在');
							}
							
						})
						
						
					} else {
						console.log('error submit!!');
						return false;
					}
				});
			},
			resetForm(formName) {
				this.$refs[formName].resetFields();
			}
		}
	}
	// export default {
	// 	data:function(){
	// 		return {
	// 			msg:"我自己定义的组件"
	// 		}
	// 	},
	// 	created() {
	// 		console.log(this.$route);
	// 		this.axios.get("/getData").
	// 		then(res=>{
	// 			this.msg=res.data.data
	// 		})
	// 	}
	// }
</script>

<!-- 局部化样式scoped -->
<style scoped="scoped">
	.avatar-uploader .el-upload {
		border: 1px dashed #d9d9d9;
		border-radius: 6px;
		cursor: pointer;
		position: relative;
		overflow: hidden;
	}

	.avatar-uploader .el-upload:hover {
		border-color: #409EFF;
	}

	.avatar-uploader-icon {
		font-size: 28px;
		color: #8c939d;
		width: 178px;
		height: 178px;
		line-height: 178px;
		text-align: center;
		border: 1px dashed black;
	}

	.avatar {
		width: 178px;
		height: 178px;
		display: block;
	}

	.login {
		width: 50%;
		margin: 0 auto;
		margin-top: 50px;
	}

	/* * {
		background: red;
	} */
</style>
