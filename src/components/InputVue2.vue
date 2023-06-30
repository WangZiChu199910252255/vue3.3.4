<template>
    <el-form-item lable="test">
        <el-input v-model="modelValue"/>
    </el-form-item>
</template>

<script setup lang="ts">
// import { ref } from 'vue'
const modelValue = defineModel<string>()

</script>