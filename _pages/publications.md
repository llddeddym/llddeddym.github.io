---
layout: archive
title: "Publications and Preprints"
permalink: /publications/
author_profile: true
---

{% if author.googlescholar %}
  You can also find my articles on <u><a href="{{author.googlescholar}}">my Google Scholar profile</a>.</u>
{% endif %}

{% include base_path %}

## Preprints

<ol class="publication-list publication-list--bracketed">
{% assign preprint_count = site.preprints | size %}
{% for post in site.preprints reversed %}
  {% assign pub_number = preprint_count | minus: forloop.index0 %}
  <li>
    <span class="publication-number">[{{ pub_number }}]</span>
    {% include archive-single.html %}
  </li>
{% endfor %}
</ol>



## Publications

<ol class="publication-list publication-list--bracketed">
{% assign publication_count = site.publications | size %}
{% for post in site.publications reversed %}
  {% assign pub_number = publication_count | minus: forloop.index0 %}
  <li>
    <span class="publication-number">[{{ pub_number }}]</span>
    {% include archive-single.html %}
  </li>
{% endfor %}
</ol>
