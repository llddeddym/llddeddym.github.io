---
title: '对2022.07.21《我们爱几何》问题的证明'
date: 2022-07-28
permalink: /posts/2022/07/2022-07-28-Junxiao-Yan/
tags:
  - Miquel point
---

[2022.07.21《我们爱几何》问题](https://mp.weixin.qq.com/s/bIXBc-uZw5zStB7lnOBXzQ)是由严君啸命制的，问题如下：

**问题**：设$X,Y$是$\triangle ABC$外接圆$\odot O$与$A$-旁切圆$\odot I_A$的两个交点，$XX_1,YY_1$是$\odot I_A$的两条切线，且$X_1，Y_1$在$\odot O$上，$J$是弧$BAC$的中点. 求证：$\dfrac{AX}{AY}=\dfrac{JX_1}{JY_1}$.

<img src="https://llddeddym.github.io/images/2022-07-28(1).png"/>

*Proof.* 过$X$做$JX_1$平行线交$JY$于$Y_2$，过$Y$做$JY_1$平行线交$JX$于$X_2$，由对称性知$XYX_1Y_1$是等腰梯形，故$\measuredangle X_2YY_2=\measuredangle Y_1JY=\measuredangle XJX_1=\measuredangle X_2 XY_2$，故$X_2,Y_2,X,Y$共圆$c$. 由于$\measuredangle JY_2X_2=\measuredangle YXJ=90^\circ-\measuredangle OJY$，且$OJ\perp BC$，故$X_2Y_2//BC$. 由于$\measuredangle X_1XY_2=\measuredangle XX_1 J=90^\circ-\measuredangle OJX=\measuredangle JX_2Y_2$，故$XX_1$与$c$切于$X$，$YY_1$与$c$切于$Y$，于是$c$就是$\odot I_A$. 下面注意到由于$\measuredangle I_AAJ=90^\circ$，$A$在$\odot(AXY)$上且$X,Y,X_2,Y_2$共圆$\odot I_A$，故由Brocard定理知$A$是$XY,YY_2,X_2Y_2,XX_2$围成的完全四边形的Miquel点，故$\triangle AXX_2\stackrel{+}{\sim}\triangle AYY_2$. 设$XY_2$交$YX_2$于$Z$，故$\triangle ZXY$与$\triangle JX_1Y_1$位似，于是$\dfrac{AX}{AY}=\dfrac{XX_2}{YY_2}=\dfrac{XZ}{YZ}=\dfrac{JX_1}{JY_1}$. $\quad\Box$

<img src="https://llddeddym.github.io/images/2022-07-28(2).png"/>