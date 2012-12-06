// ==UserScript==
// @name Cheb.Ru Optimizer
// @namespace https://github.com/Radanisk
// @description Cheb.Ru Optimizer User Script
// @version 0.0.2
// @include http://www.cheb.ru/*
// @include http://zarulem.ws/*
// @include http://www.zarulem.ws/*
// @include http://www.na-svyazi.ru/*
// ==/UserScript==

document.body.removeAttribute('oncopy');

if (/^http:\/\/www\.cheb\.ru\/$/.test(location.href)) {
    document.getElementById('q').click();
    document.getElementById('q').focus();
}