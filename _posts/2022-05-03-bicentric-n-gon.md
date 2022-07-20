---
title: '【以“史”为鉴】一眼十辈子（附原问题在$n$边形切锥线情形的推广）'
date: 2022-05-03
permalink: /posts/2022/05/2022-05-03-bicentric-n-gon/
tags:
  - algebraic topology
  - Riemann surface
---

前情提要：[第一篇](https://llddeddym.github.io/posts/2022/05/2022-05-01-Poncelet/)、[要学好语文](https://llddeddym.github.io/posts/2022/05/2022-05-02-study-Chinese/).

让我们看看史大爷在别的群看到我昨天的推送后的破防现场：

<img src="https://llddeddym.github.io/images/2022-05-03(1).png"/>

<img src="https://llddeddym.github.io/images/2022-05-03(2).png"/>

<img src="https://llddeddym.github.io/images/2022-05-03(3).png"/>

很不凑巧啊，人这一辈子往往很短，比如在史大爷眼里，可能我看一眼的功夫我自己十辈子就过去了。我在这里简单写一下证明，沿用之前证明中的记号。

<img src="https://llddeddym.github.io/images/2022-05-01.png"/>

*Proof.* 设$AD$交$BC$于$E$，$AB$交$CD$于$F$，则Brocard定理告诉我们$\triangle UEF$关于$\odot O$是自配极三角形，并且$OU$与$EF$的交点就是$ABCD$的Miquel点，注意到$X$和Newton线$MN$上的无穷远点是等角共轭点于是$\measuredangle(MN,AD)=\measuredangle CEX$，故若设$U$在$MN$上的投影为$Y$，我们有

$$\begin{aligned}&\measuredangle KVI\\=&\measuredangle YUI\\=&\measuredangle YUS+\measuredangle SUO\\=&90^\circ-\measuredangle(US,MN)+\measuredangle SUO\\=&90^\circ+\measuredangle SUO-\measuredangle USD-\measuredangle(AD,MN)\\=&90^\circ+\measuredangle SUO+\measuredangle UQE+\measuredangle CEX\\=&\measuredangle SUO+\measuredangle(BC,OI)+\measuredangle(UQ,BC)\\=&2\measuredangle SUO，\end{aligned}$$

也即是说若设$VI$中点为$W$，则$\measuredangle KWI=4\measuredangle SUO$，这也就说明当$S$在$\odot I$上跑一圈时，$K$在$\odot W$上跑四圈. $\quad\Box$

我们再给出另外的一个证明，事实上也更加本质，由此可以给出自然的推广。首先请大家注意一个小问题，“跑了...圈”这种东西在数学上如何严格定义呢？其实这涉及到所谓的“映射度”，为方便起见，我们这里只叙述对球面$S^n$的版本。注意到对任意连续映射$f：S^n\to S^n$，其诱导一个最高阶奇异同调群之间的同态$f _ * :H _ n(S^n)\to H _ n(S^n)$，由于$H _ n(S^n)\cong\mathbb{Z}$，所以$f _ * $必然是“乘以某一个整数$d$”，这个整数$d$就被称作$f$的映射度。对于光滑的$f$，一个基础的微分拓扑定理是说我们总可以通过寻找一个$f$的正则值（Sard定理保证了正则值的存在性），观察$f$在正则值的每个原像处的切映射是否反转定向以赋予原像中的点一个$-1$或者$1$，而后将他们加起来便可得到映射度。注意这个加和可以进行是因为$f$在正则值的原像附近是局部微分同胚，故正则值的原像必然离散，由$S^n$是紧的就可以知道正则值的原像必然有限，于是可以加和。由此我们考虑对给定的圆$\odot O$和一定点$P\neq O$，从$\odot O$上一点$A$到$O$在$AP$上的投影这个映射$f(\odot O,P)$是从$\odot O$到以$OP$为直径的圆$\odot(OP)$的一个光滑映射，选取适当的定向，由刚才叙述的定理即可知$f(\odot O,P)$的映射度在$P$在$\odot O$内时为$2$、在$P$在$\odot O$外时映射度为$0$（注意到这两种情况下$f$总是$2:1$的）、$P$在$\odot O$上时为$1$（此时就是一个位似变换），那回顾我们对之前问题的证明，就知道$[A\mapsto K]$这个映射实际上是$[A\mapsto M]$和$[M\mapsto K]$的复合，事实上也就是$f(\odot O,U)$与$f(\odot(OU),I)$的复合，由$U$在$\odot O$内，$I$在$\odot(OU)$内即知二者映射度均为$2$，注意到映射的复合给出诱导同调群同态的复合，于是$[A\mapsto K]$这个映射的映射度就是$2\times 2=4$，换言之，便是$A$在$\odot O$上跑一圈，$K$便在$\odot(VI)$上跑四圈。自然的推广便也就来了。

**推广**：给定$\odot O$，$\odot O$内一定点$P\neq O$，设$OP$中点为$P'$，再给定$\odot(OP)$内一定点$Q\neq P'$，$B$是$O$在$AP$上的投影，$C$是$P'$在$BQ$上的投影，则若$A$在$\odot O$上跑一圈，$C$便在$\odot(P'Q)$上跑四圈.

