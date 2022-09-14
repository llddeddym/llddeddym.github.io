---
title: '对一个经典角相等问题的推广的证明'
date: 2022-09-12
permalink: /posts/2022/09/2022-09-12-equal-angle/
tags:
  - pedal triangle
  - similar triangles
---

相信大家都见过如下的经典问题：

**问题**：给定$\triangle ABC$及其垂心$H$、内心$I$、切点三角形$\triangle DEF$，设$D$在$EF$上的投影为$G$. 证明：$\angle HGD=\angle IGD$.

<img src="https://llddeddym.github.io/images/2022-09-12(1).png"/>

本题有如下的推广版本：

**推广**：给定$\triangle ABC$及一点$P$，设$P$关于$\triangle ABC$的垂足三角形为$\triangle DEF$，$\odot(DEF)$与$BC$的异于$D$的交点为$G$，$G$在$EF$上的投影为$K$，设$P$关于$EF$的中垂线的对称点为$X$，$\triangle ABC$的垂心为$H$. 证明：$\angle HKG=\angle XKG$.

<img src="https://llddeddym.github.io/images/2022-09-12(2).png"/>

当$P$为$\triangle ABC$内心时，问题就退化为原题. 这个推广大概是由于王永喜老师将其放在了去年中等数学增刊一的模拟题上而被人熟悉，但我想最早的出处可能不在此处，至少我记得我曾在AoPS上看到过此题，但我已经找不到原本的帖子。另外，有理由相信古城大大在发[纯几何吧150](https://tieba.baidu.com/p/4004144137)这个帖子时就知晓这个命题，但其等价的叙述事实上到[纯几何吧1212](https://tieba.baidu.com/p/5584670787)的第二个题才被提出. 今天早上，网友“梁昌金”在公众号后台又将此题拿出问我，我才决定写一下我自己的一个证明.

*Proof.* 设$BH,CH$分别交$EF$于$U,V$，则由$BH//PE$, $CH//PF$知$\triangle HUV\sim\triangle PEF\sim\triangle XFE$，于是由相似对应知只需证明$\dfrac{UK}{VK}=\dfrac{FK}{EK}$，即只需证$\dfrac{FK}{EK}=\dfrac{UF}{VE}$，而事实上

$$\begin{aligned}&\dfrac{UF}{VE}\\=&\dfrac{UF}{BF}\cdot\dfrac{BF}{CE}\cdot\dfrac{CE}{VE}\\=&\dfrac{\sin\angle ABU}{\sin\angle BUF}\cdot\dfrac{BF}{CE}\cdot\dfrac{\sin\angle CVE}{\sin\angle ACV}\\=&\dfrac{\sin\angle CVE}{\sin\angle BUF}\cdot\dfrac{BF}{CE}\\=&\dfrac{HU}{HV}\cdot\dfrac{BF}{CE}\\=&\dfrac{PE}{PF}\cdot\dfrac{BF}{CE}\\=&\dfrac{\tan\angle BPF}{\tan\angle CPE}\\=&\dfrac{\tan\angle BDF}{\tan\angle CDE}\\=&\dfrac{\tan\angle GEF}{\tan\angle GFE}\\=&\dfrac{FK}{EK}.\end{aligned}$$

这就完成了证明. $\quad\Box$

<img src="https://llddeddym.github.io/images/2022-09-12(3).png"/>

另外，“梁昌金”还问了我另一个问题：

**问题**：已知$\triangle ABC$，$I$在$\angle BAC$的角分线上，$I$关于$\triangle ABC$的垂足三角形为$\triangle DEF$，$\odot(DEF)$与$BC$的异于$D$的交点为$T$，$T$在$EF$上的投影为$K$，$\odot(ABC)$与$\odot(AEF)$的第二交点为$P$. 求证：$K,P,I$共线.

这个问题其实是旋转相似的简单推论了.

*Proof.* 因为$IE=IF$，故只需证$PK$平分$\angle EPF$，即$\dfrac{PE}{PF}=\dfrac{KE}{KF}$，注意到$\angle PBF=\angle PCE$, $\angle PFB=\angle PEC$，故$\triangle PBF\sim\triangle PCE$，故

$$\begin{aligned}&\dfrac{PE}{PF}\\=&\dfrac{CE}{BF}\\=&\dfrac{CE}{IE}\cdot\dfrac{IF}{BF}\\=&\dfrac{\tan\angle CIE}{\tan\angle BIF}\\=&\dfrac{\tan\angle TFE}{\tan\angle TEF}\\=&\dfrac{KE}{KF}.\end{aligned}$$

这样就完成了证明. $\quad\Box$