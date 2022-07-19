---
title: '谈谈正对应极点和纯几何吧609'
date: 2020-08-07
permalink: /posts/2020/08/2020-08-07-orthocorrespondence/
tags:
  - orthocorrespondence
  - orthopivotal cubic
---

今天来介绍一下所谓正对应极点（orthocorrespondent）的概念，这个概念十分升级以至于我到现在没太搞明白具体咋用，不过因为它和纯几何吧344和609都有联系，所以还是尝试着写一下，本文的最终目的是为了证明344的一个等价命题并证明609.主要证明来自于qzc和djc还有豪神这几位聚聚，笔者仅起到猜出那个命题和整理的作用.

首先先定义所谓“正交截线”（也有作“正横截线”的）.

**定义1**：给定$\triangle ABC$和一点$P$，过$P$做$AP,BP,CP$的垂线分别交$BC,CA,AB$于三点，则这三点共线，所共直线为$P$关于$\triangle ABC$的正交截线.

据陶平生老爷子的一篇命题小品《推心置腹》所言，“正交截线”的存在性被放到过两次南昌市高中数学竞赛之中（不过一次在三角形内部一次在三角形外部，怹称此过程就为“推心置腹”），这个东西其实比较平凡，所以我们不做证明.

**定义2**：$P$关于$\triangle ABC$的正对应极点$oc(P)$（或记为$P^\bot$）为$P$的正交截线的三线性极点.

这套概念大体上来看是二对一的，也就是一般来说存在不同两点$P,Q$,使得$P^\bot=Q^\bot$，也就是对一条截线$\overline{DEF}$，以$AD,BE,CF$为直径的圆共轴，所共两点的正交截线都是这条截线，正对应极点都是这条截线的三线性极点.

类似于主等角共轭三次曲线的概念，我们可以定义所谓“orthopivotal cubic”的概念.

**定义3**：给定一点$P$，满足$P,X,X^\bot$共线的点$X$的轨迹$O(X)$记为$P$的orthopivotal cubic.

一个自然的问题是如何作出这个轨迹，这可以参考https://bernard-gibert.pagesperso-orange.fr/gloss/orthopivotalcubi.html中的介绍，需要用到“定直线上点的两个逆正对应极点是在一个定圆上”.

另一个问题是$X^\bot$就很复杂了，怎么确定$XX^\bot$过定点呢？好在我们有数个判定定理，不过此处我们只需要其中一个.（其余的判定定理和更多的有关正对应极点的知识可以参考Bernard Gibert的这篇论文http://forumgeom.fau.edu/FG2003volume3/FG200301.pdf，事实上著名词典《三线坐标与三角形特征点》对于正对应极点的介绍就是翻译于此）

**定理1**：$PP^\bot$平行于$P$的等角共轭点$Q$的垂足三角形的Euler线.

<img src="https://llddeddym.github.io/images/2020-08-07(1).png"/>

**定理1的证明**：记$T:=P^\bot$.$\cdot^* $为$\cdot$在以$P$为中心并保证$\odot(ABC)$不变的反演变换下的像.则$\triangle A^* B^* C^* $是$P$的圆Ceva三角形.设$P$的正交截线为$\overline{DEF}$, $P$关于$\triangle A^* B^* C^* $的反垂足三角形为$\triangle P_aP_bP_c$，其垂心为$H'$ , $T$的Ceva三角形为$\triangle T_aT_bT_c$.则显然有$D^* $为$P$在$P_aH'$上的投影.于是$P_a(T_a^* D^* ,B^* C^* )=P(T^aD,BC)=-1$.故$P_aT_a^* $与$P_bP_c$及$\triangle P_aP_bP_c$的极轴$\tau$（垂心的三线性极线，也是外接圆和九点圆的根轴）交于一点$H_X$.考虑$P$在$\tau$上的投影，由其在以$PH_X$上的圆上立得其反演像在$AT_a$上，轮换即得其就是$T^* $,故$PT\bot\tau$，平行于$\triangle P_aP_bP_c$的Euler线，由位似即得结论成立.$\quad\Box$

