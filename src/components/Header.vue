<template>
  <nav
    class="navbar fixed-top navbar-light"
    style="background: whitesmoke; border-bottom: 1px solid lightgrey"
  >
    <div class="container-fluid">
      <div>
        <a class="navbar-brand">Task manager</a>
        <button class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#createTaskModal">
          Create New Task
        </button>
      </div>

      <form class="d-flex" @submit.prevent="logout">
        <button class="btn btn-outline-secondary" type="submit">Logout</button>
      </form>
    </div>
  </nav>
</template>

<script setup lang="ts">
const { logout } = useAuth()
</script>
