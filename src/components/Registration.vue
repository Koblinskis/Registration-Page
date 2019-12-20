<template>
  <div>
    <form>
      <div class="form-group">
        <label for="inputUsername">Username</label>
        <input type="text" 
        class="form-control" 
        id="inputUsername"
        placeholder="Enter Username"
        v-model="inputName"
        @keyup="checkUsername"
        @focus="focusUsername = true"
        @blur="focusUsername = false">
        <small v-if="focusUsername">Must be 4-16 characters and no spaces</small>
      </div>
      <div class="form-group">
        <label for="inputEmail">Email address</label>
        <input type="email" 
        class="form-control" 
        id="inputEmail"
        placeholder="Enter email" 
        v-model="inputEmail"
        @keyup="checkEmail"
        @focus="focusEmail = true"
        @blur="focusEmail = false">
        <small v-if="focusEmail">Must be a real email like example@xxx.xxx</small>
      </div>
      <div class="form-group">
        <label for="inputPassword">Password</label>
        <input type="password" 
        class="form-control" 
        id="inputPassword" 
        placeholder="Password"
        v-model="inputPassword"
        @keyup="samePassword"
        @focus="focusPassword = true"
        @blur="focusPassword = false">
        <small v-if="focusPassword">6 to 24 characters</small>
      </div>
      <div class="form-group">
        <label for="confirmPassword">Confirm Password</label>
        <input type="password" 
        class="form-control" 
        id="confirmPassword" 
        placeholder="Confirm Password"
        v-model="inputConfirmPassword"
        @keyup="samePassword">
      </div>
      <button type="submit" class="btn btn-primary"
      v-if="correctEmail && correctPassword && correctUsername">Submit</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      focusUsername: false,
      focusEmail: false,
      focusPassword: false,
      inputName: ' ',
      inputEmail: '',
      inputPassword: '',
      inputConfirmPassword: '',
      correctPassword: false,
      correctUsername: false,
      correctEmail: false,
      correctLetter: false,
      uLetter: [],
      eLetter: [],
    }
  },
  methods: {
    samePassword() {
      if(this.inputPassword === this.inputConfirmPassword) {
        this.correctPassword = true
      } else {
        this.correctPassword = false
      }
    },
    checkUsername() {
      this.uLetter = this.inputName.split('')
      if(this.uLetter.length > 4 && this.uLetter.length < 16) {
        this.uLetter.forEach(element => {
          if(element.charCodeAt(0) >= 33 && element.charCodeAt(0) <= 126){
            this.correctUsername = true
          } else {
            return this.correctUsername = false
          }
        })
      }
    },
    checkEmail() {
      this.eLetter = this.inputEmail.split('')
      if(this.eLetter.length !== 0) {
        this.eLetter.forEach(element => {
          if(element.charCodeAt(0) !== 64){
            this.correctEmail = false
          } else {
            return this.correctEmail = true
          }
        })
      }
    }
  }
}
</script>

<style scoped>

</style>