这为我们判定一点$X$是否在$O(P)$上给了一个很好的判定方法，注意到一点的垂足三角形的外心恰好是其与等角共轭点连线的中点，所以只需要证明$X$的等角共轭点的反射三角形（关于三边对称点组成的三角形）的Euler线过$P$即可.

下面是我所提出的一个命题，后来被豪神一个引理证明确实跟344是等价的（引理会在本文最后提一嘴）.首先回忆[上篇文章]中提过的Napoleon-Feuerbach cubic和Cundy-Parry变换的定义.

**定理2**：对于Napoleon-Feuerbach cubic上一点$P$，$\Phi(P)\in O(P)$,且$O(P)$在$A,B,C$三点处的切线交于$\Phi(P)$.

<img src="https://llddeddym.github.io/images/2020-08-07(2).png"/>

为了证明**定理2**，先证明几个引理.

**引理1**：给定$\triangle ABC$及其外心$O$，$P$的等角共轭点为$Q$，$Q$关于其垂足三角形$\triangle Q_aQ_bQ_c$的等角共轭点为$R$，则$QR//OP$.

<img src="https://llddeddym.github.io/images/2020-08-07(3).png"/>

**引理1的证明**：考虑$R$关于$\triangle Q_aQ_bQ_c$的垂足三角形$\triangle R_1R_2R_3$以及其外心$M$，显然$M$为$QR$中点.容易看出$\triangle ABC\cup P\cup O$与$\triangle R_1R_2R_3\cup R\cup M$位似，于是结论自然成立. $\quad\Box$

**引理2**：给定$\triangle ABC$及其外心$O$，设$Q$为$P$的等角共轭点，$O_Q$是$\triangle QBC$的外心. 则$\dfrac{OO_Q}{AO}=\dfrac{AQ}{AP}$.

**引理2的证明**：考虑在$\triangle BOO_Q$中用正弦定理，剩下的不过是虚张声势的三角计算，留给读者. $\quad\Box$

**引理3**：给定$\triangle ABC$及其外心$O$，设$Q$为$P$的等角共轭点，$O_Q$是$\triangle QBC$的外心. $M$是$AQ$上一点且$O_QM//AP$. 则$OM//PQ$.

<img src="https://llddeddym.github.io/images/2020-08-07(4).png"/>

**引理3的证明**：考虑平行四边形$AOO_QS$，$T$是$OM$和$AP$的交点.于是$\measuredangle MAO=\measuredangle SAP=\measuredangle OO_QM$，由完全四边形等角线知$\measuredangle AMS=\measuredangle OMO_Q=\measuredangle OTA$. 所以由$\triangle AOT\sim\triangle ASM$和**引理2**得$\dfrac{AM}{AT}=\dfrac{AS}{AO}=\dfrac{OO_Q}{AO}=\dfrac{AQ}{AP}$，这就得到了$OM//PQ$. $\quad\Box$

**定理2的证明**：设出外心$O$,垂心$H$. 容易看出$\Phi(P)$和$\Psi(P)$均在$\triangle ABC$的Neuberg曲线上（考虑完全四边形等角线及其调和性质，注意到九点圆心为$OH$中点即可），故由**Liang-Zelich第一定理**，$\Psi(P)$在其反射三角形的Neuberg曲线上，于是设$\Psi(P)$关于其反射三角形的等角共轭点为$U$，则由**引理1**，$\Psi(P)U//O\Phi(P)$，且二者均平行于$\Psi(P)$的反射三角形的Euler线，注意到$\Phi(P)$是其外心，所以Euler线恰好就是$O\Phi(P)$，当然过$P$，所以$\Phi(P)\in O(P)$.

<img src="https://llddeddym.github.io/images/2020-08-07(5).png"/>

