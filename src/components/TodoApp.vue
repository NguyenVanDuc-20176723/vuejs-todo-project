<template>
    <div class="container">
      <h2 class="text-center mt-3">My todo app vue</h2>
      <div class="row mt-5">
        <div class="col" v-for="(status, index) in statusTask" :key="index">
          <TodoList 
          :tasks="filterTask(status)" 
          :name="status" 
          @handleAddTask="handleAddTask"
          @handleDeleteTask="handleDeleteTask"
          @handleChangeStatus="handleChangeStatus"
          @handleChangeTaskName="handleChangeTaskName"
          />
        </div>
      </div>
    </div>
</template>

<script>
import useStorage from '../hooks/localStorage.js';
import TodoList from './TodoList.vue';
import {getKey} from '../lib/utils.js';

export default {
  name: 'TodoApp',
  data() {
    const [items, putItems, clearItems] = useStorage();
    const status_task = ['todo', 'in-progress', 'completed']
    const obj = [{
      "key": getKey(),
      "name": "learn Npm",
      "status": "todo"
    },{
      "key": getKey(),
      "name": "learn Lodash",
      "status": "in-progress"
    },{
      "key": getKey(),
      "name": "learn Axios",
      "status": 'completed'
    }];
    //clearItems();
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
    handleDeleteTask(key) {
      const itemsNew = this.tasks.filter(task => task.key !== key);
      this.putTasks(itemsNew);
    },
    handleChangeStatus(obj) {
      
      this.tasks.map(task => {
          if (task.key === obj.key){
            task.status = obj.status;
            return;
          }
        });
     
      this.putTasks(this.tasks);
    },
    handleChangeTaskName(obj){
      this.tasks.map(task => {
          if (task.key === obj.key){
            task.name = obj.name;
            return;
          }
        });
     
      this.putTasks(this.tasks);
    },
    filterTask(status){
      if (this.tasks){
        return this.tasks.filter(task => task.status === status);
      }
    }
  }
}
</script>



