<script setup>
import { ref, computed } from 'vue'
import { company, certifications, categories, products } from '~/data/products'

useSeoMeta({
  title: 'Produk | PT Suryamas Jaya Internasional',
  description:
    'Abon Soji dan gula aren bubuk premium produksi PT Suryamas Jaya Internasional. Tersedia dalam kemasan retail maupun layanan OEM / private label.',
})

const active = ref('all')

const filtered = computed(() =>
  active.value === 'all'
    ? products
    : products.filter((p) => p.category === active.value),
)

const mailTo = (subject) =>
  `mailto:${company.email}?subject=${encodeURIComponent(subject)}`
</script>

<template>
  <main>
    <!-- Header -->
    <section class="bg-primary text-white">
      <div class="container section">
        <p class="text-sm font-medium text-white/80">{{ company.name }}</p>
        <h1 class="font-heading mt-3 max-w-3xl text-3xl font-bold md:text-5xl">
          Dari abon rumahan sampai gula aren untuk barista
        </h1>
        <p class="mt-4 max-w-2xl text-white/85 md:text-lg">
          Kami memproduksi merek sendiri (Soji) dan mengerjakan produk dengan
          merek Anda lewat layanan OEM / private label.
        </p>
        <ul class="mt-6 flex flex-wrap gap-2" aria-label="Sertifikasi">
          <li
            v-for="c in certifications"
            :key="c"
            class="rounded-full bg-white/15 px-3 py-1 text-sm font-medium"
          >
            {{ c }}
          </li>
        </ul>
      </div>
    </section>

    <!-- Filter + grid -->
    <section class="container section">
      <div class="flex flex-wrap gap-2" role="tablist" aria-label="Kategori produk">
        <button
          v-for="c in categories"
          :key="c.key"
          type="button"
          role="tab"
          :aria-selected="active === c.key"
          class="rounded-full border px-4 py-2 text-sm font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
          :class="
            active === c.key
              ? 'border-primary bg-primary text-white'
              : 'border-gray-300 bg-white text-gray-700 hover:border-primary hover:text-primary'
          "
          @click="active = c.key"
        >
          {{ c.label }}
        </button>
      </div>

      <div class="mt-8 grid gap-8 md:grid-cols-2">
        <article
          v-for="p in filtered"
          :key="p.id"
          class="card flex flex-col overflow-hidden border border-gray-200 bg-white"
        >
          <div class="aspect-video overflow-hidden bg-gray-100">
            <img
              :src="p.image"
              :alt="`Kemasan ${p.name}`"
              class="h-full w-full object-cover"
              loading="lazy"
            />
          </div>

          <div class="flex flex-1 flex-col p-6">
            <p class="text-sm font-medium" :style="{ color: p.accent }">
              {{ p.line }}
            </p>
            <h2 class="font-heading mt-1 text-xl font-semibold text-gray-900 md:text-2xl">
              {{ p.name }}
            </h2>
            <p class="mt-3 text-gray-600">{{ p.summary }}</p>

            <ul class="mt-4 flex flex-wrap gap-2">
              <li
                v-for="t in p.tags"
                :key="t"
                class="rounded-md bg-secondary-lighter px-2.5 py-1 text-sm text-gray-800 ring-1 ring-secondary"
              >
                {{ t }}
              </li>
            </ul>

            <dl class="mt-5 space-y-3 border-t border-gray-200 pt-5 text-sm">
              <div class="flex gap-4">
                <dt class="w-24 shrink-0 font-medium text-gray-900">Berat bersih</dt>
                <dd class="text-gray-600">{{ p.weight }}</dd>
              </div>
              <div class="flex gap-4">
                <dt class="w-24 shrink-0 font-medium text-gray-900">Komposisi</dt>
                <dd class="text-gray-600">{{ p.ingredients }}</dd>
              </div>
              <div v-if="p.usage" class="flex gap-4">
                <dt class="w-24 shrink-0 font-medium text-gray-900">Penyajian</dt>
                <dd class="text-gray-600">{{ p.usage }}</dd>
              </div>
            </dl>

            <div class="mt-6 pt-1 md:mt-auto">
              <a
                :href="mailTo(`Pertanyaan produk: ${p.name}`)"
                class="btn inline-block bg-primary font-medium text-white hover:bg-primary-dark focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
              >
                Tanya produk ini
              </a>
            </div>
          </div>
        </article>
      </div>
    </section>

    <!-- OEM note -->
    <section class="bg-secondary-lighter">
      <div class="container section flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div class="max-w-2xl">
          <h2 class="font-heading text-2xl font-semibold text-gray-900">
            Ingin produk dengan merek Anda sendiri?
          </h2>
          <p class="mt-2 text-gray-700">
            Dua kemasan gula aren di atas memakai formula yang sama dengan
            merek berbeda. Ceritakan kebutuhan Anda, kami bantu dari formula
            sampai kemasan.
          </p>
        </div>
        <a
          :href="mailTo('Pertanyaan layanan OEM / private label')"
          class="btn inline-block shrink-0 bg-secondary font-semibold text-gray-900 hover:bg-secondary-dark focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-900 focus-visible:ring-offset-2"
        >
          Hubungi kami untuk OEM
        </a>
      </div>
    </section>
  </main>
</template>