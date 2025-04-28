---
featured: true
title: "Redesign Webmoov agency website met Astro.js"
slug: "webmoov-redesign"
description: "De website voor het Webmoov agency kreeg een redesign in Astro.js"
image: ./images/webmoov-home.jpg
pubDate: 2025-04-28
isDraft: false
author: "Anthony Candaele"
---

## Intro

Voor de redesign van de Webmoov website heb ik gekozen voor een minimalistisch design dat tegelijkertijd degelijkheid en vakmanschap uitstraalt. Daarom speelt wit een hoofdrol in het kleurenpalet en koos ik voor een oud en degelijk lettertype, nl, EB Garamond.

## Astro framework

Dit design werd dan vertaald naar HTML, CSS en Javascript. Het webframework van dienst is [Astro.js](https://astro.build/). Astro is dezer dagen zeer populair omdat het in tegenstelling tot andere frontend frameworks minder complex is, en meer aanleunt bij traditioneel web development. Astro richt zich tot de 'content driven' websites zoals marketing sites en blogs, maar je kunt er ook complexere applicaties zoals webshops mee bouwen.

## Context API

Astro's Content API laat je toe om content via verschillende kanalen (remote, lokale files, database, ...) binnen te trekken in je website, en die content te definieren via een schema, zodat alles type safe is. In het geval van Webmoov is de content opgeslagen in Markdown files.

Astro websites zijn zeer performant. Dit komt door het feit dat de Javascript tot een minimum wordt herleid. Ik heb de performantie van de Webmoov website getest op [Pagespeed.com](https://pagespeed.web.dev/analysis/https-www-webmoov-be/o2juzo1bey?form_factor=desktop) en behaalde zowel voor desktop als mobiele toestellen de maximale score van 100/100.

## Static Site Generation (SSG) / Server Side Generation (SSR)

Je hebt in Astro twee modes voor de generatie van je content, statisch (SSG) of dynamisch (SSR). Je kunt deze modes door elkaar gebruiken. Op de Webmoov website bijvoorbeeld worden de contactformulieren geleverd in SSR mode terwijl de blog posts geleverd worden in SSG mode. In de laatste versie van Astro kun je nu zelfs, via zogenaamde 'Server Islands' dynamische code integreren in statische webpagina's.

## Island Architecture

Een van de sterktes van Astro is dat je eenvoudig kunt starten met gewoon HTML, CSS en Javascript, maar waar nodig complexere functionaliteit kunt implementeren via populaire frontend frameworks zoals React, Vue, Svelte. Solid, etc... Dit is de zogenaamde 'Island Architecture'. De ContactForm component in de Webmoov webssite is bijvoorbeeld gemaakt met React.

## Pure CSS

Ten slotte wil ik het ook nog even hebben over de styling van de Webmoov website. Om het aantal dependencies en libraries tot een minimun te beperken besloot ik de pagina's en componenten te stijlen met pure CSS. Populaire CSS frameworks zoals Tailwind CSS zijn inderdaad gemakkelijk, maar ik hou er niet van om mijn stijldefinities rechtstreek te implementeren in HTML tags. Het is voor mij een betere ontwikkel ervaring, DX, om de CSS te scheiden van de HTML. De mogelijkheid om je CSS te scopen op component niveau, zonder andere stijldefinities te overschrijven is super handig.

## Conclusie

Via bovengenoemde technologiën en het Astro framework kon ik de doeleinden voor de Webmoov redesign realiseren. Een performante maatwerk website, met robuuste code en gemakkelijk te onderhouden en uit te breiden.
