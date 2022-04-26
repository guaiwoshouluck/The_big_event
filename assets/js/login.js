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
        //通过form.verify()函数自定义校验规则
    form.verify({
        //自定义 pwd 的校验规则
        pwd: [/^[\S]{6,12}$/, '密码必须在6-12范围内，且不能有空格']
    })
})