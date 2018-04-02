<template>
  <Menu active-name="article_list" theme="dark" width="auto" class="menu" @on-select="changeMenu">
    <Submenu v-for="submenu in menuList" :key="submenu.name" :name="submenu.name">
      <template slot="title">
        <Icon :type="submenu.icon"></Icon>
        {{submenu.title}}
      </template>
      <MenuItem v-for="menu in submenu.children" :name="menu.name" :key="menu.name">{{menu.title}}</MenuItem>
    </Submenu>
  </Menu>
</template>

<script>
  export default {
    props: {
      menuList: Array
    },
    methods: {
      changeMenu (name) {
        let willpush = true
        if (this.beforePush !== undefined) {
          if (!this.beforePush(name)) {
            willpush = false
          }
        }
        if (willpush) {
          this.$router.push({
            name: name
          })
        }
        this.$emit('on-change', name)
      }
    }
  }
</script>

<style>
  .menu-icon {
    transition: all .3s;
  }

  .rotate-icon {
    transform: rotate(-90deg);
  }
  
  .menu {
    height: 100%;
  }
  .menu::after {
    width: 0;
  }
  .menu-item span {
    display: inline-block;
    overflow: hidden;
    width: 69px;
    text-overflow: ellipsis;
    white-space: nowrap;
    vertical-align: bottom;
    transition: width .2s ease .2s;
  }

  .menu-item i {
    transform: translateX(0px);
    transition: font-size .2s ease, transform .2s ease;
    vertical-align: middle;
    font-size: 16px;
  }
</style>