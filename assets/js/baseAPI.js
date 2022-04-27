//每次调用 $.get()  $.post  $.ajax() 时会先调用ajaxPrefilter函数，可以拿到提供给Ajax的配置对象
$.ajaxPrefilter(function(options) {
    console.log(options.url)
        //在发起正真的Ajax请求之前，进行路径拼接
    options.url = 'http://www.liulongbin.top:3007' + options.url
})