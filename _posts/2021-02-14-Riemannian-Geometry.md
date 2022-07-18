---
title: '黎曼几何学习笔记'
date: 2021-02-14
permalink: /posts/2020/12/2021-02-14-Riemannian-Geometry/
tags:
  - Riemannian Geometry
---

## 0 前言

2020年暑假, 我参与了BICMR的暑期学校, 但当时因为受困于即将开学所产生的期末考试压力, 一直没有静下心来整理一下自己学到的东西. 半年之后再看, 感觉自己已经忘却许多, 于是便决定重新梳理一遍当时学到的内容, 也就产生了这个笔记. 

这份笔记涵盖内容比较杂乱, 抛去一些黎曼几何的基本概念的介绍, 从测地线和曲率出发, 我们将会逐渐明白如何去刻画某些“小流形”是怎样“嵌入”到“大流形”之中以及在嵌入的过程中会发生如何的形变, 后面将通过一系列比较定理看到不同的曲率对拓扑的影响及其对度量结构的影响, 最后则会介绍一下著名的用一串流形去逼近新空间的基本工具——Gromov-Hausdorff距离. 除此之外, 暑期学校的期末作业也会附在后面作为练习（虽然只有三个不算困难的问题）. 

总体而言, 面对利用十节课时间几乎涵盖了一学期课的内容的高强度网课, 我在整理过程中难免有疏漏或错误, 并且省去了诸多细节性内容, 希望读者见谅. 当然有充足时间的读者也不妨直接前往BICMR的[官网](https://resource.pku.edu.cn/index.php?r=course/detail&id=401)去看当时的录屏视频.

[pdf版本](https://llddeddym.github.io/files/2021-02-14-Riemannian-Geometry.pdf)

## 1 预备知识

首先我们默认大家掌握基本的点集拓扑知识, 并且知道基本群, 覆叠映射以及泛覆盖空间的定义. 另外整个笔记在涉及求和时都使用Einstein求和约定. 

**定义1.1**: 一个**$n$维拓扑流形**谓指一个第二可数的Hausdorff拓扑空间$M$及其上一族坐标卡（局部坐标）$\lbrace (U_\alpha,\varphi_\alpha)\rbrace_ { \alpha\in\Lambda }$, 其中$\lbrace U_\alpha\rbrace_ {\alpha\in\Lambda}$是$M$的一个开覆盖, $\lbrace \varphi_ {\alpha} \colon U_\alpha\to\mathbb{R}^n\rbrace_ {\alpha\in\Lambda}$为一族同胚映射, 一般也用$M$或$M^n$来表示这个拓扑流形而省略其坐标卡, 拓扑流形$M$的维数也可以被记为$\dim M$; 如果对所有满足$U_\alpha\cap U_\beta\neq\emptyset$的$\alpha,\beta\in\Lambda$, 有任何**转移函数**$\varphi_\beta\circ\varphi_\alpha^{-1}\colon\varphi_\alpha(U_\alpha\cap U_\beta)\to\varphi_\beta(U_\alpha\cap U_\beta)$是$C^k$的, 则称$M$为**$C^k$流形**, 特别地$k=\infty$时, 也称$M$为**光滑流形**; 当$C^k$（或光滑）流形$M$上的坐标卡$\lbrace (U_\alpha,\varphi_\alpha)\rbrace_ {\alpha\in\Lambda}$极大时, 称这族坐标卡为$M$上的$C^k$（或光滑）结构; 称光滑流形是**可定向**的, 如果存在其上一族坐标卡, 两两之间的转移函数的Jacobi行列式都是正的.  

**注1.1**: 存在没有光滑结构的拓扑流形, 也存在有多种光滑结构的拓扑流形. 并且拓扑流形的泛覆盖空间总是存在的, 其也是一个流形. 

以后若无特别说明, 流形均指光滑流形.  

**定义1.2**: 对流形$M^n$, 函数$f:M\to\mathbb{R}$称为**光滑函数**当且仅当对$M$上任何一个坐标卡$(U_\alpha,\varphi_\alpha)$, $f\circ\varphi_\alpha^{-1}:\mathbb{R^n}\to\mathbb{R}$光滑$M$上所有光滑函数组成的集合记为$C^\infty(M)$; 对流形$M^n,N^d$, 映射$f:M\to N$称为**光滑映射**当且仅当对$M$上任何一个坐标卡$(U_\alpha,\varphi_\alpha)$, $N$上任何一个坐标卡$(V_\beta,\psi_\beta)$, $\psi_\beta\circ f\circ\varphi_\alpha^{-1}:\mathbb{R}^n\to\mathbb{R}^d$光滑, $M$到$N$的所有光滑映射组成的集合记为$C^\infty(M,N)$. $M$上一个光滑函数$f$的**支集**为$\mbox{supp}f=\overline{\lbrace  p\in M\mid f(p)\neq0\rbrace}$. 

**定义1.3**: 对流形$M$及其上一点$p$, 在所有定义在$p$的某个开邻域上的光滑函数所组成的集合中定义如下等价关系: $f:U\to\mathbb{R}$等价于$g:V\to\mathbb{R}$当且仅当存在$p$的开邻域$W\subset U\cap V$使得$f\mid_W=g\mid_W$, 称每一个等价类为$p$处的一个**函数芽**, $p$处所有函数芽组成的集合记为$\mathcal{E}(p)$. 

**定义1.4**: 对流形$M$及其上一点$p$, 定义$\lbrace w\in C^\infty(\mathbb{R},M):w(0)=p\rbrace$上的等价关系如下: $w$等价于$v$当且仅当存在$0$的开邻域$U$使得$w\mid_U=v\mid_U$, 记所有等价类组成的集合为$W_p$; 在$W_p$上再定义等价关系如下: $\overline{w}$与$\overline{v}$等价当且仅当对任意$[f]\in \mathcal{E}(p)$, $\dfrac{\mbox{d}}{\mbox{d}t}(f\circ \overline{w})\mid_ {t=0}=\dfrac{\mbox{d}}{\mbox{d}t}(f\circ \overline{v})\mid_ {t=0}$, $W_p$中此等价关系下所有等价类的集合被称作$p$处的**切空间**, 记为$T_pM$, 其中的元素称作**切向量**. 切空间的对偶空间$T_p^*M$为$p$处的**余切空间**, 其中的元素称作**余切向量**. 

**注1.2**: $T_pM$也可定义为$\mathcal{E}(p)$的所有导子组成的集合, 相当于把$\dfrac{\mbox{d}}{\mbox{d}t}(-\circ \overline{w})\mid_ {t=0}$视为一个导子. 容易看出$T_pM$是线性空间且$\dim T_pM=\dim M$. 对包含$p$的一个坐标卡$(U,\varphi)$, 可以定义一组**自然基**$\left\lbrace \dfrac{\partial}{\partial x^i}(p)\right\rbrace$, 其中$\dfrac{\partial}{\partial x^i}(p)$就是将$\varphi(U)$中第$i$个坐标轴的原点平移至$\varphi(p)$处再用$\varphi^{-1}$映射回$W_p$后所代表的等价类, 利用导子的写法就是$\dfrac{\partial}{\partial x^i}(p)(f)=\dfrac{\partial(f\circ\varphi^{-1})}{\partial u^i}(\varphi(p))$, 其中$\dfrac{\partial}{\partial u^i}$代表对第$i$个分量求偏导. 有时, 也将$\dfrac{\partial}{\partial x^i}$记为$\partial_i$. $\lbrace \partial_i\rbrace$的对偶基记为$\lbrace \mbox{d}x^i\rbrace$, 称作余切空间中的**自然基**. 

**定义1.5**: 对$f\in C^\infty(M,N)$, 可定义**切映射**为线性映射$f_* \colon T_pM\to T_ {f(p)}N$满足对任意$[\sigma]\in\mathcal{E}(f(p))$, $f_* (v)(\sigma)=v(\sigma\circ f)$. 其对偶映射$f^* \colon T_ {f(p)}^* N\to T_p^* M$称作**余切映射**. 切映射处处为单射的光滑映射称为**浸入**, 处处为满射的光滑映射称为**淹没**. 

**定义1.6**: 一个**实向量丛**$\xi=(E,B,\pi)$谓指如下资料: (1)**全空间**: 一个拓扑空间$E=E(\xi)$; (2)**底空间**: 一个拓扑空间$B=B(\xi)$; (3)**投射**: 一个连续映射$\pi:E\to B$, 满足对任意$b\in B$, 存在其一个开邻域$U$, $n\in\mathbb{N}$, 以及同胚$h:U\times\mathbb{R}^n\to\pi^{-1}(U)$使得$h(b,\cdot):\mathbb{R}^n\to\pi^{-1}(b)$为线性空间的同构. 也常常忽略$\pi$称$E$为$B$上的向量丛或直接称$\pi:E\to B$是一个向量丛. 

**注1.3**: $h$一般称为局部平凡化. 一般要求对任何$b\in B$, 它们对应的$n$相同. 

**定义1.7**: $TM:=\bigcup\limits_ {p\in M}T_pM$称为流形$M$的**切丛**, 其投射就是把某点处的切向量映到那一点. 类似地可以定义**余切丛**$T^*M$. 

**注1.4**: $TM$上有光滑结构, 且$\dim TM=2\dim M$, 其坐标卡的前半部分由这一点的局部坐标给出, 后半部分由切向量在这点处切空间中自然基下的坐标给出. $T^*M$上的光滑结构是类似的. 

**定义1.8**: $B$上向量丛$E$的一个**截面**是一连续映射$s:B\to E$, 使得$\pi\circ s=\mbox{id}_B$; 若$E,B$均是流形并且截面$s\in C^\infty(B,E)$, 就说$s$是一个**光滑截面**; $E$的所有光滑截面组成的集合记为$\Gamma(E)$. 

**注1.5**: $\Gamma(E)$是一个$C(B)-$模. 

**定义1.9**: 对于流形$M$, 称$\Gamma(TM)$中的元素为$M$上的一个**切向量场**. 

**定义1.10**: 切向量场间的**Lie括号**$[-.-]:\Gamma(TM)\times\Gamma(TM)\to\Gamma(TM)$定义如下: 对任意$f\in C^\infty(M)$, $[X,Y]f=X(Yf)-Y(Xf)$. 

**定义1.11**: 对于流形$M$, 设$\pi:E\to M$为向量丛, $E$上的**联络**是一个映射$\nabla:\Gamma(TM)\times\Gamma(E)\to\Gamma(E),(X,s)\mapsto\nabla_Xs$且满足对任意$X,Y\in\Gamma(TM)$, $s,s_1,s_2\in\Gamma(E)$, $f,g\in C^\infty(M)$, 有: (1)$\nabla_ {fX+gY}s=f\nabla_Xs+g\nabla_Ys$; (2)$\nabla_Xfs=X(f)s+f\nabla_Xs$; (3)$\nabla_X(s_1+s_2)=\nabla_Xs_1+\nabla_Xs_2$. 

**定义1.12**: 对流形$M^n$, 称$\Lambda^r(T^* M)$为$M$上的微分$r-$形式丛, $\Gamma(\Lambda^r(T^* M))$中的元素称为微分$r-$形式; 称$\Lambda(T^* M)$为$M$上的微分形式丛, $\Gamma(\Lambda(T^* M))$中的元素称为微分形式. 

**注1.6**: 显然$\Gamma(\Lambda(T^* M))=\sum\limits_ {r=0}^n\Gamma(\Lambda^r(T^* M))$. 

**定义1.13**: 流形$M$上的**单位分解**是其上一族非负光滑函数$\lbrace \varphi_\alpha \rbrace_ {\alpha\in\Lambda}$, 使得其支集族是局部有限的, 并且$\displaystyle\sum_ {\alpha\in\Lambda}\varphi_\alpha\equiv1$. 若对开覆盖$\lbrace U_\beta\rbrace$, 一个单位分解$\lbrace \varphi_\alpha\rbrace_ {\alpha\in\Lambda}$满足对任意$\alpha\in\Lambda$, 都存在$\beta$使得$\varphi_\alpha$的支集包含于$U_\beta$, 就称这个单位分解是**从属于**这个开覆盖的. 

**注1.7**: 一个著名结果是, 对一个微分流形$M$和其上任何一个开覆盖, 都存在一个从属于它的可数单位分解, 并且其中每个函数都有紧支集. 

## 2 基本概念

### 2.1 黎曼度量

**定义2.1.1**: 流形$M$上的**黎曼度量**$g$是一族$\lbrace g_p\rbrace_ {p\in M}$, 其中$g_p:T_pM\times T_pM\to\mathbb{R}$是线性空间$T_pM$上的内积, 并且$g_p$关于$p$是光滑变化的, 也就是说, 在一个坐标卡$(U,\varphi)$中, 对任意$i,j$有$g_ {ij}(p):=g_p(\partial_i(p),\partial_j(p))\in C^\infty(U)$. 定义了黎曼度量$g$的流形$M$称作**黎曼流形**, 通常记为$(M,g)$. 

**注2.1.1**: 后面我们会看到$g$是一个$(0,2)-$张量, 一般对$u,v\in T_pM$也记$\langle u,v\rangle=g(u,v)=g_p(u,v)$.对任意$p\in U$,$[g_ {ij}] (p)$为正定对称矩阵, 也可记为$\mbox{d}s^2=g_ {ij}\mbox{d}x^i\mbox{d}x^j$. 

**定义2.1.2**: 对$u\in T_pM$, 称$\lvert u\rvert=\|u\|=\sqrt{\langle u,u\rangle}$为它的**模长**. 

**例2.1.1**: 欧氏空间$\mathbb{R}^n$, 其上的坐标卡为$\lbrace (\mathbb{R}^n,\mbox{id})\rbrace$, 黎曼度量为$\mbox{d}s^2=\delta_ {ij}\mbox{d}x^i\mbox{d}x^j$. 

**命题2.1.1**: 任意流形上都存在黎曼度量. 

*Proof.* 在每个坐标卡上定义局部度量, 再利用单位分解的存在性线性组合起来即可. $\quad\Box$

**注2.1.2**: 对于恒正的光滑函数$f$和度量$\mbox{d}s^2$, 可以定义新的度量$\mbox{d}\tilde{s}^2=f\mbox{d}s^2$. 

**定义2.1.3**: 对浸入$\Phi:M\to N$和$N$上的黎曼度量$g_N$, 可定义$M$上的**拉回**度量$\Phi^* (g_N)$如下: $\Phi^* (g_N)(u,v):=(g_N)(\Phi_* (u),\Phi_* (v))$.若$M$上原本的黎曼度量$g_M$与$\Phi^* (g_N)$一致, 就称$\Phi$是**等距浸入**. 特别地, 当$\Phi$是覆叠映射时也称为**黎曼覆叠**. 

**定义2.1.4**: 对黎曼流形$(M_1,g_1), (M_2,g_2)$, 可以在$M_1\times M_2$上定义**乘积黎曼度量**$g_1\oplus g_2$（或$g_1\times g_2$）为$(g_1\oplus g_2)((u_1,u_2),(v_1,v_2))=g_1(u_1,v_1)+g_2(u_2,v_2)$. 若给出了恒正的$f\in C^\infty(M_1)$, 对$(u_1,u_2),(v_1,v_2)\in T_ {(p_1,p_2)}{(M_1\times M_2)}$可定义$(M_1\times M_2,g_1\oplus_f g_2)$如下: $(g_1\oplus_f g_2)((u_1,u_2),(v_1,v_2))=g_1(u_1,v_1)+f^2(p_1)g_2(u_2,v_2)$, 这个黎曼流形也可记为$M_1\times_f M_2$. 

**例2.1.2**: $\pi_1:\mathbb{R}\to S^1$, $\pi_2:\mathbb{R}^2\to T^2$均为黎曼覆叠, 也是局部等距浸入. 

**例2.1.3**: 平坦圆柱$S^1\times\mathbb{R}$, $e^{t}$的图像的旋转面$\mathbb{R}\times_ {\exp}S^1$. 

**定义2.1.5**: 对淹没$\pi:M^n\to N^m$, $V_p:=\ker(\pi_* \mid_p)$称为$\pi$在$p$处的**垂直空间**. 设$M,N$上的黎曼度量分别为$g_M,g_N$, 则可以定义$V_p$在$g_M$下的正交补$H_p$, 称作$\pi$在$p$处的**水平空间**. 称$\pi$为**黎曼淹没**, 如果$\pi_* \mid_p:H_p\to T_ {\pi(p)}N$是等距的. 

**注2.1.3**: $n>m$时, 一般无法通过淹没定义拉回度量. 

### 2.2 黎曼流形的度量结构

有了黎曼度量后, 就可以在流形上定义度量结构了, 首先定义曲线的长度.

**定义2.2.1**: 光滑映射$\gamma:[a,b]\to M$称作$M$上的**光滑曲线**, 其**切向量**为$\gamma'(t):=\gamma_* \left(\dfrac{\mbox{d}}{\mbox{d}t}\right)$, **长度**$L(\gamma):=\displaystyle\int_a^b\|\gamma'(t)\|\mbox{d}t$, **弧长**$s(t):=\displaystyle\int_a^t\|\gamma'(u)\|\mbox{d}u$. 

**注2.2.1**: 一般总假设$\gamma'(t)\neq0$, 此时$s$严格单调递增, 就可以找到其反函数$t=t(s)$, 于是可得到新的曲线$\overline\gamma:[0,s(b)]\to M,s\mapsto\gamma(t(s))$. 这个曲线总拥有单位切向量, 称作曲线的**弧长参数化**. 

**定义2.2.2**: **分段光滑曲线**定义为$\mathcal{C}([0,1]):=\lbrace  c\colon[0,1]\to M\mid c\mbox{分段光滑} \rbrace$. 

显然$L$是$\mathcal{C}$上的泛函.下面定义任意两点间的距离. 

**定义2.2.3**: 对道路连通流形$M$上任意两点$p,q\in M$, 记所有以$p$为起点, $q$为终点的分段光滑曲线$\mathcal{C}_ {p,q}=\lbrace c\in\mathcal{C}([0,1])\mid c(0)=p,c(1)=q\rbrace$, 定义$p,q$之间的**距离**为$ d(p,q):=\inf\lbrace L(\gamma)\mid\gamma\in\mathcal{C}_ {p,q}\rbrace $. 

**注2.2.2**: 由道路连通性可说明这样的定义是合理的, 即$d<+\infty$. 

**命题2.2.1**: $d:M\times M\to\mathbb{R},(p,q)\mapsto d(p,q)$是一个度量函数, 使得$(M,d)$是一度量空间. 

证明略过. 需要注意的是这个命题的表述蕴含“$M$在$d$下诱导的拓扑与原本的拓扑一致”. 

**例2.2.1**: 将$S^2$视为$\mathbb{R}^3$中的单位球面, 其切空间在$\mathbb{R}^3$中真实存在, 长度就继承自$\mathbb{R}^3$. 连接北极点$N$与南极点$S$的最短曲线是经线, 也就是$d(N,S)=\pi$. 

有了度量之后也可以定义“直径”的概念: 

**定义2.2.4**: $\mbox{Diam}(M,g):=\sup\lbrace d(p,q)\mid p,q\in M\rbrace$称为$(M,g)$的直径. 

### 2.3 Levi-Civita联络与平行移动

给定黎曼度量后, 可以定义切丛上一个“最好”的联络. 

**定理2.3.1**: 令$(M^n,g)$为一黎曼流形, 存在唯一的$TM$上的联络使得对任意$X,Y,Z\in\Gamma(TM)$: (1)**与度量相容**: $X\langle Y,Z\rangle=\langle\nabla_XY,Z\rangle+\langle Y,\nabla_XZ\rangle$; (2)**无挠**: $\nabla_XY-\nabla_YX-[X,Y]=0$. 

*Proof.* 事实上, 轮换(1)并做适当变换并利用(2)可得$\langle\nabla_XY,Z\rangle=\dfrac{1}{2}\left(X\langle Y,Z\rangle+Y\langle Z,X\rangle-Z\langle X,Y\rangle+\langle [X,Y],Z\rangle-\langle [Y,Z],X\rangle+\langle [Z,X],Y\rangle\right),$ 由此给出的$\nabla$就满足所有要求. 同时此式说明了$\nabla$的唯一性. $\quad\Box$

**定义2.3.1**: **定理2.1**中的联络称作**Levi-Civita联络**. 

以下所说“联络”均为Levi-Civita联络, 并用$\nabla$表示. 我们来看一看联络在局部坐标下的形式. 

**定义2.3.2**: 设$(U,\varphi)$为一坐标卡, 有自然基$\lbrace \partial_i\rbrace$, 对$X\in\Gamma(TM)\mid_U$, $X=X^i\partial_i,X^i\in C^\infty(U)$, 记$\nabla_ {\partial_i}\partial_j=\Gamma_ {ij}^k\partial_k,\Gamma_ {ij}^k\in C^\infty(U)$, 称$\Gamma_ {ij}^k$为$X$在$U$下的Christoffel记号. 

对$X=X^i\partial_i,Y=Y^j\partial_j$, 容易算出$ $. 

由于联络对于下面的分量是函数线性的, 所以$\nabla_XY$在$p$处的取值实际上只与$X(p)$有关, 而与$X$在其他点处取值无关, 所以$\nabla_XY$也常常被称作**$Y$沿$X$的方向导数**, 并且$\nabla_XY(p)$记为$\nabla_ {X(p)}Y$, 类似地对光滑道路$\gamma$也有$\nabla_ {\gamma'(t)}Y=:(Y(\gamma(t)))'$或$Y(t)'$.基于此我们可以定义所谓的“平行移动”. 

**定义2.3.3**: 设$\gamma:I\to M$是一光滑曲线, 称沿$\gamma$的向量场$Y(t)$是**平行**的, 如果$\nabla_ {\gamma'}Y=0$, 也即是说在坐标卡$(U,\varphi)$下, 对任意$k$有$\dfrac{\mbox{d}Y^k}{\mbox{d}t}+\Gamma_ {ij}^k(\gamma^i)'Y^j=0$, 其中$\gamma^i$为$\gamma$的局部坐标. 

**命题2.3.1**: 对任意光滑曲线$\gamma$, $v\in T_ {\gamma(0)}M$, 存在唯一的沿$\gamma$的平行向量场$V$使得$V(0)=v$. 

*Proof.* 在局部坐标下这无非是一个给定初值的一阶常微分方程组, 由存在唯一性即得. $\quad\Box$

**定义2.3.4**: 对任意光滑曲线$\gamma$, $v\in T_ {\gamma(0)}M$, 设满足$V(0)=v$的沿$\gamma$的平行向量场为$V$, 称$V(t_0)$为$v$沿$\gamma$到$\gamma(t_0)$的**平行移动**. 

**注2.3.1**: 平行移动与联络相互决定. 

要注意的是, 平行移动往往是依赖于曲线的选取的. 

### 2.4 $(r,s)-$张量丛上的Levi-Civita联络

**定义2.4.1**: 对流形$M$, 定义其上的**$(r,s)-$张量丛**为$T^r_sM:=\otimes^rTM\otimes^sT^*M$; $\Gamma(T^r_sM)$中的元素称为$M$上的$(r,s)-$张量. 

事实上, 一个$(r,s)-$张量$\varphi$正相当于每点$p$处的$\varphi_p$是$\times^rT_p^*M\times^sT_pM$上的一个多重线性函数. 

**例2.4.1**: 光滑切向量场$X$是一个$(1,0)-$张量; 微分$1-$形式$\omega$是一个$(0,1)-$张量. 

**定义2.4.2**: **缩并**$c:\Gamma(T^{r+1}_ {s+1}M)\to\Gamma(T^r_sM)$定义如下: $$c(x_1\otimes\cdots\otimes x_ {r+1}\otimes y_1^* \otimes\cdots\otimes y_ {s+1}^* ):=\sum\limits_ {k,l}y_l^* (x_k)x_1\otimes\cdots\otimes\widehat{x_k}\otimes\cdots\otimes x_ {r+1}\otimes y_1^* \otimes\cdots\otimes\widehat{y_l^* }\otimes\cdots\otimes y_ {s+1}^*.$$ 

**命题2.4.1**: 存在唯一的$\nabla:\Gamma(TM)\times\bigcup\limits_ {r,s}\Gamma(T^r_sM)\to\bigcup\limits_ {r,s}\Gamma(T^r_sM)$使得对任意$(r,s)$, $\nabla\mid_ {\Gamma(TM)\times\Gamma(T^r_sM)}$是$T^r_sM$上的联络且满足: (1)$\nabla_X(T\otimes T')=(\nabla_XT)\otimes T'+T\otimes (\nabla_XT')$; (2)$\nabla_X(cT)=c\nabla_XT$; (3)对任意$f\in C^\infty(M),\nabla_Xf=X(f)$; (4)$\nabla\mid_ {\Gamma(TM)\times\Gamma(TM)}$就是Levi-Civita联络. 

*Proof.* 以(4)为奠基, 运用前三条逐层归纳构造即可. 对$(0,s)-$张量$\omega$, $(\nabla_X\omega)(X_1,\cdots,X_s)=X(\omega(X_1,\cdots,X_s))-\sum\limits_ {i=1}^s\omega(X_1,\cdots,\nabla_XX_i,\cdots,X_s)$; 对$(r,s)-$张量T, $T(\omega_1,\cdots,\omega_r)$为$(0,s)-$张量, $(\nabla_XT)(\omega_1,\cdots,\omega_r)=\nabla_X(T(\omega_1,\cdots,\omega_r))-\sum\limits_ {i=1}^rT(\omega_1,\cdots,\nabla_X\omega_i,\cdots,\omega_r)$.$\quad\Box$

**定义2.4.3**: **命题2.4.1**中的$\nabla$也称为**Levi-Civita联络**. 对任意$(r,s)-$张量$T$, 定义$(r,s+1)$型张量$\nabla T$为$(\nabla T)(X_1,\cdots,X_s,X)=(\nabla_XT)(X_1,\cdots,X_s)$. 

**例2.4.2**: 设$(M,g)$为黎曼流形, $(\nabla g)(X,Y,Z)=\nabla_Zg(X,Y)=Z(g(X,Y))-g(\nabla_ZX,Y)-g(X,\nabla_ZY)=0$, 也即$\nabla g\equiv0$. 

### 2.5 微积分中的一些概念推广

**定义2.5.1**: 对$f\in C^\infty(M)$, 定义**梯度场**$\mbox{grad} f\in\Gamma(TM)$为满足$\langle\mbox{grad} f,X\rangle=X(f)$的切向量场. 

在坐标卡$(U,\varphi)$下, $\mbox{grad}f=(\mbox{grad}f)^i\partial_i$, $\langle\mbox{grad} f,\partial_j\rangle=(\mbox{grad}f)^ig_ {ij}=\partial_j(f)$, 于是$(\mbox{grad}f)^i=g^{ij}\partial_j(f)$, 其中$[g^{ij}]=[g_ {ij}]^{-1}$. 可见此定义与欧氏空间中的梯度概念是相容的. 

**注2.5.1**: *物理学家*一般记上式为$f^i=g^{ij}f_j$. 

**注2.5.2**: 对线性空间$T_pM$中, $g$作为内积给出了$T_pM$和$T_p^*M$间的典范同构, 事实上$\mbox{grad} f$与$\nabla f=\mbox{d}f$就是这个同构下的对应元素. 

**定义2.5.2**: 对$f\in C^\infty(M)$, 定义$(0,2)-$张量**Hessian场**$\mbox{Hess}f:=\nabla^2f$. 

在坐标卡$(U,\varphi)$下, $\mbox{Hess}f(\partial_i,\partial_j)=\partial_i\partial_jf-\Gamma_ {ij}^k\partial_kf$. 

**定义2.5.3**: 对$X\in \Gamma(TM)$, 定义其散度$\mbox{div}(X):=\mbox{tr}[Y\mapsto\nabla_YX]$. 

在坐标卡$(U,\varphi)$下, 设$X=X^i\partial_i$, $\nabla_ {\partial_i}(X^s\partial_s)=\dfrac{\partial X^s}{\partial x^i}\partial_s+\Gamma_ {is}^kX^s\partial_k$. 于是$\mbox{div}(X)=\partial_iX^i+\Gamma_ {is}^i=\dfrac{1}{\sqrt{\det[g_ {ij}]}}\partial_s(\sqrt{\det[g_ {ij}]}X^s)$. 

**定义2.5.4**: 对$f\in C^\infty(M)$, 定义**Laplace算子**$\Delta f:=\mbox{div}(\mbox{grad}f)$; 若$\Delta f\equiv0$, 称$f$为**调和**函数. 

在坐标卡$(U,\varphi)$下, $\Delta f=\dfrac{1}{\sqrt{\det[g_ {ij}]}}\partial_i(g^{ij}\sqrt{\det[g_ {ij}]}\partial_jf)$. 

## 3 测地线

### 3.1 测地线与指数映照

**定义3.1.1**: 一个光滑曲线$\gamma:I\to M$称为**测地线**, 如果$\nabla_ {\gamma'}{\gamma'}\equiv0$. 

 在坐标卡$(U,\varphi)$下, 令$x^k(t)=x^k(\gamma(t))$, 则$\gamma$是测地线等价于对任意$k$, $\dfrac{\mbox{d}^2x^k}{\mbox{d}t^2}+\Gamma_ {ij}^k\dfrac{\mbox{d}x^i}{\mbox{d}t}\dfrac{\mbox{d}x^j}{\mbox{d}t}=0$. 这是一个二阶非线性常微分方程组, 它对任意$p\in M$和$v\in T_pM$都存在唯一解, 使得$\gamma'(0)=v$, 这样的解记为$\gamma_v$. 

**定理3.1.1**: 对任一测地线$\gamma$, $\|\gamma'(t)\|$恒定. 

*Proof.* $\dfrac{\mbox{d}}{\mbox{d}t}\langle\gamma'(t),\gamma'(t)\rangle=2\langle\nabla_ {\gamma'(t)}{\gamma'(t)},\gamma'(t)\rangle=0$. $\quad\Box$

我们下面对初始切向量进行一些限制. 

**定义3.1.2**: 对流形$M$, 其上点$p$处的**单位切向量**组成的集合$U_pM:=\lbrace v\in T_pM\mid \|v\|=1\rbrace$.**单位切丛**$UM:=\bigcup\limits_ {p\in M}U_pM$. 

易见$U_pM$与单位球面$S^{n-1}$是同胚的, 也具有紧性, 于是存在与$\xi$无关的$\delta=\delta(p)$, 使得$\gamma_\xi(t)$对任意$\xi\in U_pM,t\in(-\delta,\delta)$均存在. 换言之, 对任意$u\in T_pM,\|u\|<\delta, \gamma_u(1)$存在. 

基于此可以定义所谓“指数映照”的概念. 

**定义3.1.3**: 对任意$p\in M$, **指数映照**$\exp_p:B(O_p,\delta)(:=\lbrace v\in T_pM\mid\|v\|<\delta\rbrace)\to M$定义为$u\mapsto\gamma_u(1)$. 

容易看到$\exp_p(t\xi)=\gamma_\xi(t),\lvert t\rvert\leqslant1,\xi\in B(O_p,\delta)$和$\exp_p(O_p)=p$. 切空间作为欧氏空间当然也有流形结构, 于是可以考虑$\exp_p$的切映射有如何性质, 最方便研究的自然是$(\exp)_ * \mid_ {O_p}:T_ {O_p}(T_pM)\to T_pM$. 但欧氏空间的切空间和本身自然别无二致, 于是我们可以将此映射视为$T_pM$的一个自映射. 依定义, $(\exp)_ * \mid_ {O_p}(u)=\dfrac{\mbox{d}}{\mbox{d}t}\exp_p(tu)=\gamma_u'(0)=u$, 这说明$(\exp)_ * \mid_ {O_p}$不是别的, 正是$\mbox{id}_ {T_pM}$.因此通过反函数定理, 我们知道存在$\varepsilon<\delta$, 使得$\exp_p\mid_ {B(O_p,\varepsilon)}$是微分同胚, 其像是$M$上的一个开集$B$, 于是乎可以有: 

**定义3.1.4**: $\log_p:B\to B(O_p,\varepsilon)$为$\exp_p$在局部上的逆映射. 需要注意到$(B,\log_p)$是一个坐标卡, $T_pM$作为欧氏空间有标准正交基$\lbrace e_i\rbrace_ {i=1}^n$, 其上坐标函数$\lbrace x^i\rbrace_ {i=1}^n$为$\log_p(q)=x^i(q)e_i$, $(B,\log_p,x^i)$就称为一个**标准坐标**. 

**注3.1.1**: 这里的$\exp$和$\log$仅仅是记号而无算数含义, 但在某些特殊情形（如Lie群和Lie代数之间的映射）下其确实可写成真正的指数映照. 

沿着上面的思路, 我们不禁要问$(\exp)_ * \mid_ {u}$在$\|u\|\neq0$时又是什么样子呢？这将在后面给出答案. 

### 3.2 变分与Jacobi场

方便起见, 我们先引入曲率张量的概念. 

**定义3.2.1**: **曲率张量**$R$是一个$(1,3)-$张量, 定义为$R(X,Y)Z:=\nabla_X\nabla_YZ-\nabla_Y\nabla_XZ-\nabla_ {[X,Y]}Z$. 

仅从定义是看不太出R确实是一个张量的, 不过这一点容易验证. 

**定理3.2.1**: $R(X,Y)Z=-R(Y,X)Z$, $R(X,Y)Z+R(Y,Z)X+R(Z,X)Y=0$, $\langle R(X,Y)Z,W\rangle=\langle R(Z,W)X,Y\rangle$, $\langle R(X,Y)Z,W\rangle=-\langle R(X,Y)W,Z\rangle$, $(\nabla_XR)(Y,Z)U+(\nabla_YR)(Z,X)U+(\nabla_ZR)(X,Y)U=0$. 其中, 第二个等式称为第一Bianchi恒等式, 第五个等式称为第二Bianchi恒等式. 

证明从略.

**注3.2.1**: 通过度量, 可以定义$(0,4)-$张量$R$如下: $R(X,Y,Z,W)=\langle R(X,Y)Z,W\rangle$, 其也被称为曲率张量, 由于**定理3.2.1**中第三第四两个等式, 它有时也被记为$R(X\wedge Y,Z\wedge W)$, 在后面我们会让这个记号拥有具体意义. 在局部坐标下, $R(\partial_i,\partial_j)\partial_k=R_ {ijk}^l\partial_l$, $R(\partial_i,\partial_j,\partial_k,\partial_l)=R_ {ijkl}$, 显然两个系数之间有$R_ {ijkl}=R_ {ijk}^mg_ {ml}$. 

这下可以考虑$(\exp)_ * \mid_ {u}:T_u(T_pM)\to T_ {\gamma_u(1)}M$为何物了, 当然其来源仍可以视为$T_pM$.固定$\xi\in T_u(T_pM)$, $[s\mapsto u+s\xi]$为$\xi$代表的等价类中的一个曲线. 定义$\alpha:[0,1]\times(-\varepsilon,\varepsilon)\to M$为$[(t,s)\mapsto \exp_p t(u+s\xi)]$, 记$c_s(\cdot):=\alpha(\cdot,s)$, 可见$c_s'(0)=u+s\xi$. 另一方面$Y(t):=\left[t\mapsto\dfrac{\partial\alpha}{\partial s}\bigg\vert_ {(t,0)}\right]$是$\gamma_u$上的一个向量场, 其中$\dfrac{\partial\alpha}{\partial s}\bigg\vert_ {(t,0)}:=\alpha_ * \left(\dfrac{\partial}{\partial s}\right)\bigg\vert_ {(t,0)}$. 根据定义有$Y(1)=(\exp)_ * \mid_ {u}(\xi)$, 事实上$Y(t)=(\exp)_ * \mid_ {tu}(t\xi)=t(\exp)_ * \mid_ {tu}(\xi)$. 更一般地, 我们可以考虑所谓“变分”: 

**定义3.2.2**: 对任意光滑映射$\alpha:[a,b]\times(-\varepsilon,\varepsilon)\to M$, 对任意$s\in(-\varepsilon,\varepsilon)$, 称$c_s(\cdot):=\alpha(\cdot,s)$为$c_0$关于$\alpha$的**变分**. 

$\left(\dfrac{\partial\alpha}{\partial t},\dfrac{\partial\alpha}{\partial s}\right):=\left(\alpha_* \left(\dfrac{\partial}{\partial t}\right),\alpha_* \left(\dfrac{\partial}{\partial s}\right)\right)$为$\mbox{im}\alpha$上的两个切向量场, 由于两者被$\alpha_* $作用前Lie括号为$0$, 故作用后也有$\left[\dfrac{\partial\alpha}{\partial t},\dfrac{\partial\alpha}{\partial s}\right]=0$, 因此$R\left(\dfrac{\partial\alpha}{\partial t},\dfrac{\partial\alpha}{\partial s}\right)=\nabla_ {\frac{\partial\alpha}{\partial t}}\nabla_\frac{\partial\alpha}{\partial s}-\nabla_ {\frac{\partial\alpha}{\partial s}}\nabla_\frac{\partial\alpha}{\partial t}$. 

对于刚才的情形而言, $c_s(t)=\exp_p(t(u+s\xi))$为测地线, $\nabla_ {\frac{\partial\alpha}{\partial t}}\dfrac{\partial\alpha}{\partial t}=\nabla_ {c_s'(t)}c_s'(t)=0$, $Y'(t)=\nabla_ {\frac{\partial\alpha}{\partial t}}(Y(t))=\nabla_\frac{\partial\alpha}{\partial t}\dfrac{\partial\alpha}{\partial s}\bigg\vert_ {(t,0)}=\nabla_\frac{\partial\alpha}{\partial s}\dfrac{\partial\alpha}{\partial t}\bigg\vert_ {(t,0)}$, $$\begin{aligned}Y''(t)=&\nabla_ {\frac{\partial\alpha}{\partial t}}(Y'(t))\\=&\nabla_ {\frac{\partial\alpha}{\partial t}}\left(\nabla_\frac{\partial\alpha}{\partial s}\dfrac{\partial\alpha}{\partial t}\bigg\vert_ {(t,0)}\right)\\=&\nabla_ {\frac{\partial\alpha}{\partial s}}\nabla_\frac{\partial\alpha}{\partial t}\dfrac{\partial\alpha}{\partial t}\bigg\vert_ {(t,0)}+R\left(\dfrac{\partial\alpha}{\partial t},\dfrac{\partial\alpha}{\partial s}\right)\dfrac{\partial\alpha}{\partial t}\bigg\vert_ {(t,0)}\\=&-R\left(\dfrac{\partial\alpha}{\partial s},\dfrac{\partial\alpha}{\partial t}\right)\dfrac{\partial\alpha}{\partial t}\bigg\vert_ {(t,0)}\\=&-R(Y(t),\gamma_u'(t))\gamma_u'(t).\end{aligned}$$ 

故$Y(t)$满足$Y''(t)+R(Y(t),\gamma_u'(t))\gamma_u'(t)=0,Y(0)=0,Y'(0)=\xi$. 

**定义3.2.3**: 若沿测地线$\gamma_u$的切向量场$Y(t)$满足$Y''(t)+R(Y(t),\gamma_u'(t))\gamma_u'(t)=0$, 则称它为一个**Jacobi场**. 所有沿$\gamma_u$的Jacobi场记为$Jac(\gamma_u)$. 

**注3.2.1**: $Jac(\gamma_u)$实际上是一向量空间, $\dim Jac(\gamma_u)=2\dim M$. 其上还有由$\omega(J_1,J_2)=\langle J_1',J_2\rangle-\langle J_1,J_2'\rangle$导出的辛结构. 在此我们更关注所谓“**正规Jacobi场**”$Jac^\perp(\gamma_u)$, 要求$Y(t)\perp \gamma_u'(t)$, 因为对$Y(t)//\gamma_u'(t)$, $Y''(t)=0$, $Y(t)=(a+bt)\gamma_u'(t)$. 

下面是著名的Gauss引理: 

**定理3.2.2**: $\langle(\exp)_ * \vert_ {tu}(\xi),\gamma_u'(t)\rangle=\langle u,\xi\rangle$. 

*Proof.* 上面的讨论得到$Y(t)=(\exp)_ * \vert _ {tu}(t\xi)$是一个Jacobi场, $Y''(t)+R(Y(t),\gamma_u'(t))\gamma_u'(t)=0$. 先计算$$\dfrac{\mbox{d}^2}{\mbox{d}t^2}\langle Y(t),\gamma_u'(t)\rangle=\dfrac{\mbox{d}}{\mbox{d}t}\langle Y'(t),\gamma_u'(t)\rangle=\langle Y''(t),\gamma_u'(t)\rangle=-\langle R(Y(t),\gamma_u'(t))\gamma_u'(t),\gamma_u'(t)\rangle=0,$$ 这说明$\langle Y(t),\gamma_u'(t)\rangle$是一个线性函数, 且$t=0$时也为$0$, 而$\dfrac{\mbox{d}}{\mbox{d}t}\langle Y(t),\gamma_u'(t)\rangle=\langle Y'(t),\gamma_u'(t)\rangle$, 其在$t=0$处取值为$\langle\xi,u\rangle$, 故$\langle Y(t),\gamma_u'(t)\rangle=t\langle\xi,u\rangle$, 于是$\langle(\exp)_ * \vert _ {tu}(\xi),\gamma_u'(t)\rangle=\left\langle\dfrac{1}{t}Y(t),\gamma_u'(t)\right\rangle=\langle u,\xi\rangle$. $\quad\Box$

**注3.2.2**: $\xi\perp u$和$\xi=u$的情形是值得注意的, 前者说明测地球的边缘$\partial B(p,\delta)\perp\gamma_u'(1)$, 后者说明指数映照在测地线径向方向保持长度. 

**定义3.2.4**: 设$\gamma_u$是$M$中一测地线, 若存在其上一非零Jacobi场满足$Y(0)=Y(1)=0$, 则称$\gamma_u(0)$与$\gamma_u(1)$沿$\gamma_u$**共轭**, $\dim\ker((\exp)_ * \vert_u)$称为共轭的**重数**. 

**注3.2.3**: $\dim\ker((\exp)_ * \vert_u)$也等于$\lbrace J\in Jac(\gamma_u)\mid J(0)=J(1)=0\rbrace$作为$Jac(\gamma_u)$的子空间的维数. 

**例3.2.1**: $\mathbb{R}^n$上的Jacobi场都是线性的. 

**例3.2.2**: $S^2$上的测地线是大圆, Jacobi场为$\sin(t)E(t)$, 其中$E(t)$是一个平行向量场, 对径点为一对共轭点. 

### 3.3 测地线的局部最短性、第一变分公式

本节我们先来验证测地线具有“局部最短”的性质. 

**命题3.3.1**: 设$\exp_p$定义在$O_p$的某个开邻域$U$中, 设$u\in U$, $c:[0,1]\to T_pM$为$[t\mapsto tu]$, 对任意$\varphi:[0,1]\to U$, 若$\varphi(0)=O_p,\varphi(1)=u$, 则对测地线$\gamma_u(t)=\exp_p(c(t))$和$\tilde\gamma(t)=\exp_p(\varphi(t))$, 有$L(\tilde\gamma)\geqslant L(\gamma_u)$. 若$\exp_p$的切映射满秩（也即无共轭点存在时）, 则上式的等号无法成立. 

*Proof.* 置$r(t):=\|\varphi(t)\|(r>0)$, 设$\varphi(t)=r(t)e(t)$. 因为$e(t)\in U_pM$, 故对$\langle e(t),e(t)\rangle=1$求导知$e(t)\perp e'(t)$. 于是$\varphi'(t)=r'(t)e(t)+r(t)e'(t)$, 由Gauss引理, $\|(\exp_p)_ * \vert _ {\varphi(t)}e(t)\|=1$, 且$\langle(\exp_p)_ * \vert_ {\varphi(t)}e(t),(\exp_p)_ * \vert_ {\varphi(t)}e'(t)\rangle=0$, 于是$\|\tilde\gamma'(t)\|=\|(\exp_p)_ * \vert_ {\varphi(t)}\varphi'(t)\|\geqslant\|(\exp_p)_ * \vert_ {\varphi(t)}r'(t)e(t)\|=\lvert r'(t)\rvert=\dfrac{\mbox{d}}{\mbox{d}t}\|\varphi(t)\|$, $L(\tilde\gamma)\geqslant\displaystyle\int_0^1\dfrac{\mbox{d}}{\mbox{d}t}\|\varphi(t)\|\mbox{dt}=\|\varphi(1)\|-\|\varphi(0)\|=\|u\|=L(\gamma_u)$. 当无共轭点存在时, $r>0$和$e'(t)\notin\ker(\exp_p)_ *$保证了不等号是严格的. $\quad\Box$

**例3.3.1**: $S^2$上北极点$N$的切平面中的圆$B(O_N,\pi)$的每一条半径并上一段圆弧在指数映照下都是$N$到南极点$S$的某条测地线的像. 

**例3.3.2**: 圆柱$\mathbb{R}\times S^1$上在同一$\lbrace x\rbrace\times S^1$且非$S^1$上对径的两点, 正向和反向弧均为测地线, 不同时最短, 但均局部最短. 

**注3.3.1**: 我们断言若一测地线上有共轭点$p,q$, 经过$q$有一点$r$, $p$到$r$的最短连线绝非此测地线, 证明会在后面出现. 

下面我们对更一般的情形讨论所谓“变分法”. 

**定义3.3.1**: 记$\Omega_ {p,q}$是所有从$p$到$q$的分段光滑曲线组成的集合, $\Omega_ {N,p}$是所有从$N\subset M$到$p$的分段光滑曲线组成的集合, $\Omega$为所有分段光滑回路组成的集合. 

在这里我们只讨论$\Omega_ {p,q}$的情形, 其余两种都是类似的, 但第一种最好算. 

**定义3.3.2**: 给定曲线$c:[a,b]\to M$, $c\in\Omega_ {p,q}$. 一个变分$\alpha:[a,b]\times(-\varepsilon,\varepsilon)\to M$被称作$c$在$\Omega_ {p,q}$中的**分段光滑变分**, 若它满足: (1)存在$a=t_0<t_1<t_2<\cdots<t_N=b$, 使得$\alpha\vert_ {[t_ {i-1},t_i]\times[-\varepsilon,\varepsilon]}$光滑; (2)$\lbrace c_s\rbrace_ {s\in(-\varepsilon,\varepsilon)}\subset\Omega_ {p,q}$. 

**定义3.3.3**: $\Omega_ {p,q}$上的**长度泛函**$L:\Omega_ {p,q}\to\mathbb{R}$就是$[\gamma\mapsto L(\gamma)]$. 

**注3.3.2**: $\Omega_ {p,q}$实际上是一个无穷维流形, 虽然其上结构未曾给出, 但我们可以通过“沿$c$的切向量场$W(t):=\dfrac{\partial\alpha}{\partial s}\bigg\vert_ {t=0}$”来直观理解$c_s$在$\Omega_ {p,q}$中在$c_0$处的一个切向量的概念. 由于所有$c_s$都在$\Omega_ {p,q}$中, 所以有边界条件$W(a)=W(b)=0$, 反过来, 给定任何满足此边界条件的沿$c$的切向量场$W(t)$, 分段光滑变分$\alpha(t,s)=\exp_ {c(t)}sW(t)$的给出的切向量场正是$W(t)$. 

接下来是“第一变分公式”: 

**命题3.3.2**: 设$c,\alpha,W,c_s$如上定义, 则$$\dfrac{\mbox{d}}{\mbox{d}s}\bigg\vert_ {s=0}L(c_s)=-\displaystyle\int_a^b\left\langle W(t),\nabla_ {\frac{\partial}{\partial t}}\dfrac{c'(t)}{\|c'(t)\|}\right\rangle\mbox{d}t+\sum_ {i=1}^{n-1}\left\langle W(t_i),\dfrac{c'(t_i-0)}{\|c'(t_i-0)\|}-\dfrac{c'(t_i+0)}{\|c'(t_i+0)\|}\right\rangle.$$

*Proof.* 

$$\begin{aligned}&\dfrac{\mbox{d}}{\mbox{d}s}\bigg\vert_ {s=0}L(c_s)\\ =&\dfrac{\mbox{d}}{\mbox{d}s}\bigg\vert_ {s=0}\int_a^b\left\langle\dfrac{\partial\alpha}{\partial t},\dfrac{\partial\alpha}{\partial t}\right\rangle^{\frac{1}{2}}\mbox{d}t\\ =&\int_a^b\dfrac{1}{2}\cdot\dfrac{\frac{\partial}{\partial s}\left\langle\frac{\partial\alpha}{\partial t},\frac{\partial\alpha}{\partial t}\right\rangle\bigg\vert_ {s=0}}{\|\frac{\partial\alpha}{\partial t}\\vert_ {(t,0)}}\mbox{d}t\\ =&\int_a^b\dfrac{\left\langle\nabla_ {\frac{\partial}{\partial s}}\frac{\partial\alpha}{\partial t},\frac{\partial\alpha}{\partial t}\right\rangle\bigg\vert_ {s=0}}{\|\frac{\partial\alpha}{\partial t}\\vert_ {(t,0)}}\mbox{d}t.\end{aligned}$$

回忆$\left[\dfrac{\partial\alpha}{\partial t},\dfrac{\partial\alpha}{\partial s}\right]=0$, 又有上式为

$$\begin{aligned}&\int_a^b\dfrac{\left\langle\nabla_ {\frac{\partial}{\partial t}}\frac{\partial\alpha}{\partial s},\frac{\partial\alpha}{\partial t}\right\rangle}{\|\frac{\partial\alpha}{\partial t}\|}\Bigg\vert_ {(t,0)}\mbox{d}t\\=&\int_a^b\left\langle\nabla_ {\frac{\partial}{\partial t}}\frac{\partial\alpha}{\partial s},\frac{\partial\alpha}{\partial t}/\|\frac{\partial\alpha}{\partial t}\|\right\rangle\bigg\vert_ {(t,0)}\mbox{d}t\\=&\int_a^b\left\langle\nabla_ {\frac{\partial}{\partial t}}\frac{\partial\alpha}{\partial s},\dfrac{c'(t)}{\|c'(t)\|}\right\rangle\bigg\vert_ {(t,0)}\mbox{d}t,\end{aligned}$$

 由联络保度量的性质知上式为$\displaystyle\int_a^b\frac{\partial}{\partial t}\left\langle\frac{\partial\alpha}{\partial s},\dfrac{c'(t)}{\|c'(t)\|}\right\rangle\bigg\vert_ {(t,0)}\mbox{d}t-\displaystyle\int_a^b\left\langle\frac{\partial\alpha}{\partial s},\nabla_ {\frac{\partial}{\partial t}}\dfrac{c'(t)}{\|c'(t)\|}\right\rangle\bigg\vert_ {(t,0)}\mbox{d}t$, 在被减项上对每段$[t_ {i-1},t_i]$运用微积分基本定理即明所欲证. $\quad\Box$

上述公式的左端可被理解为$\dfrac{\partial L}{\partial w}\bigg\vert_c$, 据此可以定义如下概念: 

**定义3.3.4**: $c\in\Omega_ {p,q}$被称为一个**临界曲线**, 如果: (1)$c$有常速度; (2)对$c$的任意分段光滑变分, $\dfrac{\mbox{d}}{\mbox{d}s}\bigg\vert_ {s=0}L(c_s)=0$. 

但实际这个定义恐有重复赘余之嫌, 因为我们可以证明: 

**命题3.3.3**: 如果$c$是临界曲线, 则$c$是测地线, 反之亦然. 

*Proof.* 逆命题是显然的, 我们只需证明正向. 对临界曲线$c$, 存在$a=t_0<t_1<t_2<\cdots<t_N=b$使得$c\vert_ {(t_ {i-1},t_i)}$光滑, 再令$W(t)=f(t)\cdot\nabla_ {\frac{\partial}{\partial t}}c'(t)$, 其中$f(t_i)=0$, $\|c'(t)\|=l$为常数, 由第一变分公式, $\dfrac{\mbox{d}}{\mbox{d}s}\bigg\vert_ {s=0}L(c_s)=-\displaystyle\int_a^b\left\langle W(t),\nabla_ {\frac{\partial}{\partial t}}\dfrac{c'(t)}{l}\right\rangle\mbox{d}t=-\dfrac{1}{l}\displaystyle\int_a^b\left\langle W(t),\nabla_ {\frac{\partial}{\partial t}}c'(t)\right\rangle\mbox{d}t=0$, 所以对任意$t\in(t_i,t_ {i+1})$, $\nabla_ {\frac{\partial}{\partial t}}c'(t)\equiv0$, 也是说每一段均为测地线. 下证$c$必须光滑, 取$W(t)$为$W(a)=W(b)=0$, $W(t_i)=c'(t_i-0)-c'(t_i+0)$, 此时再由第一变分公式可得结论成立（为什么？）.故$c$是连续可导的, 由测地线为常微分方程的解, 存在唯一性可推出$c$是光滑的. $\quad\Box$

**推论3.3.1**: 设$\exp_p:B(O_p,\varepsilon)\to M$是微分同胚, 则对任意$q\in\mbox{im}\exp_p$, 存在唯一的拥有弧长参数的最短测地线$\gamma$从$p$到$q$, 即$\gamma(t)=\exp_p(t(\log_pq))$, $\log_pq\in U_pM$是从$p$到$q$的最短测地线的切向量. 特别地, $\exp_p(B(O_p,\varepsilon))=B(p,\varepsilon)$. 

**推论3.3.2**: 令$\gamma:[a,b]\to M$是一个测地线, 并且在$t\in(a,b]$时无$\gamma(t)$与$\gamma(a)$沿$\gamma$共轭, 则存在$\gamma$在$\Omega_ {p,q}$中的一个开邻域$U$, 任意$c\in U$, $L(c)\geqslant L(u)$, 并且等号成立当且仅当$c=\gamma$. 

**推论3.3.3**: 流形上两点之间的最短道路是一条测地线. 

### 3.4 截面曲率一瞥

测地线在局部随Jacobi场变化的快慢是值得注意的, 我们来对一测地线$\gamma_u(t)$计算其上满足$Y(0)=0,Y'(0)=\xi$的Jacobi场的长度平方$\|Y(t)\|^2$的Taylor展开式. 

设$f(t)=\langle Y(t),Y(t)\rangle$, 显然$f(0)=0$.$f'(0)=2\langle Y(t),Y'(t)\rangle\vert_ {t=0}=0$.$f''(0)=2\langle Y'(t),Y'(t)\rangle\vert_ {t=0}+2\langle Y(t),Y''(t)\rangle\vert_ {t=0}=2$.而$Y''(0)=-R(Y(0),\gamma_u'(0))\gamma_u'(0)=0$, 故$f'''(0)=6\langle Y'(t),Y''(t)\rangle\vert_ {t=0}+2\langle Y(t),Y'''(t)\rangle\vert_ {t=0}=0$.又

$$\begin{aligned}Y'''(0)=&\nabla_ {\frac{\partial}{\partial t}}(Y'(t))\vert_ {t=0}=-\nabla_ {\frac{\partial}{\partial t}}(R(Y(t),\gamma_u'(t))\gamma_u'(t))\vert_ {t=0}\\=&\left((-\nabla_ {\frac{\partial}{\partial t}}R)(Y(t),\gamma_u'(t))\gamma_u'(t)-R(\nabla_ {\frac{\partial}{\partial t}}Y(t),\gamma_u'(t))\gamma_u'(t)\right)\bigg\vert_ {t=0}\\=&-R(Y'(t),\gamma_u'(t))\gamma_u'(t)\vert_ {t=0}=-R(\xi,u)u\end{aligned},$$ 

于是$f^{(4)}(0)=8\langle Y'(t),Y'''(t)\rangle\vert_ {t=0}=-8\langle R(\xi,u)u,\xi\rangle=-8R(\xi,u,u,\xi)$. 

故我们有: 

**命题3.4.1**: $\|Y(t)\|^2=t^2-\dfrac{1}{3}R(\xi,u,u.\xi)t^4+O(t^5)$. 

可以看到其曲率项$R(\xi,u,u,\xi)$影响了测地线局部散开的快慢, 这个量随看着奇怪, 但其出现却是十分自然, 在后面我们会看到这一项不是别的, 正是所谓“截面曲率”, 它是二维情况中Gauss曲率的推广. 

## 4 曲率与子流形几何初步

### 4.1 几种曲率

**定义4.1.1**: 对任意$p\in M$,$u,v\in T_pM$, $u,v$不平行, 定义$k(u,v):=R(u,v,v,u)$, $\sec(u,v):=\dfrac{k(u,v)}{\|u\wedge v\|^2}=\dfrac{k(u,v)}{\|u\|^2\|v\|^2-\langle u,v\rangle^2}$. 其中$\sec(u,v)$称为$\sigma:=\mbox{span}(u,v)$的**截面曲率**, 也记作$\sec(\sigma)$. 

**注4.1.1**: 此定义中暗含了给定$\sigma$后, 截面曲率无关于$u,v$的选取, 这个事情需要小作验证. 于是乎若记$G_2(p)$为$T_pM$的所有二维子空间, $\sec$将会是Grassman丛$G_2M:=\bigcup\limits_ {p\in M}G_2(p)$上的光滑函数. 

**注4.1.2**: $\sec$可以完全决定曲率算子, 并依$R(u,v,w,x)=\dfrac{1}{6}\dfrac{\partial^2}{\partial s\partial t}\bigg\vert_ {(0,0)}(k(u+sx,v+tw)-k(u+sw,v+tx))$决定. 

当$M$的所有截面曲率具有公共上界$A$时, 也记为$\sec(M)\leqslant A$, 上界、严格上界、严格下界的记号类似. 

**定义4.1.2**: 对$p\in M$, 定义**Ricci曲率张量**为$Ric:T_pM\times T_pM\to\mathbb{R}$为$Ric(u,v)=\mbox{tr}[x\mapsto R(x,u)v]$. 对$\xi\in U_pM$, $Ric(\xi):=Ric(\xi,\xi)$称为$p$处沿$\xi$方向的**Ricci曲率**. 

在$T_pM$的一组标准正交基$\lbrace e_i\rbrace_ {i=1}^n$下, $Ric(e_1)=\sum\limits_ {i=2}^nk(e_1,e_i)$, $Ric(u,v)=\sum\limits_ {i=1}^nR(e_i,u,v,e_i)$. 我们也约定Ricci曲率大于等于（或大于）某个数就是那一点处Ricci曲率张量的最小特征值大于等于（或大于）某个数; Ricci曲率小于等于（或小于）某个数就是那一点处Ricci曲率张量的最大特征值小于等于（或小于）某个数, 也记为$Ric\leqslant(\geqslant)A$这种形式. 

**定义4.1.3**: $p$处的**数量曲率**为$\mbox{Scal}(p)(=S(p)):=\mbox{tr}[Ric(-,-)]$. 

在$T_pM$的一组标准正交基$\lbrace e_i\rbrace_ {i=1}^n$下, 显然有$S(p)=\sum\limits_ {i=1}^nRic(e_i,e_i)=\sum\limits_ {i\neq j}\sec(e_i,e_j)$. 

显而易见, 依定义计算某个黎曼流形的曲率是非常困难的, 我们需要引入一些工具来简化计算. 

### 4.2 第二基本型与Gauss公式、Codazzi公式

**定义4.2.1**: 一个**黎曼子流形**是指一个等距嵌入$\varphi:(M^n,g)\hookrightarrow(\bar M^N,\bar g)$, $n<N$, 并总将$M$和$\varphi(M)$等同起来; 对$p\in M$, 定义**法空间**$\mathcal{V}_pM$为$T_pM$在$T_p\bar M$中的正交补, 其中元素称为**法向量**; $M$上的**法丛**$\mathcal{V}M:=\bigcup\limits_ {p\in M}\mathcal{V}_pM$. 

对于$x\in T_p\bar M$, 记$x=x^T+x^\perp$为其关于$T_pM$和$\mathcal{V}_pM$的分解. 

**命题4.2.1**: 令$\bar\nabla$和$\nabla$分别为$(\bar M,\bar g)$和$(M,g)$上的Levi-Civita联络. 对任意$p\in M$, $v\in T_pM$, $Y\in\Gamma(TM)$, 有$\nabla_vY=(\bar\nabla_vY)^T$. 

*Proof.* $D_uY:=\bar\nabla_uY-(\bar\nabla_uY)^\perp$, 容易验证$D$保度量且无挠, 这说明它是$M$上的Levi-Civita联络. 

下面均默认$M\hookrightarrow\bar M$是一个黎曼子流形且二者的Levi-Civita联络分别为$\nabla,\bar\nabla$, 并且其上定义了法丛. 

**定义4.2.2**: 对称双线性映射$\mbox{II}:T_pM\times T_pM\to\mathcal{V}_pM$, $(u,v)\mapsto(\bar\nabla_uY)^\perp$, 其中$Y$是$v$在$\Gamma(TM)$中的任意延拓, 此定义实际上不依赖于$Y$的选取, 其被称为$M\hookrightarrow\bar M$的**第二基本型**.对任意$\xi\in\mathcal{V}_pM$, $\mbox{II}_\xi(u,v):=\langle\mbox{II}(u,v),\xi\rangle$有时也被称为第二基本型. 

这里可以验证其对称性: 将$u,v$分别延拓为$X,Y\in\Gamma(TM)$, 则$\mbox{II}(u,v)-\mbox{II}(v,u)=(\bar\nabla_XY-\bar\nabla_YX)^\perp=([X,Y])^\perp=0$.其双线性性和张量性的验证从略. 

**定义4.2.3**: 定义为$\langle S_\xi(u),v\rangle:=\mbox{II}_\xi(u,v)$的自伴随线性算子$S_\xi$被称作**形状算子**. 

事实上设$Y\in\Gamma(TM)$延拓了$u$, $\Xi\in\Gamma(\mathcal{VM})$延拓了$\xi$, 由于$\mbox{II}_\xi(u,v)=\langle(\bar\nabla_uY)^\perp,\xi\rangle=\langle\bar\nabla_uY,\Xi\rangle\vert_p=u\langle Y,\Xi\rangle-\langle Y,\bar\nabla_u\Xi\rangle\vert_p=-\langle Y,(\bar\nabla_u\Xi)^T\rangle\vert_p$, 可得$S_\xi(u)=-(\bar\nabla_u\Xi)^T$. 

**注4.2.1**: 形状算子有时也被称作“Weingarten映射”. 

**定义4.2.4**: $\mbox{II}_\xi$或$S_\xi$的特征值称为$M\hookrightarrow\bar M$沿$\xi$的**主曲率**, 所有特征值之和称为**平均曲率**, 记为$m(\xi)$. 

当$\dim\bar M=\dim M+1$时, $\xi$的选择在相差一个符号的意义下唯一, 此时可以省略$\mbox{II}_\xi$或$S_\xi$的下标. 

下面我们介绍“Gauss公式”. 

**定理4.2.1**: 令$R,\bar R$分别是$M,\bar M$的曲率张量, $\sec,\overline\sec$分别是二者的截面曲率, 则对$p\in M$, $u,v,w\in T_pM$, 有: (1)$R(u,v)w=(\bar R(u,v)w)^T-S_ {\mbox{II}(u,w)}v+S_ {\mbox{II}(v,w)}u$; (2)$R(u,v,w,x)=\bar R(u,v,w,x)+\langle\mbox{II}(u,x),\mbox{II}(v,w)\rangle-\langle\mbox{II}(u,w),\mbox{II}(v,x)\rangle$; (3)$\sec(u,v)=\overline\sec(u,v)+\dfrac{\langle\mbox{II}(u,u),\mbox{II}(v,v)\rangle-\|\mbox{II}(u,v)\|^2}{\|u\|^2\|v\|^2-\langle u,v\rangle^2}$. 

*Proof.* 我们只证明(1), (2)(3)就都是简单的计算了. 因为这些符号的定义都不依赖于延拓的选取, 故以下计算中的联络的分量都默认已经选好延拓, 延拓后的向量场仍用原本的字母表示. 

$\begin{aligned}&(\bar R(u,v)w)^T\\=&(\bar\nabla_u\bar\nabla_vw-\bar\nabla_v\bar\nabla_uw-\bar\nabla_ {[u,v]}w)^T\\=&(\bar\nabla_u(\nabla_vw+\mbox{II}(v,w))-\bar\nabla_v(\nabla_uw+\mbox{II}(u,w))\\&-\nabla_ {[u,v]}w-\mbox{II}([u,v]w))^T\\=&(\nabla_u\nabla_vw+\mbox{II}(u,\nabla_vw)+\bar\nabla_u(\mbox{II}(v,w))\\&-\nabla_v\nabla_uw-\mbox{II}(v,\nabla_uw)-\bar\nabla_v(\mbox{II}(u,w))\\&-\nabla_ {[u,v]}w-\mbox{II}([u,v]w))^T\\=&R(u,v)w+S_ {\mbox{II}(u,w)}v-S_ {\mbox{II}(v,w)}u\end{aligned}$. $\quad\Box$

这给了我们从大流形的几何推出小流形上几何的强有力手段, 但我们想从小流形去推断大流形信息的话还需要关注法方向的$(\bar R(u,v)w)^\perp$. 对$\Xi\in\Gamma(\mathcal{V}M),u\in T_pM$, 我们可以把$\bar\nabla_u\Xi$分解为切方向和法方向, 切方向上文中已归结到对形状算子$S_\xi$的研究, 而对于法方向, 我们也有类似的公式. 

**定义4.2.5**: 在法丛$\mathcal{V}M$上定义的联络$\nabla^\perp$如下: $\nabla^\perp_x\Xi:=(\bar\nabla_x\Xi)^\perp$. 

定义的合理性留作自证. 下面我们来介绍“Codazzi公式”. 

**定理4.2.2**: $(\bar R(u,v)w)^\perp=(\nabla_u^\perp\mbox{II})(v,w)-(\nabla_v^\perp\mbox{II})(u,w)$. 其中$(\nabla_u^\perp\mbox{II})(v,w):=\nabla_u^\perp(\mbox{II}(v,w))-\mbox{II}(\nabla_uv,w)-\mbox{II}(v,\nabla_uw)$, 另一项含义类似. 

这个证明是平凡的, 将Gauss公式的证明稍作改动（$^T$换为$^\perp$）即可得到. 

**注4.2.2**: 这里其实是把$\nabla_u^\perp$的定义延拓到了张量丛上. 

### 4.3 牛刀小试: $S^n(r)$和$\mathbb{H}^n$上的几何

我们先考虑欧氏空间中的$n$维球面$S^n(r)(:=\lbrace (x_i)_ {i=1}^n|\sum\limits_ {i=1}^nx_i^2=r^2\rbrace)\subset\mathbb{R}^{n+1}$, 并把欧氏空间中的点和向量等同起来. 

$p\in S^n(r)$诱导一法向量$\xi_p:=\dfrac{p}{r}\in\mathcal{V}_pS^n(r)$, 对任意$X\in\Gamma(TS^n(r))$, 取$\Xi$为$\xi_p$的自然延拓（$\Xi(p)=\dfrac{p}{r}$）, 则$S_\xi X\vert_p=-(\bar\nabla_X\Xi)^T\vert_p$. 取$X$的一条积分曲线$\gamma:(-\varepsilon,\varepsilon)\to S^n(r)$, $\gamma(0)=p,\gamma'(0)=X(p)$, $S_\xi X\vert_p=-\left(\dfrac{\mbox{d}}{\mbox{d}t}\bigg\vert_ {t=0}\Xi(\gamma(t))\right)^T=-\dfrac{1}{r}X(p)$. 于是$\mbox{II}_\xi(u,v)=-\dfrac{1}{r}\langle u,v\rangle\xi$, 由Gauss公式$R(u,v)w=\dfrac{1}{r^2}(\langle v,w\rangle u-\langle u,w\rangle v)$, 当取$u,v$是标准正交时, $\sec(u,v)=\dfrac{1}{r^2}$. 

而测地线是说$\nabla_ {\gamma'}\gamma'=0$, 也就是$(\bar\nabla_ {\gamma'}\gamma')^T=0$, 其中$\gamma(0)=p,\gamma'(0)=u\in T_pS^n(r)$, 这也即是说$\gamma'':=\bar\nabla_ {\gamma'}\gamma'\in\mathcal{V}_pS^n(r)$, 于是$\gamma''(t)=f(t)\Xi(\gamma(t))$, 对$\langle\gamma,\gamma'\rangle=0$求导得$\langle\gamma,\gamma''\rangle=-\langle\gamma',\gamma'\rangle=-1$, 又$\langle\gamma''(t),\gamma(t)\rangle=\langle f(t)\Xi(\gamma(t)),r\cdot\Xi(\gamma(t))\rangle=rf(t)$, 故$f(t)=-\dfrac{1}{r}$, $\gamma''(t)=-\dfrac{1}{r^2}\gamma(t)$. 解此常微分方程即得$\gamma(t)=\cos\dfrac{t}{r}p+\sin\dfrac{t}{r}(ru)$, 这正是大圆. 

对于Jacobi方程$Y''(t)+\dfrac{1}{r^2}Y(t)=0$, $\gamma(t)=a\cos\dfrac{t}{r}E_1(t)+br\sin\dfrac{t}{r}E_2(t)$, 其中$E_1,E_2$为沿$\gamma$平行移动的向量场, $Y(0)=aE_1(0)$, $Y'(0)=bE_2(0)$. 

另一个重要的例子是双曲空间$\mathbb{H}^n:=\lbrace (x^i)_ {i=1}^n|x^n>0\rbrace(n\geqslant2)$, 其上度量为$\varphi^2g_0$, 其中$\varphi=\dfrac{1}{x^n}$, $g_0$是正常的欧氏度量. 

事实上这是所谓“共形变换”的一个特例, 对原本的黎曼流形$(M,g)$, 将其度量变更为$(M,\varphi^2g)$时, 记$f:=\ln\varphi$, 则新的联络$\nabla_X^\varphi Y=\nabla_XY+X(f)Y+Y(f)X-\langle X,Y\rangle\cdot\mbox{grad}f$.若对两$(0,2)-$张量$h,k$, 定义$(h\odot k)(x,y,z,w):=h(x,z)k(y,w)+h(y,w)k(x,z)-h(x,w)k(y,z)-h(y,z)k(x,w)$, 则新的曲率张量$R^\varphi=\exp(2f)(R+(\mbox{Hess}f-\mbox{d}f\otimes\mbox{d}f+\dfrac{1}{2}\|\mbox{grad}f\|^2g)\odot g)$.这部分公式留待自证. 

将上述内容应用到$\mathbb{H}^n$上, 可得$f=-\ln x^n$, $R^\varphi(x,y,z,w)=-\langle x,w\rangle\langle y,z\rangle+\langle x,z\rangle\langle y,w\rangle$, 这推出$\mathbb{H}^n$具有常截面曲率$-1$.下面考虑测地线, 记$\gamma(t)=(\sigma(t),y(t))$, 其中$\sigma(t)\in \mathbb{R}^{n-1},y(t)\in\mathbb{R}^+$, 则$\sigma''(t)-2\dfrac{y'}{y}\sigma'=0,y''-2\dfrac{y'}{y}+y=0$, 它的解是与$\mathbb{R}^{n-1}$正交的圆弧; 类似地, 其上Jacobi场为$Y(t)=a\cosh E_1(t)+b\sinh tE_ {2}(t)$. 

至此我们已经学习了三类具有常截面曲率的空间, 分别是球面$S^n$、欧氏空间$\mathbb{R}^n$和双曲空间$\mathbb{H}^n$, 它们分别具有$1,0,-1$的常截面曲率. 可以观察到, 对它们的研究, 或其它具有常截面曲率$k$的空间的研究, 会归咎到常微分方程$f''(t)+kf(t)=0$, 其中$f(0)=0$, $f'(0)$待定. 为日后方便起见, 我们引入以下记号: $\mbox{sn}_k(t)$在$k<0$时表示$\dfrac{\sinh(\sqrt{|k|}t)}{\sqrt{|k|}}$, $k=0$时表示$t$, $k>0$时表示$\dfrac{\sin(\sqrt{k}t)}{\sqrt{k}}$, 其导数就记为$\mbox{cn}_k(t)$. 它们正是上面方程的一类解. 那一个问题是, 如果截面曲率非常数, 我们如何通过原本的流形来进行研究呢？这将牵出我们对好的“比较定理”的兴趣. 

### 4.4 平分空间

现在到了兑现**注3.2.1**的诺言的时候了, 为方便起见, 我们定义一些新的记号. 

**定义4.4.1**: 设$\lbrace e_i\rbrace$是$T_pM$的标准正交基, 定义$\Lambda^2_pM$为拥有标准正交基$\lbrace e_i\wedge e_j\rbrace_ {i<j}$的内积空间, 称为**平分空间**, 其上的度量就是$g(x_ {1}\wedge x_ {2},y_ {1}\wedge y_ {2})=\det[g(x_i,y_j)]$, $\Lambda^2M:=\bigcup\limits_ {p\in M}\Lambda_p^2M$为$M$上的**平分丛**. 

**定义4.4.2**: 定义$\mathfrak{R}:\Lambda^2_pM\times\Lambda^2_pM\to\mathbb{R}$为$\mathfrak{R}(x\wedge y,v\wedge w)=R(x,y,v,w)$. 

**注4.4.1**: 通过度量, 当然也可以类似地定义$\mathfrak{R}:\Lambda^2_pM\to\Lambda_p^2M$, 这二者都仍被称作曲率算子. 

这里有两个有趣的命题, 不过不做证明: 

**命题4.4.1**: 若标准正交基$\lbrace e_i\wedge e_j\rbrace$对角化$\mathfrak{R}$, 即是说$\mathfrak{R}(e_i\wedge e_j)=\lambda_ {ij}(e_i\wedge e_j)$, 则$\sec(\sigma)\in[\min\lambda_ {ij},\max{\lambda_ {ij}}]$. 

**命题4.4.2**: 如果对任意互不相同的$i,j,k$都有$R(e_i,e_j)e_k=0$, 则$\lbrace e_i\wedge e_j\rbrace$对角化$\mathfrak{R}$. 

一个问题是, 什么样的流形会具有这样的曲率算子呢？我们后面会看到旋转对称流形（作为欧氏空间中旋转面的推广）会是一个好的载体。

### 4.5 距离函数

我们现在定义黎曼流形上的“距离函数”: 

**定义4.5.1**: 对黎曼流形$(M^n,g)$和其一个开集$U\subset M$, 一个函数$r:U\to\mathbb{R}$是一个**距离函数**, 如果在$U$上$\|\mbox{grad}r\|=1$.

**注4.5.1**: 有时把$\mbox{grad}r$记为$\partial_r$. 

$r$的等值面都是子流形, 对任意固定的$r_0\in\mbox{im}r$, 令$g_ {r_0}$为$H_ {r_0}:=r^{-1}(r_0)$上由$g$诱导的黎曼度量. 

$\mbox{Hess}r(X,Y)=:\langle S(X),Y\rangle$定义了一个算子$S$（将$-\partial_r$视作$H_ {r_0}$的法向量, 可以看到它其实和形状算子$S_ {-\partial_r}$一样）, 它会满足如下Ricatti恒等式: 

**定理4.5.1**: $U$是$M$中的开集, $r$是$U$上的一个距离函数, 则$\nabla_ {\partial_r}S+S^2+R(-,\partial_r)\partial_r=0$. 

*Proof.* 对任意$X\in\Gamma(TM\vert_U)$,$(\nabla_ {\partial r}S)(X)=\nabla_ {\partial_r}(S(X))-S(\nabla_ {\partial_r}X)=\nabla_ {\partial_r}(\nabla_x\partial_r)-\nabla_ {\nabla_ {\partial_r}X}\partial_r$.$S^2(X)=S(S(X))=\nabla_ {\nabla_x\partial_r}\partial_r$. 二者相加得$\nabla_ {\partial_r}(\nabla_x\partial_r)-\nabla_ {[\partial_r,X]}\partial_r$. 但$\langle\nabla_ {\partial_r}\partial_r,X\rangle=\mbox{Hess}r(\partial_r,X)=\mbox{Hess}r(X,\partial_r)=\langle \nabla_X\partial_r,\partial_r\rangle=\dfrac{1}{2}X\|\partial_r\|^2=0$. 于是$\nabla_ {\partial_r}\partial_r\equiv0$ , 故结论成立. $\quad\Box$

证明过程中我们还得到了一个副产品: 

**定理4.5.2**: 距离函数梯度场的积分曲线为测地线. 

**注4.5.2**: 我们需要注意在等值面上, Hessian场和第二基本形式几乎是同一个东西, 平均曲率和Laplace算子亦然. 而如果忽视几何意义, Ricatti方程和Jacobi方程也几乎是一个东西, 但它们的几何含义却有天壤之别. 

**定理4.5.3**: $L_ {\partial_r}g(X,Y)(:=\partial_r(g(X,Y))-g([\partial_r,X],Y)-g(X,[\partial_r,Y]))=2\mbox{Hess}r(X,Y)$.

*Proof.* 由Levi-Civita联络的定义可知$L_ {\partial_r}g(X,Y)=g(\nabla_X\partial_r,Y)+g(X,\nabla_Y\partial_r)$. $\quad\Box$

**注4.5.3**: 这里的$L_ {\partial_r}$其实就是微分流形中不依赖于度量定义的Lie导数. 

我们现在利用距离函数再计算一次球面$S^{n}(r)$的曲率. 

**例4.5.1**: 取$\mathbb{R}^n$中距离函数$r(x)=\|x\|$, 则$S^{n-1}(r_0)=r^{-1}(r_0)$, 于是在极坐标下$g_0=\mbox{d}r^2+r^2(\mbox{d}S^{n-1})^2=\sum\limits_ {i=1}^n(\mbox{d}x^i)^2$, $\mbox{d}r=\sum\limits_ {i=1}^n\dfrac{1}{r}x^i\mbox{d}x^i$, $\partial_r=\dfrac{1}{r}x^i\partial_i$. 则$2\mbox{Hess}r\vert_ {r=r_0}=L_ {\partial_r}(g_0)=\partial_r(r^2)(\mbox{d}S^{n-1})^2\vert_ {r=r_0}=2r_0(\mbox{d}S^{n-1})^2=\dfrac{2}{r_0}g_ {r_0}$. 由Gauss公式即知截面曲率为$\dfrac{1}{r_0^2}$.

**例4.5.2**: 对一般的$I\times_\varphi S^{n-1}$（也就是所谓的旋转对称流形）, $g=\mbox{d}r^2+\varphi^2(r)(\mbox{d}S^{n-1})^2$. 当$X,Y,Z,V,W$均在某一个球面的切空间中时$g_ {r_0}(R^{r_0}(X,Y)V,W)=\dfrac{1}{\varphi^2}g_ {r_0}(X\wedge Y,V\wedge W)$.$\mbox{II}=\mbox{Hess}r\vert_ {r=r_0}=\dfrac{\varphi'}{\varphi}g_ {r_0}$, 这推出$g(R(X,Y)Y,X)=\dfrac{1-\varphi'^2}{\varphi^2}g_ {r_0}(X\wedge Y,X\wedge Y)$.而对法方向, 由Codazzi公式, $g(R(X,Y)Z,\partial_r)=-(\nabla_X\mbox{II})(Y,Z)+(\nabla_Y\mbox{II})(X,Z)=0$, 这是因为$\mbox{II}=\mbox{Hess}r$只与$r$的值有关. 由Ricatti恒等式可得$R(X,\partial_r)\partial_r=-\dfrac{\varphi''}{\varphi}X$. 于是$\sec(X,\partial_r)=-\dfrac{\varphi''}{\varphi}$, $Ric(X)=(n-2)\dfrac{1-\varphi'^2}{\varphi^2}-\dfrac{\varphi''}{\varphi}$, $Ric(\partial_r)=-(n-1)\dfrac{\varphi''}{\varphi}\partial_r$, $\mbox{Scal}=-2(n-1)\dfrac{\varphi''}{\varphi}+(n-1)(n-2)\dfrac{1-\varphi'^2}{\varphi^2}$. 可见, 要求$I\times S^{n-1}$有平坦的Ricci曲率只能是$\varphi=r$.取$\varphi(t)=\mbox{sn}_k(t)$时, 其有常截面曲率$k$. 

### 4.6 体积微元、Jacobi算子

我们在微分流形中可以对微分形式进行积分, 却无法像数学分析中一样对函数进行积分, 现在我们有了黎曼度量, 可以完成这个愿望了. 

**定义4.6.1**: 对任何黎曼流形$(M^n,g)$, 任取局部有限的坐标覆盖$\lbrace (U_\alpha,x_\alpha^1,\cdots,x_\alpha^n)\rbrace$和一个从属于其的单位分解$\lbrace \rho_\alpha\rbrace$, 定义$\mbox{d}M=\mbox{dvol}:=(\rho_\alpha\sqrt{\det[g_ {ij}^\alpha]})\mbox{d}x_\alpha^1\wedge\cdots\wedge\mbox{d}x_\alpha^n$为其上的**体积微元**. 

**注4.6.1**: 容易验证上述定义无关于局部覆盖和单位分解的选取. 当黎曼流形可定向时, 在符合定向的坐标覆盖下其是一个正定$n-$形式, 此时称其为**体积形式**. 

对$M$上的可积函数$f$, 我们也记$\displaystyle\int_Mf(p)\mbox{dvol}=:\int_Mf(p)\mbox{d}p$. 

**定义4.6.2**: 黎曼流形$(M,g)$的子集$A$的**体积**$\mbox{vol}(A):=\displaystyle\int_M\chi_A\mbox{dvol}$, 如果上式收敛. 

上式右端的积分在单位分解下写出, 在某点处会是可数个积分求和, 此时也可以定义$\mbox{vol}(A)=+\infty$的记号. 

下面来研究$\partial B(p,r)$上的几何. 固定$p\in M$和使得$B(p,r)$中无$p$的共轭点的足够小的$r$, 固定$T_pM$的一组标准正交基$\lbrace e_i\rbrace_ {i=1}^n$, 可在$T_pM$上引入极坐标$(r,\Theta)\in\mathbb{R}^+\times S^{n-1}\cong T_pM$, 取定测地线$\gamma:\mathbb{R}^+\to M$, $\gamma(0)=p$, $\gamma'(0)=e_n$. $\lbrace te_i\rbrace_ {i=1}^n$是沿着$te_n$的Jacobi场, 于是指数映照得到$J_i(t)=(\exp_p)_*\vert_ {te_n}(te_i)$为$\gamma$上的Jacobi场, $J_i(0)=0,J_i'(0)=e_i$, Gauss引理说明$\langle J_i(t),\gamma'(t)\rangle=0$, $S^{n-1}(t)\subset T_pM$的面积微元为$\det((te_1)\wedge\cdots\wedge(te_ {n-1}))\mbox{d}\Theta$.现在要考虑$(\exp)\vert_ {te_n}$的Jacobi行列式$J(t,e_n)$, 这正是$\sqrt{\det(t^{-1}J_1,\cdots,t^{-1}J_ {n-1})(t^{-1}J_1,\cdots,t^{-1}J_ {n-1})^T}=\dfrac{1}{t^{n-1}}\sqrt{\det[\langle J_i,J_j\rangle]}$. 

**定义4.6.3**: $\sqrt{\det[\langle J_i,J_j\rangle]}\mbox{d}\Theta$就称为$M^n$在$p$处沿$e_n$的**面积微元**, 记为$A(t,e_n)\mbox{d}\Theta$. 

此时体积微元就是$\sqrt{\det[\langle J_i,J_j\rangle]}\mbox{d}r\mbox{d}\Theta$. 

下令$\lbrace E_i(t)\rbrace$为沿$\gamma$的平行向量场, $E_i(0)=e_i(i=1,\cdots,n-1)$, $J_i(t)=\sum\limits_ {j=1}^{n-1}a_ {ij}(t)E_j(t)$, $J_i(t_0)\perp\gamma'(t_0)$. 

**定义4.6.4**: $\mathbb{A}(t,e_n):=[a_ {ij}(t)]_ {(n-1)\times(n-1)}$称为$M^n$在$p$处沿$e_n$的**Jacobi算子**. 

方便起见, 下面省去$e_n$, 只写$\mathbb{A}(t)$. 可见$(J_1(t),\cdots,J_ {n-1}(t))^T=\mathbb{A}(t)(E_1(t),\cdots,E_ {n-1}(t))^T$, 于是$\mathbb{A}\mathbb{A}^T=[\langle J_i.J_j\rangle]$, 于是$\sqrt{\det[\langle J_i,J_j\rangle]}=\det\mathbb{A}$. 对任意$v\in T_pM$, 存在唯一的Jacobi场$J_v$使得$J_v(0)=0,J_v'(0)=v$. 设$v(t)$为$v$沿$\gamma$平行移动后得到的向量场, 我们可以得到

**命题4.6.1**: $J_v(t)=\mathbb{A}(t)v(t)$. 

对其两边求两次导, 就得到

**命题4.6.2**: $\mathbb{A}''(t)+R(t)\mathbb{A}(t)=0$, 其中$R(t):=[R(E_i(t),\gamma'(t),\gamma'(t),E_j(t))]$. 

下面定义$\mbox{II}(t):=\mathbb{A}'(t)\mathbb{A}^{-1}(t)$, 则$\mbox{II}(t_0)v=\mathbb{A}'(t_0)(\mathbb{A}^{-1}(t_0)v(t_0))$. $\mathbb{A}^{-1}(t_0)v$事实上是满足$Y(0)=0,Y(t_0)=v$的$Y\in Jac$的$Y'(0)$, 而对沿$\gamma$的平行向量场$w(t)$, 有$\mathbb{A}'(t_0)w(t_0)=(\mathbb{A}(t)w(t))'\vert_ {t=t_0}=J_w'(t_0)$, 所以其实我们有: 

**命题4.6.3**: $\mbox{II}(t_0)(Y(t_0))=Y'(t_0)$. 

我们对$\mbox{II}(t)$的定义求导, 就可以得到: 

**命题4.6.4**: $\mbox{II}'(t)+\mbox{II}^2(t)+R(t)=0$.

这与Ricatti恒等式非常相像, 事实上通过$\mbox{II}(t_0)v=Y'(t_0)=\dfrac{\partial}{\partial t}\left(\dfrac{\partial\alpha}{\partial s}\bigg\vert_ {s=0}\right)\bigg\vert_ {t=t_0}=\nabla_ {\frac{\partial\alpha}{\partial s}}\dfrac{\partial}{\partial t}\bigg\vert_ {(t_0,0)}=\nabla_v\partial_t$可以看出$\mbox{II}(t_0)$是$\partial B(p,t_0)$的一个形状算子. 又$\dfrac{\partial}{\partial t}\ln A(t,e_n)=\dfrac{(\det\mathbb{A})'}{\det\mathbb{A}}=\mbox{tr}(\mbox{II})$, 这事实上正是平均曲率, 于是我们有: 

**命题4.6.5**: $\dfrac{\partial}{\partial t}\ln A(t,e_n)\vert_ {t=t_0}$为$\partial B(p,t_0)$在$M$中的平均曲率, 记为$m(t_0)$. 

对于具有常截面曲率$k$的流形, 其$R(t)=kI$, 其中$I$是单位矩阵, 则$\mbox{II}(t)=\dfrac{\mbox{cn}_k(t)}{\mbox{sn}_k(t)}I$. 

## 5 比较定理

### 5.1 完备性、空间形式

对于黎曼流形而言, 有两种可供定义完备的方式, 一种是利用测地线, 另一种则是作为度量空间而定义. 

**定义5.1.1**: 对任意$p\in M$, $u\in T_pM$, $\gamma_u(t)$对任意$t\in(-\infty,\infty)$上均有定义, 则称$(M,g)$在$p$处是**测地完备**的; 若在每一点都测地完备, 就称它测地完备. 

**定义5.1.2**: 若$(M,g)$作为度量空间, 所有Cauchy列均收敛, 就称它是**度量完备**的. 

**例5.1.1**: $\mathbb{R}^2\setminus\lbrace 0\rbrace$配备通常的黎曼度量, 其作为度量空间两点间的距离就是所连曲线长度的下确界, 它既不是测地完备也不是度量完备的. 

但实际上看起来不甚相同的两种完备性其实是一样的, 我们有著名的“Hopf-Rinow定理”: 

**定理5.1.1**: 设$(M^n,g)$是一黎曼流形, 则以下命题等价: (1)$(M^n,g)$在$p\in M$测地完备; (2)$(M^n,g)$测地完备; (3)$\exist p\in M,\overline{B(p,r)}$对任意$r>0$是紧的; (4)$\forall p\in M,r>0$, $\overline{B(p,r)}$是紧的; (5)$M$配备由$g$诱导的度量后是度量完备的. 

证明略过. 据此我们就可以把两种完备性统称为**完备**的. 

**定义5.1.3**: 具有常截面曲率$k$的完备连通且单连通的$n$维黎曼流形称为曲率为$k$的$n$维**空间形式**, 记为$S_k^n$, 其中半径为$r$的球记为$B^n_k(r)$. 

事实上这个定义暗含了空间形式的唯一性, 我们不加证明地介绍如下定理: 

**定理5.1.2**: 具有常截面曲率$k$的完备连通且单连通的$n$维黎曼流形在等距意义下唯一. 

**注5.1.1**: 通过放缩可以把截面曲率变为$1,-1,0$中的一种, 这正是**4.3**中介绍的三种空间. 

### 5.2 截面曲率相关的比较定理(一)

我们先介绍一个数学分析中的引理. 

**引理5.2.1**: 设函数$k(t)\leqslant \bar k(t)$, $f,\bar f\geqslant0(t\in[0,+\infty))$, $f'(0)\bar f(0)\geqslant f(0)\bar f'(0)$. 则(1)若$f,\bar f$满足$f''+kf\geqslant0$, $\bar f''+\bar k\bar f\leqslant0$, 当$f>0$时$\dfrac{\bar f}{f}$单调递减; (2)令$\lambda(t)=(\ln f)'$, $\bar\lambda(t)=(\ln\bar f)'$, 若$\lambda'+\lambda^2+k\geqslant0$, $\bar\lambda'+\bar\lambda^2+\bar k^2\leqslant0$且$\bar\lambda(0)\leqslant\lambda(0)$, 则$\bar\lambda(t)\leqslant\lambda(t)$. 

证明略过.据此有“Rauch比较定理”: 

**定理5.2.1**: 设$(M^n,g)$是完备黎曼流形, $\gamma:[0,+\infty)\to M$是一个单位速度的测地线, $J(t)$是一个沿$\gamma$的正规Jacobi场, 且$J(0)=0$, $\|J'(0)\|=1$, 若$\sec(M)\leqslant k$, 则$\|J(t)\|\geqslant \mbox{sn}_k(t)$. 

*Proof.* 令$f(t)=\|J(t)\|$, 经计算可得$f''(t)\geqslant -kf(t)$.由**引理5.2.1**, 取$\bar k(t)=k$, $\bar f(t)=\mbox{sn}_k(t)$, 则$\dfrac{\mbox{sn}_k(t)}{f(t)}$单调递减, 而$\displaystyle\lim_ {t\to0^+}\dfrac{f(t)}{\mbox{sn}_k(t)}=\lim_ {t\to0^+}\dfrac{f(t)}{t}=\lim_ {t\to0^+}\langle\dfrac{J(t)-J(0)}{t},\dfrac{J(t)-J(0)}{t}\rangle^{\frac{1}{2}}=\|J'(0)\|=1$.于是结论成立. $\quad\Box$

“Berger比较定理”与之类似, 不过稍微修改了初值条件. 

**定理5.2.2**: 设$(M^n,g)$是完备黎曼流形, $\gamma:[0,+\infty)\to M$是一个单位速度的测地线, $J(t)$是一个沿$\gamma$的正规Jacobi场, 且$\|J(0)\|=1$, $J'(0)=0$, 若$\sec(M)\leqslant k$, 则$\|J(t)\|\geqslant \mbox{cn}_k(t)$. 

证明也是利用**引理5.2.1**, 不再赘述. 

**注5.2.1**: 事实上二者存在一个统一的推广形式, 也称作Rauch比较定理, 是说“设$(M^n,g)$是完备黎曼流形, $\gamma:[0,+\infty)\to M$是一个单位速度的测地线, $J(t)$是一个沿$\gamma$的正规Jacobi场, 若$R(t)\leqslant kI$, 则$\|J(t)\|\geqslant \|J'(0)\|\mbox{sn}_k(t)+\|J(0)\|\mbox{cn}_k(t)$. ”并且其实这个完备性的全局条件也可以被减弱到仅在完备的区间内讨论, 证明过程是完全类似的, 只是对$\|J(t)\|''$的估计稍微细化一点, 具体细节可参见Isaac Chavel的《Eigenvalues in Riemannian Geometry》. 

上面的**定理5.2.1**中的不等号反向时同样有类似结论, 也被称为Rauch比较定理, 但在证明之前我们需要一个引理: 

**引理5.2.2**: 设$\overline{\mbox{II}}(t)$是对称$(n-1)\times(n-1)$矩阵空间中的一条光滑道路, 并且满足$\overline{\mbox{II}}'(t)+\overline{\mbox{II}}^2(t)+kI\leqslant0$.则$\overline{\mbox{II}}(t)\leqslant\dfrac{\mbox{cn}_k(t)}{\mbox{sn}_k(t)}$.

*Proof.* 取$\bar\lambda(t)$是$\overline{\mbox{II}}(t)$的最大特征值, 其为Lipschitz函数, 于是几乎处处可导, 设它在$t=t_0$处可导, 设$E$为它的一个模长为1的特征向量, 设$f(t)=\langle E,\overline{\mbox{II}}(t)E\rangle$, 则$f(t_0)=\bar\lambda(t_0)$, $f(t)\leqslant\bar\lambda(t)$, 于是$f'(t_0)=\bar\lambda'(t_0)$, 故$\bar\lambda'(t_0)+\bar\lambda^2(t_0)=\langle E,(\overline{\mbox{II}}'(t_0)+\overline{\mbox{II}}^2(t_0))E\rangle\leqslant-k$.此时利用**引理5.2.1**即可, 对于不可导的点利用连续性逼近即可. $\quad\Box$

**定理5.2.3**: 设$(M^n,g)$是完备黎曼流形, $\gamma:[0,+\infty)\to M$是一个单位速度的测地线, $J(t)$是一个沿$\gamma$的正规Jacobi场, 且$J(0)=0$, $\|J'(0)\|=1$, 若$\sec(M)\geqslant k$, 则$\|J(t)\|\leqslant \mbox{sn}_k(t)$. 

*Proof.* $(\ln\|J\|)'=\dfrac{\|J\|'}{\|J\|}=\dfrac{\langle J,J'\rangle}{\|J\|^2}=\langle\dfrac{J}{\|J\|},\dfrac{J'}{\|J\|}\rangle=\langle\dfrac{J}{\|J\|},\mbox{II}(t)(\dfrac{J}{\|J\|})\rangle$.由**推论5.2.1**即知结论成立. $\quad\Box$

我们下面试图将上面对局部的Jacobi场的研究升格到对全局拓扑性质的研究, 先介绍一个定理. 

**定理5.2.4**: 对等距浸入$\pi:(M^n,g_M)\to(N^d,g_N)$, 若$(M^n,g_M)$完备, 则$\pi$是覆叠映射. 

证明略过, 我们将其应用在下述“Cartan-Hadamard”定理的证明上. 

**定理5.2.5**: 若$(M^n,g)$完备且$\sec(M)\leqslant0$, 则$M$的泛覆盖空间微分同胚于$\mathbb{R}^n$. 

*Proof.* 由Rauch比较定理, 若某一Jacobi场$J(t)$满足$J(0)=0$, 则$\|J(t)\|\geqslant\|J'(0)\|t$, 即$t>0$时$J(t)\neq0$, 于是$M$上无共轭点, 故指数映射$\exp_p$均非奇异, 由Gauss引理, $(T_pM,(\exp_p)^*g)$在$O_p$处完备, 于是由Hopf-Rinow定理它处处完备, 由**定理5.2.4**即知结论成立. $\quad\Box$

**例5.2.1**: $S^n(n>1)$上没有截面曲率处处非正的黎曼度量. 

当然, 这里$\sec(M)\leqslant0$只是为了说明$M$无共轭点, 所以其自然可以加强到: 

**定理5.2.6**: 若$(M^n,g)$完备且$M$无共轭点, 则$M$的泛覆盖空间微分同胚于$\mathbb{R}^n$. 

**注5.2.2**: 存在亏格为$8$的二维曲面, 它存在一个黎曼度量（形象地说, 这是一个六条腿的恐龙）使得某点处截面曲率大于$0$但其上没有共轭点(Ballmann-Brin-Burns). 一个开放的问题是若$(M^n,g)$没有共轭点, 那么是不是存在其上另一个黎曼度量$g'$使得$(M^n,g')$是截面曲率处处非正的？这方面的结果可在arxiv上搜索Ivanov-Kapovitch的一些工作. 

### 5.3 Ricci曲率相关的比较定理

我们来看看对单位速度测地线$\gamma$, $Ric(\gamma'(0))\geqslant (n-1)k$时会发生什么, 先给出一些记号. 

**定义5.3.1**: $\mbox{Conj}_p(\Theta):=\sup\lbrace T|\gamma(t)在[0,T)上无与p共轭的点\rbrace$称为$M$在$p$处沿$\Theta$方向的**共轭半径**; $\mbox{Conj}(M):=\inf\lbrace \mbox{Conj}(\Theta)|p\in M,\Theta\in U_pM\rbrace\in[0,+\infty]$称为$M$的**共轭半径**; $\mbox{cut}_p(\Theta):=\sup\lbrace t|d(p,\exp_p(t\Theta))=t\rbrace$.$\mathcal{Cut}_p(M):=\lbrace \mbox{cut}_p(\Theta)\cdot\Theta|\Theta\in U_pM\rbrace$称为$M$在$p$处的**切向割迹**; $\mbox{Cut}_p(M)=\exp_p(\mathcal{Cut}_p(M))$称为$M$在$p$处的**割迹**. 

此时对Riccati方程$\mbox{II}'(t)+\mbox{II}^2(t)+R(t)=0$, 对两端取$\mbox{tr}$, 并利用Cauchy-Schwarz不等式就得到$\left(\dfrac{\mbox{tr}\mbox{II}(t)}{n-1}\right)'+\left(\dfrac{\mbox{tr}\mbox{II}(t)}{n-1}\right)^2+k\leqslant0$. 设$\psi(t):=(\det\mathbb{A}(t))^{\frac{1}{n-1}}$, 则$(\ln\psi(t))'=\dfrac{\mbox{tr}\mbox{II}(t)}{n-1}$. 这两者结合事实上就有所谓的“Bishop定理”: 

**定理5.3.1**: 设$(M^n,g)$是完备黎曼流形, 且$Ric\geqslant(n-1)k$, 则$\det(\mathbb{A}(t,\Theta))\leqslant\mbox{sn}_k^{n-1}(t)$, 其中$\Theta\in U_pM$, $t\in\mbox{Conj}_p(\Theta)$. 

这个定理可以被加强到“Gromov定理”: 

**定理5.3.2**: 设$(M^n,g)$是完备黎曼流形, 且$Ric\geqslant(n-1)k$, 则$\dfrac{\det(\mathbb{A}(t,\Theta))}{\mbox{sn}_k^{n-1}(t)}$单调递减, 其中$\Theta\in U_pM$, $t\in\mbox{Conj}_p(\Theta)$. 

*Proof.* 只需证明$\dfrac{\psi(t)}{\mbox{sn}_k(t)}$单调递减, 求导之后也即证明$\psi'\mbox{sn}_k-\psi\mbox{cn}_k\leqslant0$. 注意上式左端在$t=0$时为$0$, 故只需证明此式也单调递减, 求导之后即是证明$(\psi''+k\psi)\mbox{sn}_k\geqslant0$. 而$\psi''=((\ln\psi)'\cdot\psi)'=\dfrac{1}{n-1}(\mbox{trII}\cdot\psi)'=\dfrac{1}{n-1}\left(\mbox{trII}'\psi+\mbox{trII}\cdot\psi'\right)\leqslant\dfrac{\psi}{n-1}\left(\dfrac{1}{n-1}(\mbox{trII})^2-\mbox{trII}^2-(n-1)k\right)\leqslant-k\psi$. 这恰为所求. $\quad\Box$

为了更精细的估计, 我们还需要一些准备工作, 回忆第一变分公式说明了临界曲线都是测地线, 但这样的曲线是“局部最大”还是“局部最小”的呢？为此, 下面要介绍所谓“第二变分公式”. 

考虑单位速度$\gamma:[a,b]\to M$, 光滑映射$\alpha:[a,b]\times(-\varepsilon,\varepsilon)\times(-\varepsilon,\varepsilon)\to M$, 记$T:=\dfrac{\partial\alpha}{\partial t}$, $U:=\dfrac{\partial\alpha}{\partial u}$, $V:=\dfrac{\partial\alpha}{\partial v}$并假设$\langle T,U\rangle\vert_ {(0,0)}=\langle T,V\rangle\vert_ {(0,0)}$, $\|T\\vert_ {(0,0)}=1$, $\nabla_TT\vert_ {(0,0)}=0$. 定义泛函$L(u,v):=\displaystyle\int_a^b\|T(t)\\vert_ {(u,v)}\mbox{d}t$.则$\dfrac{\partial L}{\partial u}=\displaystyle\int_a^b\dfrac{\langle\nabla_UT,T\rangle}{\|T\|}\mbox{d}t=\int_a^b\dfrac{\langle\nabla_TU,T\rangle}{\|T\|}\mbox{d}t$, $\begin{aligned}\displaystyle&\dfrac{\partial^2L}{\partial v\partial u}=\dfrac{\partial}{\partial v}\left(\int_a^b\dfrac{\langle\nabla_TU,T\rangle}{\|T\|}\mbox{d}t\right)\\=&\int_a^b\left(\dfrac{\langle\nabla_V\nabla_TU,T\rangle+\langle\nabla_TU,\nabla_VT\rangle}{\|T\|}-\langle\nabla_TU,T\rangle\cdot\dfrac{\langle\nabla_VT,T\rangle}{\|T\|^3}\right)\mbox{d}t\end{aligned}$.

于是$\begin{aligned}\displaystyle&\dfrac{\partial^2L}{\partial v\partial u}\bigg\vert_ {(0,0)}\\=&\int_a^b\left(R(V,T,U,T)+\langle\nabla_T\nabla_VU,T\rangle+\langle\nabla_TU,\nabla_TV\rangle-T\langle U,T\rangle\cdot T\langle V,T\rangle\right)\mbox{d}t\\=&\int_a^b\left(\langle\nabla_T\nabla_VU,T\rangle+\langle\nabla_TU,\nabla_TV\rangle-R(V,T,T,U)\right)\mbox{d}t\\=&\int_a^bT\langle\nabla_VU,T\rangle\mbox{d}t+\int_a^b\langle\nabla_TU,\nabla_TV\rangle-R(U,T,T,V)\mbox{d}t\\=&I_a^b(U,V)+\langle\nabla_VU,T\rangle\vert_a^b\end{aligned}$. 

其中$I_a^b(U,V):=\int_a^b\langle\nabla_TU,\nabla_TV\rangle-R(U,T,T,V)\mbox{d}t$称为沿$\gamma$的**指标形式**. 这便是第二变分公式: 

**定理5.3.3**: $\displaystyle\dfrac{\partial^2L}{\partial v\partial u}\bigg\vert_ {(0,0)}=I_a^b(U,V)+\langle\nabla_VU,T\rangle\vert_a^b$. 

事实上上面的讨论对分段光滑的变分也是成立的, 但这里与第一变分公式一样, 分部积分会在非光滑点出现一些左极限与右极限之差. 

作为应用, 我们来兑现**注3.3.1**的承诺, 也即所谓“Jacobi定理”: 

**定理5.3.4**: 设$(M^n,g)$是完备黎曼流形, $\gamma:[a,b]\to M$是单位速度测地线, 设$t_0\in(a,b)$满足$\gamma(t_0)$与$\gamma(a)$沿$\gamma$共轭, 则$d(\gamma(a),\gamma(b))<L(\gamma)$. 

*Proof.* 设$J$是沿$\gamma\vert_ {[a,t_0]}$的非零正规Jacobi场, 满足$J(a)=J(t_0)=0$. 定义$Y(t)$是沿$\gamma$的对$J(t)$的零延拓, 光滑映射$\varphi:[a,b]\to M$满足$\varphi(a)=\varphi(b)=0$, $\varphi(t_0)=1$, $E(t)$是沿$\gamma$的平行向量场, 并且$E(t_0)=-\nabla_ {\gamma'}J\vert_ {t_0}$. 对$\lambda\in(0,\varepsilon)$, 置$W(t):=Y(t)+\lambda\varphi(t)E(t)$, 取变分为$\alpha(t,u,v)=\alpha(t,s,s)=\alpha(t,s):=\exp_ {\gamma(t)}sW(t)$. 则此时第二变分公式中最后一项为$0$, 此时$\dfrac{\partial^2L}{\partial S^2}\bigg\vert_ {(0,0)}=I_a^b(W,W)=I_a^b(Y,Y)+2\lambda I_a^b(Y,\varphi E)+O(\lambda^2)=0+2\lambda I_a^{t_0}(I,\varphi E)+O(\lambda^2)=2\lambda\langle\nabla_TJ,\varphi E\rangle\vert_a^{t_0}+O(\lambda^2)=-2\lambda\|\nabla_TJ\\vert_ {t_0}^2+O(\lambda^2)$, 这说明对足够小的$\lambda$, 上式严格小于$0$, 于是$\gamma$非极小测地线, 对足够小的$s$, $\alpha(\cdot,s)$比之更短. 

基于此我们可以对直径进行估计, 有“Myers定理”: 

**定理5.3.5**: 设$(M^n,g)$是完备黎曼流形且$Ric\geqslant(n-1)$, 则$\mbox{Diam}(M,g)\leqslant\pi$.

*Proof.* 由Bishop定理, 若某一单位速度的连接两点的最短线（也是测地线）$\gamma:[0,t]\to M$长于$\pi$, 则有$t_0<L(\gamma)$使得$\det(\mathbb{A}(t_0,\Theta))=0$, 此时说明$\gamma(t_0)$与$\gamma(0)$沿$\gamma$共轭, 这与Jacobi定理矛盾. $\quad\Box$

**注5.3.1**: 这个定理也有经典的变分证明, 这里略过不表. 其等号的成立条件会在后面论述. 

其应用在拓扑上也有奇妙作用: 

**推论5.3.1**: 设$(M^n,g)$是完备黎曼流形且$Ric\geqslant(n-1)$, 则$M$紧且其基本群$\pi_1(M)$有限. 

*Proof.* 由Myers定理, $\mbox{Diam}(M,g)\leqslant\pi$, 故$M$是紧的. 设$\tilde M$为$M$的泛覆盖空间, 其上自然的拉回度量为$\tilde g$, 其同样有Ricci曲率（局部性质在局部等距浸入下不变）不小于$(n-1)$, 所以再用Myers定理可得$\tilde M$是紧的, 这也就说明$\pi_1(M)$有限. $\quad\Box$

下面我们要对体积进行比较, 再引入一个数学分析中的小引理: 

**引理5.3.1**: 设$f,g$是$\mathbb{R}$上可积的正的函数, $\dfrac{f}{g}$单调递减, 则对$0<r<R$, $0<s<S$, $r\geqslant s$, $R\geqslant S$, 有$\dfrac{\int_r^Rf(t)\mbox{d}t}{\int_r^Rg(t)\mbox{d}t}\leqslant\dfrac{\int_s^Sf(t)\mbox{d}t}{\int_s^Sg(t)\mbox{d}t}$. 

证明略过. 

**定义5.3.2**: 对流形$M$及其中一点$p$, $A^M_ {s,S}(p):=\lbrace x\in M|s\leqslant d(x,p)\leqslant S\rbrace$是以$p$为中心的一个**环形区域**. 

一个简单的观察是在空间形式$S^n_k$上环形区域的体积不依赖于中心的选取, 下面来证明“Bishop-Gromov体积比较定理”. 

**定理5.3.6**: 设$(M^n,g)$是完备黎曼流形, $Ric\geqslant(n-1)k$, 若$0<r<R$, $0<s<S$, $r\geqslant s$, $R\geqslant S$, 则$\dfrac{\mbox{vol}(A_ {s,S}^M(p))}{\mbox{vol}(A_ {r,R}^M(p))}\geqslant\dfrac{\mbox{vol}(A_ {s,S}^{S_k^n})}{\mbox{vol}(A_ {r,R}^{S_k^n})}$. 

*Proof.* 只需证明$\dfrac{\mbox{vol}(A_ {x,y}^M(p))}{\mbox{vol}(A_ {x,y}^{S_k^n})}$关于$x,y$都递减. 我们有$\mbox{vol}(A_ {x,y}^M(p))=\displaystyle\int_ {U_pM}\mbox{d}\Theta\int_ {\min\lbrace x,\mbox{cut}_p(\Theta)\rbrace}^{\min\lbrace y,\mbox{cut}_p(\Theta)\rbrace}\det\mathbb{A}(t,\Theta)\mbox{d}t$, 所以积分时我们仅考虑$x\leqslant\mbox{cut}_p(\Theta)$的情况.由Gromov定理和**引理5.3.1**, 对任意$z\geqslant y$, $\dfrac{\int_ {\min\lbrace x,\mbox{cut}_p(\Theta)\rbrace}^{\min\lbrace y,\mbox{cut}_p(\Theta)\rbrace}\det\mathbb{A}(t,\Theta)\mbox{d}t}{\int_ {\min\lbrace x,\mbox{cut}_p(\Theta)\rbrace}^{\min\lbrace y,\mbox{cut}_p(\Theta)\rbrace}\mbox{sn}_k^{n-1}(t)\mbox{d}t}\geqslant\dfrac{\int_ {\min\lbrace x,\mbox{cut}_p(\Theta)\rbrace}^{\min\lbrace z,\mbox{cut}_p(\Theta)\rbrace}\det\mathbb{A}(t,\Theta)\mbox{d}t}{\int_ {\min\lbrace x,\mbox{cut}_p(\Theta)\rbrace}^{\min\lbrace z,\mbox{cut}_p(\Theta)\rbrace}\mbox{sn}_k^{n-1}(t)\mbox{d}t}$.

于是有

$\begin{aligned}\int_ {\min\lbrace x,\mbox{cut}_p(\Theta)\rbrace}^{\min\lbrace y,\mbox{cut}_p(\Theta)\rbrace}\det\mathbb{A}(t,\Theta)\mbox{d}t&\geqslant\dfrac{\int_ {\min\lbrace x,\mbox{cut}_p(\Theta)\rbrace}^{\min\lbrace y,\mbox{cut}_p(\Theta)\rbrace}\mbox{sn}_k^{n-1}(t)\mbox{d}t}{\int_ {\min\lbrace x,\mbox{cut}_p(\Theta)\rbrace}^{\min\lbrace z,\mbox{cut}_p(\Theta)\rbrace}\mbox{sn}_k^{n-1}(t)\mbox{d}t}\int_ {\min\lbrace x,\mbox{cut}_p(\Theta)\rbrace}^{\min\lbrace z,\mbox{cut}_p(\Theta)\rbrace}\det\mathbb{A}(t,\Theta)\mbox{d}t\\&=\dfrac{\int_ {x}^{\min\lbrace y,\mbox{cut}_p(\Theta)\rbrace}\mbox{sn}_k^{n-1}(t)\mbox{d}t}{\int_ {x}^{\min\lbrace z,\mbox{cut}_p(\Theta)\rbrace}\mbox{sn}_k^{n-1}(t)\mbox{d}t}\int_ {\min\lbrace x,\mbox{cut}_p(\Theta)\rbrace}^{\min\lbrace z,\mbox{cut}_p(\Theta)\rbrace}\det\mathbb{A}(t,\Theta)\mbox{d}t\\&\geqslant\dfrac{\int_ {x}^{y}\mbox{sn}_k^{n-1}(t)\mbox{d}t}{\int_ {x}^{z}\mbox{sn}_k^{n-1}(t)\mbox{d}t}\int_ {\min\lbrace x,\mbox{cut}_p(\Theta)\rbrace}^{\min\lbrace z,\mbox{cut}_p(\Theta)\rbrace}\det\mathbb{A}(t,\Theta)\mbox{d}t\end{aligned}$, 

其中第二个不等号是基本的“糖水不等式”, 将此式对$U_pM$积分, 就得到欲证结论. $\quad\Box$

**推论5.3.2**: 对$0<r<R$和Ricci曲率均大于等于$(n-1)k$的完备黎曼流形$(M^n,g)$中的一点$p$, $\dfrac{\mbox{vol}(B(p,R))}{\mbox{vol}(B(p,r))}\leqslant\dfrac{\mbox{vol}(B^n_k(R))}{\mbox{vol}(B_k^n(r))}$, $\mbox{vol}(B(p,R))\leqslant\mbox{vol}(B^n_k(R))$, 等号成立当且仅当$B(p,R)$和$B^n_k(R)$等距. 

*Proof.* 前面的叙述是显然的, 我们仅考虑等号成立的条件, 为了Gromov定理的取等, $\mbox{II}(t)=\dfrac{\mbox{cn}_k(t)}{\mbox{sn}_k(t)}I$, 于是$\mbox{Hess}r=\dfrac{\mbox{cn}_k(t)}{\mbox{sn}_k(t)}g_ {round}(\cdot,\cdot)$, 其中$g_ {round}$是$S^n_k$上的标准度量, 故二者等距. $\quad\Box$

这两个推论就是经典的Gromov和Bishop的的比较定理, 我们据此来看看Myers定理取等时会发生什么, 这就是下面的“Cheng最大直径定理”: 

**定理5.3.7**: 设$(M^n,g)$是完备黎曼流形且$Ric\geqslant(n-1)$, 如果$\mbox{Diam}(M,g)=\pi$, 则$M$与$S^n$等距. 

*Proof.* 设$p,q\in M$满足$d(p,q)=\pi$, 则$\mbox{vol}(M)=\mbox{vol}(B(p,\pi))=\mbox{vol}(B(q,\pi))$, 由Bishop-Gromov体积比较定理, $\dfrac{\mbox{vol}(B(p,\frac{\pi}{2}))}{\mbox{vol}(B^n_1(\frac{\pi}{2}))}\geqslant\dfrac{\mbox{vol}(M)}{\mbox{vol}(S^n)}$, 于是$\mbox{vol}(B(p,\frac{\pi}{2}))\geqslant\dfrac{1}{2}\mbox{vol}(M)$, 同理$\mbox{vol}(B(q,\frac{\pi}{2}))\geqslant\dfrac{1}{2}\mbox{vol}(M)$, 于是由$B(p,\frac{\pi}{2})\cap B(q,\frac{\pi}{2})=\empty$知上述不等号全部取等, 这说明$M$与$S^n$等距. $\quad\Box$

**注5.3.2**: 与上面定理类似的结果一般被称为“刚性定理”. 对于其“稳定性”就没有这么好的结果, 事实上, 存在一个$M^4$不同胚于$S^4$, 其上有一族度量$g_k$满足$\mbox{Diam}(M,g_k)\geqslant\pi-\dfrac{1}{k}$. 

还有一个Calabi的关于Laplace算子的比较定理, 我们之后会用到, 但此处不做证明. 

**定理5.3.8**: 设$(M^n,g)$是完备黎曼流形且任意Ricci曲率不小于$(n-1)k$, 则对任意$p\in M$, 距离函数$r(x):=d(x, p)$满足$\Delta r(x)\leqslant (n − 1)\dfrac{\mbox{cn}_k(r(x))}{\mbox{sn}_k(r(x))}$. 

### 5.4 数量曲率相关的比较定理

这里介绍L.Green的一个定理. 

**定理5.4.1**: 设$(M^n,g)$是紧完备黎曼流形, 若$\mbox{Conj}(M)=a$, 则$\displaystyle a^2\int_M\mbox{Scal}(p)\mbox{d}p\leqslant\pi^2n(n-1)\mbox{vol(M)}$, “$=$”成立当且仅当$M$有常截面曲率$\left(\dfrac{\pi}{a}\right)^2$. 

*Proof.* 考虑一条最短的单位速度的测地线$\gamma:[0,a]\to M$, 由Jacobi定理其在$t\leqslant a$时无共轭点. 对任意沿$\gamma$的单位平行切向量场$E(t)$, 若$E(t)\perp\gamma(t)$, 置$V(t):=\sin\left(\dfrac{\pi t}{a}\right)E(t)$. 由于$\gamma$最短, 故$I_0^a(V,V)\geqslant0$, 也就是$\displaystyle\int_0^a\sin^2\left(\dfrac{\pi t}{a}\right)\sec(E,\gamma')\mbox{d}t\leqslant\dfrac{\pi^2}{2a}$. 取$E_i(t)$为一组沿$\gamma$的标准正交标架, 并将上式求和, 就得到$\displaystyle\int_0^a\sin^2\left(\dfrac{\pi t}{a}\right)Ric(\gamma'(t))\mbox{d}t\leqslant(n-1)\dfrac{\pi^2}{2a}$, 此式的取等条件为$\sec(-,\gamma')$恒为$\left(\dfrac{\pi}{a}\right)^2$. 下面在$UM$上积分, 我们有$\mbox{vol}(UM)=\mbox{vol}(S^{n-1})\cdot\mbox{vol}(M)$, 则上式右侧为$(n-1)\dfrac{\pi^2}{2a}\mbox{vol}(S^{n-1})\cdot\mbox{vol}(M)$, 左侧经计算（会用到两个事实, 见下面的注）为$\dfrac{a}{2n}\mbox{vol}(S^{n-1})\displaystyle\int_M\mbox{Scal}(p)\mbox{d}p$, 等号成立的条件是对每一个$\gamma'\in U_pM$都有之前的取等条件成立, 也即$M$有常截面曲率. $\quad\Box$

**注5.4.1**: 上述证明过程中用到了$\varphi^t(:UM\to UM):=[v\mapsto\gamma_v'(t)]$的Jacobi行列式为$1$和对自伴随变换$\Phi:\mathbb{R}^n\to\mathbb{R}^n$, $\dfrac{\mbox{tr}\Phi}{n}=\dfrac{1}{\mbox{vol}(S^{n-1})}\displaystyle\int_ {S^{n-1}}\langle\Phi v,v\rangle\mbox{d}v$. 

**推论5.4.1**: 如果$(M^n,g)$是紧完备黎曼流形, 且其上无共轭点（也即$\mbox{Conj}(M)=+\infty$）, 则$\displaystyle\int_M\mbox{Scal}(p)\mbox{d}p\leqslant0$. 

**推论5.4.2**: 若$\displaystyle\int_M\mbox{Scal}(p)\mbox{d}p\geqslant n(n-1)\mbox{vol}(M)$, 则$\mbox{Conj}(M)\leqslant\pi$. 特别地, 若对任意$p\in M$, $\mbox{Scal}(p)\geqslant n(n-1)$, 则$\mbox{Conj}(M)\leqslant\pi$. 

**例5.4.1**: 对环面$T^2$及其上一黎曼度量$g$, 若$(T^2,g)$上无共轭点, 则由L.Green定理和Gauss-Bonnet公式可知其只能具有常截面曲率$0$, 即$g$平坦. 

**注5.4.2**: 上例的推广便是所谓“E.Hopf猜想”: 若$(T^n,g)$无共轭点, 则$g$一定平坦吗？这个猜想已在1995年被Burago和Ivanov证明, 但似乎还没有经典黎曼几何的证法. 

**注5.4.3**: 一个令人关心的问题是如果$\displaystyle\int_M\mbox{Scal}(p)\mbox{d}p\geqslant n(n-1)\mbox{vol}(M)$且$\mbox{Conj}(M)\geqslant\pi-\varepsilon$, $M$会如何呢？这是一个开放的“稳定性问题”. 

### 5.5 Ricci曲率非负的开流形

本节我们关心一类被称为“开流形”的空间: 

**定义5.5.1**: 非紧完备黎曼流形被称为**开流形**.

对于Ricci曲率处处非负的开流形, 其上的球面体积增长被线性控制, 这是Bishop-Gromov体积比较定理的另外一个应用, 也就是Calabi和Yau的一个结果, 我们先做一些准备工作: 

**定义5.5.2**: 称单位速度测地线$\gamma:[0,+\infty)\to M$为$M$上的射线, 如果对任意$t,s>0$, $d(\gamma(t),\gamma(s))=|t-s|$. 

**命题5.5.1**: 设$(M^n,g)$是开流形, 对任意$p\in M$, 总存在$\gamma(0)=p$的一个射线$\gamma$. 

*Proof.* 对任意$k\in\mathbb{N}$, 存在$q_k\in M$使得$d(p,q_k)=k$, 其所连单位速度测地线为$\gamma_k$, 记$\Theta_k:=\gamma_k'(0)\in U_pM$, 取$\Theta$为$\lbrace \Theta_k\rbrace$的一个聚点, $\gamma_\Theta$即为所求. $\quad\Box$

**定理5.5.1**: 设$(M^n,g)$是开流形, 且任意单位切向量的Ricci曲率均非负, 则对任意$p\in M$, 存在$c=c(p)>0$, 使得$\mbox{vol}(B(p,r))\geqslant c\cdot r$. 

*Proof.* 对任意$p\in M$, 取$\gamma(0)=p$的一个射线$\gamma$, 下记$p_k:=\gamma(k)$, 则由Bishop-Gromov体积比较定理, $\mbox{vol}(B(p_k,k-1))\geqslant\dfrac{(k-1)^n}{(k+1)^n-(k-1)^n}\cdot\mbox{vol}(A_ {k-1,k+1}^M(p_k))\geqslant c\cdot k\mbox{vol}(A_ {k-1,k+1}^M(p_k))\geqslant c\cdot k\mbox{vol}(B(p,1))$, 对$B(p,2k)$而言就有$\mbox{vol}(B(p,2k))\geqslant c'\cdot k$. $\quad\Box$

下面我们看看在拓扑上Ricci曲率非负会造成什么样的影响, 先给一个定义. 

**定义5.5.3**: 称有限生成群$G$以阶$s$**多项式增长**, 如果其存在一个生成元集合$\lbrace g_1,\cdots,g_k\rbrace$使得存在$s\in\mathbb{R}^+$, 对任意足够大的$r$有$\#U(r)\leqslant r^s$, 其中$U(r):=\lbrace g\in G|g可以被写为g_1,\cdots,g_k的长不超过r的字\rbrace$. 

下面这个定理属于Milnor. 

**定理5.5.2**: 若$(M^n,g)$是一个完备的Ricci曲率处处非负的流形, $H$是$\pi_1(M)$的一个有限生成子群, 则$H$多项式增长. 

*Proof.* 设$H=\langle g_1,\cdots,g_k\rangle$.取$p\in M$及其在$M$的泛覆盖$\pi:\tilde M\to M$中的一个提升$\tilde p\in\tilde M$.$\pi_1(M)$在$\tilde M$上的作用定义如下: 对任意$q\in\tilde M$, $g\in\pi_1(M)$, $g$所代表的以$\pi(q)$为基点的同伦类中的一个代表元以$q$为起点的提升的终点就记为$gq$.对任意$g_i$, 可以取定与其同伦的基点在$p$的一个测地回路$\gamma_i$, $L(\gamma_i)=l_i$, 如此将它们提升到$\tilde M$上就变为了从$\tilde p$到$g_i\tilde p$的测地线, 它们的长度仍为$l_i$, 下面取$\varepsilon:=\dfrac{1}{100}\min\lbrace l_i\rbrace$, $l:=\max\lbrace l_i\rbrace$, 于是对任意不同的$h_1,h_2\in H$, $h_1(B(\tilde p,\varepsilon))\cap h_2(B(\tilde p,\varepsilon))=\empty$, 并且$\displaystyle\bigcup_ {h\in U(r)}h(B(\tilde p,\varepsilon))\subset B(\tilde p,rl+\varepsilon)$, 而由Bishop-Gromov体积比较定理, $\#U(r)\leqslant\dfrac{\mbox{vol}(B(\tilde p,rl+\varepsilon))}{\mbox{vol}(B(\tilde p,\varepsilon))}\leqslant cr^n$, 其中$c$是个常数. $\quad\Box$

**注5.5.1**: Milnor的文章中还提到截面曲率不大于$-1$的情况下, 可以证明对某些$c\in\mathbb{R}^+$, $\#U(r)\geqslant\exp(cr)$, 此时称基本群为指数增长的, 二者证明完全类似. 

**注5.5.2**: Gromov有一个定理是说: 一个有限生成群$G$是多项式增长的当且仅当$G$几乎幂零, 也即是说存在指数有限的幂零子群. 这与上面的定理有些差距, 这其中有至今开放的“Milnor猜想”: 若$(M^n,g)$是Ricci曲率非负的开流形, 则$\pi_1(M)$有限生成. 

接下来我们来考虑所谓的“分离定理”, 先做一些准备工作, 我们将不加证明地使用如下的弱极大值原理: 

**定理5.5.3**: 若$(M^n.g)$是黎曼流形, 其上$f$满足$\Delta f\geqslant0$, 则$f$没有极大值, 除非它为常数. 

**定义5.5.4**: $\gamma:\mathbb{R}\to M$称为一条**直线**, 如果对任意$r,s\in\mathbb{R}$, $d(\gamma(t),\gamma(s))=|t-s|$. 

**定义5.5.5**: 设$\gamma:[0,+\infty)\to M$是一条射线, 则关于$\gamma$的**Busemann函数**$b_\gamma:M\to\mathbb{R}$定义为$b_\gamma(x):=\lim\limits_ {t\to+\infty}(d(x,\gamma(t))-t)$. 

Busemann函数定义中的极限的存在性利用三角不等式以及距离函数的Lipschitz性质即证. 

**引理5.5.1**: 若$(M^n,g)$的Ricci曲率非负, 则对其上一Busemann函数$b_\gamma$, 有$\Delta b_\gamma\leqslant0$. 

*Proof.* 对$b_\gamma^T(x):=d(x,\gamma(t))-t$, 有$\Delta b_\gamma^T(x)\leqslant\dfrac{n-1}{d(x,\gamma(T))}$, 令$T\to+\infty$即得结论. $\quad\Box$

下面我们来介绍Cheeger和Gromoll的“分离定理”: 

**定理5.5.4**: 设$(M^n,g)$是Ricci曲率处处非负的开流形, 若其上存在直线, 则存在黎曼流形$(N^{n-1},g')$使得$M$等距于$\mathbb{R}\times N^{n-1}$. 

*Proof.* 设$\sigma:\mathbb{R}\to M$是一条直线, 取$b^+:=b_ {\sigma\vert_ {\mathbb{R}^+}}$, $b^-:=b_ {\sigma\vert_ {\mathbb{R}^-}}$. 则由三角不等式$b^++b^-\geqslant0$, 由**引理5.5.1**知$\Delta(b^++b^-)\leqslant0$, 但$b^++b^-$限制在$\sigma$上又恒等于$0$由弱极大值原理知$b^++b^-\equiv0$. 对任意$p\in M$, 仿照**命题5.5.1**可以分别沿$\sigma$的正向和负向找到两个从$p$出发的射线$\gamma^+$和$\gamma^-$, 通过计算$b^+(\gamma^+(t))$和$b^-(\gamma^-(t))$可知$\gamma^+$和$\gamma^-$可以拼成一条直线$\gamma$, 并且容易验证$\gamma'(0)\perp(b^+)^{-1}(b^+(p))$.取$N:=(b^+)^{-1}(0)$, 并定义$\Phi:\mathbb{R}\times N\to M$为$[(t,p)\mapsto\exp_p(t\gamma'(0))]$, 这就是满足要求的等距映射. $\quad\Box$

### 5.6 截面曲率相关的比较定理(二)

下面把目光放回截面曲率, 对于截面曲率有下界的情况, 其强于Ricci曲率有下界, 所以上面讨论的诸多定理仍然可用, 但一个自然的问题是, 更强的条件能否推出更强的结果？答案是肯定的. 

先给一些定义. 

**定义5.6.1**: 黎曼流形$(M,g)$上的一个**三角形**谓指三条首尾相接的单位速度最短测地线$\gamma_1,\gamma_2,\gamma_3$, 即记$L(\gamma_i)=l_i$为其**边长**, 则$\gamma_i(l_i)=\gamma_ {i+1}(0)$, 其中下标在$\mod3$意义下理解, 并记$\alpha_i$为$l_i$所对角的大小. 

**定义5.6.2**: 黎曼流形$(M,g)$上的一个**转角**谓指由两条单位速度测地线段$\gamma_1,\gamma_2$及其夹角$\alpha$组成的三元组$(\gamma_1,\gamma_2,\alpha)$, 并满足$\gamma_1$的终点是$\gamma_2$的起点. 

下面来介绍Toponogov三角形比较定理: 

**定理5.6.1**: 设$(M^n,g)$是满足截面曲率处处不小于$k$的黎曼流形, $\triangle$是其上一三角形, 则存在$S_k^2$中的一个三角形$\tilde\triangle$, 满足(1)其边长与$\triangle$相等; (2)$\alpha_i\geqslant\tilde\alpha_i$; (3)对任意$t\in[0,l_3]$, $d(\gamma_1(l_1),\gamma_3(t))\geqslant d(\tilde\gamma_1(l_1),\tilde\gamma_3(t))$; (4)对$(M^n,g)$的一个转角$(\gamma_1,\gamma_2,\alpha)$, 存在$S_k^2$中的一个转角$(\tilde\gamma_1,\tilde\gamma_2,\alpha)$, 满足$L(\gamma_i)=L(\tilde\gamma_i)=:l_i$且$d(\gamma_1(0),\gamma_2(l_2))\leqslant d(\tilde\gamma_1(0),\tilde\gamma_2(l_2))$. 

这里(2)被称为此定理的“角版本”, (3)被称为“三角形版本”, (4)被称为“转角版本”. 其中可以看到没有任何共轭点概念的出现, 所以其相较于之前的比较定理更加本质, 但相应的, 此定理证明较为复杂, 这里略去不表. 

还有一个地方是具有更强的结论的, 我们前面提到了仍然开放的“Milnor猜想”, 但对于截面曲率版本而言, 其是对Toponogov三角形比较定理的一个简单应用, 就是下面Gromov的一个结果: 

**定理5.6.2**: 设$(M^n,g)$是一个完备黎曼流形, 且截面曲率处处非负, 则$\pi_1(M)$至多被$\sqrt{2n\pi}2^{n-2}=:c(n)$个元素生成. 

*Proof.* 设$\pi:\tilde M\to M$是泛覆盖映射, 并设$\tilde p\in\tilde M$是$p\in M$的一个提升, 则如**定理5.5.2**中所说, $\pi_1(M)\cong\pi_1(M,p)$可以等距作用到$\tilde M$上, 此时对任意$\gamma\in G$, 记$|\gamma|:=d(\tilde p,\gamma\tilde p)$, 选定$\gamma_1\in G$使得$|\gamma_1|=\min\lbrace |\gamma\|\gamma\neq e,\gamma\in G\rbrace$, 如果$\langle\gamma_1\rangle\neq G$, 就继续选择$G\setminus\langle\gamma_1\rangle$中最短的, 如此下去选得一列$\langle\gamma_1,\cdots,\gamma_i,\cdots\rangle$, 对任意$i<j$, $|\gamma_i|\leqslant|\gamma_j|$, 下面断言$l_ {ij}:=d(\gamma_i\tilde p,\gamma_j\tilde p)\geqslant|\gamma_j|$, 否则$|\gamma_i^{-1}\gamma_j|=l_ {ij}<|\gamma_j|$, 这就矛盾. 下面由Toponogov三角形比较定理的角版本, $\alpha_ {ij}\geqslant\tilde\alpha_ {ij}\geqslant\dfrac{\pi}{3}$.而$U_pM$中至多有$c(n)$个向量两两夹角超过$\dfrac{\pi}{3}$, 这就完成了证明. $\quad\Box$

**注5.6.1**: 满足$S^{n-1}$上两两距离不小于$\dfrac{\pi}{3}$的点的最大个数被称作“亲吻数”, 亲吻数的具体数值目前在$n=2,3,8,24$时求出了准确值, 但在Gromov定理中我们有上面的估计一般就够用了. 

## 6 收敛空间简介

### 6.1 Gromov-Hausdorff度量

我们先来介绍一些有关Gromov-Hausdorff度量的基本知识, 本节的所有定理都不予证明, 感兴趣的读者可以阅读GTM171, Peter Peterson的《Riemannian Geometry》. 

**定义6.1.1**: 给定度量空间$(X,d)$, 对其任意两子集$Y_1,Y_2$, 两者间的**Hausdorff距离**为$d^H_X(Y_1,Y_2):=\inf\lbrace \varepsilon|Y_2\subset B(Y_1,\varepsilon),Y_1\subset B(Y_2,\varepsilon)\rbrace$. 

**定义6.1.2**: 两度量空间$(X_1,d_1)$, $(X_2,d_2)$间的**Gromov-Hausdorff距离**为$d^{GH}((X,d_1),(X,d_2))$是$d_Z^H(i_1(X_1),i_2(X_2))$的下确界, 其中$i_1:X_1\to Z$和$i_2:X_2\to Z$取遍所有等距嵌入. 

**定义6.1.3**: 度量空间$X_i$**收敛**至$X$, 或$\displaystyle\lim_ {i\to\infty}X_i=X$即是说$\displaystyle\lim_ {i\to\infty}d^{GH}(X_i,X)=0$. 

这样的定义在紧空间上是很好的, 事实上我们有: 

**定理6.1.1**: 设$X,Y$是两紧度量空间, 则$d^{GH}(X,Y)=0$等价于$X,Y$等距. 

**注6.1.1**: 对于非紧空间而言上述定理一般不正确, 比如$d^{GH}(\mathbb{Q},\mathbb{R})=0$但二者并不等距. 

**定义6.1.4**: 记所有紧度量空间在等距意义下的等价类组成的空间为$\mathcal{MET}$. 

**定理6.1.2**: $(\mathcal{MET},d^{GH})$是一个可分完备度量空间. 

**注6.1.2**: 这里暗含了等价类间的$d^{GH}$不依赖于代表元的选取. 

**定义6.1.5**: 对任意$X,Y\in\mathcal{MET}$, 映射$\varphi:X\to Y$（不要求如连续性之类的任何性质）称作一个**$\varepsilon-$Hausdorff逼近**, 如果$B(\varphi(X),\varepsilon)=Y$且对任意$x_1,x_2\in X$, $|d(x_1,x_2)-d(\varphi(x_1),\varphi(x_2))|\leqslant\varepsilon$. 

**定理6.1.3**: 对任意$X,Y\in\mathcal{MET}$, 有(1)$d^{GH}(X,Y)\leqslant\varepsilon$可以推出二者之间存在一个$3\varepsilon-$Hausdorff逼近; (2)二者之间存在一个$\varepsilon-$Hausdorff逼近可以推出$d^{GH}(X,Y)\leqslant 3\varepsilon$. 

### 6.2 Gromov预紧性定理

本节我们叙述并证明Gromov的预紧性定理. 

**定义6.2.1**: $\mathcal{MET}(D,N(\cdot))$是所有满足$\mbox{Diam}(X)\leqslant D$, 且对$\forall\varepsilon\in(0,1)$, 存在$X$的有限子集$Z$使得$\#Z\leqslant N(\varepsilon)$且$B(Z,\varepsilon)=X$的$(X,d)\in\mathcal{MET}$组成的集合, 其中$N:(0,1)\to\mathbb{N}$是被称作**填充函数**. 

**引理6.2.1**: $(\mathcal{MET}(D,N(\cdot)),d^{GH})$是紧度量空间. 

*Proof.* 置$\mathcal{FIN}(D,N)=\lbrace X\in\mathcal{MET}|\#X<N,\mbox{Diam}X\leqslant D\rbrace$, 显然这是一个紧集. 对任意$X\in\mathcal{MET}(D,N(\cdot))$和任意$\varepsilon$, 存在$Z\subset X$使得$\#Z\leqslant N(\varepsilon)$, $d^{GH}(X,Z)<3\varepsilon$, 也即$Z\in\mathcal{FIN}(D,N(\varepsilon))$, 于是欲证空间全有界且闭, 故为紧集. 

**定义6.2.2**: 记所有直径小于等于$D$且Ricci曲率不小于$(n-1)k$的$n$维黎曼流形组成的集合为$\mathcal{Ric}^D_ {\cdot,\cdot,(n-1)k}(n)$. 

Gromov的预紧性定理是说: 

**定理6.2.1**: $(\mathcal{Ric}^D_ {\cdot,(n-1)k}(n),d^{GH})$是预紧的. 

*Proof.* $\dfrac{\mbox{vol}(M)}{\min(\mbox{vol}\lbrace p,\frac{\varepsilon}{2})\rbrace}\leqslant\dfrac{\mbox{vol}(B(p_0,D))}{\mbox{vol}(B(p_0,\frac{\varepsilon}{2}))}\leqslant\dfrac{\mbox{vol}(B^n_k(D))}{\mbox{vol}(B^n_k(\frac{\varepsilon}{2}))}=:N_D(\varepsilon)$, 此即为满足要求的填充函数, 用上面引理即得结论成立. $\quad\Box$

### 6.3 其他的子空间

类似上面的子空间, 在其他子空间里还有一些有趣的结果, 这里仅作介绍.  

比如下面的Cheeger的有限性定理. 

**定义6.3.1**: 记所有直径小于等于$D$, 体积不小于$v$且截面曲率的绝对值不超过$k$的$n$维黎曼流形组成的集合为$\mathcal{M}_ {\cdot,v,-k}^{D,\cdot,k}(n)\subset\mathcal{MET}$. 

**定理6.3.1**: $\mathcal{M}_ {\cdot,v,-k}^{D,\cdot,k}(n)$中只有有限多个微分同胚类. 

这个证明的关键点是对“单值半径”, 也就是满足对任何$p\in M$都有$\exp_p$在$B(O_p,r)$上是微分同胚的$r$的下确界, 的估计. 这个估计有时候可以稍微修正一下. 我们考虑另一个$\mathcal{MET}$的子空间: 

**定义6.3.2**: 记所有直径小于等于$D$, 体积不小于$v$且截面曲率不小于$-k$的$n$维黎曼流形组成的集合为$\mathcal{M}_ {\cdot,v,-k}^{D,\cdot,\cdot}(n)\subset\mathcal{MET}$. 

类似上面的有限性定理, 我们有: 

**定理6.3.2**: $\mathcal{M}_ {\cdot,v,-k}^{D,\cdot,\cdot}(n)$中只有有限多个同胚类. 

回忆一个微分拓扑中的结果: 

**定理6.3.3**: $n>4$时, 每一个$n$维流形的同胚类之中只有有限多个微分同胚类.

就可以得到: 

**推论6.3.1**: $n>4$时, $\mathcal{M}_ {\cdot,v,-k}^{D,\cdot,\cdot}(n)$中只有有限多个微分同胚类. 

这个结果是Gromov, Peterson和Wu做的, 而Perelman的稳定性定理同样是研究这个空间: 

**定理6.3.4**: 若一族$M_\alpha^n\in\mathcal{M}_ {\cdot,v,-k}^{D,\cdot,\cdot}(n)$收敛到$X^n$, 则$M_\alpha^n$同胚于$X^n$. 

**注6.3.1**: 体积的下界保证了维数不会坍缩. 

## 7 习题及证明

**习题7.1**: 证明第一和第二Bianchi恒等式. 

*Proof.* 第一Bianchi恒等式: 
$$\begin{aligned}
&R(X,Y)Z+R(Y,Z)X+R(Z,X)Y=\nabla_X\nabla_YZ-\nabla_Y\nabla_XZ-\\
&\nabla_ {[X,Y]}Z+\nabla_Y\nabla_ZX-\nabla_Z\nabla_YX-\nabla_ {[Y,Z]}X+\nabla_Z\nabla_XY-\nabla_X\nabla_ZY-\\
&\nabla_ {[Z,X]}Y=\nabla_X[Y,Z]+\nabla_Y[Z,X]+\nabla_Z[X,Y]-\nabla_ {[X,Y]}Z-\nabla_ {[Y,Z]}X\\
&-\nabla_ {[Z,X]}Y=[X,[Y,Z]]+[Y,[Z,X]]+[Z,[X,Y]]=0(\mbox{Jacobi恒等式}).
\end{aligned}$$
第二Bianchi恒等式: 
$$\begin{aligned}
&(\nabla_XR)(Y,Z)U+(\nabla_YR)(Z,X)U+(\nabla_ZR)(X,Y)U\\
=&\sum_ {cyc}\left(\nabla_X(R(Y,Z))-R(\nabla_XY,Z)-R(Y,\nabla_XZ)\right)U-R(Y,Z)\nabla_XU\\
=&\sum_ {cyc}(\nabla_X(\nabla_Y\nabla_Z-\nabla_Z\nabla_Y-\nabla_ {[Y,Z]})+R(Z,\nabla_XY)-R(Y,\nabla_XZ)-\\
&(\nabla_Y\nabla_Z-\nabla_Z\nabla_Y-\nabla_ {[Y,Z]})\nabla_X)U\\
=&\sum_ {cyc}(\nabla_ {[Y,Z]}\nabla_X-\nabla_X\nabla_ {[Y,Z]}+R(X,[Y,Z]))U\quad(\mbox{无挠性})\\
=&\sum_ {cyc}(\nabla_ {[X,[Y,Z]]})U\\
=&0\quad(\mbox{Jacobi恒等式}).
\end{aligned}$$$\quad\Box$

**习题7.2**: 利用弱最大值原理证明Cheng最大直径定理.

*Proof.* 设$p,q\in M$是满足$d(p,q)=\pi$的两点,对$r\in M$,定义$b^+(r):=d(p,r),b^-(r):=d(q,r)$. 由三角不等式,我们有$b^+(r)+b^-(r)\geqslant d(p,q)=\pi$,等号成立当且仅当$r$在连接$p,q$ 的长为$\pi$的线段上. 由
$$\Delta b^++\Delta b^-\leqslant(n-1)(\cot b^++\cot b^-)\leqslant(n-1)(\cot b^++\cot (\pi-b^+))=0$$
和弱最大值原理知$b^++b^-$在$M$上恒为$\pi$.故对于$p$处任意长为$\pi$的切向量$v$,$\exp_p(v)=q$且$M$与单位球等距同构. $\quad\Box$

**习题7.3**: 设$(M^n,g)$是完备黎曼流形, 且截面曲率不大于$k$, 对$p\in M$, $\Theta\in U_pM$, 证明$t<\mbox{Conj}_p(\Theta)$时
$$\dfrac{d^2}{dt^2}\left(\dfrac{\det\mathbb{A}(t,\Theta)}{\mbox{sn}_k^{n-2}(t)}\right)+k\left(\dfrac{\det\mathbb{A}(t,\Theta)}{\mbox{sn}_k^{n-2}(t)}\right)\geqslant0.$$ 

*Proof.* 简记$\mathbb{A}(t,\Theta)$为$\mathbb{A}(t)$, 设$\mbox{II}(t):=\mathbb{A}'(t)\mathbb{A}^{-1}(t)$, 则有$\dfrac{\mbox{d}}{\mbox{d}t}\det\mathbb{A}(t)=\mbox{tr}\mbox{II}(t)\det\mathbb{A}(t)$和Ricatti恒等式$\mbox{II}'(t)+\mbox{II}^2(t)+R(t)=0$. 
而后者结合截面曲率不大于$k$可以推出$\dfrac{\mbox{d}}{\mbox{d}t}\mbox{tr}\mbox{II}(t)\geqslant-\mbox{tr}\mbox{II}^2(t)-(n-1)k$, 由Rauch比较定理有$\mbox{II}(t)$的所有特征值大于等于$\dfrac{\mbox{cn}_k(t)}{\mbox{sn}_k(t)}$. 下面有
$\begin{aligned}
&\dfrac{\mbox{d}^2}{\mbox{d}t^2}\left(\dfrac{\det\mathbb{A}(t)}{\mbox{sn}_k^{n-2}(t)}\right)\\
=&\dfrac{\mbox{d}}{\mbox{d}t}\left(\dfrac{\mbox{tr}\mbox{II}(t)\det\mathbb{A}(t)\mbox{sn}_k^{n-2}(t)-(n-2)\det\mathbb{A}(t)\mbox{sn}_k^{n-3}(t)\mbox{cn}_k(t)}{\mbox{sn}_k^{2(n-2)}(t)}\right)\\
=&\dfrac{\mbox{d}}{\mbox{d}t}\left(\mbox{tr}\mbox{II}(t)\dfrac{\det\mathbb{A}(t)}{\mbox{sn}_k^{n-2}(t)}-(n-2)\mbox{cn}_k(t)\dfrac{\det\mathbb{A}(t)}{\mbox{sn}_k^{n-1}(t)}\right).
\end{aligned}$
继续计算,有
$\begin{aligned}
&\dfrac{\mbox{d}}{\mbox{d}t}\left(\mbox{tr}\mbox{II}(t)\dfrac{\det\mathbb{A}(t)}{\mbox{sn}_k^{n-2}(t)}-(n-2)\mbox{cn}_k(t)\dfrac{\det\mathbb{A}(t)}{\mbox{sn}_k^{n-1}(t)}\right)=\left(\dfrac{\mbox{d}}{\mbox{d}t}\mbox{tr}\mbox{II}(t)\right)\dfrac{\det\mathbb{A}(t)}{\mbox{sn}_k^{n-2}(t)}+\\
&\mbox{tr}\mbox{II}(t)\left(\mbox{tr}\mbox{II}(t)\dfrac{\det\mathbb{A}(t)}{\mbox{sn}_k^{n-2}(t)}-(n-2)\mbox{cn}_k(t)\dfrac{\det\mathbb{A}(t)}{\mbox{sn}_k^{n-1}(t)}\right)-(n-2)\mbox{cn}_k'(t)\dfrac{\det\mathbb{A}(t)}{\mbox{sn}_k^{n-1}(t)}\\&-(n-2)\mbox{cn}_k(t)\left(\mbox{tr}\mbox{II}(t)\dfrac{\det\mathbb{A}(t)}{\mbox{sn}_k^{n-1}(t)}-(n-1)\mbox{cn}_k(t)\dfrac{\det\mathbb{A}(t)}{\mbox{sn}_k^{n}(t)}\right)\\
&=\left(\dfrac{\mbox{d}}{\mbox{d}t}\mbox{tr}\mbox{II}(t)+\left(\mbox{tr}\mbox{II}(t)\right)^2\right)\dfrac{\det\mathbb{A}(t)}{\mbox{sn}_k^{n-2}(t)}-2(n-2)\mbox{tr}\mbox{II}(t)\mbox{cn}_k(t)\dfrac{\det\mathbb{A}(t)}{\mbox{sn}_k^{n-1}(t)}\\
&-(n-2)\mbox{cn}_k'(t)\dfrac{\det\mathbb{A}(t)}{\mbox{sn}_k^{n-1}(t)}+(n-1)(n-2)\left(\mbox{cn}_k(t)\right)^2\dfrac{\det\mathbb{A}(t)}{\mbox{sn}_k^{n}(t)}.
\end{aligned}$
下面将$\mbox{cn}_k'+k\mbox{sn}_k=0$和$\dfrac{\mbox{d}}{\mbox{d}t}\mbox{tr}\mbox{II}(t)\geqslant-\mbox{tr}\mbox{II}^2(t)-(n-1)k$代入其中, 可得
$\begin{aligned}
&\dfrac{\mbox{sn}_k^{n-2}(t)}{\det\mathbb{A}(t)}\cdot\dfrac{\mbox{d}^2}{\mbox{d}t^2}\left(\dfrac{\det\mathbb{A}(t)}{\mbox{sn}_k^{n-2}(t)}\right)+k\\
\geqslant&\left(\mbox{tr}\mbox{II}(t)\right)^2-\mbox{tr}\mbox{II}^2(t)-2(n-2)\mbox{tr}\mbox{II}(t)\dfrac{\mbox{cn}_k(t)}{\mbox{sn}_k(t)}+(n-1)(n-2)\left(\dfrac{\mbox{cn}_k(t)}{\mbox{sn}_k(t)}\right)^2.
\end{aligned}$
下设$\mbox{II}(t)$的所有特征值为$\lambda_i(t)(i=1,\cdots,n-1)$, 则由$\lambda_i\geqslant\dfrac{\mbox{cn}_k}{\mbox{sn}_k}$可得$(\lambda_i-\dfrac{\mbox{cn}_k}{\mbox{sn}_k})(\lambda_j-\dfrac{\mbox{cn}_k}{\mbox{sn}_k})\geqslant0$, 将此式对所有的$i\neq j$求和, 即得上述式子$\geqslant0$,这就推出原不等式成立.$\quad\Box$