****

以下是一个附录。我今天发现这个问题其实已经很早就被人发现并证明了，具体可以参见https://arxiv.org/abs/1607.04766，这里我搬运一下证明，其实还是很巧妙的，基本是更细致地讨论Poncelet闭合定理那个运用Riemann面的证明就可以得到的。

**命题**：给定处于一般位置的$\odot O$和一个圆锥曲线$c$，若存在一族$n$边形分别以$\odot O$和$c$为外接圆和内切锥线，则这族$n$边形顶点的重心在一个定圆上.

*Proof.* 我们在$\mathbb{C}P^2$上考虑这个问题. 先回顾一下Poncelet闭合定理的证明. 考虑由所有满足$x\in\odot O$且$L$是$x$对$c$的一条切线，则由所有这样的$(x,L)$构成的集合自动成为一个紧Riemann面$E$，并且$p:E\to\odot O$，$(x,L)\mapsto x$是一个二重分歧覆叠映射，$\odot O$和$c$的四个交点即为分歧点，由$\odot O$是非奇异的二次曲线即知其亏格为$0$，亦同构于$\mathbb{C}P^1$，故由Riemann--Hurwitz公式可知$E$的亏格为$1$，单值化定理告诉我们其同构到一个复环面. $E$上有两个自然的对合，其一为$\sigma(x,L)=(x',L)$，其中$x'$是$L$与$\odot O$的另一交点，其二是$\tau(x,L)=(x,L')$，其中$L'$是$x$关于$c$的另一切线，那考虑$T=\tau\circ\sigma$，Poncelet闭合定理即是说若存在$(x,L)$使得$T^n(x,L)=(x,L)$，则$T^n=\operatorname{id}$，但此时$T$作为$E$上的平移此结果是自动成立的. 下面我们考虑证明原本的命题，对$E$上任何一点$(x,L)$，我们可以定义设其对应的$n$边形的重心在$\mathbb{C}^2$中的坐标为$(u(x,L),v(x,L))=(u(x),v(x))$，此时$u,v$作为若干个$E$上亚纯函数的平均值亦是亚纯函数. 考虑由$\tau$和$\sigma$生成的$E$上的变换群，其同构于二面体群$D _ {2n}$. 注意到$u$, $v$趋向于无穷当且仅当$x$在$p$在圆环点$(1:i:0)$和$(1:-i:0)$处的原像对应的$D _ {2n}$-轨道上，并且此时$v/u$就分别趋向于$i$和$-i$，于是$u,v$事实上各恰有$4n$个一阶极点. 任取$A,B$分别是$(1:i:0)$和$(1:-i:0)$对应轨道中的元素，及其附近的局部坐标$z$和$w$，则$u,v$在$A,B$附近分别可以写为$$u(z)=a _ {-1}/z+\sum _ {k=0}^{\infty}u _ kz^k$$和$$v(z)=ia _ {-1}/z+\sum _ {k=0}^{\infty}v _ kz^k$$以及$$u(w)=b _ {-1}/w+\sum _ {k=0}^{\infty}u _ k'w^k$$和$$v(z)=-ib _ {-1}/w+\sum _ {k=0}^{\infty}v _ k'w^k$$. 下面任取待定的$a,b\in\mathbb{C}$，考虑$F(x,L)=(u(x)-a)^2+(v(x)-b)^2$，其是$D _ {2n}$-不变的，且只可能在$A,B$对应的$D _ {2n}$-轨道处有一阶极点，此时其留数分别为$2a _ {-1}(u _ 0-a+i(v _ 0-b))$和$2b _ {-1}(u _ 0'-a-i(v _ 0'-b))$，故总可以取适当的$a,b$使得$F$是$E$上的全纯函数，由于$E$是紧的，故其恒为常数$R$. 又由于$(u(x),v(x))$包含了一条$\mathbb{R}^2$中的曲线，所以$a,b,R$均为实数，如此便完成了证明. $\quad\Box$

****

另外我还看到史大爷还在刘保乾先生的不等式群里叫嚣：

<img src="https://llddeddym.github.io/images/2022-05-03(4).png"/>

<img src="https://llddeddym.github.io/images/2022-05-03(5).png"/>

<img src="https://llddeddym.github.io/images/2022-05-03(6).png"/>

只能说感谢龚固老师为民除害了。另外我觉得赵力医生的话说得很好，这里再放一遍：

<img src="https://llddeddym.github.io/images/2022-05-03(7).png"/>

希望五十多岁的史大爷可以尽早领悟到这一点。