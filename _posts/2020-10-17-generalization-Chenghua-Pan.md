---
title: '一个平面几何题的推广'
date: 2020-10-17
permalink: /posts/2020/10/2020-10-17-QL-Cu1/
tags:
  - isogonal conjugate
---

最近《许康华竞赛优学》公众号发布了一篇文章，其中主体是由潘成华老师命制的如下平面几何题目。

**题目**：已知$H,O$是$\triangle ABC$垂心、外心，$D$是$\triangle ABC$外接圆$\odot O$上一点，$AD$交$BC$于$T$，$E$在$AD$上，且$TE=DT$，求证$\angle AEH=\angle OTC$.

本题其实可以很轻易地推广。

**推广**：给定$\triangle ABC$，其有一对等角共轭点$P,Q$，$E$是$\odot(ABC)$上一点，$AE$交$BC$于$D$，$AP$交$\odot(ABC)$于另一点$R$，$F$是$AD$上一点，满足$\dfrac{\overline{AP}}{\overline{PR}}=\dfrac{\overline{FD}}{\overline{DE}}$.证明：$\measuredangle PDC=\measuredangle AFQ$.

先证明一个引理，其也是熟知的性质。

**引理**：给定$\triangle ABC$，其有一对等角共轭点$P,Q$，$AP，AQ$分别交$\odot(ABC)$于另一点$R,S$，$AQ\cap BC=M$，则$\dfrac{\overline{AP}}{\overline{PR}}=\dfrac{\overline{QM}}{\overline{MS}}$.

*Proof.* 易见$\triangle BPR\stackrel{-}{\sim}\triangle QBS$，$\triangle CMS\stackrel{-}{\sim}\triangle ACR$.于是结合$BS=CR$导比即得结论成立.$\quad\Box$

下面回到对推广的证明。

<img src="https://llddeddym.github.io/images/2020-10-17.png"/>

*Proof.* 过$A$作$AS//PD$交$RD$于$S$，设$AQ$交$BC$于$M$，交$\odot(ABC)$于另一点$A'$.由**引理**知$\dfrac{\overline{QM}}{\overline{MA'}}=\dfrac{\overline{AP}}{\overline{PR}}=\dfrac{\overline{SD}}{\overline{DR}}$，故由$RA'//BC$可得$QS//BC$，又由于$\dfrac{\overline{FD}}{\overline{DE}}=\dfrac{\overline{SD}}{\overline{DR}}$，故$FS//RE$，于是$\measuredangle FSQ=\measuredangle ERA'=\measuredangle EAA'$，即$A,F,Q,S$共圆，于是$\measuredangle PDC=\measuredangle ASQ=\measuredangle AFQ$.$\quad\Box$