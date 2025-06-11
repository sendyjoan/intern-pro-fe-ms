<template>
    <footer class="main-footer">
        <div class="footer-left">
          Copyright &copy; 2021 - {{currentYear}} <div class="bullet"></div> Development By <a href="https://schooltechindonesia.com">ITDB SchoolTech Indonesia</a>
        </div>
        <div class="footer-right">
          2.3.0
        </div>
      </footer>
      </template>

<script>
export default {
  name: 'Footer',
    data() {
        return {
        currentYear: new Date().getFullYear()
        }
    },
}
</script>