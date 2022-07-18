---
title: '从几何变换的角度证明Schiffler点的一个基本性质'
date: 2020-03-06
permalink: /posts/2020/03/2020-03-06-Schiffler/
tags:
  - Ceva point
  - cross point
  - cross-ratio
---

本文的主要目的是简要介绍一个几何变换$\mbox{cevamul}$，也就是Ceva point的基本内容，并利用其证明Schiffler点$X_{21}$的一个基本性质.

我们先来看一个简单的定理.

**定理(Cevian Nest)}**：给定平面上一$\triangle ABC$和两点$P$,$Q$，$P$关于$\bigtriangleup ABC$的反Ceva三角形是$\bigtriangleup P^1P^2P^3$，$P^1Q$交$BC$于$R_1$，$P^2Q$交$CA$于$R_2$，$P^3Q$交$AB$于$R_3$，则$\bigtriangleup ABC$与$\bigtriangleup R_1R_2R_3$透视，记透视中心为$R$.

<img src="https://llddeddym.github.io/images/2020-03-06(1).png"/>

**定理的证明**：设$P$、$Q$的三线坐标分别为$(x,y,z)$、$(u,v,w)$,则$P^1$的三线坐标为$(-x,y,z)$,于是$P^1Q$的三线坐标为$(yw-zv,zu+xw,-xv-yu)^T$,又$BC$的坐标为$(1,0,0)^T$,于是$R_1(0,xv+yu,zu+xw)$,由
$$\left|   \begin{array}{ccc}     1 & 0 & 0\\       0 & xv+yu&zu+xw\\   \dfrac{1}{yw+zv}&\dfrac{1}{zu+xw}&\dfrac{1}{xv+yu}\\   \end{array} \right| =0$$
得到$R\left(\dfrac{1}{yw+zv},\dfrac{1}{zu+xw},\dfrac{1}{xv+yu}\right)$恰在$AR_1$上，由对称性即证毕.$\quad\Box$

有了这个定理，我们就可以在$P$、$Q$不全为$\bigtriangleup ABC$三边所在直线上的点时定义一个变换，即记$R=\mbox{cevamul}(P,Q)$，称$R$为$P$和$Q$的Ceva point.从刚才定理的证明中容易看到$\mbox{cevamul}(P,Q)=\mbox{cevamul}(Q,P)$，下面我们固定其中一点，看看直线的像和原像是什么样子的.

**定理1**：设$P$是一定点，$l$是一直线，则$\mbox{cevamul}(P,l)$是$\bigtriangleup ABC$的一条外接锥线.

<img src="https://llddeddym.github.io/images/2020-03-06(2).png"/>

**定理1的证明**：任取$l$上三点$X$、$Y$、$Z$，记它们在$\mbox{cevamul}(P,\cdot)$下的像分别为$U$、$V$、$W$,于是
$$\begin{aligned}&A(UV,WB)=(U_1V_1,W_1B)\\=&P^1(U_1V_1,W_1B)=P^1(XY,ZB)\\=&P^3(XY,ZB)=(U_3V_3,W_3B)\\=&C(UV,WB).\end{aligned}$$
于是有$A$、$B$、$C$、$U$、$V$、$W$共锥线. 结论自然成立.$\quad\Box$

注意到$P$是$\mbox{cevamul}(P,\cdot)$的不动点，所以$P\in l$时，$\mbox{cevamul}(P,l)$和$l$相切，据此可以直接得到：

$\textbf{推论}$：$P$关于$\mbox{cevamul}(P,l)$的极线是$l$.

照葫芦画瓢，我们可以证明一个类似的结论。

**定理2**：设$P$是一定点，$\bigtriangleup P^1P^2P^3$是其反Ceva三角形，$c$为同时过$P$、$P^1$、$P^2$、$P^3$的锥线，则$\mbox{cevamul}(P,c)$是$c$在$P$处的切线.

<img src="https://llddeddym.github.io/images/2020-03-06(3).png"/>

