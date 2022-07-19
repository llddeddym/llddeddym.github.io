---
title: '三角形外接等轴双曲线的切线三角形的垂心'
date: 2020-08-24
permalink: /posts/2020/08/2020-08-24-rectangular-circum-hyperbola-tangentian-triangle-orthocenter/
tags:
  - rectangular hyperbola
  - cross-ratio
---

### 1.问题来源

在qzc聚聚所编写的[3684 Kiepert双曲线专题](https://tieba.baidu.com/p/6501803387)中,如下定理被作为了第一节的练习题.

**定理1.1**：设$ \triangle ABC $的Kiepert双曲线在$A,B,C$点处的切线围成$\triangle A_1A_2A_3$,则九点圆心$X_5$是$\triangle A_1A_2A_3$的垂心.

笔者尝试将此定理推广,发现了如下定理,但qzc对**定理1.1**的证明并不能直接套用,于是本文给出了一个新的证明方法.

**定理1.2**：设$\triangle ABC$的一条外接等轴双曲线为$\mathcal{H}$,则其在$A,B,C$点处的切线围成三角形的垂心是$\mathcal{H}$的等角共轭像关于$\mathcal{H}$的极点.

### 2.基本事实

如下事实是熟知的,在此不作证明.

**定理2.1**：任意一条直线的等角共轭像为原三角形的一条外接锥线.

**定理2.2**：三角形的外接圆锥曲线是等轴双曲线等价于其经过垂心.

**推论2.1**：过外心的直线的等角共轭像是外接等轴双曲线.

这说明**定理1.2**的陈述确实是合理的.

**推论2.1**：经过四等心(即三旁心和内心)的圆锥曲线是等轴双曲线.

**定理2.3**：对任意两点,存在一条圆锥曲线同时经过这两点以及二者各自反Ceva三角形的所有顶点.

这通常被称作两点的双反Ceva锥线.

### 3.主要引理及推广的证明

**引理3.1**：设$P$关于$\triangle ABC$的Ceva三角形为$\triangle P_1P_2P_3$,则对任意一点$X$,它关于过$P$的$\triangle ABC$的外接等轴双曲线$\mathcal{H}_P$的极线经过其关于$\triangle P_1P_2P_3$的等角共轭点$Y$.

*Proof.* $\triangle P_1P_2P_3$的内心$I$和三旁心$I_1,I_2,I_3$.由推论2.2知,$P$和$I$关于$\triangle P_1P_2P_3$的双反Ceva锥线是过$P$的$\triangle ABC$的外接等轴双曲线,也即恰为$\mathcal{H}_P$.由$X,Y$关于$\triangle P_1P_2P_3$等角共轭知$P_1(II_2,XY)=-1$,故$II_1$ 和$I_2I_3$调和分割$XY$,由轮换对称性,另外两侧也是如此.故四点形$II_1I_2I_3$的任意一组对边调和分割$XY$,故由Desargues对合定理,$\mathcal{H}_P$也与调和分割$XY$,故$X$的极线经过$Y$.$\quad\Box$

**推论3.1**：对$\triangle ABC$的垂心$H$和垂三角形$\triangle DEF$,任意一点$X$关于任意一条$\triangle ABC$的外接等轴双曲线$\mathcal{H}$的极线经过$X$关于$\triangle DEF$的等角共轭点$Y$.

**引理3.2**：对$\triangle ABC$的外接等轴双曲线$\mathcal{H}$,设其等角共轭像为$l$,则$l$与$BC$交点与$A$的连线关于$\angle BAC$的等角线即为$\mathcal{H}$在$A$处的切线.

*Proof.* 考虑$\mathcal{H}$上一点$A_1$及其等角共轭点$A_1 ^ * $,则$AA_1$和$AA_1^ * $是$\angle BAC$的等角线, 于是$A_1\to A$时,前者就是$\mathcal{H}$在$A$处的切线,后者则由$A_1^ * \to l\cap BC$得到结论成立.$\quad\Box$

**引理3.3**：$\triangle ABC$垂心为$H$,$BE,CF$为两高,$D$在$BC$上,$P$在$EF$上,且$AD,AP$是$\angle BAC$的等角线,$(PQ,EF)=-1$,则$DP\bot AQ$.

<img src="https://llddeddym.github.io/images/2020-08-24(1).png"/>

*Proof.* 设$D$在$AB,AC$上的投影分别为$V,W$,$VW$交$AQ$于$U$,则$\dfrac{FV}{VB}=\dfrac{CD}{DB}=\dfrac{FP}{PE}$,故$PV\bot AC$,同理$PW\bot AB$,也即$P$ 是$\triangle AVW$的垂心,且$DP$中点$M$也为$VW$中点.下设$AP\cap VW=N$,则$NP\cdot NA=NV\cdot NW=NU\cdot NM$(这是$(UN,VW)=-1$保证的).故$P$也为$\triangle AUM$垂心,故$MP\bot AU$,也即结论成立.$\quad\Box$

**定理3.1**：设$\triangle ABC$的一条外接等轴双曲线为$\mathcal{H}$,则其在$A,B,C$点处的切线围成三角形的垂心是$\mathcal{H}$的等角共轭像关于$\mathcal{H}$的极点.

*Proof.* 设$\triangle ABC$的垂心为$H\in\mathcal{H}$,垂三角形为$\triangle DEF$,三切线围成的三角形为$\triangle A_1A_2A_3$,则由$EF$ 和$BC$ 调和分割$AH$知$BC$的极点$A_1\in EF$.记$\mathcal{H}$ 的等角共轭像与$BC$ 中点为$U$, 于是$A_1$和$OU$极点的连线恰为$U$的极线,于是由引理3.2,只需证明$U$ 的极线垂直于$AU$ 关于$\angle BAC$的等角线.由推论3.1,$U$的极线与$BC$的交点恰为$U$ 关于$\triangle DEF$的等角共轭点$V$,结合$B,C$是$\triangle DEF$的两个旁心立得$(UV,BC)=-1$, 下面考虑到$D(AC,A_2A_3)=-1$,故$A_2A_3$被$A$和$A_2A_3\cap BC$ 调和分割,配极即得$A(BC,A_1A_3)=-1$,故由引理3.3得$A_1V\bot A_2A_3$,轮换即得结论成立.$\quad\Box$

<img src="https://llddeddym.github.io/images/2020-08-24(2).png"/>

