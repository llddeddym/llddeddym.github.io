---
title: '万有覆叠的拉回还是万有覆叠吗?'
date: 2021-05-01
permalink: /posts/2021/05/2021-05-21-universal-cover/
tags:
  - algebraic topology
---

前阵子被别人问题的时候想到了一个问题: 

**Question**: 给定两个拓扑空间$X,Y$, 二者同伦等价, 且$X$存在万有覆叠空间(即universal cover, 单连通的覆叠空间)$\tilde X$, 那么$Y$也存在万有覆叠空间吗? 

在Hatcher的代拓书上有习题说如果两个泛覆盖都存在则二者同伦等价, 但基本没提存在性, 事实上对存在性我只知道道路连通且局部道路连通且半局部单连通的空间的泛覆盖存在, 但在这里似乎没什么用处, 而我也不太知道什么泛覆盖不存在的空间的例子, 所以一直就搁置了. 后来查阅了一些资料, 大概理顺了这个问题(并且稍微推广了一下), 本文就相当于我整理的一份笔记了. 

## 1. 同伦拉回的Mayer-Vietoris序列

**Definition 1.1**: 对任何一个范畴中的两个态射$\alpha: X\to Z$及$\beta: Y\to Z$, 它们的纤维积指一个对象$X\times _ ZY$并配备态射$\mbox{pr} _ X:X\times _ ZY\to X$和$\mbox{pr} _ Y:X\times _ ZY\to Y$使得$\alpha\mbox{pr} _ X=\beta\mbox{pr} _ Y$, 并且对任意满足$\alpha p _ 1=\beta p _ 2$的$p _ 1:W\to X$和$p _ 2:W\to Y$, 存在唯一的$l: W\to X\times _ ZY$使得$\mbox{pr} _ X l=p _ 1$, $\mbox{pr} _ Y l=p _ 2$. $\mbox{pr} _ X$也可称为$\beta$沿$\alpha$的拉回. 

**Example 1.2**: 在集合及映射构成的范畴中, 纤维积总存在, $\{(x,y)\in X\times Y:\alpha(x)=\beta(y)\}$配备通常的投影就是一个构造. 

**Example 1.3**: 在拓扑空间及连续映射构成的范畴中, 纤维积总存在, 无非是上述集合配以积空间的积拓扑的子空间拓扑所形成的拓扑空间.

下面引入"同伦拉回"的概念. 

**Definition 1.4**: 对连续映射$\alpha:X\to Z$和$\beta: Y\to Z$, 二者的同伦拉回指$\mbox{ev} _ 0\times\mbox{ev} _ 1:Z^I\to Z\times Z$和$\alpha\times\beta: X\times Y\to Z\times Z$的纤维积, 记为$X\times _ Z^h Y$, 其中$Z^I$指单位闭区间$I$到$Z$的所有连续映射赋予紧开拓扑组成的空间, $\mbox{ev} _ \cdot(\sigma)=\sigma(\cdot)$为取值映射. 

这其实无非是将原本纤维积要求的映射严格相等改为了差一个同伦, 此时可以构造$\{(x,\gamma,y)\in X\times Z^I\times Y:\alpha(x)=\gamma(0),\beta(y)=\gamma(1)\}$作为$X\times _ Z^hY$, 所以$X\times _ ZY$可用常值道路嵌入$X\times _ Z^hY$中. 同样若定义$\alpha$的道路空间$P(\alpha)$为$\alpha$和$\mbox{ev} _ 0:Z^I\to Z$的纤维积, 此时对fibration $\mbox{ev} _ 1\mbox{pr} _ {Z^I}:P(\alpha)\to Z$, $X\times _ Z^h Y$也可视为$P(\alpha)\times _ Z P(\beta)$.

对于同伦拉回, 我们有如下fibration sequence: 

**Theorem 1.5**: 任取$Z$的基点$z _ 0$, 有fibration sequence $\Omega Z\to X\times _ Z^h Y\to X\times Y$, 其中$\Omega Z$是$Z$的环路空间(loop space).

*Proof.* 显然$\mbox{ev} _ 0\times\mbox{ev} _ 1$是一个fibration, 故$X\times _ Z^h Y\to X\times Y$亦是, 且二者有同伦的fiber $\Omega Z$.$\quad\Box$

施以fibration的同伦群的长正合列, 我们可以得到: 

