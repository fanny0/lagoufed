# 张晓清 ｜ Part 1 | 模块二

## 简答题

### 1：描述引用计数的工作原理和优缺点。

> 工作原理：设置引用树，判断当前引用数是否为0。引用关系改变时修改引用数字
引用数字为0时立即回收

> 优点：
1. 发现垃圾时立即回收
2. 最大限度减少程序暂停

> 缺点：
1. 无法回收循环引用对象
2. 时间开销大、资源消耗较大

### 2：描述标记整理算法的工作流程

> 工作流程: 
1. 标记阶段--遍历所有对象找标记活动对象
2. 整理阶段--先执行整理，移动对象的位置变成连续的
3. 标记清除--遍历所有对象清除没有标记对象并清除所有标记
4. 回收相应空间

### 3：描述V8中新生代存储区垃圾回收的流程。


### 4：描述增量标记算法在何时使用，及工作原理。
> 
> 工作原理：