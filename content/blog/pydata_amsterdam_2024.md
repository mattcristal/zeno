---
external: false
draft: false
title: PyData Amsterdam 2024
description: About the PyData Amsterdam 2024 conference
date: 2024-09-28
---

## Introduction

These days I was very happy to attend my **first** PyData conference, in Amsterdam 🇳🇱

## Tutorials

![tutorials](/images/pydata_amsterdam_2024/tutorials.jpg)

First, there were the tutorials! They took place at OBA Oosterdok 📚 - a cool library next to the Amsterdam Centraal train station.

![amsterdam_view](/images/pydata_amsterdam_2024/amsterdam_view.jpg)

The first one I attended was on [Py03](https://github.com/Cheukting/py03_101), we went through some exercises on writing Python modules in Rust 🦀

Then, we worked on writing some [Polars plugins](https://github.com/MarcoGorelli/cookiecutter-polars-plugins) for some interesting use cases 🐷

```rust
#![allow(clippy::unused_unit)]
use polars::prelude::*;
use pyo3_polars::derive::polars_expr;
use std::fmt::Write;

#[polars_expr(output_type=String)]
fn pig_latinnify(inputs: &[Series]) -> PolarsResult<Series> {
    let ca: &StringChunked = inputs[0].str()?;
    let out: StringChunked = ca.apply_into_string_amortized(|value: &str, output: &mut String| {
        if let Some(first_char) = value.chars().next() {
            write!(output, "{}{}ay", &value[1..], first_char).unwrap()
        }
    });
    Ok(out.into_series())
}
```

This is all about pig-latinify!

![pig_latinify](/images/pydata_amsterdam_2024/pig_latinify.png)

## The conference

The event took place in a cool location in Amsterdam North, at Kromhouthal. I have to say that everything was well-organized, and the event was very professional.

![conference](/images/pydata_amsterdam_2024/conference.jpg)

There were some cool presentations on Polars, DBT, data science for social good and more. The one that I enjoyed the most was not a talk, but another workshop on [Narwhals](https://narwhals-dev.github.io/narwhals/) which is a dataframe-compatibility library.

In this workshop, we worked on some **good-first-issues** on GitHub and got more familiar with the project. If the related Pull Request (PR) was approved, you would end up getting a GIF

![gif](/images/pydata_amsterdam_2024/narwal.png)
