<template>
  <v-card outlined>
    <v-card-title class="secondary-card-header">
      <slot name="page-title" />
    </v-card-title>
    <v-card-text class="pt-3 primary-background">
      <slot name="page-content" />
    </v-card-text>
  </v-card>
</template>
