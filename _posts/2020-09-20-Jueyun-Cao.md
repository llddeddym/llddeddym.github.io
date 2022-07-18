---
title: '一个三点共线问题'
date: 2020-09-20
permalink: /posts/2020/12/2020-12-29-Miquel/
tags:
  - Miquel point
  - Kiepert hyperbola
  - anti-Steiner point
---

头两天有群友问了我一个曹老爷讲义上的问题，题目如下：

**问题**：在$\triangle ABC$中，$O$是外心，$M$是$BC$中点，$OM$与$\odot(BOC)$第二交点为$N$，$AO$与$\odot(BOC)$第二交点为$G$，$K$是$AN$中点，求证：$K$在$\odot(AO)$与$\odot(OMG)$的根轴上.

```html
<img src="https://llddeddym.github.io/images/2020-09-20(1).png" alt="Flag Icon" role="img" aria-label="(1)" />
```

其本质当然是要刻画出两圆的第二交点，然后证明三点共线，所以这里就说其为“三点共线”问题了。

一些基础内容自不必多说，如$NB,NC$与$\odot(ABC)$相切这类。首先想到$GO$平分$\angle BGC$，所以想到做这个角的外角分线，而又由$\angle OMC=\angle OGN=\dfrac{\pi}{2}$，所以立刻有$T:=NG\cap BC\in\odot(OMG)$，且$\odot(OMG)=\odot(OT)$.

下面考虑$O$在$AT$上的投影，显然它就是$\odot(AO)$与$\odot(OMG)$的第二交点，所以我们看出，要证明结论只需证$OK\bot AT$.

而$K$这个点我并不太熟悉，所以考虑到中位线，我们设出$A$关于$O$的对称点$A'$，就只需证明$NA'\perp AT$，但再考虑到$NT$与$AA'$的垂直关系，我们发现只需证明$T$是$\triangle ANA'$的垂心，也只需证明$\triangle AA'N$的垂心在$BC$上.但这不过是下述引理的直接推论：

**引理**：$\triangle ABC$的垂心$H$在$A$关于$\odot(BC)$的极线上.

这个引理的证明只是完全四边形调和性质的简单应用，留给读者补全。据此我们得到$\triangle AA'N$的垂心就是$NG\cap BC=T$，于是$NA'\perp AT$，$OK\perp AT$，即$K$在根轴上.

```html
<img src="https://llddeddym.github.io/images/2020-09-20(2).png" alt="Flag Icon" role="img" aria-label="(2)" />
```



