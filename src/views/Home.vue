<template>
<div>
    <h1>home</h1>
    <!-- <w-click />
    <w-show /> -->
    <p v-for="item in numbers" :key="item">{{item}}</p>
    <button @click="getInfo">请求数据</button>
</div>
</template>

<script>
// import WClick from '@/components/WClick';
// import WShow from '@/components/WShow';
import axios from 'axios'
export default {
    components: {
        // WClick,
        // WShow
    },
    data() {
        return {
            add: [4, 5],
            // numbers:[1,2,3,...this.add]
        }
    },
    computed: {
        numbers() {
            return [1, 2, 3, ...this.add]
        }
    },
    methods: {
        getInfo() {
            axios.post('http://localhost:3000/getUserInfo').then(resp => {
                console.log(resp)
            })
        }
    }
}
</script>
