<template>
    <div>
        {{task.name}}
    </div>
</template>





<script>

export default {
    name: 'TodoItem',
    props: {
        task: Object
    }
}
</script>



