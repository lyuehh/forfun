---
layout: post
title: 超级英雄电影票房榜TOP50
date: 2013-08-18 18:00
comments: true
categories: movie
---

<script src="/js/50_super_hero.js" type="text/javascript"></script>


<div ng-app="app">
  <div class="container">
    <div ng-controller="mainCtrl">
      <div class='m' ng-repeat="m in movies">
        {% raw %}
        <h3 ng-bind-template='{{ m.Title }}'></h3>
        <img ng-src='{{ m.quniuPic }}'>
        {% endraw %}
        <div ng-bind-html-unsafe='m.Content'></div>
      </div>
    </div>
  </div>
</div>
