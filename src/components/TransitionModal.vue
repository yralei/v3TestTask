<template>
  <div
    class="modal fade"
    id="changeStatusModal"
    tabindex="-1"
    aria-labelledby="changeStatusModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="changeStatusModalLabel">Change Task Status</h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <div class="mb-3">
            <label for="newTaskStatus" class="form-label">Update Status</label>
            <select v-model="currentStatus" class="form-select" id="newTaskStatus">
              <option
                v-for="item in transitionsMap[props.status]"
                :key="item.status"
                :value="item.status"
                :selected="item.status === String(props.status)"
              >
                {{ item?.title }}
              </option>
            </select>
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          <button
            type="button"
            class="btn btn-primary"
            data-bs-dismiss="modal"
            @click="onTransitionTask"
          >
            Save changes
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { transitionsMap } from '@/utils/maps'

interface Props {
  status: string
  taskId: number
}

const props = defineProps<Props>()
const emit = defineEmits(['transitionTask'])

const currentStatus = ref('')

const { transitionTask } = useApi()

const onTransitionTask = async () => {
  await transitionTask(props.taskId, currentStatus.value)
  emit('transitionTask')
}

watch(
  () => props.status,
  (value) => {
    currentStatus.value = value
  }
)

onMounted(() => {
  currentStatus.value = props.status
})
</script>
