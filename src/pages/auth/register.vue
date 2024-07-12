<template>
  <form @submit.prevent="register({ email, name, password, passwordConfirmation })">
    <div class="mb-3">
      <label for="exampleInputEmail1" class="form-label">Email address</label>
      <input
        type="email"
        class="form-control"
        id="exampleInputEmail1"
        v-model="email"
        aria-describedby="emailHelp"
      />
      <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
    </div>
    <div class="mb-3">
      <label for="exampleInputName" class="form-label">Name</label>
      <input type="text" class="form-control" id="exampleInputName" v-model="name" />
    </div>
    <div class="mb-3">
      <label for="exampleInputPassword1" class="form-label">Password</label>
      <input type="password" class="form-control" id="exampleInputPassword1" v-model="password" />
    </div>
    <div class="mb-3">
      <label for="exampleInputPassword2" class="form-label">Password Confirmation</label>
      <input
        type="password"
        class="form-control"
        id="exampleInputPassword2"
        v-model="passwordConfirmation"
      />
    </div>
    <p>
      Have an account?
      <RouterLink to="/auth/login">Login here</RouterLink>
    </p>
    <button type="submit" class="btn btn-primary">Submit</button>
  </form>
</template>

<script lang="ts" setup>
import axios from 'axios'

const email = ref('')
const name = ref('')
const password = ref('')
const passwordConfirmation = ref('')

const { register } = useAuth()
</script>

<route lang="yaml">
meta:
  layout: auth
</route>
