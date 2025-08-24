<!-- <template>
  <div>
    
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped>

</style> -->
<template>
    <div>
<a-table :dataSource="data" :columns="columns" >
            <template #bodyCell="{ column, record }">
                <template v-if="column.key === 'img'">
                </template>
                <template v-if="column.key === 'action'">
                </template>
            </template>
        </a-table>
    </div>
</template>

<script setup lang="ts">
import axios from 'axios';
import { ref } from 'vue';

const data = ref<any[]>([])
const api = "https://khaoniewback-production.up.railway.app"
async function getData(){
    const res = await axios. get (api+'/companies?page=1&per_page=2')
    console.log (res.data)
    data.value=res.data
}
const columns = [{

}]
</script>

<style scoped>

</style>