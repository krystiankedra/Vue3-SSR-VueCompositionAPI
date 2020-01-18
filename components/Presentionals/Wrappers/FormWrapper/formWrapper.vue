<template>
  <v-form>
    <v-card>
      <v-card-title class="title">
        <slot name="title" />
      </v-card-title>
      <v-card-text>
        <slot name="content" />
      </v-card-text>
    </v-card>
  </v-form>
</template>