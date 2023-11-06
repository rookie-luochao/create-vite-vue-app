<script setup lang="ts">
import { storeToRefs } from "pinia";
import { useUserStore } from "../core/store/user";

const userStore = useUserStore();
const { userInfo } = storeToRefs(userStore);
</script>

<template>
  <div>this is mainlayout page</div>
  <div>{{ userInfo?.name }}</div>
  <router-view />
</template>
