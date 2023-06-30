<template>
    <el-form-item lable="test">
        <el-input v-model="value" @change="change" />
    </el-form-item>
</template>

<script setup lang="ts" generic="T extends Record<PropertyKey,any>,U extends keyof T">
import { ref, watch } from 'vue';

const emit = defineEmits<{
  update: [item:U,value:string]
}>()
const { modelValue , item , form} = defineProps<{
    modelValue:string,
    item:U,
    form:T
}>()
const value = ref<string>(modelValue)
const change = (v:string) => emit('update',item,v)
watch(form,() => {
    value.value = form[item]
})
</script>