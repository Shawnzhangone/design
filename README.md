# my-vue

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

 ##
1、打开终端​，cd到已存在项目的目录

​​​2、输入以下命令行，初始化一个本地仓库：

 ​git init
3、输入以下命令，把工程所有文件都添加到该仓库中（千万别忘记后面的.号！！！）：

 ​git add .
4、输入以下命令，把文件提交到本地仓库：

 git commit -m "Initial commit"​

 如果出现nothing to commit, working directory clean​说明你已经提交好了。

​5、输入以下命令，添加远程仓库地址：

 输入：git remote add origin + 你的仓库地址

 例如：git remote add origin https://project/user/GitDemo​.git

 如果出现fatal: remote origin already exists.​说明你已经添加过远程仓库了，输入以下命令删除远程仓库：git remote rm origin，然后再次执行第5步。

6、​输入以下命令，把文件提交到远程仓库：

 git push -u origin master​

然后你就等着它提交完成就完事了。

7、假如第6部失败的话再执行git pull –rebase origin master命令，然后再执行git push -u origin master即可上传成功。

8、完事后假如还是不能拉代码的话再重启项目执行git branch –set-upstream master origin/master即可。



 ##本地

  修改left.vue create()请求数据，mine.js默认数据。
       全局url：mine.js  BASE_URL
       图片：/design/images/
       icon：/static/icon/
       phone.vue 返回


