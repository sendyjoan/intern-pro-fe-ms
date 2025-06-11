<template>
  <AdminLayout>
    <div class="main-content">
        <section class="section">
          <div class="section-header">
            <h1>Dashboard</h1>
          </div>
          <div class="section-body">
            <div class="row">
                <div class="col-lg-4 col-md-4 col-sm-12">
                <div class="card card-statistic-2">
                    <div class="card-stats">
                    <div class="card-stats-title">School Statistic
                        <div class="dropdown d-inline">
                        </div>
                    </div>
                    <div class="card-stats-items">
                        <div class="card-stats-item">
                            <div class="card-stats-item-count">24</div>
                            <div class="card-stats-item-label">Administrator</div>
                        </div>
                        <div class="card-stats-item">
                            <div class="card-stats-item-count">12</div>
                            <div class="card-stats-item-label">Koordinator</div>
                        </div>
                        <div class="card-stats-item">
                            <div class="card-stats-item-count">23</div>
                            <div class="card-stats-item-label">Teacher</div>
                        </div>
                    </div>
                </br><p></p></br>
                    <div class="card-stats-items">
                        <div class="card-stats-item">
                            <div class="card-stats-item-count">23</div>
                            <div class="card-stats-item-label">Student</div>
                        </div>
                        <div class="card-stats-item">
                            <div class="card-stats-item-count">23</div>
                            <div class="card-stats-item-label">Partner</div>
                        </div>
                        <div class="card-stats-item">
                            <div class="card-stats-item-count">23</div>
                            <div class="card-stats-item-label">Mentor Lapangan</div>
                        </div>
                    </div>
                    </div>
                    <div class="card-icon shadow-primary bg-primary">
                    <i class="fas fa-archive"></i>
                    </div>
                    <div class="card-wrap">
                    <div class="card-header">
                        <h4>Total Users</h4>
                    </div>
                    <div class="card-body">
                        59
                    </div>
                    </div>
                </div>
                </div>
            </div>
          </div>
        </section>
      </div>
  </AdminLayout>
</template>

<script>
import AdminLayout from '../components/admin/AdminLayout.vue'

export default {
  name: 'Dashboard',
  components: {
    AdminLayout
  }
}
</script>
