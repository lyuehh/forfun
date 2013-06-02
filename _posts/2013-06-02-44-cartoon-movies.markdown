---
layout: post
title: 44部卡通电影
date: 2013-06-02 15:30
comments: true
categories: movie
---


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