<template>
  <div class="login-wrap">
		<div class="login-html">
			<input id="tab-1" type="radio" name="tab" class="sign-in" v-model="navigation" value="signin" @change="navigate"><label for="tab-1" class="tab">Sign In</label>
			<input id="tab-2" type="radio" name="tab" class="sign-up" v-model="navigation" value="signup" @change="navigate"><label for="tab-2" class="tab">Sign Up</label>
			<div class="login-form">
				<sign-in @do-sign-in="doSignIn"/>
				<sign-up @do-sign-up="doSignUp"/>
			</div>
		</div>
	</div>
</template>

<script>
	import SignIn from './sign-in';
	import SignUp from './sign-up';
	import { db } from './../../firebase';

	export default {
		data(){
			return {
				navigation: 'signin',
			}
		},
		components: {
			SignIn,
			SignUp
		},
		methods: {
			doSignIn(obj) {
				console.log(obj)
				db
					.auth()
					.signInWithEmailAndPassword(obj.username, obj.password)
					.then(result => {
						console.log(result);
						this.$router.replace('/contatos');
					})
					.catch(function(error){
						console.log('Erro', error)
					});
        
			},
			
			doSignUp(obj) {
				console.log(obj)
			},

			navigate(){
				this.$bus.$emit('navigate', this.navigation)
			}
		}
	}
</script>

<style src="./../../css/sign.css"></style>
