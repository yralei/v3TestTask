import axios from 'axios'
import { Ref } from 'vue'

const API_BASE_URL = 'http://64.226.101.216/api'
const API_TOKEN = localStorage.getItem('token')
const config = {
  headers: {
    Authorization: `Bearer ${API_TOKEN}`,
    Accept: 'application/json'
  }
}
export function useApi() {
  const getTasks = async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}/tasks`, config)

      return response.data.data
    } catch (error) {
      console.error('Error retrieving tasks:', error.response?.data || error.message)
    }
  }

  const getSingleTask = async (id: number) => {
    try {
      const response = await axios.get(`${API_BASE_URL}/tasks/${id}`, config)

      return response.data
    } catch (error) {
      console.error('Error retrieving tasks:', error.response?.data || error.message)
    }
  }

  const deleteTask = async (id: number) => {
    try {
      await axios.delete(`${API_BASE_URL}/tasks/${id}`, config)
    } catch (error) {
      console.error('Error deleting task:', error.response?.data || error.message)
    }
  }

  const transitionTask = async (id: number, status: string) => {
    try {
      await axios.patch(
        `${API_BASE_URL}/tasks/${id}/transition`,
        {
          status
        },
        config
      )
    } catch (error) {
      console.error('Error changing task status:', error.response?.data || error.message)
    }
  }

  const createTask = async (newTaskData: Ref<{ title: string; description: string }>) => {
    try {
      const now = new Date().toISOString().split('T')[0]

      await axios.post(
        `${API_BASE_URL}/tasks`,
        {
          title: newTaskData.value.title,
          description: newTaskData.value.description,
          created_at: now
        },
        config
      )
    } catch (error) {
      console.error('Error creating task:', error.response?.data || error.message)
    }
  }

  const updateTask = async (data: { title: string; description: string; id: number }) => {
    try {
      await axios.put(`${API_BASE_URL}/tasks/${data.id}`, data, config)
    } catch (error) {
      console.error('Error updating task:', error.response?.data || error.message)
    }
  }

  return { getTasks, deleteTask, transitionTask, createTask, updateTask, getSingleTask }
}
