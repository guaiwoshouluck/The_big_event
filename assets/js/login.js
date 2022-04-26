$(function() {
    //点击"去注册账号"的链接
    $('#link_reg').on('click', function() {
        $('.login-box').hide()
        $('.reg-box').show()
    })

    //点击"去登陆"的链接
    $('#link_login').on('click', function() {
        $('.login-box').show()
        $('.reg-box').hide()
    })

    //从Layui中获取form对象
    var form = layui.form
    var layer = layui.layer
        //通过form.verify()函数自定义校验规则
    form.verify({
        //自定义 pwd 的校验规则
        pwd: [/^[\S]{6,12}$/, '密码必须在6-12范围内，且不能有空格'],
        //校验两次密码是否一致规则
        //通过形参获取确认密码框中的内容
        repwd: function(value) {
            //拿到密码框内容
            var pwd = $('.reg-box [name=password]').val()
                // 判断内容是否相同
            if (pwd !== value) {
                return '两次密码不一致'
            }
            //不一致返回提示结果
        }
    })

    //监听注册表单的提交事件
    $('#form_reg').on('submit', function(e) {
        //阻止默认提交行为
        e.preventDefault()
            // 发起Ajax的post请求
        var data = {
            username: $('#form_reg [name=username]').val(),
            password: $('#form_reg [name=password]').val()
        }
        $.post('http://www.liulongbin.top:3007/api/reguser', data, function(res) {
            if (res.status !== 0) {
                return layer.msg(res.message)
            }
            layer.msg('注册成功')
                //模拟点击行为，用户注册成功后自动跳转到登陆页面
            $('#link_login').click()
        })
    })
})