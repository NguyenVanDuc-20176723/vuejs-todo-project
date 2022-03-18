<template>
    <div class="container">
      <h2 class="text-center">My todo app vue</h2>
      <div class="d-flex">
        <input type="text" placeholder="Enter task" class="form-control"/>
      </div>
      <table class="table table-bordered">
        <tr class="text-center">
          <th>Task name</th>
          <th>Status</th>
          <th>#</th>
          <th>#</th>
        </tr>
        <tr v-for="(task, index) in tasks" :key="index" class="text-center">
          <td class="text-start">{{task.name }}</td>
          <td>{{task.status}}</td>
          <td>Edit</td>
          <td>Delete</td>
        </tr>
      </table>
    </div>
</template>





<script>
import useStorage from '../hooks/localStorage.js'
export default {
  name: 'TodoApp',
  data() {
    const [items, putItems, clearItems] = useStorage();
    const obj = [{
      "name": "learn Lodash",
      "status": "todo"
    },{
      "name": "learn Axios",
      "status": 'todo'
    }];

    putItems(obj);

    return {
      tasks: items,
      putTasks: putItems,
      clearTasks: clearItems
    }
  }
}
</script>



