<template>
  <div
    v-if="taskById.id"
    class="modal fade"
    id="updateTaskModal"
    tabindex="-1"
    aria-labelledby="updateTaskModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="updateTaskModalLabel">Update Task</h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <div class="mb-3">
            <label for="taskId" class="form-label">ID</label>
            <input v-model="task.id" type="text" class="form-control" id="taskId" disabled />
          </div>
          <div class="mb-3">
            <label for="taskTitle" class="form-label">Title</label>
            <input type="text" class="form-control" id="taskTitle" v-model="task.title" />
          </div>
          <div class="mb-3">
            <label for="taskDescription" class="form-label">Description</label>
            <textarea
              v-model="task.description"
              class="form-control"
              id="taskDescription"
            ></textarea>
          </div>
          <div class="mb-3">
            <label for="taskStatus" class="form-label">Status</label>
            <select v-model.number="task.status" class="form-select" id="taskStatus" disabled>
              <option value="0">Opened</option>
              <option value="1">In Progress</option>
              <option value="2">Done</option>
              <option value="3">Closed</option>
            </select>
          </div>

          <div class="mb-3">
            <label for="taskUserId" class="form-label">User ID</label>
            <input
              type="text"
              class="form-control"
              id="taskUserId"
              v-model="task.user_id"
              disabled
            />
          </div>
          <div class="mb-3">
            <label for="taskCreatedAt" class="form-label">Created At</label>
            <input
              type="text"
              class="form-control"
              id="taskCreatedAt"
              v-model="task.created_at"
              disabled
            />
          </div>
          <div class="mb-3">
            <label for="taskUpdatedAt" class="form-label">Updated At</label>
            <input
              type="text"
              class="form-control"
              id="taskUpdatedAt"
              v-model="task.updated_at"
              disabled
            />
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          <button
            type="button"
            class="btn btn-primary"
            data-bs-dismiss="modal"
            ari-label="Close"
            @click="onUpdateTask"
          >
            Update changes
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  taskById: Task
}

const props = defineProps<Props>()
const emit = defineEmits(['updateTask'])

const task = ref<Task>({
  id: 0,
  title: '',
  description: '',
  status: 0,
  user_id: 0,
  created_at: '',
  updated_at: ''
})

const { updateTask } = useApi()

const onUpdateTask = async () => {
  const data = { title: task.value.title, description: task.value.description, id: task.value.id }
  await updateTask(data)
  emit('updateTask')
}

onMounted(() => {
  task.value = props.taskById
})
</script>
