<!-- R Commander Markdown Template -->

Replace with Main Title
=======================

### ASCHA10

### 2025-06-10




### Normal Quantiles

``` r
> qnorm(c(0.95), mean=0, sd=1, lower.tail=TRUE)
```

```
[1] 1.644854
```


``` r
> data(Credit, package="ISLR")
```


### Single-Sample t-Test: Education

``` r
> with(Credit, (t.test(Education, alternative='two.sided', mu=0.0, 
+   conf.level=.95)))
```

```

	One Sample t-test

data:  Education
t = 86.074, df = 399, p-value < 2.2e-16
alternative hypothesis: true mean is not equal to 0
95 percent confidence interval:
 13.1428 13.7572
sample estimates:
mean of x 
    13.45 
```


### Nuage de points: Age~Balance | Student

``` r
> scatterplot(Age~Balance | Student, regLine=FALSE, smooth=FALSE, 
+   boxplots=FALSE, by.groups=TRUE, data=Credit)
```

<div class="figure">
<img src="figure/unnamed-chunk-5-1.png" alt="plot of chunk unnamed-chunk-5" width="750" />
<p class="caption">plot of chunk unnamed-chunk-5</p>
</div>
Oh, quelle ligne suprenante en zéro!

