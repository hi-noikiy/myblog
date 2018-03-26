<template>
  <Row type="flex" justify="center" align="middle" class="login">
    <Col span="6">
      <Card>
        <p slot="title">登录</p>
        <Form ref="loginForm" :model="loginForm" :rules="validate" :label-width="80">
          <FormItem label="邮箱" prop="email">
            <Input type="password" v-model="loginForm.email" />
          </FormItem>
          <FormItem label="密码" prop="password">
            <Input type="password" v-model="loginForm.password" />
          </FormItem>
          <FormItem>
            <Button type="primary" @click="login('loginForm')">登录</Button>
            <Button type="ghost" @click="reset('loginForm')" style="margin-left: 8px">清空</Button>
          </FormItem>
        </Form>
      </Card>
    </Col>
  </Row>
</template>

<script>
export default {
  data () {
    return {
      loginForm: {
        email: '',
        password: ''
      },
      validate: {
        email: [
          {required: true, message: '邮箱不能为空', trigger: 'blur'},
          {type: 'email', message: '邮箱格式不正确', trigger: 'blur'}
        ],
        password: [
          {required: true, min: 6, message: '密码不能低于6位', trigger: 'blur'}
        ]
      }
    }
  },
  methods: {
    login (name) {
      this.$refs[name].validate(valid => {
        if (valid) {
          this.Message.success('登录成功！')
        } else {
          this.$Message.error('登录失败!');
        }
      })
    },
    reset (name) {
      this.$refs[name].resetFields();
    }
  }
}
</script>

<style scoped>
  .login {
    height: 100%;
  }
</style>
