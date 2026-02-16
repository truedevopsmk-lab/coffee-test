---
layout: default
title: Home
---

Welcome to my personal coffee brewing and tasting journal.  
This space documents my brews, beans, and experiments over time.

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
    {{ brew.date }} —
    <a href="{{ brew.url | relative_url }}">{{ brew.title }}</a>
  </li>
{% endfor %}
</ul>

<p>
  <a href="{{ '/brews/' | relative_url }}">View all brews →</a>
</p>

---

## 🌱 Beans

<ul>
{% assign beans = site.pages
  | where_exp: "p", "p.path contains 'beans/'"
  | where_exp: "p", "p.name != 'index.md'"
  | sort: "title" %}
{% for bean in beans limit:5 %}
  <li>
    <a href="{{ bean.url | relative_url }}">{{ bean.title }}</a>
  </li>
{% endfor %}
</ul>

<p>
  <a href="{{ '/beans/' | relative_url }}">View all beans →</a>
</p>

<p>
  <a href="{{ '/brews-and-frames/' | relative_url }}">📸 Brews &amp; Frames</a><br>
  <small>A visual archive of my coffee rituals, brewers, beans, and moments.</small>
</p>

---

## 📸 Brews & Frames

A visual archive of my coffee rituals, brewers, beans, and moments.

<p>
  <a href="{{ '/brews-and-frames/' | relative_url }}">View Brews &amp; Frames →</a>
</p>

---

## ⚙️ Brewing Methods

<ul>
{% assign methods = site.pages
  | where_exp: "p", "p.path contains 'methods/'"
  | where_exp: "p", "p.name != 'index.md'" %}
{% for method in methods %}
  <li>
    <a href="{{ method.url | relative_url }}">{{ method.title }}</a>
  </li>
{% endfor %}
</ul>
