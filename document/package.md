##Package.json
这个文件有点类似我们以前Java里面的 `pom.xml` 文件  


* dependencies  
里面定义了该项目依赖的哪些第三方包以及版本号是多少。如果需要添加一个xxxp依赖包，那么运行 `yarn add xxxp` 或者 `npm install xxxp` ，如果不指定版本号他会安装最新的版本。


* scripts
定义了yarn或者npm可以运行的命令。可以自定义一个 test: xxxa， 然后运行 `yarn test` 或者 `npm test` 即可执行xxxa指令

其他的内容用默认的就行，后续自己会了解到的。  
⚠️这里注意的是一个项目里面要么用npm管理要么用yarn管理。

用了npm会产生一个叫package-lock.json  
用了yarn会产生一个叫yarn.lock的文件  
这两个文件里面的内容是 `dependencies` 里面对应版本号的地址

在你下载完依赖包后会产生一个叫 `node_modules` 的文件夹  
这个文件夹里面是项目所用到的所有的依赖包的源码

回到创建 [React App](start.md) 