证明不再赘述，请读者自行补全。

下面考虑一个引理，本质是Brocard定理中锥线的封闭性。

**引理1**：$P$、$Q$的反Ceva三角形分别是$\bigtriangleup P^1P^2P^3$、$\bigtriangleup Q^1Q^2Q^3$，于是$P$、$Q$、$P^1$、$P^2$、$P^3$、$Q^1$、$Q^2$、$Q^3$八点共锥线.记此锥线为$P$、$Q$的双Ceva锥线.

<img src="https://llddeddym.github.io/images/2020-03-06(4).png"/>

**引理1的证明**：考虑过$P$、$P^1$、$P^2$、$P^3$、$Q$的锥线，对完全四边形$PP^1P^2P^3AC$用Brocard定理得$\bigtriangleup ABC$关于此锥线是自配极三角形,\\于是由$A、BC$调和分割$QQ^1$知$Q^1$也在此锥线上，另两点$Q^2$、$Q^3$完全同理.$\quad\Box$

下面来引入Stammler双曲线，它是陪位重心$K$和外心$O$的双Ceva锥线。

**引理2**：内心$I$在Stammler双曲线上.

**引理2的证明**：仅考虑原三角形是锐角三角形的情况，其他情形完全类似。站在切线三角形的角度，$K$和$O$分别是切线三角形的Gergonne点和内心，于是Stammler双曲线恰为切线三角形的Feuerbach双曲线，是一个等轴双曲线，而$K$和$I$的双Ceva锥线也恰为等轴双曲线(这是由于四等心均在其上)，故这二者均是同时经过$K$、$K^1$、$K^2$、$K^3$和$\bigtriangleup K^1K^2K^3$垂心的锥线，于是结论成立.$\quad\Box$

下面我们引入Schiffler点和切聚点. 

**定义1**：Schiffler点：设$I$为内心，则$\bigtriangleup ABC$、$\bigtriangleup IBC$、$\bigtriangleup AIC$、$\bigtriangleup ABI$的Euler线共点，所共点即为Schiffler点，以下记为$Sc$.

**定义2**：切聚点：切点三角形与旁心三角形的位似中心,以下记为$X_{57}$.

由定义2就可以看出$\mbox{cevamul}(X_{57},I)$是Gergonne点$Ge$.

对Feuerbach双曲线利用Pascal定理容易证明$Sc$恰为Euler线与Feuerbach双曲线的除垂心外的第二交点，证明不再赘述，感兴趣的读者可以去看[2684 专题 费尔巴哈双曲线【纯几何吧】\_百度贴吧](http://tieba.baidu.com/p/6119526486)。而在[位似专题第3话——杂题选讲（终篇）](https://zhuanlan.zhihu.com/p/68330886)中，我们证明了$X_{57}$在 $OI$上，此处也不再证明了。

接下来我们来证明$Sc$的一个基本性质，利用刚才我们初步建立起的变换可以叙述如下。

**定理3**：$Sc=\mbox{cevamul}(O,I)$，其中$O$是外心，$I$是内心.

<img src="https://llddeddym.github.io/images/2020-03-06(5).png"/>

**定理3的证明**：设重心为$G$，由$OK^1$是中垂线得$\mbox{cevamul}(O,K)=G$，又$\mbox{cevamul}(O,O)=O$,于是Stammler双曲线在$\mbox{cevamul}(O,\cdot)$下的像为Euler线，于是$\mbox{cevamul}(O,I)$在Euler线上。又$\mbox{cevamul}(I,I)=I$，$\mbox{cevamul}(I,X_{57})=Ge$，于是$OI$在$\mbox{cevamul}(I,\cdot)$下的像恰为Feuerbach双曲线,于是$\mbox{cevamul}(O,I)$也在Feuerbach双曲线上,显然它不是$H$(很明显可以举出$OI^1$不过$H_1$的反例),于是$\mbox{cevamul}(O,I)$只能为$Sc$.这就完成了证明.$\quad\Box$