**Corollary 1.6**: 如下序列正合: $\cdots\to\pi _ {n+1}(Z)\to\pi _ n(X\times _ Z^h Y)\to\pi _ n(X)\times\pi _ n(Y)\to\pi _ n(Z)\to\cdots$.

这是将来证明我们构造出的空间单连通时的工具.

## 2. 同伦拉回和一般拉回的一致性

一个自然的问题是, $X\times _ Z^h Y$和$X\times _ Z Y$什么时候是同伦等价的? 本节我们证明只要$X\to Z$或$Y\to Z$有一个比较好就行. 

先给出一个引理.

**Lemma 2.1**: 同伦等价沿fibration的拉回仍为同伦等价.

*Proof.* 设$p:E\to B$是一个fibration, $f:X\to B$为同伦等价, $g:B\to X$为其同伦逆, 取$H:E\times I\to B$为一个连接$H _ 0:=p$和$H _ 1:=fgp$的同伦, $H _ 0$有提升$\tilde H _ 0=\mbox{id} _ E$, 故存在$H$的提升同伦$\tilde H:E\times I\to E$使得$p\tilde H _ 1=fgp$, 于是存在唯一的$E\to X\times _ B E$, 这即为$X\times _ B E\to E$的同伦逆. $\quad\Box$

**Theorem 2.2**: 给定连续映射$f:X\to Z$, $g:Y\to Z$, $P(f)\times _ Z Y$和$X\times _ Z^h Y$之间由纤维积定义给出的自然连续映射是同伦等价. 

*Proof.* 结合上面的引理, 下述交换图表道尽一切(其中$\simeq$为同伦等价, $\twoheadrightarrow$为fibration).

<img src="https://llddeddym.github.io/images/2021-05-01.png"/>

$\quad\Box$

**Corollary 2.3**: 给定连续映射$f:X\to Z$, $g:Y\to Z$, 当二者中有一个是fibration时$X\times _ Z^hY$与$X\times _ ZY$同伦等价.

*Proof.* 不妨设$g$是fibration, 则由Lemma 2.1知上面交换图表中$X\times _ Z Y\to P(f)\times _ ZY$也是同伦等价, 再由上述定理即得.$\quad\Box$

## 3. 问题的推广与解答

至此我们就可以回答一开始的问题了, 先回顾一个小引理.

**Lemma 3.1**: 覆叠映射沿连续映射的拉回还是覆叠映射.

*Proof.* 一言以蔽之, 覆叠空间无非是具有离散纤维的fibre bundle.$\quad\Box$

**Theorem 3.2**: 假设$X$道路连通, 给定连续映射$f:X\to Y$, 若其诱导的基本群的同态$f _ *:\pi _ 1(X)\to\pi _ 1(Y)$是单同态, 则当$Y$存在万有覆叠空间$\tilde Y$时, $X$也存在万有覆叠空间.

*Proof.* 取$\tilde X$为$f$和覆叠映射$\tilde Y\to Y$的纤维积$X\times _ Y\tilde Y$适当的道路连通分支, 则由Lemma 3.1及$X$道路连通, $\tilde X\to X$仍为覆叠映射, 且由Corollary 1.6, $\cdots\to\pi _ 2(X)\times\pi _ 2(\tilde Y)\to\pi _ {2}(Y)\to\pi _ 1(X\times _ Y^h\tilde Y)\to\pi _ 1(X)\times\pi _ 1(\tilde Y)\to\pi _ 1(Y)\to\cdots$正合, 由于覆叠映射会诱导高阶同伦群的同构, 且$\pi _ 1(\tilde Y)=0$, 于是这个正合列断为$0\to\pi _ 1(X\times _ Y^h\tilde Y)\to\pi _ 1(X)\stackrel{f _ *}{\to}\pi _ 1(Y)\to\cdots$, 由$f _ *$是单同态就说明$\pi _ 1(X\times _ Y^h\tilde Y)=0$, 再由Corollary 2.3即知$\pi _ 1(\tilde X)=0$, 故$\tilde X$即为所求.

**Remark 3.3**: 如果我们仅考虑原本的问题, 只需要Lemma 2.1就够了, 不需要再计算正合列.

****

主要查阅的资料是[Math 527 - Homotopy Theory-Homotopy pullbacks-Martin Frankland](https://www.home.uni-osnabrueck.de/mfrankland/Math527/Math527_0308.pdf), 里面还讲了fibration变为Serre fibration的情形, 感兴趣的读者可以去看看. 