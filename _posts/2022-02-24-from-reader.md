---
title: '对一个读者问题的证明'
date: 2022-02-24
permalink: /posts/2022/02/2022-02-24-from-reader/
tags:
  - calculate
---

2022.01.31的时候网友“一生平安”在公众号后台发来如下问题。

**问题**：如图，$\triangle ABC$的内切圆$\Gamma$分别切三边于$D,E,F$，$I_B,I_C$分别为$B-$旁心和$C-$旁心，$I_BE,I_CF$分别再交$\Gamma$于$N,L$，$DE,DE$分别交$I_BI_C$于$S,R$，$SF$与$RE$交于$T$。求证：$AT,BL,CN$三线共点。

<img src="https://llddeddym.github.io/images/2022-02-24(1).png"/>

最近比较忙没腾出手来看这个题，昨天晚上难得空闲一会，看了下这个题。本题不算困难，感觉堆砌的意味很重。下面给出证明。

*Proof.* 对六边形$DFFTEE$用Pascal定理逆定理，由$R,S,A$共线知$T$在内切圆$\Gamma$上，再由$EF//RS$及$\triangle DRS$中关于$T$的Ceva定理知$DT$平分$RS$，自然也平分$EF$，故$DF/DE=TE/TF$，于是

$$\begin{aligned}&\dfrac{\sin\angle BAT}{\sin\angle CAT}\\=&\dfrac{\sin\angle BAT}{FT}\cdot\dfrac{FT}{ET}\cdot\dfrac{ET}{\sin\angle CAT}\\=&\dfrac{\sin\angle AFT}{\sin\angle AET}\cdot\dfrac{FT}{ET}\\=&(FT/ET)^2=(DE/DF)^2,\end{aligned}$$

下由$\angle NED=\angle EI_BC$，$\angle END=\angle EFD=\angle I_BCE$知$\triangle I_BCE\sim\triangle END$，于是$\dfrac{ND}{NE}=\dfrac{CE}{I_BC}$，故$\dfrac{\sin\angle ACN}{\sin\angle BCN}=(NE/ND)^2=(I_BC/CE)^2$，同理$\dfrac{\sin\angle CBL}{\sin\angle ABL}=(BF/I_CF)^2$。于是

$$\begin{aligned}&\dfrac{\sin\angle BAT}{\sin\angle CAT}\cdot\dfrac{\sin\angle ACN}{\sin\angle BCN}\cdot\dfrac{\sin\angle CBL}{\sin\angle ABL}\\=&(DE/DF)^2\cdot(I_BC/CE)^2\cdot(BF/I_CF)^2\\=&1\end{aligned}。$$

故由Ceva定理逆定理知$AT,BL,CN$三线共点。$\quad\Box$

<img src="https://llddeddym.github.io/images/2022-02-20(2).png"/>