<script setup lang="ts">
import { reactive } from 'vue';
// import InputVue1 from './components/InputVue1.vue'
import InputVue2 from './components/InputVue2.vue'
// import InputVue3 from './components/InputVue3.vue'

interface From {
  name:string;
  bo:boolean;
}

const form = reactive<Partial<From>>({})

// const setValue = <T extends keyof Partial<From>>(key:T,value:From[T]) => form[key] = value

const update = (v:boolean) => form.bo = v

// const input3Update = (item:keyof From,value?:From[typeof item]) => form[item] = value

</script>

<template>
  <div>
    <el-form :model="form" label-width="120px">
      <!-- <InputVue1 :form="form" :item="'age'" :setValue="setValue"/> -->
      <InputVue2 :modelValue="form.bo" @update:modelValue="update"/>
      {{ form }}
      <!-- <InputVue3 :form="form" :item="'name'" :modelValue="form.name ?? ''" @update="input3Update"/> -->
    </el-form>
  </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
