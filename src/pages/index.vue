<template>
  <div class="d-flex justify-content-center align-items-center vh-100 p-1">
    <div class="container text-center h-100">
      <div class="row" style="height: 93vh">
        <div
          v-for="item in Object.keys(statusMap)"
          :key="item"
          class="col text-white d-flex flex-column overflow-auto"
          :class="[statusMap[item]?.accent]"
        >
          <h3 class="p-4">{{ statusMap[item]?.title }}</h3>
          <div
            v-for="task in filterTasks(statusMap[item]?.status)"
            :key="task.id"
            class="card mb-3"
            style="width: 18rem; margin: 0 auto; position: relative"
          >
            <div class="card-body">
              <div class="dropdown" style="position: absolute; top: 10px; right: 10px">
                <button
                  class="btn btn-secondary dropdown-toggle"
                  type="button"
                  id="dropdownMenuButton1"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  @click="onFetchSingleTask(task.id)"
                ></button>

                <ul class="dropdown-menu p-2" aria-labelledby="dropdownMenuButton1">
                  <li>
                    <button
                      data-bs-toggle="modal"
                      data-bs-target="#changeStatusModal"
                      class="btn mt-2 btn-info w-100"
                    >
                      Move Task
                    </button>
                  </li>
                  <li>
                    <button
                      class="btn mt-2 w-100 btn-warning"
                      data-bs-toggle="modal"
                      data-bs-target="#updateTaskModal"
                    >
                      Update
                    </button>
                  </li>

                  <li>
                    <button @click="onDeleteTask" class="btn mt-2 btn-danger w-100">Delete</button>
                  </li>
                </ul>
              </div>

              <h5 class="card-title">{{ task.title }}</h5>
              <p class="card-text">{{ task.description }}</p>
              <p class="card-text">Created: {{ formatDateString(task.created_at) }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <CreateTaskModal @create-task="fetchTasks" />
    <UpdateModal v-if="taskById?.id" :task-by-id="taskById" @update-task="fetchTasks" />
    <TransitionModal
      v-if="taskById?.id"
      :status="String(taskById?.status)"
      :taskId="taskById?.id"
      @transition-task="fetchTasks"
    />
  </div>
</template>

<script lang="ts" setup>
import { useAuthStore } from '@/store/auth'
import { statusMap } from '@/utils/maps'
import { formatDateString } from '@/utils/helpers'

const store = useAuthStore()

const taskList = ref([])
const taskById = ref<Task>()

const { getTasks, deleteTask, getSingleTask } = useApi()

const fetchTasks = async () => (taskList.value = await getTasks())

const onFetchSingleTask = async (id: number) => {
  taskById.value = await getSingleTask(id)
}
const filterTasks = (status: string) =>
  taskList.value?.filter((task) => String(task.status) === status)

const onDeleteTask = async () => {
  await deleteTask(taskById.value.id)
  await fetchTasks()
}

onMounted(async () => {
  if (store.isLoggedIn) await fetchTasks()
})
</script>

<route lang="yaml">
meta:
  layout: main
</route>
