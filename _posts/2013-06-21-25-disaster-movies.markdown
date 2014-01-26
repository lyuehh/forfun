---
layout: post
title: 影史最卖座灾难片TOP25
date: 2013-06-21 18:30
comments: true
categories: movie
---

<script src="/js/25_disaster.js" type="text/javascript"></script>


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
