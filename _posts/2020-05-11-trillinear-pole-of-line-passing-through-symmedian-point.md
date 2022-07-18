---
title: '过陪位重心的直线的三线性极点'
date: 2020-05-11
permalink: /posts/2020/05/2020-05-11-trillinear-pole-of-line-passing-through-symmedian-point/
tags:
  - anti-Steiner point
  - cross-ratio
---

最近有人在做$X_{110}$也即Euler线的逆Steiner点那一块的结论，然后在群里问这东西的三线性极线是布洛卡轴$X_3X_6$怎么证，这导致我突然发现我也不会这个的证明，甚至连外接圆上点的三线性极线过陪位重心都不会证...于是动手找了个还算不错的刻画，这里放一下证明以作备忘，权当复习熟知结论了.

**定理：**给定$\triangle ABC$，$X$是其Jerabek双曲线上一点，$K$是陪位重心，$H$为垂心，则$KX$的三线性极点为$HX$的逆Steiner点.

<img src="https://llddeddym.github.io/images/2020-05-11.png"/>

**证明：**设$HX$逆Steiner点为$S_X$，$H$关于$BC$对称点为$H'$，$KX$交$BC$于$Y$，$AK$交$BC$于$K_1$，则 $(K_1B,CY)=K(AB,CX)=H(AB,CX)=H'(AB,CS_X)=A(AB,CS_X)$，而由于$A(AK,BC)=-1$ (这里的$AA$都是指外接圆在$A$处的切线)，于是$A(BC,S_XY)=-1$，这即是说定理成立. $\quad\Box$

取$X$为外心，则自然有本文开头的结论成立。

**注：**事实上若设$\triangle ABC$的外心为$O$, 则$S_X$的正交截线正是$OX$, 这里不做证明.