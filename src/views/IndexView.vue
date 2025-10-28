<template>
    <div>
        <h1>INDEX</h1>
        <p :innerHTML="indexStore.value"></p>
        <button @click="increment()">Increment</button>
        <button @click="decrement()">Decrement</button>
    </div>
</template>

<script setup>
import { useIndexStore } from '@/stores/indexStore';
const indexStore = useIndexStore();
function increment(){
    indexStore.increment();
}
function decrement(){
    indexStore.decrement();
}
</script>

<style lang="scss" scoped>

</style>