<template>
    <div>
        <div class="d-flex">
            <Input v-model= "task_name" @on-enter="addTask" type="text" placeholder="Enter task"/>
        </div>
        <div>{{name}}</div>
        <List border>
        <ListItem v-for="(task, index) in tasks" :key="index" >
            <TodoItem :task="task" />
        </ListItem>
        <Button icon="md-add">add Task</Button>
      </List>
    </div>
</template>





<script>
import TodoItem from './TodoItem.vue';
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
                "name": this.task_name,
                "status": this.name
            });
            this.task_name = '';
            
        }
    }
}
</script>



