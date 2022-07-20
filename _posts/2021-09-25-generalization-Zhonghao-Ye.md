---
title: '对叶中豪老师一道题目的推广与解答'
date: 2021-09-25
permalink: /posts/2021/09/2021-09-25-generalization-Zhonghao-Ye/
tags:
  - calculate
  - isogonal conjugate
---

叶中豪老师在2020.04.10在我们爱几何公众号上发了如下问题：

**问题**：设$H$​​和$K$​​是$\triangle ABC$​​的垂心和陪位重心，延长$AH$​​交$\odot(ABC)$​​于$D_1$​​，$AH$​​的中垂线交外接圆于$E_1,$$F_1$​​，$K_1$​​是$\triangle D_1E_1F_1$​​的陪位重心，类似地定义$K_2,K_3$​​。求证：$K_1,K_2,K_3,K$​​四点共圆，且圆心在$\triangle ABC$​​的Euler线上。

我们事实上可以证明如下结果：

**引理**：一族三角形有一个公共的外接圆和一对公共的等角共轭点，则对于任意定点$X$，$X$关于这族三角形的等角共轭点在一定圆上。

此结果其实可以直接利用“给定一个三角形的两对等角共轭点$P,P^ * $与$Q,Q^ * $，$PQ$与$Q^ * P^ * $的旋转相似中心在外接圆上”这个结果直接证明，但为了确定圆心的位置，我们将采用复数法证明这个结果。

*Proof.* 令公共的外接圆为单位圆，$\triangle ABC$为这族三角形中的一个，则$P$关于$\triangle ABC$的等角共轭点为$Q=\dfrac{\sum\limits_{cyc}A+ABC\bar{P}^2-P-\sum\limits_{cyc}AB\cdot\bar{P}}{1-P\bar{P}}$（参见[复数方法自己写的教程](https://tieba.baidu.com/p/5686544693)的4楼），由$A\bar{A}=B\bar{B}=C\bar{C}=1$得$\sum\limits_{cyc}A=ABC\bar{P}\bar{Q}+P+Q$，不妨设$P,Q$就是公共等角共轭点，于是对这族三角形中的每一个均有上式成立，故$X$对$\triangle ABC$的等角共轭点为

$$Y=\dfrac{\sum\limits_{cyc}A+ABC\bar{X}^2-X-\sum\limits_{cyc}AB\cdot\bar{X}}{1-X\bar{X}}=\dfrac{ABC(\bar{X}-\bar{P})(\bar{X}-\bar{Q})+P+Q-X-PQ\bar{X}}{1-X\bar{X}},$$​

而$$\left\lvert Y-\dfrac{P+Q-X-PQ\bar{X}}{1-X\bar{X}}\right\rvert=\left\lvert\dfrac{(X-P)(X-Q)}{1-X\bar{X}}\right\rvert,$$

这说明其不依赖于$\triangle ABC$的选取，故$Y$在一定圆上。$\quad\Box$

依此，我们可以证明如下的推广：

**推广(By butatinogigle)**：设$H$​​​​​​​​是$\triangle ABC$​​​​​​​的垂心，延长$AH$​​​​​​​交$\odot(ABC)$​​​​​​​于$D_1$​​​​​​​，$AH$​​​​​​​的中垂线交外接圆于$E_1,$​​​​​$F_1$​​​​​​​，$X$​​​​​​是$\triangle ABC$​​​​​​的Euler线上一点，$Y_1$​​​​​​是$X$​​​​​​关于$\triangle D_1E_1F_1$​​​​​​的等角共轭点，类似地定义$Y_2,Y_3$​​​，$Y$​​​是$X$​​​关于$\triangle ABC$​​​的等角共轭点。求证：$Y_1,Y_2,Y_3,Y$​​​四点共圆，且圆心在$\triangle ABC$​​​​​​​的Euler线上。

当$X$是$\triangle ABC$​的重心时就是原题。

*Proof.* 注意到$\triangle ABC$​和$\triangle D_1E_1F_1$​（当然也有轮换定义时产生的$\triangle D_2E_2F_2$​和$\triangle D_3E_3F_3$​）有公共的外心和垂心，采用复数法，设$\odot(ABC)$​为单位圆。由引理，$Y_1,Y_2,Y_3,Y$​四点共圆且圆心为$\dfrac{H-X}{1-X\bar{X}}$​​，由$X/H\in\mathbb{R}$和$X\bar X\in\mathbb{R}$即知圆心在Euler线上。$\quad\Box$

当然，依据此定量关系立刻可以得到进一步的推广，证明完全相同了：

**推广**：设$O,H$分别​是$\triangle ABC$​的外心和垂心，延长$AH$​交$\odot(ABC)$​于$D_1$​，$AH$​的中垂线交外接圆于$E_1,$$F_1$​，$X$​是上一点，$Y_1$​平面上是$X$​关于$\triangle D_1E_1F_1$​的等角共轭点，类似地定义$Y_2,Y_3$​，$Y$​是$X$​关于$\triangle ABC$​的等角共轭点。求证：$Y_1,Y_2,Y_3,Y$​四点共圆，且圆心$O'$满足$OO'//HX$且$\dfrac{\overline{OO'}}{\overline{XH}}=\dfrac{OA^2}{OA^2-OX^2}$。

<img src="https://llddeddym.github.io/images/2021-09-25.png"/>