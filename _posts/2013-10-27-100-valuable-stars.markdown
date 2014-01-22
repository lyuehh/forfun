---
layout: post
title: 2013最具价值百大明星榜
date: 2013-10-27 18:18
comments: true
categories: life
---

<script src="/js/100_stars.js" type="text/javascript"></script>

<div ng-app="app">
  <div class="container">
    <div ng-controller="mainCtrl">
      <div class='m' ng-repeat="m in movies">
        <h3 ng-bind-template='{{ m.Title }}'></h3>
        <div ng-bind-html-unsafe='m.Content'></div>
        <img ng-src="MiddlePicUrl">
      </div>
    </div>
  </div>
</div>
