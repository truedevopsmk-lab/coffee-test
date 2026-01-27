---
layout: default
title: Home
-----------

Welcome to my personal coffee brewing and tasting journal.
This space documents my brews, beans, and experiments over time — focused on clarity, repeatability, and learning.

---

## ☕ Recent Brews

<ul>
{% assign brews = site.pages
  | where_exp: "p", "p.path contains 'brews/'"
  | where_exp: "p", "p.name != 'index.md'"
  | sort: "date"
  | reverse %}
{% for brew in brews limit:3 %}
  <li>
