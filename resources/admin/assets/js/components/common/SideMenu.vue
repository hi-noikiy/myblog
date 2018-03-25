<template>
  <Menu active-name="1-1" theme="dark" width="auto" class="menu">
    <template v-for="item in menuList">
      <MenuItem v-if="item.children.length<=1" :name="item.children[0].name" :key="item.path">
        <Icon :type="item.icon" :key="item.path"></Icon>
        {{item.title}}
      </MenuItem>
      <Submenu v-if="item.children.length > 1" :name="item.name" :key="item.path">
        <template slot="title">
          <Icon :type="item.icon" :size="iconSize"></Icon>
          <span class="layout-text">{{ item.title }}</span>
        </template>
        <template v-for="child in item.children">
          <MenuItem :name="child.name" :key="child.name">
            <Icon :type="child.icon" :size="iconSize" :key="child.name"></Icon>
            <span class="layout-text" :key="child.name">{{ child.title }}</span>
          </MenuItem>
        </template>
      </Submenu>
    </template>
  </Menu>
</template>

<script>
  import { appRouters } from '../../router/routes'
  export default {
    data () {
      return {
        menuList: appRouters
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