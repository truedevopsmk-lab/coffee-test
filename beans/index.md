---
layout: default
title: Beans
---

<ul>
{% assign beans = site.pages
  | where_exp: "p", "p.path contains 'beans/'"
  | where_exp: "p", "p.name != 'index.md'" %}
{% for bean in beans %}
  <li>
    <a href="{{ bean.url | relative_url }}">{{ bean.title }}</a>
  </li>
{% endfor %}
</ul>
