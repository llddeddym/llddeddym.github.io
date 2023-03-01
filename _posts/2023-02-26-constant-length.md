---
title: '一个线段长定值问题'
date: 2023-02-26
permalink: /posts/2023/02/2023-02-26-constant-length/
tags:
  - Miquel point
  - isogonal center
---

前阵子武江铮问了我这么一个比较酷炫的问题.

**问题**：$\triangle ABC$中，$BC,CA,AB$上分别有点$D,E,F$且$AD,BE,CF$相互平行，$AD$再次交$\odot(ABC)$于$J$，$JL$垂直$BC$再次交$\odot(ABC)$于$L$，$\odot(CDE)$再次交$\odot(BDF)$于$K$. 证明：当$D,E,F$运动时$LK$是定长.

<img src="https://llddeddym.github.io/images/2023-02-27(1).png"/>

既然是要求证明定长，我们就可以先看一些特例来得到定长的值该是多少，然后由此寻找如何证明$LK$的值不变. 容易看到当$D$是$B$或$C$时，$LK$就变为$\odot(ABC)$的直径，所以这理当就是要求的定值. 接下来我的证明思路大概就是找出两个到$L$距离为$\odot(ABC)$直径的点，然后通过导角证明外心，这样就将边转化到角上去了. 有一个天然的点其实就是$L$在$\odot(ABC)$上的对径点，我们设其为$P$. 这样我们就立刻得到$AJ,AP$是关于$\angle BAC$的等角线，即$JP//BC$以及$AL\perp AP$，那么另一个候选点应该就有了，即$P$关于$A$的对称点$P'$. 下面我们证明$L$是$\triangle KPP'$的外心，由于$LP=LP'$，我们只需证明$2\measuredangle PKP'=\measuredangle PLP'=2\measuredangle PLA$.

下面我们来观察如何导角， 首先由$\triangle ABC$对其内接三角形$\triangle DEF$的Miquel定理，我们知道$K$应该在$\odot(AEF)$上，而且事实上我们也应该可以看到$P'$也在这个圆上，证明可以直接使用三弦定理，但其实有更几何的办法帮我们看到更多的信息.

****

**断言1**：$P'\in\odot(AEF)$.

*Proof.* 注意到在复平面意义下$\dfrac{P'-A}{B-P}=\dfrac{A-P}{B-P}=\dfrac{A-C}{D-C}=\dfrac{E-A}{B-D}$即知$\triangle P'AE\stackrel{+}{\sim}\triangle PBD$，同理$\triangle P'AF\stackrel{+}{\sim}\triangle PCD$，故$\measuredangle P'EA=\measuredangle PDB=\measuredangle PDC=\measuredangle P'FA$，故$P'\in\odot(AEF)$. $\quad\Box$

<img src="https://llddeddym.github.io/images/2023-02-27(2).png"/>

****

下面我们证明$A,D,K,P$共圆. 虽然本题中应该有更简单的证明办法，但我们将不辞辛苦地建立一些有关等角中心的更广泛的结果. 

****

以下我们考虑一个$\triangle ABC$及不在边上的一个欧氏平面上的点$P$. 设$P$关于$\triangle ABC$的Ceva三角形为$\triangle DEF$，设$P$关于$\triangle ABC$的等角共轭点为$\mathbf{g}P$，$\mathbf{g}P$关于$\odot(ABC)$的反演点为$Q$. 设完全四边形$(BE,AC,CF.AB)$的Miquel点为$M_A$，并轮换地定义$M_B,M_C$，考察以$M_A$为中心、$M_AB\cdot M_AC$为幂、$\angle BM_AC$的角平分线为轴的反演反射变换$\varphi_A$，由于$\varphi_A(\odot(APF))=\odot(PAE)$，$\varphi_A(\odot(BCF))=\odot(CBE)$，于是$\odot(APF)$与$\odot(BCF)$的第二交点$M_B$在$\varphi_A$下变为$\odot(PAE)$与$\odot(BCE)$的第二交点$M_C$. 下面注意到

$$\begin{aligned}&\measuredangle BQC\\=&2\measuredangle BAC-\measuredangle B\mathbf{g}PC\\=&\measuredangle BAC+\measuredangle BPC\\=&\measuredangle BFC+\measuredangle BEC\\=&\measuredangle BM_AP+\measuredangle PM_AC\\=&\measuredangle BM_AC,\end{aligned}$$

故$Q\in\odot(BM_AC)$，轮换地，$Q\in\odot(CM_BA)$，$Q\in\odot(AM_CB)$，故$\varphi_A(Q)\in\varphi_A(\odot(BM_AC))=BC$，且$\varphi_A(Q)\in\varphi_A(\odot(CM_BA))=\odot(BM_CP)$，于是$\varphi_A(Q)$正是二者的第二个交点，也即$D$.

<img src="https://llddeddym.github.io/images/2023-02-27(3).png"/>

设$\triangle PBC$关于其内接三角形$\triangle DFE$的Miquel点为$M_D$，我们下面证明$\varphi_A(M)=M_D$，事实上

$$\begin{aligned}&\measuredangle C\varphi_A(M)F\\=&\measuredangle C\varphi_A(M)M_A+\measuredangle M_A\varphi_A(M)F\\=&\measuredangle MBM_A+\measuredangle M_AEM\\=&\measuredangle BME+\measuredangle EM_AB\\=&\measuredangle BFD+\measuredangle DCE+\measuredangle EAB\\=&\measuredangle BFD+\measuredangle CBA\\=&\measuredangle CDF\end{aligned}$$

说明$\varphi_A(M)\in\odot(CDF)$，对称地，$\varphi_A(M)\in\odot(BDE)$，又由$M\in\odot(AEF)$知$\varphi_A(M)\in\odot(AEF)$，于是$\varphi_A(M)$正是$M_D$. 顺便我们可以看到$\varphi_A(M)\in\odot(BDE)$说明$M\in\odot(CQF)$，于是轮换对称地我们知道$M\in\odot(AQD)$.

需要注意的是虽然上述论证只对欧氏平面中的点$P$成立，但由连续性我们可以将结果推广至射影平面$\mathbb{R}P^2$上.

****

下面我们回到原题，将上段论述中的点$P$取为原题中$P$关于$\triangle ABC$的等角共轭点（这是一个无穷远点），则上段论证中的$Q$变为原题中的$P$，上段论证中的$M$变为原题中的$K$，于是由上段论证我们得到$A,D,P,K$共圆.

万事具备，下面我们开始导角，

$$\begin{aligned}&\measuredangle PKP'\\=&\measuredangle PKA+\measuredangle AKP'\\=&\measuredangle PDA+\measuredangle AEP'\\=&\measuredangle PDA+\measuredangle BDP\\=&\measuredangle BDA\\=&\measuredangle PJA\\=&\measuredangle PLA,\end{aligned}$$

由我们之前的分析，这就说明了$L$是$\triangle PKP'$的外心，也即$LK=LP$，长度恒为$\odot(ABC)$的直径.

<img src="https://llddeddym.github.io/images/2023-02-27(4).png"/>
