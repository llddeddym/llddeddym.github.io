---
title: '一个伪内切圆切点性质的推广的证明'
date: 2021-09-11
permalink: /posts/2021/09/2021-09-11-pseudo-incircle/
tags:
  - pseudo-incircle
---

今天的题目是一个群友问的，看起来是万喜人老师的一个题目，为了叙述方便我修改一下条件顺序。

**题目**：给定$\triangle ABC$及其外接圆$\odot O$，设$N$、$S$分别为弧$BAC$中点及其对径点，$P$是$AS$上一点，设$NP$与$\odot O$的第二交点为$T$，$D$是$P$在$BC$上的投影，$AT$与过$D$且平行于$AS$的直线交于$K$。求证：$K$在$P$关于$\triangle ABC$的垂足圆上。

<img src="https://llddeddym.github.io/images/2021-09-11(1).png"/>

直接放一下证明。

*Proof.* 设$\triangle DEF$是$P$关于$\triangle ABC$的垂足三角形，$Q$是$P$关于$\triangle ABC$的等角共轭点，$ST$交$BC$于$R$。则由于$PQ$调和分割$\triangle ABC$的内心与$A$-旁心，$S$又是后两者中点，故$SP\cdot SQ=SB^2$，结合$\triangle STB\sim\triangle SBR$即知$ST\cdot SR=SP\cdot SQ$，由$\angle PTS=90^\circ$知$\angle AQR=90^\circ$，$P$、$Q$、$T$、$R$、$D$共圆$c$。设$AT$与$c$的第二交点为$K'$，则$\angle PDK'=\angle PTK'=\angle NTA=\angle NSA=\angle DPQ$，故$DK'//PQ$，于是$K'\equiv K$。设$PQ$中点为$U$，它恰是$\odot(DEF)$的圆心，由于$PQDK$为等腰梯形，于是$UD=UK$，即$K$在$\odot(DEF)$上。$\quad$$\Box$​

<img src="https://llddeddym.github.io/images/2021-09-11(2).png"/>

这个图形里还有很多好结果，读者可以自行探索一下，这里不赘述了。