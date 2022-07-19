---
title: '一个角度小题的来龙去脉'
date: 2020-12-23
permalink: /posts/2020/12/2020-12-23-a-problem-about-angle/
tags:
  - QL-Cu1
  - cross-ratio
---

前阵子河北衡水的刘通老师在微信上问了我一个题：

**题目**：给定$\triangle ABC$和其外心$O$，内心$I$，$I$在$BC$上的投影为$D$，$OI$与$\odot(BOC)$的第二交点为$E$，证明$OI$平分$\angle AED$.

<img src="https://llddeddym.github.io/images/2020-12-23(1).png"/>

这题的证明并不困难，不过要用到之前姚佳斌老师在2019.03.10发在我们爱几何上的一个小题，这里直接把当时萝卜神给的优美证明融入其中。

*Proof.* 设$A$关于$OI$的对称点为$A'$，$OI$交$BC$于$F$，$AF$与$\odot(ABC)$的第二交点为$X$，$I$关于$\triangle ABC$的圆Ceva三角形为$\triangle UVW$，$A'I$与$\odot(ABC)$的第二交点为$Y$，则$X(BC,DF)=U(WV,UY)=A(CB,AA')=X(BC,A'A)$，故$A',D,X$共线，于是其也过$F$关于$\odot(ABC)$的反演点，这正是$E$，于是由对称即得$OI$平分$\angle AED$.$\quad\Box$

不过一开始我并不是这么想的，我注意到了以下事实：**该题正是要证明$E$在四边形$ABDC$的巨龙曲线上**，但$ABDC$显然有内切圆，故退化为了斜环索线，于是再由，并注意到$ABDC$的Miquel点就是$\triangle ABC$的$A-$伪内切圆切点，Newton线为$BC$中点和内心连线，就得到下面这个小题：

**改编**：$\triangle ABC$中，$O$是外心，$I$是内心，$N$是弧$BAC$中点，$M$是$BC$中点，$D$是$IO$与$\odot(BOC)$的第二交点，$T$是$NI$与$\odot(ABC)$第二交点.证明：$\angle MIO=\angle IDT$.

<img src="https://llddeddym.github.io/images/2020-12-23(2).png"/>

但事实上再回忆$D$的反演点正是$OI$和$BC$的交点，我们就得到了简洁一点的版本：

**改编（优化版）**：给定$\triangle ABC$及其外心$O$，内心$I$，$BC$中点$M$，弧$BAC$中点$N$，$NI$与$\odot(ABC)$的第二交点为$T$，$D$为$OI$与$BC$交点.证明：$\angle MID=\angle DTO$.

<img src="https://llddeddym.github.io/images/2020-12-23(3).png"/>

后来我把这个题发到了几个群和贴吧里，得到了很多老师和同学的不同解答，具体可以参见：[纯几何吧4861](https://tieba.baidu.com/p/7137767633)，这里不再赘述。