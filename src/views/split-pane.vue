<template>
<div class="split-pane-con">
    <split-pane :value.sync="offset">
        <div slot="left">left</div>
        <div slot="right">right</div>
    </split-pane>
</div>
</template>

<script>
import splitPane from '@/components/split-pane'
export default {
    components: {
        splitPane
    },
    data() {
        return {
            offset: 0.8
        }
    }
}
</script>

<style lang="less">
.split-pane-con {
    height: 200px;
    width: 600px;
    background: papayawhip;
}
</style>
