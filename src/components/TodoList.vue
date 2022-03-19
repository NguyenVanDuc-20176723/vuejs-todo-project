<template>
    <div>
        <div class="row align-items-center ">
            <div class="col fs-2 text-capitalize" >{{name}}</div>
            <div v-if="name === 'todo'" class="col">
                <Button icon="md-add" @click="createTask">add Task</Button>
            </div>
        </div>
        <List border>
        <ListItem v-for="(task, index) in tasks" :key="index" >
            <TodoItem :task="task"
            @handleDelete="handleDelete" 
            @handleChange="handleChange"
            @changeTaskName="changeTaskName"
            />
        </ListItem>
      </List>
    </div>
</template>

<script>
import TodoItem from './TodoItem.vue';
import {getKey} from '../lib/utils.js';
export default {
    name: 'TodoList',
    data() {
        return {
            task_name: ''
        }
    },
    components: {
        TodoItem
    },
    props: {
        tasks: Array,
        name: String
    },
    methods: {
        addTask(){
            this.$emit('handleAddTask', {
                "key": getKey(),
                "name": this.task_name,
                "status": this.name
            });
            this.task_name = '';
            
        },
        handleDelete(key){
            this.$emit('handleDeleteTask', key);
        },
        handleChange(obj){
            this.$emit('handleChangeStatus', obj);
        },
        changeTaskName(obj){
            this.$emit('handleChangeTaskName', obj);
        },
        createTask() {
            const item = {
                "key": getKey(),
                "name": "",
                "status": "todo"
            };
            this.$emit('handleAddTask', item);
        }
    }
}
</script>



