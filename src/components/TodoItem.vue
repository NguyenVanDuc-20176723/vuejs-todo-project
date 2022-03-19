<template >
    <div class="col" v-on:mouseenter="onMouseEnter" 
            v-on:mouseleave="onMouseLeave" >
    <div class="d-flex align-items-center">
        <div v-if="edit">
            <Input type="text" v-model="task_name" @on-enter="changeTask"/>
        </div>
        <div v-else>{{task.name}}</div>
        <div v-if="(func)||(sel)||(this.task.name.length==0)" class="d-flex pos-right">
            <div v-on:click="onSelect">
                <Select v-model="status" @on-change="changeStatus" @on-select="outSelect">
                    <Option value="todo">Todo</Option>
                    <Option value="in-progress">In-Progress</Option>
                    <Option value="completed">Completed</Option>
                </Select>
            </div>
            <Button icon="md-create" @click="editTask"></Button>
            <Button icon="md-trash" @click="deleteTask"></Button>
        </div>
    </div>
    </div>
</template>


<script>

export default {
    name: 'TodoItem',
    data() {
        return {
            task_name: this.task.name,
            status: this.task.status,
            edit: false,
            func: false,
            sel: false
        }
    },
    props: {
        task: Object
        
    },
    methods: {
        changeStatus() {
            this.$emit('handleChange', {
                "key": this.task.key,
                "status": this.status
            });
        },
        deleteTask() {
            this.$emit('handleDelete', this.task.key);
        },
        editTask() {
            this.edit = !this.edit;
        },
        changeTask() {
            if (this.task_name !== this.task.name || this.task_name.length !== 0){
                this.$emit('changeTaskName', {
                    "key": this.task.key,
                    "name": this.task_name
                });
            }
            this.edit = !this.edit;
            this.sel = false;
        },
        onMouseEnter () {
            this.func = true;
        },
        onMouseLeave() {
            this.func = false;
        },
        onSelect() {
            this.sel = true;
        },
        outSelect() {
            this.sel = false;
        }

    }
}
</script>



