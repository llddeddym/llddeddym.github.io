---
title: '一个学弟的问题'
date: 2022-12-11
permalink: /posts/2022/12/2022-12-11-from-reader/
tags:
  - calculate
  - Feuerbach
---

好长时间没更新了，主要原因在于我上周抗原阳了（

今天更新一道之前学弟问的问题，其实距他问这题已经好长时间了，不过一直没发。

**问题**：$\triangle ABC$内接于$\odot O$，$M$是$BC$的中点，过$B,C$两点关于$\odot O$的切线交于$P$，$AP,BC$交于$K$，$X,Y$是$K$在$PB,PC$上的投影，$N$是$AK$的中点，$E,F$是$M$在$PB,PC$上的投影，若$AM=MP$，求证$\odot(M,ME)$与$\odot(NXY)$相切.

<img src="https://llddeddym.github.io/images/2022-12-11(1).png"/>

*Proof.* 设$XK$交$PC$于$U$，$YK$交$PB$于$V$，以$P$为圆心、$PB$为半径做圆交$AB$于$B,B'$两点、交$AC$于$C,C'$两点，则$\angle B'PC'=\angle B'PB+\angle BPC+\angle C'PC=180^\circ$，即$B',P,C'$共线且由$\angle AB'P=\angle B'BP=\angle ACB$知$\triangle ABC\sim \triangle AC'B'$，再由$PB'=PC'$可知$M,P$是一对相似对应点，故

$$\dfrac{AM}{AP}=\dfrac{BM}{BP}=\cos\angle BAC,$$

于是由$AM=MP$可知

$$\cos\angle PAM=\dfrac{1}{2\cos\angle BAC},$$

故
$$\cos(2\angle KPM)=2(\cos\angle PAM)^2-1=\dfrac{\cos\angle BPC}{2\cos^2\angle BAC},$$

即

$$\cos\angle BPC=2(\cos\angle BAC)^2\cos(2\angle KPM)=\cos(2\angle KPM)(1-\cos\angle BPC),$$

于是

$$\cos\angle BPC(\cos(2\angle KPM)+1)=\cos(2\angle KPM),$$

<img src="https://llddeddym.github.io/images/2022-12-11(2).png"/>

两边同乘$2\sin\angle BPC$得

$$\begin{aligned}&2(\cos\angle KPM)^2\sin(2\angle BPC)\\=&2\sin\angle BPC\cos(2\angle KPM)\\=&\sin(2\angle KPC)+\sin(2∠KPB)\end{aligned}$$

故

$$\begin{aligned}&PA\sin\angle BPC\\=&\dfrac{PA\sin(2\angle BPC)}{2\cos\angle BPC}\\=&\dfrac{PM\cos\angle KPM\sin(2\angle BPC)}{\cos\angle BPC}\\=&\dfrac{PK(\cos\angle KPM)^2\sin(2\angle BPC)}{\cos\angle BPC}\\
=&\dfrac{PK(\sin(2\angle KPC)+\sin(2\angle KPB))}{2\cos\angle BPC}\\=&\dfrac{PY\sin\angle KPC+PX\sin\angle KPB}{\cos\angle BPC}\\=&PV\sin\angle KPC+PU\sin\angle KPB,\end{aligned}$$

于是$P,U,V,A$共圆. 由于$KX\perp PV,KY\perp PU$, 故$K$是$\triangle PUV$的垂心，又由于$A$在$\odot(PUV)$上，于是$A,K$关于$UV$对称，即$N$是$P$在$UV$上的投影，故$\odot(NXY)$是$\triangle PUV$的九点圆. 

设$\triangle PUV$的外心为$T$，由$OM\cdot OP=OA^2$知$\triangle OAM\sim\triangle OPA$，又$TA=TP,MP=MA$，故$A,P$关于$TM$对称，因此由$PT,PA$是关于$\angle UPV$的等角线知$\angle OAM=\angle OPA=\angle TPM=\angle TAM$，即$A,O,T$共线，于是$\odot O$与$\odot(PUV)$相切，故由Mannheim定理知$M$是$\triangle PUV$的内心，即$\odot(M,ME)$是$\triangle PUV$的内切圆，由Feuerbach定理知$\odot(M,ME)$与$\odot(NXY)$相切. $\quad\Box$