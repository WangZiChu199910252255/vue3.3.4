<template>
    <el-form-item lable="test">
        <el-input v-model="valueRef" @change="change"/>
    </el-form-item>
</template>

<script setup lang="ts" generic="T extends Record<PropertyKey,any>,U extends keyof T">
import { ref, watch } from 'vue'

const { item , setValue , form} = defineProps<{
    item:U,
    setValue:(key:U,value:string) => void,
    form:T,
}>()

const valueRef = ref<T[typeof item]>(form[form.item])

watch(form,(v) => {
    console.log(form,v)
    // value = v
    valueRef.value = v.name
})

const change = (v:T[typeof item]) => setValue(item,v)

</script>