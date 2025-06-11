<!-- src/components/admin/AdminLayout.vue -->
<template>
    <div class="main-wrapper">
        <Navbar />
        <Sidebar />
        <slot/>
        <Footer />
    </div>
</template>

<script>
import Sidebar from './Sidebar.vue'
import Navbar from './Navbar.vue'
import Footer from './Footer.vue'

export default {
  name: 'AdminLayout',
  components: {
    Sidebar,
    Navbar,
    Footer,
  },
}
</script>

<style scoped>
.admin-layout {
  display: flex;
  min-height: 100vh;
}
.main-content {
  flex: 1;
  background: #f5f6fa;
}
</style>
