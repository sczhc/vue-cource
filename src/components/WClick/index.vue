<template>
<div class="click">
    <button @click="handClick">点击</button>
</div>
</template>

<script>
export default {
    methods: {
        handClick() {
            this.$bus.$emit('onClick', 'the master')
        }
    }
}
</script>

<style>
.click {
    border: 1px solid yellowgreen;
}
</style>
