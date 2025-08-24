<template>
    <div>
        <a-table :dataSource="dataSource" :columns="columns">
            <template #bodyCell="{ column }">
                <template v-if="column.key === 'operation'">
                    <a>action</a>
                </template>
            </template>
        </a-table>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import axios from 'axios';
const data = ref<any[]>([])
async function dataSource() {
    const res = await axios.get('users?page=1&per_page=5')
    data.value = res.data.data
}
const columns = [
    {
        title: 'ID',
        datalndex: 'id',
    },
    {
        title: 'username',
        datalndex: 'username',
    },
    {
        title: 'email',
        datalndex: 'email',
    },
    {
        title: 'phone',
        datalndex: 'phone',
    },
    {
        title: 'role',
        datalndex: 'role',
    },
    {
        title: 'created_At',
        datalndex: 'created_At',
    },
    {
        title: 'updated_At',
        datalndex: 'updated_At'
    }
]
</script>
<style></style>
