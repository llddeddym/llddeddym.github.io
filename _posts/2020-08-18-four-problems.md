---
title: '四个小问题'
date: 2020-08-18
permalink: /posts/2020/08/2020-08-18-four-problems/
tags:
  - projective transformation
  - orthologic triangles
---

最近忙于暑期学校，一直没抽出什么时间来尝试攻克或参与攻克一些看起来困难的平面几何题，不过也做了几个小题目练手，这里码一下发上来。



第一个是武江铮聚聚问我的一个题目.

**问题1**：给定锐角$\triangle ABC$，$AB=AC$,$\angle A>60^\circ$.设$O$是其外心，$P$为$\odot(BOC)$上一点，满足$BP//AC$,$K$为$AP$上一点，满足$BC=BK$.求证：$CK$与$\odot(BOC)$第二交点在$BC$中垂线上.

**分析**：首先导一导角就立即看出原结论成立等价于$\angle BKC=\angle BAC$，也就等价于设出$\triangle ABC$垂心$H$后有$K$在$\odot(BHC)$上.而这时自然想到$\odot(BHC)$和$\odot(BOC)$是等角共轭的，又结合上$BP//AC$的条件，思路就立马清晰了.

<img src="https://llddeddym.github.io/images/2020-08-18(1).png"/>

**问题1的证明**：取$P$关于$\triangle ABC$的等角共轭点$Q$，于是简单导角得到$\angle BQC=\angle QBC=\angle A$,即$CB=CQ$,又$AQ,AP$关于$BC$中垂线对称，故$K,Q$关于$BC$中垂线对称，于是$\angle KCB=\angle BKC=\angle BQC=\angle A$,故结论成立.$\quad\Box$



第二个是云神在隔壁Clarszind的群里问的Insane百题里的一个题目.

**问题2**：$D$为$\triangle ABC$外接圆上一点，$E$在$BC$上，且$AD\perp DE$.$F$为$AD$上任意一点.$K,H$分别是$\triangle FBC$和$\triangle ABC$垂心.证明：$KH\perp EF$.

**分析**：我以前碰过一个小结论，那就是$F\mapsto K$是一个射影变换，这时此问题就成了不言自明的了.但为读者看的明白起见，还是完整写一遍证明.

<img src="https://llddeddym.github.io/images/2020-08-18(2).png"/>

**问题2的证明**：任取$AD$上四点$F_1,F_2,F_3,F_4$,其对应垂心分别为$K_1,K_2,K_3,K_4$,则$B(F_1F_2,F_3F_4)=C(K_1K_2,K_3K_4)$,同理其也等于$B(K_1K_2,K_3K_4)$,所以$K$在一个过$B,C,H$的圆锥曲线上且$H(K_1K_2,K_3K_4)=E(F_1F_2,F_3F_4)$,故只要判定三个特例即可，取$K$为$B,C$和$F$为$D$的情况都是显然的(注意$F$为$D$时$HK//AD$).$\quad\Box$



第三个问题是QQ群友“网络”发现的一个命题.

**问题3**：设$\triangle ABC$的Euler线上无穷远点的等角共轭点为$D$,则$\triangle ABC$,$\triangle BCD$,$\triangle CAD$,$\triangle ABD$各自的垂心与各自的垂三角形的垂心的连线四线平行.

**分析**：第一眼看过去就想到了之前那个三平行线引理（[一个重要引理及其应用](https://llddeddym.github.io/posts/2020/07/2020-07-13-lemma/)中的**引理1**，下面都称为三平行线引理），而且注意到这四个三角形是共Jerabek双曲线的，所以感觉上就可以推广，我们来证明这个推广，不过推广之后还无法直接推回原问题，我们在后面补齐.

**问题3的推广**：给定$\triangle ABC$及其外心$O$,垂心$H$,Euler线上无穷远点的等角
共轭点$D$，$X$是其Jerabek双曲线上一点，$H_A$是$\triangle BCD$垂心，$U$,$V$分别是$H_A$在$DC$,$DB$上的投影.做一点$Y$使得$UY//BX$，$VY//CX$.则$OX//H_AY$.

<img src="https://llddeddym.github.io/images/2020-08-18(3).png"/>

**问题3的推广的证明**：注意到$\triangle BOC$和$\triangle UH_AV$有一个正交中心$D$，故满足存在点$Y$使得$UY//BX$，$VY//CX$，$OX//H_AY$的点$X$的轨迹为过$BOCD$的等轴双曲线，这恰为Jerabek双曲线.

**问题3的证明**：沿用**推广**中的记号，令$X$趋近于$O$，此时$OX$为Jerabek双曲线在$O$处切线，这恰为$O$和切线三角形垂心连线(二者的Ceva point为$H$，参见[从特例定一般–对潘成华老师一题的推广](https://llddeddym.github.io/posts/2020/03/2020-03-12-generalization-Chenghua-Pan/)的**引理3**)，又由切线三角形和垂三角形位似立得其与H和垂三角形垂心连线平行，故立得$\triangle BCD$,$\triangle CAD$,$\triangle ABD$各自的垂心与各自的垂三角形的垂心的连线四线平行.



最后一个是AoPS网友“Astral7”的一个问题.

**问题4**：令$H,Na$分别是$\triangle ABC$的垂心和Nagel点.设$\angle BHC$, $\angle CHA$, $\angle AHB$的内角平分线分别与$BC$, $CA$, $AB$交于$A'$, $B'$, $C'$. 证明$AA'$, $BB'$, $CC'$, $HN_a$共点.

同样用之前的三平行线引理，我们来证明一个推广命题.

**问题4的推广**：给定$\triangle ABC$和一点$P$.$P$关于$\triangle ABC$的Ceva三角形是$\triangle P_1P_2P_3$.如果两有限点$Q,R$满足$AQ//P_1R$, $BQ//P_2R$, $CQ//P_3R$. 则$Q$的反补点在$PR$上.

**问题4的推广的证明**：记$\cdot$的反补点,补点，等截共轭点为$a\cdot,c\cdot,t\cdot$.设$Q,R$的轨迹分别为圆锥曲线$\mathcal{C}_ 1,\mathcal{C}_ 2$.由平行知由$aQ\mapsto R$定义的$a\mathcal{C}_ 1\to\mathcal{C}_ 2$的映射是射影变换. 我们知道$\mathcal{C}_ 1$就是$PtP$的等截共轭像, 经过$P,tP,cP,ctP$的$\triangle ABC$的外接圆锥曲线. 所以$P\in a\mathcal{C}_ 1\cap\mathcal{C}_ 2$. 于是我们只需要验证在三种特例中$P,aQ,R$共线即可.$Q=R=P$时, 只需要证明$PaP$和$\mathcal{C}_ 2$相切,而这在[一个重要引理及其应用](https://llddeddym.github.io/posts/2020/07/2020-07-13-lemma/)的**引理8**中已经得到了证明；当$Q=ctP$时，只需要证明$ctP$关于$\triangle P_1P_2P_3$的反补点在$PtP$上，而这直接由[一个重要引理及其应用](https://llddeddym.github.io/posts/2020/07/2020-07-13-lemma/)中的**引理6**推出；当$Q=tP$时，由$aAP_1//AtP$立得$aQ=R$.这就完成了证明.$\quad\Box$

**注**：TelvCohl聚聚用了仿射变换将$Q$映为垂心来简化问题，但一个问题在于仿射变换保单比，所以保证图形的凸性，故满足把$Q$映为垂心的仿射变换是不一定存在的.