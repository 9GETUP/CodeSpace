<template>
    <div class="body">
        <ul>
            <li v-for="(item, index) in lists" :key="index">{{ item }}</li>
        </ul>
    </div>
</template>

<script>
import { mapState } from 'vuex'

export default {

    // 从公共库取出
    computed: mapState(['lists']) //return lists出来
}
</script>

<style lang="css" scoped>

</style>