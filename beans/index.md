---
layout: default
title: Beans
---

<ul>
{% for bean in beans %}
  {% if bean.title %}
    <li style="margin-bottom: 0.75rem;">
      <a href="{{ bean.url | relative_url }}">
        {{ bean.title }}
      </a><br>
      <small style="color:#666;">
        {{ bean.variety | default: "Variety N/A" }} ·
        {{ bean.process | default: "Process N/A" }} ·
        {{ bean.origin | default: "Origin N/A" }}
      </small>
    </li>
  {% endif %}
{% endfor %}
</ul>

