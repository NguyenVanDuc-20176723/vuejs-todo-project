<template>
    <div class="container">
      <h2 class="text-center">My todo app vue</h2>
      <div class="row">
        <div class="col" v-for="(status, index) in statusTask" :key="index">
          <TodoList :tasks="filterTask(status)" :name="status" @handleAddTask="handleAddTask"/>
        </div>
      </div>
    </div>
</template>





<script>
import useStorage from '../hooks/localStorage.js';
import TodoList from './TodoList.vue';
export default {
  name: 'TodoApp',
  data() {
    const [items, putItems, clearItems] = useStorage();
    const status_task = ['todo', 'in-progress', 'completed']
    const obj = [{
      "name": "learn Lodash",
      "status": "in-progress"
    },{
      "name": "learn Axios",
      "status": 'completed'
    }];
    if (!items || items.length === 0) putItems(obj);

    return {
      tasks: items,
      putTasks: putItems,
      clearTasks: clearItems,
      statusTask: status_task
    }
  },
  components: {
    TodoList
  },
  methods: {
    handleAddTask(obj){
      this.putTasks([...this.tasks, obj]);
    },
    filterTask(status){
      if (this.tasks){
        return this.tasks.filter(task => task.status === status);
      }
    }
  },
  computed: {

  }
}
</script>



