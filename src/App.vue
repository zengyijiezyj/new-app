<template>
  <div>
    <router-view />
    <footView />
  </div>
</template>

<script>
import footView from './components/foot/footView'
export default {
  name: 'App',
  components:{footView}
}
</script>

