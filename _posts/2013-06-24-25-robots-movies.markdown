---
layout: post
title: 机器人电影票房TOP25
date: 2013-08-01 09:14
comments: true
categories: movie
---

<script src="/js/25_robot.js" type="text/javascript"></script>


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
