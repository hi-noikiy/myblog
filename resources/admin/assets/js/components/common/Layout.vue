<template>
  <div class="layout">
    <Layout>
      <Sider ref="side1">
        <side-menu :menuList="menuList"/>
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
  import * as types from '../../store/mutation-types'
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
    mounted () {
      this.init()
    },
    methods: {
      ...mapActions(['logout']),
      init () {
        this.$store.commit(types.UPDATE_MENULIST)
      }
    },
    computed: {
      menuList () {
        return this.$store.state.app.menuList
      }
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
