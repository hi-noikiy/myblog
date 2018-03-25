<template>
  <Header :style="{padding: 0}" class="layout-header-bar">
    <Row type="flex" justify="end">
      <Dropdown>
        <a href="javascript:void(0)">
          下拉菜单
          <Icon type="arrow-down-b"></Icon>
        </a>
        <DropdownMenu slot="list">
          <DropdownItem>驴打滚</DropdownItem>
        </DropdownMenu>
      </Dropdown>
      <div class="avatar">
        <Avatar icon="person" size="large" />
      </div>
    </Row>
  </Header>
</template>

<script>
  export default {
    name: "top-header"
  }
</script>

<style scoped>
  .avatar {
    margin: 0 20px;
  }
</style>