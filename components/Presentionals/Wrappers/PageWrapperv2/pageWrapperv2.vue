<template>
  <v-content>
    <slot name="sort-filter-wrapper" />
    <v-card>
      <v-card-title class="grey lighten2 white--text title">
        <slot name="page-header" />
      </v-card-title>
      <v-card-text>
        <slot name="container" />
      </v-card-text>
    </v-card>
  </v-content>
</template>