下面对于$O(P)$上逼近$A$的一点，要证$A\Phi(P)$与$O(P)$相切，只要证明其等角共轭点趋于$R:=A\Psi(P)\cap BC$. 所以只需要证$R$的反射三角形的Euler线过$P$，注意到$A$恰好是这个三角形的外心，所以只需要证$AP$为其Euler线，下面考虑 [Liang-Zelich定理及其应用简介](https://llddeddym.github.io/posts/2020/07/2020-07-31-Liang-Zelich/) 中的**定理2**，问题转化为证明$\triangle B\Phi(P)C$的外心$O_1$在$R$的反射三角形的Euler线上. 设$A\Phi(P)\cap OH=M$. 令$AMO_1D$是一个平行四边形,由**引理3**得$AR//MO_1$（$\Phi(P)\Psi(P)//OH$），于是$D\in AR$. 设$E$和$F$是$D$关于$AC$, $AB$的对称点，于是$EF\bot O_1D$. 而由$\measuredangle DAO=\measuredangle HAM=\measuredangle OO_1D$再次用平行四边形等角线得$\measuredangle AOD=\measuredangle MOO_1=\measuredangle MHA$. 故$\triangle AOD \sim\triangle AHM$. 于是$\dfrac{DO_1}{AD}=\dfrac{AM}{AD}=\dfrac{AH}{AO}=2\cos\angle EDF$. 故$DO_1EF$是一个垂心组.由位似即可得$R$的反射三角形的垂心在$AO_1上$，这就完成了证明. $\quad\Box$

下面来看[纯几何吧609](https://tieba.baidu.com/p/4889145061)，又是T神的一个作品.

**问题**：给定三角形$\triangle ABC$与一点$P$. $K$为$\triangle ABC$的九点圆心关于$\triangle ABC$的等角共轭点. 则$P$的垂足三角形的Euler线平分$PK$当且仅当$P$在$\triangle ABC$的垂三角形$\triangle DEF$的Neuberg曲线上.

**问题的证明**：令$\mathcal{C}_ 1$是$K$关于$\triangle ABC$的 orthopivotal cubic，$\mathcal{C}_ 2$是$\triangle DEF$的Neuberg曲线.注意到它们均过两个圆环点（射影几何中的概念，所有圆都过无穷远线上两点，记为两圆环点），所以由**定理2**和$K \in \mathcal{C}_ 1$可得$A,B,C,D,E,F,H$，九点圆心还有两圆环点都在$\mathcal{C}_ 1$的等角共轭像上，且显然这些点也都在$\mathcal{C}_ 2$上，两条不一样的三次曲线当然不可能有超过九个交点，于是$\mathcal{C}_ 2$正是$\mathcal{C}_ 1$的等角共轭像. 下设$Q$是$P$的等角共轭点，则由**定理1**，$QT$平行于$P$的垂足三角形的Euler线$ \tau$. 注意到$\tau$平分$PQ$，所以$\tau$平分$PK$当且仅当$Q,Q^\bot,K$共线，当且仅当$Q\in\mathcal{C}_ 1$，当且仅当$P\in\mathcal{C}_ 2$. $\quad\Box$

qzc聚聚在https://tieba.baidu.com/p/6775205394中给出了一个推广，推广如下：

**推广**：$D,E,F$在$\triangle ABC$的三边上，$M$是任意一点. $T,T_1,T_2,T_3$是$M,A,B,C$关于$\triangle DEF$的orthocorrespondent，且$MT,AT_1,BT_2,CT_3$共点$U$，$P$是$U$关于$\triangle ABC$的等角共轭点，$\triangle XYZ$是$M$关于$\triangle ABC$的垂足三角形. 证明：$\triangle XYZ$的Euler线平分$MP$.

这个推广我没有证明出来，不过照葫芦画瓢，可以看到关键点是这样一个结果：给定$\triangle ABC$和一对等角共轭点$P,Q$，令$\mathcal{C}$是$P$关于$\triangle ABC$的orthopivotal cubic的等角共轭像，$\mathcal{C}$和$\triangle ABC$三边的第三交点分别是$D,E,F$，则$\mathcal{C}$是$Q$关于$\triangle DEF$的orthopivotal cubic. 不过我们考虑再稍微固定一下点$P$，对Napoleon-Feuerbach曲线上一点$P$，由**定理2**可以看出$\triangle DEF$就是$\Psi(P)$的Ceva三角形，这时就可以直接使用原本的方法证明了，因为**定理2**直接为我们找到了四个所需要的点.