---
title: '从特例定一般--对潘成华老师一题的推广'
date: 2020-03-12
permalink: /posts/2020/03/2020-03-12-generalization-Chenghua-Pan/
tags:
  - Ceva point
  - cross-ratio
---

去年6月14号，《我们爱几何》微信公众号推送了潘成华老师的一个题目。

**原题(潘成华)**：$\triangle DEF$是$\triangle ABC$的垂三角形，$\triangle AEF$、$\triangle BDF$、$\triangle CDE$的内心分别是$X、Y、Z$，$L、M、N$分别是$BC、CA、AB$边的中点. 求证：$LX、MY、NZ$三线共点.

我一开始看到此题并没有想到一个纯几何做法，只看到了 [2838重发](https://link.zhihu.com/?target=http%3A//tieba.baidu.com/p/6159513949) 中网友给出的计算做法，便一直觉得不爽，这么漂亮的结论怎么能只有三角剥蒜的做法呢？后来稍加探究，发现原题中三线所共点恰为Schiffler点的补点 $X_{442}$ ，便更觉得不爽了。Schiffler点本身就不是很好处理，更不要说它的补点了。不过在探索过程中，我在去年的8月15号发现了此题的一个推广，如下所示。

**推广**：给定平面上三角形$\triangle ABC$，设$X$为其Stammler双曲线上一点，$\triangle DEF$是$\triangle ABC$的垂三角形，$P、Q、R$满足$ABCX\sim AEFP\sim DBFQ\sim DECR$，$\triangle ABC$三边中点为$L、M、N$. 证明：$\triangle PQR$和$\triangle LMN$透视，且透视中心在$\triangle ABC$的欧拉线上.

若能证明这个结论，则原题也就自然成立了，但数次尝试之后也没有什么好的结果，便先暂时放弃了。直到今年2月20号，台湾平面几何神仙TelvCohl在AoPS上发了一个帖子。 原链接：[Perspectivity related to Stammler hyperbola](https://link.zhihu.com/?target=https%3A//artofproblemsolving.com/community/q1h2010950p14273577).在这个帖子里，怹提出了这样的一个命题。

<img src="https://llddeddym.github.io/images/2020-03-12(1).png"/>

稍加思索，我发现。。。

这不就是我去年发现的那个推广吗！

至于为什么这两者一样，我们先给一个小引理。

**引理1**：给定三角形$\triangle ABC$，$P$是平面上一点，$B$、$P$在$AC$上的投影为$H_b、H_c$，$C、P$在$AB$上投影为$H_c、P_c$，$\triangle AP_bP_c$的垂心为$H_A$，则$AH_bH_cH_A\sim ABCP$.

<img src="https://llddeddym.github.io/images/2020-03-12(2).png"/>

**引理1的证明**：由$AH_A\perp P_bP_c$，可以得到$\angle H_cAH_A=\angle PAC$，又$AH_A=P_bP_c\cot\angle BCA=AP\cos\angle BCA=AP\cdot\frac{H_bH_c}{BC}$，故$AH_AH_bH_c\sim APBC$. $\quad\Box$

据此可以看出这二者是一个东西，这让我很兴奋，没想到你小子浓眉。。。总之这让我想起来了还有这么一道题存在，于是我决定再去试一试看看能不能搞出什么新东西来，而这时，我已经写完了 [从几何变换的角度证明Schiffler点的一个基本性质](https://llddeddym.github.io/posts/2021/01/2020-03-06-Schiffler/) 这个东西，证明了Stammler双曲线在 ![[公式]](https://www.zhihu.com/equation?tex=cevamul%28O%2C%5Ccdot%29) 下的像是Euler线，其中 ![[公式]](https://www.zhihu.com/equation?tex=O) 是外心，于是很自然的就去想看看 ![[公式]](https://www.zhihu.com/equation?tex=cevamul%28O%2CX%29) 在Euler线上的什么位置，它与透视中心又是什么关系，没想到这一看还真做出了一些东西。。。

以下为了方便叙述，我们做如下约定， $H、K、O、G、Ni$分别是 $\triangle ABC$的垂心、陪位重心、外心、重心和九点圆心， $H'$为$\triangle ABC$切线三角形的垂心，$\cdot$关于$\triangle ABC$的Ceva三角形和反Ceva三角形分别记为$\triangle \cdot_1\cdot_2\cdot_3,\triangle \cdot^1\cdot^2\cdot^3$.

经过试验，我发现$\mbox{cevamul}(O,X)$恰为透视中心的补点，于是问题转化为只需证明如下命题。

**命题1**：令$X$是Stammler双曲线上一点，$Y=\mbox{cevamul}(O,X)$，$P$是满足$ABCX\sim AH_2H_3P$的平面上一点,则有$G_1P$与$AY$平行. 

利用$\triangle K^1BC\sim\triangle G_1H_2H_3$，我们可以继续转化此题，由$AO//G_1Ni$，要证明上面结论只需证明$\angle OAY=\angle NiG_1P=\angle G_1K^1X$，再考虑到$AH//K^1G_1$，如果设出$Y$的等角共轭点$Y^ *$,则只需证明$AY^ *//K^1X$，结合Euler线的等角共轭像是Jerabek双曲线(过$A,B,C,O,H$的二次曲线)，**命题1**就被转化为了如下形式。 

<img src="https://llddeddym.github.io/images/2020-03-12(3).png"/>

**命题2**：令$X$是Stammler双曲线上一点，$Y=\mbox{cevamul}(O,X)$，过$A$做$K'X$的平行线与Jerabek双曲线的第二交点为$Y^ *$, 则$Y,Y^ *$等角共轭.

做到这里仿佛就搞不下去了，但在昨天，萝卜神提供了一个极度重要的思路，这个思路最终完成了此题的证明，也就是本文的标题“从特例定一般”，一般情况解决不了，能不能先试试特例呢？能否利用特例来解决一般的情况呢？二者的答案都是肯定的，先来看两个特例。

**特例1**：$X=O$，此时$Y=O$，$K^1X$为$BC$中垂线，$AH//K^1O$，$Y^ * =H$，**命题2**成立.

**特例2**：$X=K$，此时$Y=G$，$K^1X$恰经过$A$，$Y^*=K$，**命题2**成立. 

为了找出第三个特例，我们需要做一些准备工作，来看两个小引理。

**引理2**：$AH_1$平分$\angle H'H_1O$.

**引理2的证明**：这事实上是一个熟知的命题，我们仅考虑$\triangle ABC$是锐角三角形的情况，此时立足于切线三角形容易发现这恰为给定一三角形，则其内心和垂心与切点三角形某一顶点在其对边上的投影的连线关于切点三角形对应的这条高对称，这是一个经典问题, 感兴趣的读者可以去看[17【纯几何吧】_百度贴吧](https://link.zhihu.com/?target=http%3A//tieba.baidu.com/p/3557013085)，这里不再重复证明. $\quad\Box$

**引理3**：$\mbox{cevamul}(O,H')=H$. 

**引理3的证明**：由$(AO_1,OO^1)=-1$及$\angle AH_1O_1=90^\circ$，可得$AH_1$是$\angle OH_1O^1$的外角平分线，结合**引理2**立得. $\quad\Box$

<img src="https://llddeddym.github.io/images/2020-03-12(4).png"/>

于是我们可以找到第三个特例了。

**特例3**：$X=H'$，此时由**引理3**，$Y=H$，$K^1H'//AO$，$Y^ * =O$，**命题2**成立.

有了这三个特例，怎么确定一般情况呢？一个自然的想法便是交比。

<img src="https://llddeddym.github.io/images/2020-03-12(5).png"/>

**命题2的证明**：$$A(YG,OH)=(Y_1G_1,O_1H_1)=O^1(Y_1G_1,O_1H_1)=O^1(XK,OH')=K^1(XK,OH')=A(Y^*K,HO)，$$又$G,O,H$和$K,H,O$等角共轭，于是$Y$和$Y^ *$亦如此. $\quad\Box$

这样，我们就证明了$\mbox{cevamul}(O.X)$恰为透视中心的补点，于是由Stammler双曲线上的点与外心做Ceva point在Euler线上，就完成了整道题目的证明，其中最巧妙的一部分就是“从特例定一般”，这是我没能想到的。 