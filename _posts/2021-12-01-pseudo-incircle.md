---
title: '又一伪内切圆切点性质的推广的证明'
date: 2021-12-01
permalink: /posts/2021/12/2021-12-01-pseudo-incircle/
tags:
  - pseudo incircle
---

前两天占岩老师在几何教师协会群里发了如下问题：

**问题**：$\triangle ABC$内切圆切点三角形$\triangle DEF$，$N$在线段$BC$上且$BN=CD$，$EF$交$\odot(ABC)$于$P,Q$，$\odot(PQD)$交内切圆于$J$，求证$\angle BAN=\angle JAC$.

熟悉反演反射的话，一下就可以看出只需证明$AJ$​过$\triangle ABC$​的$A-$​伪内切圆与$\odot(ABC)$​的切点，也就是弧$BAC$中点与内心连线与$\odot(ABC)$的第二交点，而这让我想到了之前写的2021.09.11 一个伪内切圆切点性质的推广的证明（阅读本文前可以先阅读此文），顺水推舟，我们可以给出这个题目的推广以及证明。

**推广**：给定$\triangle ABC$及其外接圆$\odot O$，设$N$、$S$分别为弧$BAC$中点及其对径点，$P$是$AS$上一点，设$NP$与$\odot O$的第二交点为$T$，$\triangle DEF$是$P$关于$\triangle ABC$的垂足三角形，设$EF$交$\odot(ABC)$于$X$、$Y$两点，$\odot(DEF)$与$BC$的第二交点为$Z$，$\odot(XYZ)$与$\odot(DEF)$的第二交点为$K'$. 证明：$K'$在$AT$上.

<img src="https://llddeddym.github.io/images/2021-12-01(1).png"/>

*Proof.* 过$Z$作$BC$垂线交$AS$于$Q$，则$Q$是$P$关于$\triangle ABC$的等角共轭点，于是$SP\cdot SQ=SB^2$，设$XY$交$BC$于$V$，交$AS$于$W$，$BC$中点为$M$，过$M$作$AS$垂线交$AB$于$C'$，交$AC$于$B'$，交$AS$于$L$，设$AS$交$BC$于$R$，于是$B'$和$C'$是$S$在$AC,AB$上的投影. 我们来证明$M\in\odot(XYZ)$，

<img src="https://llddeddym.github.io/images/2021-12-01(2).png"/>

$$\begin{aligned}&VX\cdot VY-VZ\cdot VM\\=&VB\cdot VC-VZ\cdot VM\\=&(RV+RB)\cdot(RV-RC)\\&-(RV+RM)\cdot(RV-RZ)\\=&(RB-RC)\cdot RV-RB\cdot RC\\&-(RM-RZ)\cdot RV+RM\cdot RZ\\=&2 RM\cdot RV-RS\cdot RA\\&-(RM-RZ)\cdot RV+RL\cdot RQ\\=&MZ\cdot RV+RL\cdot RQ\\&-SR\cdot(SA-SR)\\=&SQ\cdot RW+SR^2-SR\cdot SA\\&+(SR-SL)\cdot(SQ-SR)\\=&SQ\cdot WL-AL\cdot SR\\=&\dfrac{SB^2\cdot WL-AL\cdot SR\cdot SP}{SP}\\=&BM^2-(SA-SL)\cdot SR\\=&BM^2-SB^2+SM^2=0,\end{aligned}$$

故$M\in\odot(XYZ)$，下面取$NQ$中点$O'$​，则$O'$在$MZ$中垂线上，由$OO'//SQ\perp XY$知其也在$XY$中垂线上，故$O'$是$\odot(XYZ)$的圆心，设$PQ$中点为$U$，则$ZK'\perp O'U//NP$. 下过$D$作$AS$平行线交$AT$​于$K$，由之前的文章可知$K\in\odot(DEF)$，于是$\angle K'KD=\angle K'ZV=\angle SNT=\angle SAK$，再由$KD//AS$即知$K'\in AK$，即$K'\in AT$. $\quad\Box$