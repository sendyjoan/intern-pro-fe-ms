<template>
  <AdminLayout>
    <div class="main-content">
        <section class="section">
          <div class="section-header">
            <h1>Majority Management</h1>
          </div>
          <div class="section-body">
            
          </div>
        </section>
      </div>
  </AdminLayout>
</template>

<script>
import AdminLayout from '../components/admin/AdminLayout.vue'
import { loadScript } from '@/plugins/loadScript';
export default {
  name: 'Majority',
  components: {
    AdminLayout
  },
  async mounted() {
    try {
      await loadScript('/assets/js/scripts.js');
      await loadScript('/assets/js/custom.js');
      console.log('Scripts loaded');
    } catch (err) {
      console.error('Failed to load script:', err);
    }
  }
}
</script>
