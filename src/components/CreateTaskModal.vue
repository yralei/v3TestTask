<template>
  <div
    class="modal fade"
    id="createTaskModal"
    tabindex="-1"
    aria-labelledby="createTaskModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 id="createTaskModalLabel" class="modal-title">Create New Task</h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <div class="mb-3">
            <label for="newTaskTitle" class="form-label">Title</label>
            <input v-model="task.title" type="text" class="form-control" id="newTaskTitle" />
          </div>
          <div class="mb-3">
            <label for="newTaskDescription" class="form-label">Description</label>
            <textarea
              v-model="task.description"
              class="form-control"
              id="newTaskDescription"
            ></textarea>
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          <button
            type="button"
            class="btn btn-primary"
            data-bs-dismiss="modal"
            @click="onCreateTask"
          >
            Create Task
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Task {
  title: string
  description: string
}

const emit = defineEmits(['createTask'])

const task = ref<Task>({
  title: '',
  description: ''
})

const { createTask } = useApi()

const onCreateTask = async () => {
  await createTask(task)
  emit('createTask')

  task.value = {
    title: '',
    description: ''
  }
}
</script>
