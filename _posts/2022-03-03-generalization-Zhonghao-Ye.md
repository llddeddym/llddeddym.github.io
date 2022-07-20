---
title: '对叶中豪老师一个命题的证明与推广'
date: 2022-03-03
permalink: /posts/2022/02/2022-03-03-generalization-Zhonghao-Ye/
tags:
  - Ceva point
  - cross point
  - trillinear pole
---

前天叶中豪老师在“几何大家玩”微信群里发了如下命题：

**命题**：$\Omega$​​是过$\triangle ABC$​三个顶点的二次曲线，$P$​是$\Omega$​的中心，$Q$​是$P$​的等角共轭点，直线$l$​是$\Omega$​关于$\triangle ABC$​的等角共轭像，$X$​、$Y$​是$l$​关于$\triangle ABC$​的极点和三线性极点。求证：$X$​、$Y$​、$Q$​三点共线。

<img src="https://llddeddym.github.io/images/2022-03-03(1).png"/>

为了解决这个问题，我们先给出一些定义和引理。本部分在我之前写过的公众号文章中涉及部分，在“forever豪3”写的[纯几何吧5000](https://tieba.baidu.com/p/7224307348)中也有详细的整理，这里我们也以其为参考。

**引理-定义1（Cevapoint与Cevaconjugate）**：给定$\triangle ABC$，对平面上任意两点$X$、$Y$，$X$关于$\triangle ABC$的反Ceva三角形与$Y$关于$\triangle ABC$的Ceva三角形透视，透视中心$Z$称作$X$关于$\triangle ABC$的$Y-$cevaconjugate，记作$Z=\operatorname{cevadiv} _ {\triangle ABC}(Y,X)$；反之$Y$称作$X$和$Z$关于${\triangle ABC}$的Cevapoint，记作$Y=\operatorname{cevamul} _ {\triangle ABC}(X,Z)$。如无混淆之虞，我们总省略$\triangle ABC$。容易证明，$\operatorname{cevamul}$对两个变量交换。事实上，$X$和$Y$的Cevapoint正是$XY$关于过$X$和$Y$的反Ceva三角形的顶点的圆锥曲线的极点。

**定义2（Crosspoint与Crossconjugate）**：给定$\triangle ABC$，对平面上任意两点$X$、$Y$，称$XY$关于过$ABCXY$五点的锥线的极点$Z$为$X$和$Y$关于${\triangle ABC}$的crosspoint，记作$Z=\operatorname{crossmul} _ {\triangle ABC}(X,Y)$，反之$Y$称作$X$关于${\triangle ABC}$的$Z-$crossconjugate ，记作$Y=\operatorname{crossdiv} _ {\triangle ABC}(Z,X)$。如无混淆之虞，我们总省略$\triangle ABC$。

**引理-定义3（等度共轭 isoconjugate）**：给定$\triangle ABC$​及一点$U$​，对平面上一点$X$​，存在一点$Y$​使得$A[B,C;X,U]=A[C,B;Y,U]$​、$B[C,A;X,U]=B[A,C;Y,U]$​、$C[A,B;X,U]=C[B,A;Y,U]$​，称$X\mapsto Y$​这个映射为关于$\triangle ABC$​的保持$U$​不动的等度共轭，记作$\mathbf{g} _ {\triangle ABC}^U$​。如无混淆之虞，我们总省略$\triangle ABC$​​。若$U$是内心或三旁心，$\mathbf{g}^U$就是等角共轭，简记为$\mathbf{g}$。易见$(\mathbf{g}^U)^2=\operatorname{id}$，且$\mathbf{g}^U$一般有四个不动点，即$U$​及其反Ceva三角形的三顶点。

**引理4**：$\mathbf{g}^U(\operatorname{cevamul}(X,Y))=\operatorname{crossmul}(\mathbf{g}^U(X),\mathbf{g}^U(Y))$​​。

**引理-定义5（Chasels配极三角形定理）**：给定$\triangle ABC$​，对任意一条锥线$\mathcal{C}$​，若$\triangle ABC$​不是$\mathcal{C}$​的自配极三角形，则$\triangle ABC$​与其关于$\mathcal{C}$​​的配极三角形透视，透视中心称作$\triangle ABC$​关于$\mathcal{C}$​的透视中心，记作$\mathbf{P}(\mathcal{C})$​。

**定义6**：给定$\triangle ABC$​，对任意一点$P$​，$P$​关于$\triangle ABC$​的Ceva三角形与$\triangle ABC$​​的透视轴$l$​称作$P$​的三线性极线，记作$l=\mathbf{T}(P)$，反之$P$称作$l$的三线性极点，记作$P=\mathbf{T}(l)$。​​

以下介绍的引理均有证明。

**引理6**：给定$\triangle ABC$​​，设$l$​​是直线，$\mathcal{C}$​​是$\triangle ABC$​​的外接锥线，则$l$​​关于$\mathcal{C}$​​的极点为$\operatorname{cevadiv}(\mathbf{T}(l),\mathbf{P}(\mathcal{C}))$​。

<img src="https://llddeddym.github.io/images/2022-03-03(2).png"/>

*Proof.* 设$A\mathbf{T}(l)$交$BC$于$U$，$l$交$BC$于$V$，$l$关于$\mathcal{C}$的极点为$X$，$BC$关于$\mathcal{C}$的极点为$D$，则$U$、$V$调和分割$BC$，故$U$、$D$、$X$均在$V$关于$\mathcal{C}$的极线上，轮换即得$X$是$\mathbf{T}(l)$的Ceva三角形与$\mathbf{P}(\mathcal{C})$的反Ceva三角形的透视中心，也即$X=\operatorname{cevadiv}(\mathbf{T}(l),\mathbf{P}(\mathcal{C}))$。$\quad\Box$

**引理7**：给定$\triangle ABC$​及一点$X$​，则$\mathbf{P}(\mathbf{g}^X(l))=\mathbf{g}^X(\mathbf{T}(l))$​​。

<img src="https://llddeddym.github.io/images/2022-03-03(3).png"/>

*Proof.* 设$l$分别交$AC$、$AB$于$U$、$V$，则$BU$、$CV$、$A\mathbf{T}(l)$共点，注意到$\mathbf{g}^X(l)$在$B$处的切线恰好是$\mathbf{g}^X(BU)$，对称即知$BC$关于$\mathbf{g}^X(l)$的极点$D$在$\mathbf{g}^X$下的像恰为先前$BU$、$CV$、$A\mathbf{T}(l)$所共点。于是轮换对称即知$\mathbf{P}(\mathbf{g}^X(l))=\mathbf{g}^U(\mathbf{T}(l))$。$\quad\Box$

**引理8**：给定$\triangle ABC$​及两点$X$​、$Y$​，$Y$​关于$\triangle ABC$​的Ceva三角形为$\triangle DEF$​，则$\operatorname{cevadiv} _ {\triangle ABC}(Y,X)=\mathbf{g} _ {\triangle DEF}^Y(X)$​。

<img src="https://llddeddym.github.io/images/2022-03-03(4).png"/>

*Proof.* 设$Z=\operatorname{cevadiv} _ {\triangle ABC}(Y,X)$，$DZ$交$AX$于$U$，则由定义知$D[X,U;A,B]=-1$，结合$D[E,F;A,B]=-1$即知$D[X,Y;E,F]=D[Z,Y;F,E]$，轮换即知$Z=\mathbf{g} _ {\triangle DEF}^Y(X)$。$\quad\Box$

**引理9**：给定$\triangle ABC$及两点$X$、$Y$，$\mathcal{C}$是任意一条过$A$、$B$、$C$、$Y$的锥线，则$\operatorname{cevadiv}(Y,X)$在$X$关于$\mathcal{C}$的极线上。

*Proof.* 设$Z=\operatorname{cevadiv}(Y,X)$​，则由**引理8**知$AY$​、$BC$​调和分割$XZ$​，$BY$​、$CA$​调和分割$XZ$​，$CY$​、$AB$​也调和分割$XZ$​，故由Desargues对合定理知$\mathcal{C}$​也调和分割$XZ$​，由极线定义即证此引理。$\quad\Box$​

**引理10**：给定$\triangle ABC$及两点$X$、$Y$，则$Y$、$\operatorname{cevadiv}(Y,X)$，$\operatorname{crossdiv}(X,Y)$共线。

*Proof.* 由**引理9**及$\operatorname{crossdiv}$的定义即知三者均在$X$关于过$A$、$B$、$C$、$Y$、$\operatorname{crossdiv}(X,Y)$​五点的锥线的极线上。$\quad\Box$

下面回到原本猜想的证明。

*Proof.* 设$X _ 2$​是$\triangle ABC$​的重心，$X _ 6$​是$\triangle ABC$​的陪位重心。由**引理7**，$\mathbf{P}(\Omega)=\mathbf{P}(\mathbf{g}(l))=\mathbf{g}(\mathbf{T}(l))=\mathbf{g}(Y)$​，而$P$​是无穷远线$\mathcal{L} _ {\infty}$​关于$\Omega$​的极点，故由**引理6**，$P=\operatorname{cevadiv}(\mathbf{T}(\mathcal{L} _ \infty),\mathbf{P}(\Omega))=\operatorname{cevadiv}(X _ 2,\mathbf{g}(Y))$​，于是由**引理4**，$Q=\mathbf{g}(P)=\operatorname{crossdiv}(X _ 6,Y)$​，再由**引理7**，$\mathbf{P}(\odot(ABC))=\mathbf{g}(\mathbf{T}(\mathcal{L} _ \infty))=X _ 6$​，于是再由**引理6**，$X=\operatorname{cevadiv}(Y,X _ 6)$​。于是由**引理10**即知原命题成立。$\quad\Box$

回顾证明过程，事实上其中仅用到了“无穷远线是直线”以及“等角共轭是等度共轭”这两个事实，所以我们可以做如下的推广。

**推广**：给定$\triangle ABC$及一点$U$，$k,l$​是两条直线，$k$关于$\mathbf{g}^U(l)$的极点为$P$，$l$关于$\mathbf{g}^U(k)$的极点为$X$，$Y=\mathbf{T}(l)$，$Q=\mathbf{g}^U(P)$，则$X$、$Y$、$Q$​三点共线。

<img src="https://llddeddym.github.io/images/2022-03-03(5).png"/>

当$k$为无穷远线，$U$为$\triangle ABC$内心时，就化为原来的命题。