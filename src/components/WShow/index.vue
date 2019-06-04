<template>
<div class="show">
    <p>{{message}}</p>
</div>
</template>

<script>
export default {
    data() {
        return {
            message: '',
        }
    },
    created() {
        this.$bus.$on('onClick', val => {
            this.message = val
        })
    },
    beforeDestroy() {
        this.$bus.$off('onClick')
    }
}
</script>

<style>
.show {
    border: 1px solid red;
    margin-top: 50px;
}
</style>
