"use strict";(self.webpackChunkdocus=self.webpackChunkdocus||[]).push([[7918],{86753:function(e,t,a){a.d(t,{Z:function(){return u}});var n=a(67294),l=a(95999),r=a(87462),i=a(63366),s=a(86010),o="iconEdit_mS5F",c=["className"];var d=function(e){var t=e.className,a=(0,i.Z)(e,c);return n.createElement("svg",(0,r.Z)({fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,s.Z)(o,t),"aria-hidden":"true"},a),n.createElement("g",null,n.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})))},m=a(63616);function u(e){var t=e.editUrl;return n.createElement("a",{href:t,target:"_blank",rel:"noreferrer noopener",className:m.kM.common.editThisPage},n.createElement(d,null),n.createElement(l.Z,{id:"theme.common.editThisPage",description:"The link label to edit the current page"},"Edit this page"))}},39649:function(e,t,a){a.d(t,{N:function(){return u},Z:function(){return v}});var n=a(63366),l=a(87462),r=a(67294),i=a(86010),s=a(95999),o=a(63616),c="anchorWithStickyNavbar_y2LR",d="anchorWithHideOnScrollNavbar_3ly5",m=["id"],u=function(e){var t=Object.assign({},e);return r.createElement("header",null,r.createElement("h1",(0,l.Z)({},t,{id:void 0}),t.children))},v=function(e){return"h1"===e?u:(t=e,function(e){var a,u=e.id,v=(0,n.Z)(e,m),h=(0,o.LU)().navbar.hideOnScroll;return u?r.createElement(t,(0,l.Z)({},v,{className:(0,i.Z)("anchor",(a={},a[d]=h,a[c]=!h,a)),id:u}),v.children,r.createElement("a",{className:"hash-link",href:"#"+u,title:(0,s.I)({id:"theme.common.headingLinkTitle",message:"Direct link to heading",description:"Title for link to heading"})},"\u200b")):r.createElement(t,v)});var t}},51575:function(e,t,a){a.d(t,{Z:function(){return d}});var n=a(87462),l=a(63366),r=a(67294),i=a(86010),s=a(25002),o="tableOfContents_vrFS",c=["className"];var d=function(e){var t=e.className,a=(0,l.Z)(e,c);return r.createElement("div",{className:(0,i.Z)(o,"thin-scrollbar",t)},r.createElement(s.Z,(0,n.Z)({},a,{linkClassName:"table-of-contents__link toc-highlight",linkActiveClassName:"table-of-contents__link--active"})))}},25002:function(e,t,a){a.d(t,{Z:function(){return c}});var n=a(87462),l=a(63366),r=a(67294),i=a(63616),s=["toc","className","linkClassName","linkActiveClassName","minHeadingLevel","maxHeadingLevel"];function o(e){var t=e.toc,a=e.className,n=e.linkClassName,l=e.isChild;return t.length?r.createElement("ul",{className:l?void 0:a},t.map((function(e){return r.createElement("li",{key:e.id},r.createElement("a",{href:"#"+e.id,className:null!=n?n:void 0,dangerouslySetInnerHTML:{__html:e.value}}),r.createElement(o,{isChild:!0,toc:e.children,className:a,linkClassName:n}))}))):null}function c(e){var t=e.toc,a=e.className,c=void 0===a?"table-of-contents table-of-contents__left-border":a,d=e.linkClassName,m=void 0===d?"table-of-contents__link":d,u=e.linkActiveClassName,v=void 0===u?void 0:u,h=e.minHeadingLevel,g=e.maxHeadingLevel,E=(0,l.Z)(e,s),p=(0,i.LU)(),b=null!=h?h:p.tableOfContents.minHeadingLevel,f=null!=g?g:p.tableOfContents.maxHeadingLevel,N=(0,i.DA)({toc:t,minHeadingLevel:b,maxHeadingLevel:f}),Z=(0,r.useMemo)((function(){if(m&&v)return{linkClassName:m,linkActiveClassName:v,minHeadingLevel:b,maxHeadingLevel:f}}),[m,v,b,f]);return(0,i.Si)(Z),r.createElement(o,(0,n.Z)({toc:N,className:c,linkClassName:m},E))}},8727:function(e,t,a){a.d(t,{Z:function(){return v}});var n=a(67294),l=a(86010),r=a(95999),i=a(39960),s="tag_WK-t",o="tagRegular_LXbV",c="tagWithCount_S5Zl";var d=function(e){var t,a=e.permalink,r=e.name,d=e.count;return n.createElement(i.Z,{href:a,className:(0,l.Z)(s,(t={},t[o]=!d,t[c]=d,t))},r,d&&n.createElement("span",null,d))},m="tags_NBRY",u="tag_F03v";function v(e){var t=e.tags;return n.createElement(n.Fragment,null,n.createElement("b",null,n.createElement(r.Z,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list"},"Tags:")),n.createElement("ul",{className:(0,l.Z)(m,"padding--none","margin-left--sm")},t.map((function(e){var t=e.label,a=e.permalink;return n.createElement("li",{key:a,className:u},n.createElement(d,{name:t,permalink:a}))}))))}},82593:function(e,t,a){a.d(t,{Z:function(){return g}});var n=a(67294),l=a(46616),r=a(87385),i=a(16573),s=a(1020),o=a(53597),c=a(37332),d=a(75341),m=a(70431),u=a(38168),v=a(44276),h="shareButtons_1MQy",g=function(e){var t=e.title,a=e.hashtags,g=e.style,E=window.location.href;return n.createElement("div",{className:h,style:g},n.createElement(l.Z,{url:E,title:t,hashtags:a},n.createElement(r.Z,{round:!0,size:32})),n.createElement(i.Z,{url:E,title:t,hashtag:null==a?void 0:a[0]},n.createElement(s.Z,{round:!0,size:32})),n.createElement(o.Z,{url:E,title:t},n.createElement(c.Z,{round:!0,size:32})),n.createElement(d.Z,{url:E,title:t},n.createElement(m.Z,{round:!0,size:32})),n.createElement(u.Z,{url:E,title:t},n.createElement(v.Z,{round:!0,size:32})))}},88236:function(e,t,a){a.r(t),a.d(t,{default:function(){return P}});var n=a(67294),l=a(86010),r=a(93783),i=a(95999),s=a(39960);var o=function(e){var t=e.navLink,a=e.next;return n.createElement(s.Z,{className:(0,l.Z)("pagination-nav__link"),to:t.permalink},n.createElement("div",{className:"pagination-nav__sublabel"},a?n.createElement(i.Z,{id:"theme.docs.paginator.next",description:"The label used to navigate to the next doc"},"Next"):n.createElement(i.Z,{id:"theme.docs.paginator.previous",description:"The label used to navigate to the previous doc"},"Previous")),n.createElement("div",{className:"pagination-nav__label"},t.title))};var c=function(e){var t=e.previous,a=e.next;return n.createElement("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,i.I)({id:"theme.docs.paginator.navAriaLabel",message:"Docs pages navigation",description:"The ARIA label for the docs pagination"})},n.createElement("div",{className:"pagination-nav__item"},t&&n.createElement(o,{navLink:t})),n.createElement("div",{className:"pagination-nav__item pagination-nav__item--next"},a&&n.createElement(o,{navLink:a,next:!0})))},d=a(52263),m=a(80907),u=a(63616);var v={unreleased:function(e){var t=e.siteTitle,a=e.versionMetadata;return n.createElement(i.Z,{id:"theme.docs.versions.unreleasedVersionLabel",description:"The label used to tell the user that he's browsing an unreleased doc version",values:{siteTitle:t,versionLabel:n.createElement("b",null,a.label)}},"This is unreleased documentation for {siteTitle} {versionLabel} version.")},unmaintained:function(e){var t=e.siteTitle,a=e.versionMetadata;return n.createElement(i.Z,{id:"theme.docs.versions.unmaintainedVersionLabel",description:"The label used to tell the user that he's browsing an unmaintained doc version",values:{siteTitle:t,versionLabel:n.createElement("b",null,a.label)}},"This is documentation for {siteTitle} {versionLabel}, which is no longer actively maintained.")}};function h(e){var t=v[e.versionMetadata.banner];return n.createElement(t,e)}function g(e){var t=e.versionLabel,a=e.to,l=e.onClick;return n.createElement(i.Z,{id:"theme.docs.versions.latestVersionSuggestionLabel",description:"The label used to tell the user to check the latest version",values:{versionLabel:t,latestVersionLink:n.createElement("b",null,n.createElement(s.Z,{to:a,onClick:l},n.createElement(i.Z,{id:"theme.docs.versions.latestVersionLinkLabel",description:"The label used for the latest version suggestion link label"},"latest version")))}},"For up-to-date documentation, see the {latestVersionLink} ({versionLabel}).")}function E(e){var t,a=e.className,r=e.versionMetadata,i=(0,d.Z)().siteConfig.title,s=(0,m.gA)({failfast:!0}).pluginId,o=(0,u.J)(s).savePreferredVersionName,c=(0,m.Jo)(s),v=c.latestDocSuggestion,E=c.latestVersionSuggestion,p=null!=v?v:(t=E).docs.find((function(e){return e.id===t.mainDocId}));return n.createElement("div",{className:(0,l.Z)(a,u.kM.docs.docVersionBanner,"alert alert--warning margin-bottom--md"),role:"alert"},n.createElement("div",null,n.createElement(h,{siteTitle:i,versionMetadata:r})),n.createElement("div",{className:"margin-top--md"},n.createElement(g,{versionLabel:E.label,to:p.path,onClick:function(){return o(E.name)}})))}function p(e){var t=e.className,a=(0,u.E6)();return a.banner?n.createElement(E,{className:t,versionMetadata:a}):null}function b(e){var t=e.className,a=(0,u.E6)();return a.badge?n.createElement("span",{className:(0,l.Z)(t,u.kM.docs.docVersionBadge,"badge badge--secondary")},"Version: ",a.label):null}var f=a(41217);function N(e){var t=e.lastUpdatedAt,a=e.formattedLastUpdatedAt;return n.createElement(i.Z,{id:"theme.lastUpdated.atDate",description:"The words used to describe on which date a page has been last updated",values:{date:n.createElement("b",null,n.createElement("time",{dateTime:new Date(1e3*t).toISOString()},a))}}," on {date}")}function Z(e){var t=e.lastUpdatedBy;return n.createElement(i.Z,{id:"theme.lastUpdated.byUser",description:"The words used to describe by who the page has been last updated",values:{user:n.createElement("b",null,t)}}," by {user}")}function k(e){var t=e.lastUpdatedAt,a=e.formattedLastUpdatedAt,l=e.lastUpdatedBy;return n.createElement("span",{className:u.kM.common.lastUpdated},n.createElement(i.Z,{id:"theme.lastUpdated.lastUpdatedAtBy",description:"The sentence used to display when a page has been last updated, and by who",values:{atDate:t&&a?n.createElement(N,{lastUpdatedAt:t,formattedLastUpdatedAt:a}):"",byUser:l?n.createElement(Z,{lastUpdatedBy:l}):""}},"Last updated{atDate}{byUser}"),!1)}var L=a(86753),_=a(8727),U="lastUpdated_mt2f";function C(e){return n.createElement("div",{className:(0,l.Z)(u.kM.docs.docFooterTagsRow,"row margin-bottom--sm")},n.createElement("div",{className:"col"},n.createElement(_.Z,e)))}function T(e){var t=e.editUrl,a=e.lastUpdatedAt,r=e.lastUpdatedBy,i=e.formattedLastUpdatedAt;return n.createElement("div",{className:(0,l.Z)(u.kM.docs.docFooterEditMetaRow,"row")},n.createElement("div",{className:"col"},t&&n.createElement(L.Z,{editUrl:t})),n.createElement("div",{className:(0,l.Z)("col",U)},(a||r)&&n.createElement(k,{lastUpdatedAt:a,formattedLastUpdatedAt:i,lastUpdatedBy:r})))}function y(e){var t=e.content.metadata,a=t.editUrl,r=t.lastUpdatedAt,i=t.formattedLastUpdatedAt,s=t.lastUpdatedBy,o=t.tags,c=o.length>0,d=!!(a||r||s);return c||d?n.createElement("footer",{className:(0,l.Z)(u.kM.docs.docFooter,"docusaurus-mt-lg")},c&&n.createElement(C,{tags:o}),d&&n.createElement(T,{editUrl:a,lastUpdatedAt:r,lastUpdatedBy:s,formattedLastUpdatedAt:i})):null}var w=a(51575),M="tocCollapsible_aw-L",A="tocCollapsibleButton_zr6a",x="tocCollapsibleContent_0dom",H="tocCollapsibleExpanded_FSiv",S=a(25002);function B(e){var t,a=e.toc,r=e.className,s=e.minHeadingLevel,o=e.maxHeadingLevel,c=(0,u.uR)({initialState:!0}),d=c.collapsed,m=c.toggleCollapsed;return n.createElement("div",{className:(0,l.Z)(M,(t={},t[H]=!d,t),r)},n.createElement("button",{type:"button",className:(0,l.Z)("clean-btn",A),onClick:m},n.createElement(i.Z,{id:"theme.TOCCollapsible.toggleButtonLabel",description:"The label used by the button on the collapsible TOC component"},"On this page")),n.createElement(u.zF,{lazy:!0,className:x,collapsed:d},n.createElement(S.Z,{toc:a,minHeadingLevel:s,maxHeadingLevel:o})))}var V=a(39649),O="docItemContainer_PQH2",z="docItemCol_MGa7",D="tocMobile_psec",F=a(82593),I=a(91262),R=a(4842);function P(e){var t,a=e.content,i=a.metadata,s=a.frontMatter,o=s.image,d=s.keywords,m=s.hide_title,v=s.hide_table_of_contents,h=s.toc_min_heading_level,g=s.toc_max_heading_level,E=i.description,N=i.title,Z=!m&&void 0===a.contentTitle,k=(0,r.Z)(),L=!v&&a.toc&&a.toc.length>0,_=L&&("desktop"===k||"ssr"===k);return n.createElement(R.Z,null,n.createElement(f.Z,{title:N,description:E,keywords:d,image:o}),n.createElement("div",{className:"row"},n.createElement("div",{className:(0,l.Z)("col",(t={},t[z]=!v,t))},n.createElement(p,null),n.createElement("div",{className:O},n.createElement("article",null,n.createElement(b,null),L&&n.createElement(B,{toc:a.toc,minHeadingLevel:h,maxHeadingLevel:g,className:(0,l.Z)(u.kM.docs.docTocMobile,D)}),n.createElement("div",{className:(0,l.Z)(u.kM.docs.docMarkdown,"markdown")},n.createElement(I.Z,null,(function(){return n.createElement(F.Z,{title:N+" | OSSInsight",hashtags:d})})),Z&&n.createElement(V.N,null,N),n.createElement(a,null)),n.createElement(y,e)),n.createElement(c,{previous:i.previous,next:i.next}))),_&&n.createElement("div",{className:"col col--3"},n.createElement(w.Z,{toc:a.toc,minHeadingLevel:h,maxHeadingLevel:g,className:u.kM.docs.docTocDesktop}))))}}}]);