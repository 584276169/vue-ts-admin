import Mock from 'mockjs'
import {Random} from 'mockjs'


//登录
Mock.mock(/\/test\/login/,(options:any)=>{
    let data=Mock.mock({
        name:'@cname',
        avatarUrl:Random.image('100x100', '#50B347', '#FFF', 'VT'),
        token:/\w{20}/
    })
    let {username,password}=JSON.parse(options.body)
    if(username=='user'&&password=='123456'){
        return {
            code:0,
            role:['userSystem'],
            data,
        }
    }else if(username=='admin'&&password=='123456'){
        return {
            code:0,
            role:['adminSystem'],
            data,
        }
    }else{
        return {
            code:1,
            msg:'用户名或者密码错误'
        }
    }
})

//获取角色权限
Mock.mock(/\/test\/getRole/,(options:any) => {
    return ['userSystem','adminSystem']
})

//获取表格数据
Mock.mock(/\/test\/getForm/,(options:any) => {
   
    return  {
        code:0,
        data:Mock.mock({
        "data|10":[
            {
                name:'@cname',
                time:Random.datetime('y-MM-dd HH:mm:ss'),
                address:'@city()',
                email:'@email',
            }
        ]
    }),
    }
})

