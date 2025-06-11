<!-- src/components/admin/Sidebar.vue -->
<template>
  <div class="main-sidebar sidebar-style-2">
        <aside id="sidebar-wrapper">
          <div class="sidebar-brand">
            <a href="index.html">Stisla</a>
          </div>
          <div class="sidebar-brand sidebar-brand-sm">
            <a href="index.html">St</a>
          </div>
          <ul class="sidebar-menu">
              <li class="menu-header">Dashboard</li>
            <li class="active">
                <router-link :key="$route.fullPath" class="nav-link" to="/dashboard">
                    <i class="fas fa-fire"></i> <span>Dashboard</span>
                </router-link>
            </li>
              <li class="menu-header">Master Data</li>
                <li class="">
                    <router-link :key="$route.fullPath" class="nav-link" to="/majority">
                        <i class="fas fa-fire"></i> <span>Majority</span>
                    </router-link>
                </li>
              <li class="nav-item dropdown">
                <a href="#" class="nav-link has-dropdown"><i class="fas fa-fire"></i><span>Users</span></a>
                <ul class="dropdown-menu">
                  <li><a class="nav-link" href="index-0.html">General Dashboard</a></li>
                  <li><a class="nav-link" href="index.html">Ecommerce Dashboard</a></li>
                </ul>
              </li>
            </ul>

            <div class="mt-4 mb-4 p-3 hide-sidebar-mini">
              <a href="https://getstisla.com/docs" class="btn btn-primary btn-lg btn-block btn-icon-split">
                <i class="fas fa-rocket"></i> Documentation
              </a>
            </div>
        </aside>
      </div>
</template>

<script>
export default {
  name: 'Sidebar',
}
</script>