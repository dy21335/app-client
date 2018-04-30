# app-client

最终结果界面：测试用例为输入`item`
![image](https://raw.githubusercontent.com/dy21335/app-client/master/src/pics/show.jpg)



##项目建立

1. 首先确认已经安装node；
2. Clone the Project - [https://github.com/dy21335/app-client.git](https://github.com/dy21335/app-client.git)
3. Install the dependencies - `npm install`
4. Start the app - `npm start`



## 文件目录

```
- src
 	--icons  //一些图标
 	--pics   //最终页面效果
    --utils
    	---axiosTest.js //使用axios请求的网络请求
    	---ContactsAPI.js   //使用fetch的网络请求
    	---jsonp.js    //使用jsonp的网络请求
    	---Search.js  //搜索框组件
    --App.css   //css样式文件
    --App.js    //外层组件，包含search组件
    App.test.js
    index.css
    index.js   //入口文件
    logo.svg
```

+ 本搜索框输入要搜索的value后，将value以get的方式发送给后端，期望得到一个如同：

  ```javascript
  {
  result: [
  [
  "卫衣男 韩版 男士",
  "7.339320299539139"
  ],
  [
  "卫衣长款 中长款",
  "7.184275337370706"
  ]
  ]
  }
  ```

  这种形式的json返回数据，即一个对象，包含一个n*2的result二维数组。

+ axios和fetch都要求后端服务设置http的响应体有access-control-allow-origin的设置，**本栗子最后使用了jsonp的方式来实现网络请求**，请求的url是：http://suggest.taobao.com/sug?code=utf-8&q=西瓜。

+ 使用fetch实现的栗子是：

  + 关于ContactsAPI的`getall`方法


  + ```javascript
    export const getAll = (query) =>{
        query = query.trim();
        //腾讯云服务器
        let url = `http://139.199.219.28:5001/${query}`;

        return fetch(`${url}`, {
            method: 'GET',
            headers
        }).then(res => res.json())
    }
    ```

    在这里面，将`url`值修改成要请求的url，`query`为输入框输入的值，这里如果为测试，输入值只能为items；