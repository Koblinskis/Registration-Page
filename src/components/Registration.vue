<template>
  <div>
    <form>
      <div class="form-group">
        <label for="inputUsername">Username</label>
        <input type="text" 
        class="form-control" 
        id="inputUsername"
        placeholder="Enter Username" 
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
        @focus="focusPassword = true"
        @blur="focusPassword = false">
        <small v-if="focusPassword">6 to 24 characters</small>
      </div>
      <div class="form-group">
        <label for="confirmPassword">Confirm Password</label>
        <input type="password" 
        class="form-control" 
        id="confirmPassword" 
        placeholder="Confirm Password">
      </div>
      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      focusUsername: false,
      focusEmail: false,
      focusPassword: false
    }
  },
  methods: {
    
  }
}
</script>

<style scoped>

</style>