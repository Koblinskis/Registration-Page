<template>
  <div>
    <form>
      <div class="form-group">
        <label for="inputUsername">Username</label>
        <input type="text" 
        class="form-control" 
        :class="{'is-invalid': !correctUsername || inputName === ''}"
        id="inputUsername"
        placeholder="Enter Username"
        v-model="inputName"
        @keyup="checkUsername"
        @keydown="checkUsername"
        @keypress="checkUsername"
        @focus="focusUsername = true && checkUsername"
        @blur="focusUsername = false">
        <small v-if="focusUsername">Must be 4-16 characters and no spaces</small>
      </div>
      <div class="form-group">
        <label for="inputEmail">Email address</label>
        <input type="email" 
        class="form-control"
        :class="{'is-invalid': !correctEmail || inputEmail === ''}"
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
        :class="{'is-invalid': !samePassword || inputPassword === ''}"
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
        :class="{'is-invalid': !samePassword || inputConfirmPassword === ''}"
        @keyup="samePassword">
      </div>
      <button type="submit" class="btn btn-primary"
      :disabled="!(correctPassword && correctUsername && correctEmail)">Submit</button>
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
      inputName: '',
      inputEmail: '',
      inputPassword: '',
      inputConfirmPassword: '',
      correctPassword: false,
      correctUsername: false,
      correctEmail: false,
      correctLetter: false,
      atSymbol: false,
      uLetter: [],
      eLetter: [],
    }
  },
  methods: {
    samePassword() {
      if(this.inputPassword.length >=6 && this.inputPassword.length <= 24){
      if(this.inputPassword === this.inputConfirmPassword) {
        this.correctPassword = true
      } else {
        this.correctPassword = false
      }
      }else {
        this.correctPassword = false
      }
    },
    checkUsername() {
      if(this.inputName.length >= 4 && this.inputName.length <= 16) {
        if(this.inputName.search(' ') !== -1) {
            this.correctUsername = false
        } else {
          for(let i = 0; i < this.inputName.length; i++) {
            if(this.inputName.charCodeAt(i) >= 33 && this.inputName.charCodeAt(i) <= 126) {
              this.correctUsername = true
            } else {
              this.correctUsername = false
              break;
            }
          }
        }
        
      } else {
        this.correctUsername = false
      }
    },
    checkEmail() {
      if(this.correctEmail === false) {
        if(this.inputEmail.search('@') !== -1) {
          this.correctEmail = true
        }
      }else if(this.correctEmail === true){
        if(this.inputEmail.search('@') === -1) {
          this.correctEmail = false
        }
      }
    }
  }
}
</script>

<style scoped>

</style>