<template>
  <v-expansion-panels>
    <v-expansion-panel>
      <v-expansion-panel-header class="primary-expansion-panel">
        <span class="subtitle primary-expansion-panel-header-text--text">
          <slot name="expansion-panel-header" />
        </span>
        <template #actions>
          <v-icon color="primary-expansion-panel-header-icon">
            mdi-chevron-down
          </v-icon>
        </template>
      </v-expansion-panel-header>
      <v-expansion-panel-content class="primary-background">
        <slot name="expansion-panel-content" />
      </v-expansion-panel-content>
    </v-expansion-panel>
  </v-expansion-panels>
</template>
