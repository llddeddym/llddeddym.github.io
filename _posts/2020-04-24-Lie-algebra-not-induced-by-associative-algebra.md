---
title: '一种不能被结合代数生成的Lie代数'
date: 2020-04-24
permalink: /posts/2020/04/2020-04-24-Lie-algebra-not-induced-by-associative-algebra/
tags:
  - Lie algebra
---

众所周知，对任意一个结合代数，我们可以通过在其上定义Lie括号$[x,y]=xy-yx$的方式生成一个Lie代数。反过来，是不是所有Lie代数都可以通过这种方式生成呢？答案是否定的，事实上我们可以举出一个反例。

给定一个三维欧氏空间，取其标准正交基$e_1,e_2,e_3$ ，考虑其上由外积运算定义的Lie代数.即

$$\begin{cases}[e_1,e_2]=e_3\\ [e_2,e_3]=e_1\\ [e_3,e_1]=e_2\end{cases}.$$

如果存在一个三维结合代数通过上述方式生成了这个Lie代数，也即是说存在一组基$x,y,z$满足$xy-yx=z,yz-zy=x,zx-xz=y$.

设$$\begin{cases}xy=a_1x+a_2y+a_3z\\ yz=b_1x+b_2y+b_3z\\ zx=c_1x+c_2y+c_3z\\ x^2=x_1x+x_2y+x_3z\\ y^2=y_1x+y_2y+y_3z\\ z^2=z_1x+z_2y+z_3z\end{cases}.$$
于是有$yx=a_1x+a_2y+(a_3-1)z,zy=(b_1-1)x+b_2y+b_3z,xz=c_1x+(c_2-1)y+c_3z$.

首先$x^3=x^2\cdot x=x_1x^2+x_2yx+x_3zx$,又$x^3=x\cdot x^2=x_1x^2+x_2xy+x_3xz$,两式相减得$0=-x_2z+x_3y$,于是$x_2=x_3=0$,同理可得$y_1=y_3=z_1=z_2=0$.

下面由$xyx=(xy)x=a_1x^2+a_2yx+a_3zx$,又$xyx=x(yx)=a_1x^2+a_2xy+(a_3-1)xz$.两式相减得
$a_2z=a_3y+xz=c_1x+(a_3+c_2-1)y+c_3z$,这推出$c_1=0,a_3+c_2=1,c_3=a_2$.轮换地,考虑$yzy$和$zxz$,可得$a_1=a_2=b_2=b_3=c_1=c_3=0$.

接下来考虑$x_1a_3z=x^2y=x(xy)=a_3xz=a_3(c_2-1)y$以及对称的$x_1(a_3-1)z=yx^2=(yx)x=(a_3-1)zx=(a_3-1)c_2y$,这二式说明$a_3(c_2-1)=(a_3-1)c_2=0$,于是$a_3=c_2$,且二者要么均为1，要么均为0. 轮换地有$a_3=b_1=c_2$,且三者要么均为1，要么均为0.但无论哪种情况都与之前得到过的$a_3+c_2=1$矛盾.故结论成立.