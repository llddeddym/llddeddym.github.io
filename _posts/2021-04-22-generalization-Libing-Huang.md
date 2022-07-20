---
title: '对黄利兵老师一道平面几何题的推广'
date: 2021-04-22
permalink: /posts/2021/04/2021-04-22-generalization-Libing-Huang/
tags:
  - cross-ratio
  - radical axis
---

黄老师今年3月7号在《几何大家玩》微信群里发了这样一道题：

**问题**：在$\triangle ABC$中，$AD$是高线，$O$是外心，$BO、CO$分别交对边于$E、F$，分别以$BE、CF$为直径作圆，两圆交于$P、Q$两点. 求证: $A、D、P、Q$四点共圆. 

我看了一下发现外心这个条件其实是多余的，证明比较容易，只需要计算$A、D$到$\odot(BE)、\odot(CF)$的圆幂比即可，在我提出“这个外心必要嘛”的问题之后，黄老师回复“可以把$D$改成$A$关于$BC$的第四调和点，这样外心就有用了”. 这个很漂亮，其刻画出了这个圆和外接圆的第二交点，后来吃饭的时候想了一下，如果把外心改为任意点类似的刻画也可以进行，下面是我的推广: 

**推广**：给定$\triangle ABC$及其外心$O$，$A$在$BC$上的投影为$D$，$BC$中点为$M$，$OM$交$AB、AC$分别于$E、F$，$\odot(AOM)$与$\odot(AEF)$交于另一点$L$，$P$是平面上一点，$BP$交$AC$于$U$，$CP$交$AB$于$V$，$AP$交$OM$于$Q$，$\odot(ALQ)$与$OM$另一交点为$R$，$\odot(ABC)$上一点$S$满足$AR$和$AS$关于$\angle BAC$角平分线对称. 证明：$\odot(ADS)$与以$BU、CV$为直径的两圆共根轴.

<img src="https://llddeddym.github.io/images/2021-04-22(1).png"/>

其实明眼人一下子就可以看出生造的这个共轴圆组无非是为了造一个对合出来，所以预期上就是导导交比就做出了，事实上也是如此. 

*Proof.* 设$UV\cap BC=X$，$AP\cap BC=W$，$AD\cap\odot(ABC)=\{A,T\}$，$A$在$\odot(ABC)$上的对径点为$A'$，$BC$上无穷远点为$a_\infty$. 则

$$\begin{aligned}&A'(BC,XT)=(BC,Xa_\infty)=(BC,WM)=A(BC,WM)=(EF,QM)\\=&(FE,RO)=A(FE,RO)=A(BC,ST)=A'(BC,ST)，\end{aligned}$$

其中第二个等号是关于$B,C$调和共轭，第四个等号是线束与$MO$作交成点列，第五个等号是$AL$为轴的共轴圆组作用在$MO$上的对合变换，第七个等号是关于$\angle BAC$角平分线对称，最后一个等号是在$\odot(ABC)$上换线束顶点. 上面这个等式就说明了$A'、X、S$共线，于是$\odot(ADS)$正是以$AX$为直径的圆，由在完全四边形$(AB,BC,CA,UV)$中题目中三圆有垂心线为公共根轴即证. $\quad\Box$

<img src="https://llddeddym.github.io/images/2021-04-22(2).png"/>