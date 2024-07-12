<template>
  <form @submit.prevent="login({ email, password })">
    <div class="mb-3">
      <label for="exampleInputEmail1" class="form-label">Email address</label>
      <input
        v-model="email"
        type="email"
        class="form-control"
        id="exampleInputEmail1"
        aria-describedby="emailHelp"
      />
      <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
    </div>
    <div class="mb-3">
      <label for="exampleInputPassword1" class="form-label">Password</label>
      <input v-model="password" type="password" class="form-control" id="exampleInputPassword1" />
    </div>

    <p>
      Don't have an account?
      <RouterLink to="/auth/register"> Register here </RouterLink>
    </p>

    <button type="submit" class="btn btn-primary">Submit</button>
  </form>
</template>

<script lang="ts" setup>
const email = ref('')
const password = ref('')

const { login } = useAuth()
</script>

<route lang="yaml">
meta:
  layout: auth
</route>
