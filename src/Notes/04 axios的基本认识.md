---
title: axios的基本认识
categories:
 -  笔记
tags:
 - 笔记
date: 2020-05-25
---

:::tip

axios是一款基于promise的异步ajax请求库,是vue和react官方推荐进行ajax请求库

:::

<!-- more -->

## 文章思维导图

<img :src="$withBase('/Notes/axios的基本认识01.jpg')" alt="axios的基本认识01">



## what

一款基于promise的异步ajax请求库

特点：
1. 在浏览器可以机进行ajax请求
2. 在nodejs可以进行http请求
3. 支持promise api
4. 可以设置请求拦截器和响应拦截器
5. 可以设置转换请求数据/响应数据格式
6. 支持请求取消
7. 可以批量进行request请求
8. 可以抵抗XSRF攻击

## how

### 常用API

|               语法                |                  作业                   |
| :-------------------------------: | :-------------------------------------: |
|           axios(config)           |    通常/最本质的发任意类型请求的方式    |
|         axios(url,config)         |        可以只制定url发送get请求         |
|       axios.request(config)       |           等同于axios(config)           |
|       axios.get(url,config)       |               发送get请求               |
|      axios.post(url,config)       |              发送post请求               |
|     axios.delete(url,config)      |             发送delete请求              |
|       axios.put(url,config)       |               发送put请求               |
|         axios.default.xxx         |           请求的默认全局配置            |
| axios.interceptors.request.use()  |             添加请求拦截器              |
| axios.interceptors.response.use() |             添加响应拦截器              |
|       axios.create(config)        | 创建一个基于config的参数的新的axios对象 |
|          axios.Cancel()           |        用于创建取消请求错误对象         |
|        axios.CancelToken()        |       用于创建取消请求的Token对象       |
|         axios.isCancel()          |        是否是一个取消请求的错误         |
|        axios.all(promises)        |        用于批量执行多个异步请求         |
|          axios.spread()           |  结束批量执行多个异步请求后返回的参数   |

### config参数

|       键值名       |   键值类型    |                             含义                             |
| :----------------: | :-----------: | :----------------------------------------------------------: |
|        url         |    String     |                           请求路径                           |
|       method       |    String     |                           请求方式                           |
|      baseURL       |    String     |                     请求根路径(请求前缀)                     |
|  transfromRequest  |   Function    |      在发送请求前,将参数转换为相应格式(json/urlencoded)      |
| transformResponse  |   Function    |       在接受响应前,将返回的数据转换为响应格式(对象...)       |
|      headers       |    Object     |                         自定义请求头                         |
|       params       |    Object     |                   请求参数,会加到url路径上                   |
|  paramsSerializer  |   Function    |                          参数序列化                          |
|        data        | Object/String |                           请求数据                           |
|      timeout       |    Number     |                         请求最大时间                         |
|  withCredentials   |    Boolean    |                   请求是否携带本地cookies                    |
|      adapter       |   Function    |                        自定义请求实体                        |
|        auth        |    Object     |                        Http basic认证                        |
|    responseType    |    String     |                         返回数据格式                         |
|  responseEncoding  |    String     |                       返回数据编码格式                       |
|   xsrfCookieName   |    String     |                         xsrf tokenx                          |
|   xsrfHeaderName   |    String     | the name of the http header that carries the xsrf token value |
|  onUploadProgress  |   Function    |                       上传进度回调函数                       |
| onDownloadProgress |   Function    |                       下载进度回调函数                       |
|  maxContentLength  |    Number     |                      响应实体最大字节数                      |
|   maxBodyLength    |    Number     |                       响应体最大字节数                       |
|   validateStatus   |   Function    |                       状态校验回调函数                       |
|    maxRedirects    |    Number     |                      请求重定向最大次数                      |
|    cancelToken     |   Function    |                      取消请求的回调函数                      |




### request创建

我们可以使用axios.create(config)方法来制定特殊的axios

当我们遇到下面的情况就应该使用axios.create(config)来创建特殊的axios

当一个前端需要向多个后端请求时，我们可以为每一个后端请求创建一个特定的axios函数对象,使用axios.create方法来创建

```js
// import axios
const config1 = {
    baseURL:'http://localhost:3000',
    /* other configs */
}

const config2 = {
    baseURL:'http://localhost:4000',
    /* other configs */
}

const request1 = axios.create(config1);
const request2 = axios.create(config2);

request1.get(/* ...url1...*/)
request2.get(/* ...url1...*/)
```


### 执行链流程

1. 请求拦截器后添加先执行
2. 响应拦截器先添加先执行

`图`

<img :src="$withBase('/Notes/axios的基本认识.jpg')" alt="axios的基本认识">


### 取消请求


当我们需要在请求进行时,取消该次请求并且重新发送请求时,我们可以先取消当前请求,再重新发送请求

我们可以在创建请求的时候在config参数中添加cancelToken属性名,该属性值为一个回调函数,回调函数的参数是用于取消该次请求的方法

当请求在进行时可以调用该方法取消请求,当请求已经完成时调用该方法无效

当取消请求成功后,会作为异常抛出,即会被catch抓到

这是,我们可以使用axios.isCancel方法来判断该异常是取消请求异常还是请求失败异常

`demo`

```js
// import axios

let cancel

axios.get('/url',{
    cancelToken:c=>{
        cancel = c;
    }
}).then(response=>{
    console.log(response);
}).catch(err=>{
    if(axios.isCancel(err)){
        console.log(`取消请求异常:${err.message}`)
    }else{
        console.log(`一般请求异常:${err.message}`)
    }
})


// 取消请求
cancel();

```