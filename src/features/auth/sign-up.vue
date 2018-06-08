<template>
  <form action="#" @submit.prevent="submit" class="sign-up-htm">
    <div class="group">
      <label :class="{ invalid: $v.username.$dirty && $v.username.$invalid }" for="sign-up-user" class="label">Username</label>
      <input :class="{ invalid: $v.username.$dirty && $v.username.$invalid }" @input="$v.username.$touch()" id="sign-up-user" type="text" class="input" v-model="username">
    </div>
    <div class="group">
      <label :class="{ invalid: $v.password.$dirty && $v.password.$invalid }" for="sign-up-pass1" class="label">Password</label>
      <input :class="{ invalid: $v.password.$dirty && $v.password.$invalid }" @input="$v.password.$touch()" id="sign-up-pass1" type="password" class="input" data-type="password" v-model="password">
    </div>
    <div class="group">
      <label :class="{ invalid: $v.repassword.$dirty && $v.repassword.$invalid }" for="sign-up-pass2" class="label">Repeat Password</label>
      <input :class="{ invalid: $v.repassword.$dirty && $v.repassword.$invalid }" @input="$v.repassword.$touch()" id="sign-up-pass2" type="password" class="input" data-type="password" v-model="repassword">
    </div>
    <div class="group">
      <label :class="{ invalid: $v.email.$dirty && $v.email.$invalid }" for="sign-up-pass3" class="label">Email Address</label>
      <input :class="{ invalid: $v.email.$dirty && $v.email.$invalid }" @input="$v.email.$touch()" id="sign-up-pass3" type="email" class="input" v-model="email">
    </div>
    <div class="group">
      <input type="submit" class="button" value="Sign Up">
    </div>
    <div class="hr"></div>
    <div class="foot-lnk">
      <label for="tab-1">Already Member?</label>
    </div>
  </form>
</template>

<script>
import { required, sameAs, email } from 'vuelidate/lib/validators'
export default {
  data(){
    return {
      username: '',
      password: '',
      repassword: '',
      email: ''
    }
  },
  validations: {
    username: {
      required,
    },
    
    password: {
      required,
    },
    
    repassword: {
      required,
      sameAsPassword: sameAs('password')
    },
    
    email: {
      required,
      email
    },

  },
  mounted() {
    this.$bus.$on('navigate', this.reset)
  },
  methods: {
    submit() {
      if(!this.$v.$invalid){
        this.$emit('do-sign-up', {...this.$data})
      }else{
        this.$v.$touch()
      }
    },
    reset(selected){
      if(selected == 'signin'){
        this.username = '',
        this.password = '',
        this.repassword = '',
        this.email = ''
        this.$v.$reset()
      }
    }
  }
}
</script>