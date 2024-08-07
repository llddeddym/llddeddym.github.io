---
title: '对一个读者问题的推广与证明'
date: 2021-12-11
permalink: /posts/2021/12/2021-12-11-from-reader/
tags:
  - calculate
---

前两天有一个读者在我公众号的后台问了我如下问题. 

**问题**：给定$\triangle ABC$​及其内心$I$​，$P,Q$​分别是$BI,CI$​中点，$\odot(APQ)$​与$\odot(ABC)$​的第二交点为$N$，设$NI$与$\odot(ABC)$的第二交点为$D$. 证明：$AD$是$\triangle ABC$的陪位中线. 

这里我将给出这个问题的推广与证明.

**推广**：给定$\triangle ABC$​及$\odot(ABC)$​上不含$A$​的弧$BC$​的中点$S$​，$X$​是$AS$​上一点，$B',C'$​是$\odot(ABC)$​上两点，满足$SX=SB'=SC'$​，$P,Q$​分别是$B'X,C'X$​中点，$\odot(APQ)$​与$\odot(ABC)$​的第二交点为$N$​，设$Y$​是$X$​关于$\triangle ABC$​的等角共轭点，$NY$​与$\odot(ABC)$​的第二交点为$D$​​，设$SD$​交$BC$​于$E$​，$XE$​交$B'C'$​于$E'$​. 证明：$AE\perp AS$​​.

<img src="https://llddeddym.github.io/images/2021-12-11(1).png"/>

事实上如果取$X$为$\triangle ABC$内心，这时候推广就退化回原问题.

我们先证明两个引理.

**引理1**：对圆$c$上任一对对径点$A,A'$及平面上一点$X$，$\triangle XAA'$的垂心在$X$关于$c$的极线上.

*Proof.* 设$XA,XA'$与$c$的第二交点分别是$B,B'$，则$A'B\cap AB'$恰是$\triangle XAA'$的垂心，由Brocard定理即证此引理. $\quad\Box$

**引理2**：给定$\triangle ABC$及其内心$I$，$S$是$AI$与$\odot(ABC)$的第二交点，$P,Q$分别是$BI,CI$中点，设以$SI$为直径的圆与$\odot(ABC)$的第二交点为$U$，$SU\cap PQ=V$，则$AV=IV$.

*Proof.* 设弧$BAC$中点为$N$，$\triangle ABC$的$A-$旁心为$I_1$​，则由引理1，$\triangle NII_1$的垂心在$N$关于以$II_1$为直径的圆的极线上，事实上也就是在$BC$上，又由$NA\perp AI$知$D:=AN\cap BC$就是$\triangle NII_1$的垂心，由$S$是$II_1$中点及$SU//DI_1$知$SU\cap ID$是$ID$中点，而由$P,Q$分别是$BI,CI$中点知$PQ\cap ID$也是$ID$中点，故$V$是$ID$中点，于是由$\angle IAD=90^\circ$即知$VI=ID$. $\quad\Box$

<img src="https://llddeddym.github.io/images/2021-12-11(2).png"/>

下面让我们回到原题.

*Proof.* 由题意知$X$​​​​​是$\triangle AB'C'$​​​​​的内心，于是设$\odot(SPQ)$​​​​​与$\odot(ABC)$​​​​​的第二交点为$U$​​​​​​，由引理2便有$V:=SU\cap PQ$​​​​​​在$AX$​​​​​的中垂线上，对$\odot(APQ).\odot(SPQ),\odot(ABC)$用Monge定理即知$V\in AN$. 下面由于$X,Y$是等角共轭点，$X,Y$调和分割$\triangle ABC$的内心和$A-$旁心，于是$SX\cdot SY=SB^2$，再考虑以$S$为中心，$SB^2$为幂的反演，其将$\odot(ABC)$变为$BC$，故$D,E$也互变，故$SD\cdot SE=SB^2=SX\cdot SY$，于是$D,E,X,Y$共圆，故$\angle AXV=\angle XAV=\angle YDE=\angle YXE$，故$X,E,V$共线，于是$V$恰好是$XE'$的中点，故$AE'\perp AS$. $\quad\Box$​

<img src="https://llddeddym.github.io/images/2021-12-11(3).png"/>

聪慧的读者相信一眼就可以看出这实际上是一个截搭题，本题的后半部分可以更加一般化：

**命题**：给定$\triangle ABC$及$\odot(ABC)$上不含$A$的弧$BC$的中点$S$，$X$是$AS$上一点，设$Y$是$X$关于$\triangle ABC$​的等角共轭点，$D$是$BC$上一点，$E$是$XD$上一点且$EA=EX$，$F$是$AE$与$\odot(ABC)$的第二交点，则$FY$与$SD$的交点在$\odot(ABC)$上.

这个证明已经蕴藏在上面的证明里了，这里不再赘述.