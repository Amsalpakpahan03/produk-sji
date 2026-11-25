<script setup>
import { company } from '~/data/products'
</script>

<template>
  <NuxtPage />

  <footer class="bg-gray-900 text-gray-300">
    <div class="container py-10 text-sm">
      <p class="font-heading text-base font-semibold text-white">{{ company.name }}</p>
      <p class="mt-1">{{ company.address }}</p>
      <p class="mt-3">
        <a
          :href="`mailto:${company.email}`"
          class="underline decoration-gray-500 underline-offset-4 hover:text-white"
        >
          {{ company.email }}
        </a>
      </p>
    </div>
  </footer>
</template>