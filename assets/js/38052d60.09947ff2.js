"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[96100],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>g});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),d=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=d(e.components);return n.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=d(a),g=r,m=p["".concat(l,".").concat(g)]||p[g]||c[g]||o;return a?n.createElement(m,i(i({ref:t},u),{},{components:a})):n.createElement(m,i({ref:t},u))}));function g(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var d=2;d<o;d++)i[d]=a[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},29004:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>s,toc:()=>d});var n=a(87462),r=(a(67294),a(3905));const o={title:"Customizing Grafana Dashboards"},i=void 0,s={unversionedId:"how-to-guides/advanced-user-guides/monitoring-alerting-guides/customize-grafana-dashboard",id:"version-2.6/how-to-guides/advanced-user-guides/monitoring-alerting-guides/customize-grafana-dashboard",title:"Customizing Grafana Dashboards",description:"In this section, you'll learn how to customize the Grafana dashboard to show metrics that apply to a certain container.",source:"@site/versioned_docs/version-2.6/how-to-guides/advanced-user-guides/monitoring-alerting-guides/customize-grafana-dashboard.md",sourceDirName:"how-to-guides/advanced-user-guides/monitoring-alerting-guides",slug:"/how-to-guides/advanced-user-guides/monitoring-alerting-guides/customize-grafana-dashboard",permalink:"/v2.6/how-to-guides/advanced-user-guides/monitoring-alerting-guides/customize-grafana-dashboard",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.6/how-to-guides/advanced-user-guides/monitoring-alerting-guides/customize-grafana-dashboard.md",tags:[],version:"2.6",lastUpdatedAt:1685654352,formattedLastUpdatedAt:"Jun 1, 2023",frontMatter:{title:"Customizing Grafana Dashboards"},sidebar:"tutorialSidebar",previous:{title:"Setting up Monitoring for a Workload",permalink:"/v2.6/how-to-guides/advanced-user-guides/monitoring-alerting-guides/set-up-monitoring-for-workloads"},next:{title:"Persistent Grafana Dashboards",permalink:"/v2.6/how-to-guides/advanced-user-guides/monitoring-alerting-guides/create-persistent-grafana-dashboard"}},l={},d=[{value:"Prerequisites",id:"prerequisites",level:3},{value:"Signing in to Grafana",id:"signing-in-to-grafana",level:3},{value:"Getting the PromQL Query Powering a Grafana Panel",id:"getting-the-promql-query-powering-a-grafana-panel",level:3}],u={toc:d};function c(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"In this section, you'll learn how to customize the Grafana dashboard to show metrics that apply to a certain container."),(0,r.kt)("h3",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("p",null,"Before you can customize a Grafana dashboard, the ",(0,r.kt)("inlineCode",{parentName:"p"},"rancher-monitoring")," application must be installed."),(0,r.kt)("p",null,"To see the links to the external monitoring UIs, including Grafana dashboards, you will need at least a ",(0,r.kt)("a",{parentName:"p",href:"/v2.6/integrations-in-rancher/monitoring-and-alerting/rbac-for-monitoring#users-with-rancher-cluster-manager-based-permissions"},"project-member role.")),(0,r.kt)("h3",{id:"signing-in-to-grafana"},"Signing in to Grafana"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"In the Rancher UI, go to the cluster that has the dashboard you want to customize."),(0,r.kt)("li",{parentName:"ol"},"In the left navigation menu, click ",(0,r.kt)("strong",{parentName:"li"},"Monitoring.")),(0,r.kt)("li",{parentName:"ol"},"Click ",(0,r.kt)("strong",{parentName:"li"},"Grafana.")," The Grafana dashboard should open in a new tab."),(0,r.kt)("li",{parentName:"ol"},"Go to the log in icon in the lower left corner and click ",(0,r.kt)("strong",{parentName:"li"},"Sign In.")),(0,r.kt)("li",{parentName:"ol"},"Log in to Grafana. The default Admin username and password for the Grafana instance is ",(0,r.kt)("inlineCode",{parentName:"li"},"admin/prom-operator"),". (Regardless of who has the password, cluster administrator permission in Rancher is still required access the Grafana instance.) Alternative credentials can also be supplied on deploying or upgrading the chart.")),(0,r.kt)("h3",{id:"getting-the-promql-query-powering-a-grafana-panel"},"Getting the PromQL Query Powering a Grafana Panel"),(0,r.kt)("p",null,"For any panel, you can click the title and click ",(0,r.kt)("strong",{parentName:"p"},"Explore")," to get the PromQL queries powering the graphic."),(0,r.kt)("p",null,"For this example, we would like to get the CPU usage for the Alertmanager container, so we click ",(0,r.kt)("strong",{parentName:"p"},"CPU Utilization > Inspect.")),(0,r.kt)("p",null,"The ",(0,r.kt)("strong",{parentName:"p"},"Data")," tab shows the underlying data as a time series, with the time in first column and the PromQL query result in the second column. Copy the PromQL query."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'(1 - (avg(irate({__name__=~"node_cpu_seconds_total|windows_cpu_time_total",mode="idle"}[5m])))) * 100\n')),(0,r.kt)("p",null,"You can then modify the query in the Grafana panel or create a new Grafana panel using the query."),(0,r.kt)("p",null,"See also:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://grafana.com/docs/grafana/latest/panels-visualizations/configure-panel-options/#edit-a-panel"},"Grafana docs on editing a panel")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://grafana.com/docs/grafana/latest/panels-visualizations/panel-editor-overview"},"Grafana docs on adding a panel to a dashboard"))))}c.isMDXComponent=!0}}]);