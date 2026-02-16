---
layout: default
title: "Brews & Frames"
permalink: /brews-and-frames/
---

# Brews & Frames

A visual archive of my coffee rituals, brewers, beans, and moments.

<section class="gallery-section" aria-labelledby="gallery-brewers">
  <h2 id="gallery-brewers">☕ Brewers</h2>
  <div class="gallery-grid">
    {% for item in site.data.gallery.brewers %}
      <figure class="gallery-card">
        <button class="gallery-trigger" type="button" data-gallery-image="{{ item.image | relative_url }}" data-gallery-caption="{{ item.caption | escape }}" aria-label="Open image: {{ item.caption }}">
          <img src="{{ item.image | relative_url }}" alt="{{ item.caption }}" loading="lazy">
        </button>
        <figcaption>{{ item.caption }}</figcaption>
      </figure>
    {% endfor %}
  </div>
</section>

<section class="gallery-section" aria-labelledby="gallery-beans">
  <h2 id="gallery-beans">📦 Beans</h2>
  <div class="gallery-grid">
    {% for item in site.data.gallery.beans %}
      <figure class="gallery-card">
        <button class="gallery-trigger" type="button" data-gallery-image="{{ item.image | relative_url }}" data-gallery-caption="{{ item.caption | escape }}" aria-label="Open image: {{ item.caption }}">
          <img src="{{ item.image | relative_url }}" alt="{{ item.caption }}" loading="lazy">
        </button>
        <figcaption>{{ item.caption }}</figcaption>
      </figure>
    {% endfor %}
  </div>
</section>

<section class="gallery-section" aria-labelledby="gallery-brewed-elsewhere">
  <h2 id="gallery-brewed-elsewhere">🌍 Brewed Elsewhere</h2>
  <div class="gallery-grid">
    {% for item in site.data.gallery.brewed_elsewhere %}
      <figure class="gallery-card">
        <button class="gallery-trigger" type="button" data-gallery-image="{{ item.image | relative_url }}" data-gallery-caption="{{ item.caption | escape }}" aria-label="Open image: {{ item.caption }}">
          <img src="{{ item.image | relative_url }}" alt="{{ item.caption }}" loading="lazy">
        </button>
        <figcaption>{{ item.caption }}</figcaption>
      </figure>
    {% endfor %}
  </div>
</section>

<section class="gallery-section" aria-labelledby="gallery-experiments">
  <h2 id="gallery-experiments">🧪 Experiments</h2>
  <div class="gallery-grid">
    {% for item in site.data.gallery.experiments %}
      <figure class="gallery-card">
        <button class="gallery-trigger" type="button" data-gallery-image="{{ item.image | relative_url }}" data-gallery-caption="{{ item.caption | escape }}" aria-label="Open image: {{ item.caption }}">
          <img src="{{ item.image | relative_url }}" alt="{{ item.caption }}" loading="lazy">
        </button>
        <figcaption>{{ item.caption }}</figcaption>
      </figure>
    {% endfor %}
  </div>
</section>

<div id="gallery-lightbox" class="gallery-lightbox" hidden>
  <div class="gallery-lightbox-backdrop" data-gallery-close></div>
  <div class="gallery-lightbox-dialog" role="dialog" aria-modal="true" aria-label="Image preview">
    <button type="button" class="gallery-lightbox-close" data-gallery-close aria-label="Close image preview">×</button>
    <img id="gallery-lightbox-image" src="" alt="" loading="eager">
    <p id="gallery-lightbox-caption"></p>
  </div>
</div>

<script src="{{ '/assets/js/gallery.js' | relative_url }}"></script>
