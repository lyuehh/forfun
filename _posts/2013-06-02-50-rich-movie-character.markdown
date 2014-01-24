---
layout: post
title: 银幕上最有钱的50个电影角色
date: 2013-06-02 17:30
comments: true
categories: movie
---

<script src="/js/50_money.js" type="text/javascript"></script>


<div ng-app="app">
  <div class="container">
    <div ng-controller="mainCtrl">
      <div class='m' ng-repeat="m in movies">
        {% raw %}
        <h3 ng-bind-template='{{ m.Title }}'></h3>
        {% endraw %}
        <div ng-bind-html-unsafe='m.Content'></div>
      </div>
    </div>
  </div>
</div>
