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

<ol class="publication-list" reversed>
{% for post in site.preprints reversed %}
  <li>
    {% include archive-single.html %}
  </li>
{% endfor %}
</ol>




## Publications

<ol class="publication-list" reversed>
{% for post in site.publications reversed %}
  <li>
    {% include archive-single.html %}
  </li>
{% endfor %}
</ol>
