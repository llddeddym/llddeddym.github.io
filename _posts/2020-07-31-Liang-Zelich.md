---
title: 'Liang--Zelich定理及其应用简介（附对纯几何吧344推广的证明）'
date: 2020-07-31
permalink: /posts/2020/07/2020-07-31-Liang-Zelich/
tags:
  - Liang--Zelich theorem
  - Euler line
  - isogonal pivotal cubic
---

本文主要目的是为了介绍**Xuming Liang**和**Ivan Zelich**在https://ijgeometry.com/wp-content/uploads/2015/10/1.pdf这篇文章中得到的一些结果（并不会介绍证明，感兴趣的读者可以自己点进链接去看），并简要介绍一些这些结果的应用。

****
**Liang-Zelich定理**将一些对Neuberg曲线(一点与其等角共轭点的连线平行于Euler线上的点的轨迹)的结果完全地推广到了以Euler线上点为枢点的主等角共轭三次曲线(一点与其等角共轭点的连线恒过Euler线上一定点的点的轨迹)上，主要是以下三个结果：

**Liang-Zelich第一定理**：给定$\triangle ABC$和点$P$，若$P$在$\triangle ABC$的一个以Euler线上为枢点的主等角共轭三次曲线上，则它也在其垂足三角形的相同曲线上.换言之，设$\triangle ABC$和$P$的垂足三角形$\triangle P_aP_bP_c$的外心、垂心分别为$O,H$和$O_P,H_P$,$P$关于$\triangle ABC$和$\triangle P_aP_bP_c$的等角共轭点分别为$gP,Q$,则$PgP$分$OH$的比例和$PQ$分$O_PH_P$的比例相等.

这里的“相等”就好比方说，一个点在原三角形的Neuberg曲线上，则也在其垂足三角形的Neuberg曲线上，这个结果毫无疑问是极度优美的.
****
下面定义$P$和其等角共轭点$gP$，设$PgP\cap OH=T_P,t_P:=\dfrac{\overline{T_PO}}{\overline{T_PH}}$.($P$在Neuberg曲线上时$t_P$=1)

**Liang-Zelich第二定理**：将$\triangle BCP$,$\triangle CAP$,$\triangle ABP$的外心组成的三角形($P$的Carnot三角形)和$P$关于$BC,CA,AB$的对称点组成的三角形($P$的反射三角形)分别关于$P$做比为$\dfrac{1}{t}$和$t$的位似，则得到的两个新三角形与$\triangle ABC$透视均当且仅当$t=t_P$.

举两个特例，第一个是$t_P=\dfrac{1}{2}$的情形，这时$PgP$连线过垂心的反补点$X_{20}$($P$在Darboux曲线上),这直接推出$P$的垂足三角形与原三角形透视；另一个特例是$t_P=1$，这时$P$在Neuberg曲线上，也即$P$的反射三角形和Carnot三角形均与原三角形透视.
****
下面定义一个神妙记号，定义$\triangle ABC$的$(t,P)$-Euler线是经过$\triangle ABC$的外心在关于$P$做比为$t$的位似下的像以及$\triangle ABC$的垂心的直线.

**Liang-Zelich第三定理**：$\triangle BCP$,$\triangle CAP$,$\triangle ABP$的$(t,P)$-Euler线交于$\triangle ABC$的$(t,P)$-Euler线上一点当且仅当$t=t_P$.

$t_P=1$时就是Neuberg曲线上熟知的四Euler线共点.
****
下面这个定理也来自于这篇论文，据闻可以推出**Liang-Zelich第三定理**，所以我们姑且向前撤退，直接承认它而不做证明.

