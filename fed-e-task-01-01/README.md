# 张晓清 ｜ Part 1 | 模块一

## 简答题

### 第一题

> 最终执行结果为：打印出 10。

> 原因: 考察函数作用域，调用此匿名函数时，函数内i不存在，所以去上级作用域找，此时i已经为10。所以打印出10


### 第二题

> 最终执行结果为：报错。

> 原因: 考察块级作用域，if块级作用域内，tmp有声明所以用块级作用域的tmp，而console的时候tmp还没有声明，所以报错

### 第三题

```javascript
var arr = [12, 34, 89, 4]
arr.sort((pre, next)=>{
    return pre <= next ? -1 : 1
})[0]
```

### 第四题：请详细说明 var，let，const 三种声明变量的方式之间的具体差别？
> var 声明的变量有变量提升，可以读写，作用域是全局作用域，不推荐使用
> let 声明的变量没有变量提升，可以读写，作用域是块级作用域内，需要修改的用let
> const 声明的变量没有变量提升,只读不能被修改，声明的时候必须赋值，作用域是块级作用域内，主要使用

### 第五题：

> 最终执行结果为：浏览器：10。

> 原因: 考察闭包.obj.fn()函数this指向window所以打印出10

### 第六题：简述Symbol类型的用途?

1. 扩展第三方框架
2. 为对象独一无二的属性名，实现迭代器
3. 创建对象中私有成员


### 第七题：说说什么是浅拷贝，什么是深拷贝?
> 浅拷贝和深拷贝针对引用类型
> 浅拷贝: 只拷贝引用
> 深拷贝：完全复制值

### 第八题：谈谈你是如何理解JS异步编程的，Event Loop是
做什么的，什么是宏任务，什么是微任务?

> js语言执行过程是单线程的，所有任务都需要排队。异步编程不会等待同步任务结束在进行，会有内部的api等待耗时操作，等到响应结果后加入消息队列末尾继续执行

> Event Loop：监听调用栈和消息队列，当消息队列中有任务，会压到调用栈执行完所有任务和微任务，最好弹出调用栈。再次从消息队列取出任务压栈
> 宏任务：回调队列中的任务称为宏任务。除了微任务其他的一步调用都是宏任务
> 微任务:当前任务结束，就立即执行的任务，而不是到整个队列的末尾排队。Promise、 MutaionObserver、process.nextTick(Node.js环境)

### 第九题：
```javascript
Promise.resolve().then(res=>'hello').then(res=>res+'lagou').then(res=>console.log(res+'I v U'))
```

### 第十题：请简述TypeScript与JavaScript之间的关系?

> TypeScript是基于JavaScript的语言，是JavaScript的超集。解决JavaScript自由系统的问题从而大大提高代码的可靠程度

### 第十一题：请谈谈你所认为的TypeScript优缺点?

> 优点
1. 支持es6新特性
2. 更强大的类型系统
3. 提高编码的效率和系统的可靠程度
4. 利于大型项目的开发、维护
5. 功能更强大，生态更健全、更完善
> 缺点
1. 语言本身多了很多概念
2. 项目初期，TypeScript会增加成本