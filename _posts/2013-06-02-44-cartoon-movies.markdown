---
layout: post
title: 44部卡通电影
date: 2013-06-02 15:30
comments: true
categories: movie
---

<script src="/forfun/js/44_carton.js" type="text/javascript"></script>  

<div ng-app="app">
  <div class="container">
    <div ng-controller="mainCtrl">
      <div class='m' ng-repeat="m in movies">
        <h3 ng-bind-template='{{ m.Title }}'></h3>
        <div ng-bind-html-unsafe='m.Content'></div>
      </div>
    </div>
  </div>
</div>
