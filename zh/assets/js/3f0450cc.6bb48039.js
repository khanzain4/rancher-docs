"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[49872],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>c});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=a.createContext({}),s=function(e){var t=a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},d=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},k={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,p=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),u=s(r),c=n,m=u["".concat(p,".").concat(c)]||u[c]||k[c]||o;return r?a.createElement(m,l(l({ref:t},d),{},{components:r})):a.createElement(m,l({ref:t},d))}));function c(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,l=new Array(o);l[0]=u;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:n,l[1]=i;for(var s=2;s<o;s++)l[s]=r[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},94669:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>k,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var a=r(87462),n=(r(67294),r(3905));const o={title:"Workload with Ingress Quick Start"},l=void 0,i={unversionedId:"getting-started/quick-start-guides/deploy-workloads/workload-ingress",id:"version-2.5/getting-started/quick-start-guides/deploy-workloads/workload-ingress",title:"Workload with Ingress Quick Start",description:"Prerequisite",source:"@site/versioned_docs/version-2.5/getting-started/quick-start-guides/deploy-workloads/workload-ingress.md",sourceDirName:"getting-started/quick-start-guides/deploy-workloads",slug:"/getting-started/quick-start-guides/deploy-workloads/workload-ingress",permalink:"/zh/v2.5/getting-started/quick-start-guides/deploy-workloads/workload-ingress",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.5/getting-started/quick-start-guides/deploy-workloads/workload-ingress.md",tags:[],version:"2.5",lastUpdatedAt:1685049752,formattedLastUpdatedAt:"2023\u5e745\u670825\u65e5",frontMatter:{title:"Workload with Ingress Quick Start"},sidebar:"tutorialSidebar",previous:{title:"Deploying Workloads",permalink:"/zh/v2.5/pages-for-subheaders/deploy-rancher-workloads"},next:{title:"Workload with NodePort Quick Start",permalink:"/zh/v2.5/getting-started/quick-start-guides/deploy-workloads/nodeports"}},p={},s=[{value:"Prerequisite",id:"prerequisite",level:3},{value:"1. Deploying a Workload",id:"1-deploying-a-workload",level:3},{value:"View Your Application",id:"view-your-application",level:3},{value:"Finished",id:"finished",level:4},{value:"What&#39;s Next?",id:"whats-next",level:4}],d={toc:s};function k(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("head",null,(0,n.kt)("link",{rel:"canonical",href:"https://ranchermanager.docs.rancher.com/getting-started/quick-start-guides/deploy-workloads/workload-ingress"})),(0,n.kt)("h3",{id:"prerequisite"},"Prerequisite"),(0,n.kt)("p",null,"You have a running cluster with at least 1 node."),(0,n.kt)("h3",{id:"1-deploying-a-workload"},"1. Deploying a Workload"),(0,n.kt)("p",null,"You're ready to create your first Kubernetes ",(0,n.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/workloads/"},"workload"),". A workload is an object that includes pods along with other files and info needed to deploy your application."),(0,n.kt)("p",null,"For this workload, you'll be deploying the application Rancher Hello-World."),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"From the ",(0,n.kt)("strong",{parentName:"p"},"Clusters")," page, open the cluster that you just created.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"From the main menu of the ",(0,n.kt)("strong",{parentName:"p"},"Dashboard"),", select ",(0,n.kt)("strong",{parentName:"p"},"Projects/Namespaces"),".")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Open the ",(0,n.kt)("strong",{parentName:"p"},"Project: Default")," project.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Click ",(0,n.kt)("strong",{parentName:"p"},"Resources > Workloads."))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Click ",(0,n.kt)("strong",{parentName:"p"},"Deploy"),"."),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Step Result:")," The ",(0,n.kt)("strong",{parentName:"p"},"Deploy Workload")," page opens.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Enter a ",(0,n.kt)("strong",{parentName:"p"},"Name")," for your workload.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"From the ",(0,n.kt)("strong",{parentName:"p"},"Docker Image")," field, enter ",(0,n.kt)("inlineCode",{parentName:"p"},"rancher/hello-world"),". This field is case-sensitive.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Leave the remaining options on their default setting. We'll tell you about them later.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Click ",(0,n.kt)("strong",{parentName:"p"},"Launch"),"."))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Result:")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Your workload is deployed. This process might take a few minutes to complete."),(0,n.kt)("li",{parentName:"ul"},"When your workload completes deployment, it's assigned a state of ",(0,n.kt)("strong",{parentName:"li"},"Active"),". You can view this status from the project's ",(0,n.kt)("strong",{parentName:"li"},"Workloads")," page.")),(0,n.kt)("br",null),"### 2. Expose The Application Via An Ingress",(0,n.kt)("p",null,"Now that the application is up and running it needs to be exposed so that other services can connect."),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"From the ",(0,n.kt)("strong",{parentName:"p"},"Clusters")," page, open the cluster that you just created.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"From the main menu of the ",(0,n.kt)("strong",{parentName:"p"},"Dashboard"),", select ",(0,n.kt)("strong",{parentName:"p"},"Projects"),".")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Open the ",(0,n.kt)("strong",{parentName:"p"},"Default")," project.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Click ",(0,n.kt)("strong",{parentName:"p"},"Resources > Workloads > Load Balancing.")," Click on the ",(0,n.kt)("strong",{parentName:"p"},"Load Balancing")," tab.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Click ",(0,n.kt)("strong",{parentName:"p"},"Add Ingress"),".")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Enter a name i.e. ",(0,n.kt)("strong",{parentName:"p"},"hello"),".")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"In the ",(0,n.kt)("strong",{parentName:"p"},"Target")," field, drop down the list and choose the name that you set for your service.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Enter ",(0,n.kt)("inlineCode",{parentName:"p"},"80")," in the ",(0,n.kt)("strong",{parentName:"p"},"Port")," field.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Leave everything else as default and click ",(0,n.kt)("strong",{parentName:"p"},"Save"),"."))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Result:"),"  The application is assigned a ",(0,n.kt)("inlineCode",{parentName:"p"},"sslip.io")," address and exposed. It may take a minute or two to populate."),(0,n.kt)("h3",{id:"view-your-application"},"View Your Application"),(0,n.kt)("p",null,"From the ",(0,n.kt)("strong",{parentName:"p"},"Load Balancing")," page, click the target link, which will look something like ",(0,n.kt)("inlineCode",{parentName:"p"},"hello.default.xxx.xxx.xxx.xxx.sslip.io > hello-world"),"."),(0,n.kt)("p",null,"Your application will open in a separate window."),(0,n.kt)("h4",{id:"finished"},"Finished"),(0,n.kt)("p",null,"Congratulations! You have successfully deployed a workload exposed via an ingress."),(0,n.kt)("h4",{id:"whats-next"},"What's Next?"),(0,n.kt)("p",null,"When you're done using your sandbox, destroy the Rancher Server and your cluster. See one of the following:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/zh/v2.5/getting-started/quick-start-guides/deploy-rancher-manager/aws#destroying-the-environment"},"Amazon AWS: Destroying the Environment")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/zh/v2.5/getting-started/quick-start-guides/deploy-rancher-manager/digitalocean#destroying-the-environment"},"DigitalOcean: Destroying the Environment")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/zh/v2.5/getting-started/quick-start-guides/deploy-rancher-manager/vagrant#destroying-the-environment"},"Vagrant: Destroying the Environment"))))}k.isMDXComponent=!0}}]);