import Mock from 'mockjs'



//登录
Mock.mock(/\/test\/login/,(options:any)=>{
    let data=Mock.mock({
        name:'@cname',
        token:/\w{20}/
    })
    let {username,password}=JSON.parse(options.body)
    if(username=='admin'&&password=='123456'){
        return {
            code:0,
            role:['userSystem'],
            data,
        }
    }else if(username=='manager'&&password=='123456'){
        return 
    }else{
        return {
            code:1,
            msg:'用户名或者密码错误'
        }
    }
})

//获取角色权限
Mock.mock(/\/test\/getRole/,(options:any) => {
    return ['userSystem']
})

