<script>
export default {
  data(){
    return {
      username: '',
      password: '',
      repassword: '',
      email: ''
    }
  },
  mounted() {
    this.$bus.$on('navigate', this.reset)
  },
  methods: {
    reset(selected){
      if(selected == 'signin'){
        this.username = '',
        this.password = '',
        this.repassword = '',
        this.email = ''
      }
    }
  }
}
</script>

<template>
  <div class="sign-up-htm">
    <div class="group">
      <label for="sign-up-user" class="label">Username</label>
      <input id="sign-up-user" type="text" class="input" v-model="username">
    </div>
    <div class="group">
      <label for="sign-up-pass1" class="label">Password</label>
      <input id="sign-up-pass1" type="password" class="input" data-type="password" v-model="password">
    </div>
    <div class="group">
      <label for="sign-up-pass2" class="label">Repeat Password</label>
      <input id="sign-up-pass2" type="password" class="input" data-type="password" v-model="repassword">
    </div>
    <div class="group">
      <label for="sign-up-pass3" class="label">Email Address</label>
      <input id="sign-up-pass3" type="text" class="input" v-model="email">
    </div>
    <div class="group">
      <input type="submit" class="button" value="Sign Up">
    </div>
    <div class="hr"></div>
    <div class="foot-lnk">
      <label for="tab-1">Already Member?</label>
    </div>
  </div>
</template>
