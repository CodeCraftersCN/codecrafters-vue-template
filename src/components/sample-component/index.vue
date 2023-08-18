<template>
  <div>
    {{ value }}
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue"

const value = ref(5)
</script>

<style scoped lang="less"></style>
