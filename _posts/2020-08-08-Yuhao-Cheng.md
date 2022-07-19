---
title: '一个调和线束的证明'
date: 2020-08-08
permalink: /posts/2020/08/2020-08-08-Yuhao-Cheng/
tags:
  - Prasolov point
  - Euler line
  - projective transformation
---

网友“lf°wjo◆ ”在2020年7月19号在一个QQ群里发了如下问题.

**问题**：给定$\triangle ABC$及其外心$O$,垂心$H$, Prasolov点$P$($X_{68}$),$K$为$\triangle BPC$ 垂心,$L$为$\triangle AKO$垂心.证明:$A(BC,OL)=-1$.
本文就这个问题展开讨论,并给出其证明.

## 1.Prasolov点和它的等角共轭点

Prasolov点时常作为$X_{24}$的等角共轭点出现,所以本文中我们也采用这个定义.

**定义1.1**：$\triangle ABC$与其垂三角形的垂三角形的透视中心为$X_{24}$,其等角共轭点为$X_{68}$.

顺便为了接下来叙述方便,我们再定义出Euler线与外接圆的两个交点.

**定义1.2**：设外心为$X_3$,垂心为$X_4$.Euler线$X_3X_4$与外接圆两交点中距垂心较近的为$X_{1113}$, 另一个为$X_{1114}$.

**定义1.3**：对Euler线上的点$X$,记$l(X):=\dfrac{\overline{XX_{1113}}}{\overline{XX_{1114}}}$.

本文中将用到$X_{24}$的如下两个性质.

**定理1.1**：$X_{24}$存在且在Euler线上.

证明参见[纯几何吧2799](https://tieba.baidu.com/p/6147487492). 为证明第二个定理,先叙述一个引理.

**引理1.1**：给定$\triangle ABC$,任取$X\in\{X_{1113},X_{1114}\}$,设$\triangle DEF$为垂三角形,$AX\cap EF=U$,作$AP//DU$交$\odot(ABC)$于点$P$,则有$XP//BC$.

<img src="https://llddeddym.github.io/images/2020-08-08(1).png"/>

*Proof.* 考虑$\triangle X_4BC$的极圆反演,这将$X_4$和$D$互变,$EF$和$\odot(ABC)$互变,于是$U$ 与$X$ 互变,因此$U,X,X_4,D$共圆.故$\angle PAX_4=\angle UDX_4=\angle AXX_3=\angle X_3AX$, 于是$AX$ 和$AP$ 是$\angle BAC$ 的等角线,于是结论成立. $\quad\Box$

**定理1.2**：$l(X_{24})=-l(X_4)^2$.

*Proof.* 设垂三角形为$\triangle DEF$,$AX_{1113}\cap EF=X$,$AX_{1114}\cap EF=Y$,$DX_{24}\cap EF=U$.则$A(X_{1113}X_{1114},X_4X_{24})=A(XY,X_4U)=D(XY,X_4U)=A(X_{1113}X_{1114},X_3X_4)$, 由$l(X_3)=-1$即得结论成立. $\quad\Box$

## 2.主要引理以及问题的转化

**引理2.1**：对于任意双曲线$\mathcal{H}$,设其上的两无穷远点为$A,B$,则对其上保证$A,B$不动的射影变换$f$,设定方向的直线$l$交$\mathcal{H}$于两点$U,V$,$Vf(U)$方向也固定.

*Proof.* 任取$U'V'//UV$,则$V(UU',AB)=V(f(U)f(U'),AB)$,这推出$V(Uf(U),AB)=V'(U'f(U'),AB)$,又$VA//V'A,VB//V'B,VU//V'U'$,故$Vf(U)//Vf(U')$. $\quad\Box$

回忆等轴双曲线的充要条件,我们有如下定理.

**定理2.1**：给定等轴双曲线$\mathcal{H}$上三点$A,B,C$,则过$A$做$BC$的垂线与$\mathcal{H}$的第二交点是$\triangle ABC$的垂心.

证明不再赘述.这二者结合可以得到如下引理.

**引理2.2**：考虑$\triangle ABC$的Euler线上的保$X_{1113}$和$X_{1114}$不变的射影变换$f$,设对Euler线上一点$U$, 它和$f(U)$的等角共轭点分别为$U^*$和$f(U)^*$.设$\triangle BCf(U)^*$的垂心为$H_U$,$\triangle AU^*H_U$的垂心为$V$,则$V$不依赖于$U$的选取.

<img src="https://llddeddym.github.io/images/2020-08-08(2).png"/>

*Proof.* 注意到$U^*\to f(U)^*$为Jerabek双曲线上的保其上无穷远点不变的射影变换,于是由**引理2.1**和**定理2.1**,由于$U^*H_U$方向固定知$H_Uf(U)^*$方向亦固定,故$AV$方向固定,$V$为$\mathcal{H}$上的定点.

我们下面就可以处理**问题**中的$P,K,L$了.先给出我们需要的射影变换.

**定义2.1**：定义Euler线上的射影变换$g$如下:$g(X)$满足$l(g(X))=-l(X_4)\cdot l(X)$.

容易验证$g(X_{1113})=X_{1113},g(X_{1114})=X_{1114},g(X_3)=X_4$($X_3$为外心).由**定理1.2**知$g(X_4)=X_{24}$.如果设出$X_{4}$关于$X_3$的对称点$X_{20}$, 则还有$g(X_{20})=X_3$.注意到$BCX_4$的垂心就是$A$,所以问题1.1通过引理3.2和等角共轭点的一个熟知结论($X$的垂足三角形与原三角形的两正交中心分别是$X$和它的等角共轭点)可以转化为如下问题.

**问题2.1**：证明:$X_{20}$的垂足三角形与$X_{3}$的反Ceva三角形位似.

## 3.问题的证明

回忆对于任意一点$X$和其反Ceva三角形$X^1X^2X^3$,有$A(XX^2,BC)=-1$.于是要证明**问题2.1**,只需证明如下定理.

**定理3.1**：设$X_{20}$在$AB,AC$上的投影分别为$D,E$,则$AX_3$平分$DE$.

<img src="https://llddeddym.github.io/images/2020-08-08(3).png"/>

*Proof.* 设$A$关于$X_3$的对称点为$A'$,则四边形$AX_4A'X_{20}$是平行四边形,$X_4A'$平分$BC$.设$A'X_4$ 与$\odot(ABC)$的第二交点为$U$.则$\angle ADE=\angle AX_{20}E=\angle UA'C=\angle UBC$,同理可得$\angle AED=\angle UCB$,故$\triangle ADE\sim\triangle UBC$, 又$\angle BAX_3=\angle BUA'$,故由相似对应知$AX_3$平分$DE$,这就完成了证明. $\quad\Box$

**注3.1**：这个定理也可以利用一点的Ceva三角形的中点三角形与原三角形的透视中心为其等截共轭点的补点这个事实来证明.

**注3.2**：利用**引理2.2**的简单变体也可以直接证明由我命制的《我们爱几何》微信公众号在2020.08.02推送的问题：“$\triangle ABC$中, 外心为$O$, 内心为$I$, $I'$是$I$关于$O$的对称地, $P$为$I'$关于$\odot(ABC)$的反演点, $P^*$为$P$关于$\triangle ABC$的等角共轭点, 做$\triangle BP^*C$的垂心$H_1$, 过$A$做$OI$平行线交$\odot(ABC)$于另一点$Q$, 过$Q$做$BC$平行线交$\odot(ABC)$于另一点$R$. 证明：$AI//RH_1$.”