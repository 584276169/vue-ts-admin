import service from '@/utils/axiosRequest'

// 登录
export function login(data:object){
    return service({
      url: "/test/login",
      method: "POST",
      data:data,
    });
  }

// 获取角色权限
export function getRole(){
  return service({
    url: "/test/getRole",
    method: "POST",
  });
}