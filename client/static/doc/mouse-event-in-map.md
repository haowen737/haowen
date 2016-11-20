mousedown\mouseup\click事件关系


背景分析：

如果用户在一个元素上点击，那么最少三个事件会被触发，事件发生顺序：

1、mousedown,当用户在这个元素上按下鼠标键的时候

2、mouseup，当用户在这个元素上松开鼠标键的时候

3、click，当一个mousedown和一个mouseup都在这个元素上被检测到的时候发生



工作需求：

　　在地图上通过鼠标点击添加marker，拖拽地图后，避免点击事件的进入，即拖拽不添加marker。

　　分析：如果希望拖拽动作后，不触发点击事件，单纯帮顶click事件是不行的，可以使用mousedown、mousemove、mouseup来描述拖拽和鼠标点击事件。

　　mousedown-mousemove-mouseup，为拖拽事件；mousedown-mouseup，为点击事件。

　　于是问题细化成，通过flag判断是不是进行了move操作，一旦进行则mouseup中的函数体不执行即可，示意代码如下：
