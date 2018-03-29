<template>
  <div class="layout">
    <Layout>
      <Sider ref="side1">
        <side-menu />
      </Sider>
      <Layout>
        <top-header />
        <Content :style="{margin: '20px', background: '#fff', minHeight: '260px'}">
          <transition prop="fade-in">
            <router-view />
          </transition>
        </Content>
      </Layout>
    </Layout>
  </div>
</template>

<script>
  import { mapActions } from 'vuex'
  import SideMenu from './SideMenu'
  import TopHeader from './TopHeader'
  export default {
    data () {
      return {}
    },
    components: {
      SideMenu,
      TopHeader
    },
    created () {
      this.$store.dispatch('profile')
    },
    methods: {
      ...mapActions(['logout'])
    }
  }
</script>

<style scoped>
  .layout {
    height: 100%;
    display: flex;
    border: 1px solid #d7dde4;
    background: #f5f7f9;
    position: relative;
    border-radius: 4px;
    overflow: hidden;
  }

  .layout-header-bar {
    background: #fff;
    box-shadow: 0 1px 1px rgba(0, 0, 0, .1);
  }

  .layout-logo-left {
    width: 90%;
    height: 30px;
    background: #5b6270;
    border-radius: 3px;
    margin: 15px auto;
  }
</style>
