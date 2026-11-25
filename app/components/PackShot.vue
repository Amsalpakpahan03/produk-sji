<script setup>
import { computed } from 'vue'

// Foto kemasan asli berukuran 1600x900 dengan banyak ruang abu-abu di sekeliling.
// Komponen ini memotong gambar lewat background-size/position:
//  - mode "pair"  : dua sisi kemasan (depan + belakang), rasio 3:2
//  - mode "front" : hanya sisi depan, rasio 7:10 (atur posisi lewat x dan y)
const props = defineProps({
  src: { type: String, required: true },
  label: { type: String, required: true },
  mode: { type: String, default: 'pair' },
  x: { type: Number, default: 27 },
  y: { type: Number, default: 52.5 },
})

const style = computed(() => {
  const backgroundImage = `url("${props.src}")`
  return props.mode === 'front'
    ? {
        backgroundImage,
        backgroundSize: '333.33% auto',
        backgroundPosition: `${props.x}% ${props.y}%`,
      }
    : { backgroundImage, backgroundSize: '150% auto', backgroundPosition: '50% 50%' }
})
</script>

<template>
  <div
    role="img"
    :aria-label="label"
    class="bg-[#e6e8ea] bg-no-repeat"
    :class="mode === 'front' ? 'aspect-[7/10]' : 'aspect-[3/2]'"
    :style="style"
  />
</template>