<template>
  <v-card outlined>
    <v-card-title class="primary-card-header">
      <slot name="card-title" />
    </v-card-title>
    <v-card-text class="pt-3 primary-background">
      <slot name="card-content" />
    </v-card-text>
  </v-card>
</template>