**定理1**：给定两正交且透视三角形$\triangle ABC$和$\triangle DEF$，两三角形垂心为$H,H'$，两正交中心为$P,P'(AP\bot EF,DP'\bot BC)$，$\triangle BCP$,$\triangle CAP$,$\triangle ABP$的垂心分别为$H_A,H_B,H_C$，则$\triangle H_AH_BH_C$和$\triangle DEF$也正交且透视，且正交中心为$HP'\cap H'P$，在过$DEFH'P'$五点的锥线上.
****
下为方便叙述，引入Cundy-Parry变换.记外心$X_3$,垂心$X_4$,则定义$\Phi(P)=X_3P\cap X_4gP$,$\Psi(P)=X_4P\cap X_3gP$,回忆所谓“完全四边形等角线”,显然有$\Phi(P)=g\Psi(P),\Phi(\Phi(P))=\Psi(\Psi(P))=P$.下面这个定理刻画了**Liang-Zelich第二定理**中的一个透视中心.

**定理2**：与$P$的Carnot三角形关于$P$位似且与$\triangle ABC$透视的三角形与$\triangle ABC$的透视中心为$\Phi(P)$.

<img src="https://llddeddym.github.io/images/2020-07-31(1).png"/>

**定理2的证明**：首先由位似知这两三角形正交，且正交中心分别是$P$和$X_3P$上一点，所以由Sondat定理（两正交且透视三角形的两正交中心与透视中心共线），透视中心在$X_3P$上；另一方面，由[一个重要引理及其应用](https://llddeddym.github.io/posts/2020/07/2020-07-13-lemma/)中的**引理1**，透视中心在过$ABCX_4P$五点的圆锥曲线上(等角共轭点在$X_3gP$上)，于是这点恰为$\Phi(P)$.

****
**例1**：内心$I$的Ceva三角形$\triangle DEF$的九点圆心$N$在内心$I$和外心$O$的连线上.

<img src="https://llddeddym.github.io/images/2020-07-31(2).png"/>

**例1的证明**：设$\triangle I_AI_BI_C$是旁心三角形，熟知$I_AO\bot EF$，令$\triangle D'E'F'$为$O$关于$I_AI_BI_C$的反垂足三角形，$N'$是其九点圆心.令$O'$是$O$关于$\triangle D'E'F'$的等角共轭点，由$\triangle I_AI_BI_C$的外心$Be\in OI$知$O'\in OI$. 又$D'O'\bot I_BI_C$,故$D'O'//AI_A$，于是$\triangle D'E'F'$和$\triangle DEF$的位似中心在$OI$上. 对$\triangle I_AI_BI_C$和$\triangle D'E'F'$用**Liang-Zelich第一定理**由$O$是$\triangle I_AI_BI_C$的九点圆心知$N'\in OO'$，故由位似知$N\in OI$.
****
**例2**：对McCay曲线上一点$P(t_P=0)$，$P$的Ceva三角形和圆Ceva三角形位似，$\measuredangle PAB+\measuredangle PBC+\measuredangle PCA=\dfrac{\pi}{2}$.

**例2的证明**：设$\triangle BPC$的外心为$O_1$，则由**Liang-Zelich第二定理**和**定理2**知$AgP//PO_1$，剩下的工作就是简单的导角了.
****
**例3**：对Thomson曲线上一点$P(t_P=-\dfrac{1}{2})$，$P$的三线性极线与外心$O$和$P$的连线垂直.

先证明一个引理.

**引理1**：设$P,Q$是一对等角共轭点，则$P$的三线性极线与$Q$及其垂足三角形$\triangle Q_aQ_bQ_c$的重心$G_Q$连线垂直.

**引理1的证明**：令$\overline{XYZ}$为$P$的三线性极线.$\triangle A'B'C'$为$G_Q$关于$\triangle Q_aQ_bQ_c$的圆Ceva三角形，考虑将线束$P(AX,BC)$在$Q_a$处做垂直线束，结合$Q_aG_Q$平分$Q_bQ_c$，$AP\bot Q_bQ_c$知$PX\bot Q_aG_Q$.由$PQ$中点在$A'Q_a$中垂线上得$X$恰为$Q$在$\odot(A'QQ_a)$上的对径点，于是由$\odot(A'QQ_a)$,$\odot(B'QQ_b)$,$\odot(C'QQ_c)$共根轴$QG_Q$知结论成立.

<img src="https://llddeddym.github.io/images/2020-07-31(3).png"/>

**例3的证明**：设$P$的等角共轭点为$Q$,其垂足三角形为$\triangle Q_aQ_bQ_c$，其重心为$G_Q$，则由**Liang-Zelich第一定理**，$Q$关于$\triangle Q_aQ_bQ_c$的等角共轭点$Q'$满足$QQ'\in G_Q$.注意到$P$的Carnot三角形$\cup P\cup O\sim\triangle Q_aQ_bQ_c\cup Q'\cup Q$，于是$OP//QQ'$，由**引理1**即得结论成立.

<img src="https://llddeddym.github.io/images/2020-07-31(4).png"/>

****

下面这个例子是[纯几何吧344](https://tieba.baidu.com/p/4448643268)，T神的一个作品，这里先放我对推广的照葫芦画瓢式证明，在下篇文章里会放上qzc聚聚的做法，并且讲一下这个题和我之前猜测的一个问题的等价性以及另外的一些内容的关系.

**例4**：给定$\triangle ABC$及垂心$H$、外心$O$，$P$满足$t_P=-1$(在Napoleon-Feuerbach曲线上)，其垂足三角形为$\triangle DEF$,则$\triangle AEF$,$\triangle BFD$,$\triangle CDE$的Euler线共点于$P\Psi(P)$的中点.

我们来证明AoPS网友“SalaF”给出的推广.

**例4的推广**：给定$\triangle ABC$及垂心$H$、外心$O$，任取一点$P$， 其反射三角形为$\triangle P_AP_BP_C$，$\triangle P_A'P_B'P_C'$ 是其在关于 $P$做比为 $\dfrac{t_P}{2t_P+1}$的位似变换下的像. 则$P$关于其垂足三角形$\triangle DEF$的Carnot三角形$\triangle O_aO_bO_c$和$\triangle P_A'P_B'P_C'$的中点三角形透视，且透视中心为$P\Psi(P)$的中点.

$t_P=-1$时就得到了**例4**.

**例4的推广的证明**：先证明三Euler线共于$HP$上一点.令$H_d,$ $ H_e, $ $ H_f $ 为$ \triangle PEF,$ $ \triangle PFD, $ $\triangle PDE $的垂心.$\triangle  O_AO_BO_C$是$\triangle O_aO_bO_c$关于$P$做比为$\dfrac{1}{t_P}$的位似下的像.由 **Liang-Zelich第一定理**和**Liang-Zelich第二定理**， $\triangle DEF$和 $\triangle O_AO_BO_C$透视且正交. 注意到$\triangle O_AO_BO_C$的垂心就是$H$关于$P$做$\dfrac{1}{2t_P}$为比的位似变换下的像，显然在$PH$上，于是由**定理1**知$ PH, $ $ O_AH_d, $ $ O_BH_e, $ $ O_CH_f $ 共点于$HP$上一点 $ S $. 下设$P_B'P_C'$中点为$M_A$.欲要证明$M_AO_a//O_AH_d$，只需证明如下引理.

**引理2**：给定$\triangle ABC$，$D$是$AB$上一点，$E$是$AD$中点，$F$是$AC$中点，做$EG//BC$交$DF$于$G$，设$t:=\dfrac{\overline{DE}}{\overline{DB}}$，则$\dfrac{\overline{DG}}{\overline{DF}}=\dfrac{2t}{2t+1}$.

这个引理的证明是简单的，留给读者.注意到$P_BP_C$中点是$\triangle AEF$垂心，且其与$P$中点为$EF$中点，据此便可得到$M_AO_a//O_AH_d$.故由位似轮换即得题中透视中心$HP$上一点$T$.

<img src="https://llddeddym.github.io/images/2020-07-31(5).png"/>

下面证明$T$是$P\Phi(P)$中点.记$Q:=gP$，**定理1**告诉我们$ \triangle O_AO_BO_C$和$ \triangle H_dH_eH_f $正交且透视，设$P$关于$T$的对称点为$R$，结合$ \triangle O_AO_BO_C$和$\triangle ABC$位似，$AR//H_dS$等等，由[一个重要引理及其应用](https://llddeddym.github.io/posts/2020/07/2020-07-13-lemma/)中的**引理1**有$ Q, $ $ R $在$ \triangle ABC $的同一外接等轴双曲线上，故由完全四边形等角线知$R\equiv\Psi(P)$.