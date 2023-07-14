<template>
    <!-- <el-form-item lable="test"> -->
        <el-checkbox v-model="modelValue" label="Option 1" />
    <!-- </el-form-item> -->
</template>

<script setup lang="ts">
// import { ref } from 'vue'
const modelValue = defineModel<boolean>()

</script>