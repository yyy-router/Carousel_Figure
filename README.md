##### 使用原生js实现网页轮播图效果

实现思路：

> 定义一个父容器，里面包含走马灯子容器，走马灯子容器里面用a标签套着img（几张轮播图就放几个a标签）
>
> ```html
> <div class='container'>
>     <div class='carousel'>
>         <a href=''>
>         <img src='picture.png'>
>         </a>
>     </div>
> </div>
> ```
>
> 利用css3中的属性实现代码的切换（核心思路）
>
> ```css
> .carousel{
>    transform:translateX(数值)	//0%,-100%,-200%...
> }
> ```
>
> 使用定时器实现轮播图自动切换

小tips：

```
//使用下面的方法可以使元素居中
left: 50%;
transform: translateX(-50%);
```

