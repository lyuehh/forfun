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
        <h3>{{ m.Title }}</h3>
        <div ng-bind-html-unsafe='m.Content'></div>
      </div>
    </div>
  </div>
</div>