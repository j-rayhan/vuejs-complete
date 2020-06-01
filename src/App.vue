<template>
  <app-servers></app-servers>
</template>

<script>
import Header from './components/Shared/Header.vue';
import Footer from './components/Shared/Footer.vue';
import Servers from './components/Server/ServerStatus.vue';
import ServerDetails from './components/Server/ServerDetails.vue';
export default {
  components: {
    'app-header': Header,
    'app-servers': Servers,
    'app-server-details': ServerDetails,
    'app-footer': Footer
  }
}
</script>

<style>
</style>
