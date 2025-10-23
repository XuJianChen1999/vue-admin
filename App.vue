<template>
  <router-view></router-view>
</template>

<script setup lang="ts">
import { PRIMARY_COLOR_KEY, PRIMARY_COLOR } from '@/const/theme'
import { setCssProperty, getAppCssVariables } from '@/app/style'
import useConfigStore from '@/store/modules/config'

const configStore = useConfigStore()

onMounted(() => {
  setCssProperty('--app-primary-color', PRIMARY_COLOR)
  const cssVars = transformCssVars(getAppCssVariables())
  configStore.setConfig(PRIMARY_COLOR_KEY, cssVars[PRIMARY_COLOR_KEY])
})

function transformCssVars(vars: Record<string, string>): Record<string, string> {
  return Object.fromEntries(
    Object.entries(vars).map(([key, value]) => {
      const cleaned = key.replace(/^--app-/, '').replace(/^--/, '')
      const camelKey = cleaned.replace(/-([a-z])/g, (_, char) => char.toUpperCase())
      return [camelKey, value.trim()]
    }),
  )
}
</script>
