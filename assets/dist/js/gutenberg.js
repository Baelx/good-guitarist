(()=>{var e={288:(e,t,r)=>{"use strict";r.r(t);var n=r(307),a=r(736);(0,wp.blocks.registerBlockType)("gutenberg-good-guitarist/chord-diagram",{title:"Chord Diagram",icon:"playlist-audio",category:"text",attributes:{chords:{type:"array",default:[]}},edit:function(e){var t=e.className,r=e.attributes,i=(e.setAttributes,r.chords);return(0,n.createElement)("figure",{className:t},i.length>0?i.map((function(e){return(0,n.createElement)("img",{src:e.image,alt:"".concat(e.title," chord")})})):(0,n.createElement)("p",null,(0,a.__)("No chords selected.")))},save:function(e){var t=e.className,r=e.attributes,a=(e.setAttributes,r.chords);return(0,n.createElement)("figure",{className:t},a&&a.map((function(e){return(0,n.createElement)("img",{src:e.image,alt:"".concat(e.title," chord")})})))}})},677:(e,t,r)=>{"use strict";r.r(t);var n=r(307),a=wp.components,i=a.TextControl,l=a.Button,o=wp.blockEditor,c=o.useBlockProps,s=o.MediaUpload,u=o.MediaUploadCheck,d=wp.i18n.__;(0,wp.blocks.registerBlockType)("gutenberg-good-guitarist/cta-template",{title:"Call to Action Template",icon:"admin-customizer",category:"text",attributes:{description:{type:"string",default:""},url:{type:"string",default:""},buttonText:{type:"string",default:""},imageId:{type:"integer",default:0},imageUrl:{type:"string",default:"".concat(gutenbergVars.image_dir,"/good-guitarist-preview-img.png")}},edit:function(e){var t=e.attributes,r=e.setAttributes,a=t.url,o=t.description,m=t.buttonText,g=t.imageId,p=t.imageUrl,b=c();return(0,n.createElement)("div",b,(0,n.createElement)(i,{label:d("Description"),value:o,onChange:function(e){return r({description:e})}}),(0,n.createElement)(i,{label:d("URL"),value:a,onChange:function(e){return r({url:e})}}),(0,n.createElement)(i,{label:d('Button text (if nothing is entered, button text will be "Click here")'),value:m,onChange:function(e){return r({buttonText:e})}}),(0,n.createElement)("div",{className:"media-upload-component"},(0,n.createElement)("label",{className:"image-label"},d("Call to action thumbnail (if no image is chosen, a default image will be used)")),p&&(0,n.createElement)("img",{className:"course-image",src:p}),(0,n.createElement)(u,null,(0,n.createElement)(s,{onSelect:function(e){r({imageId:e.id,imageUrl:e.url})},allowedTypes:["image"],render:function(e){var t=e.open;return(0,n.createElement)(l,{className:0===g?"select-image-button":"select-image-button button-hidden",onClick:t},0==g&&d("Choose an image"))}})),0!==g&&(0,n.createElement)(u,null,(0,n.createElement)(l,{onClick:function(){r({imageId:0,imageUrl:""})},isLink:!0,isDestructive:!0},d("Remove image")))))},save:function(){return null}})},970:(e,t,r)=>{"use strict";r.r(t);var n=r(942);function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}(0,wp.hooks.addFilter)("blocks.registerBlockType","good-guitarist/modify-group-block",(function(e){if("core/group"!==e.name)return e;!function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}}({},e);return e}))},227:(e,t,r)=>{"use strict";r.r(t);var n=r(307),a=r(309),i=wp.i18n.__,l=wp.editor.MediaUpload,o=wp.blockEditor,c=(o.useBlockProps,o.BlockControls),s=wp.components,u=s.Toolbar,d=s.ToolbarDropdownMenu,m=s.TextControl,g=s.TextareaControl,p=wp.data.useSelect,b=wp.i18n.__;(0,wp.blocks.registerBlockType)("gutenberg-good-guitarist/large-cta",{title:b("Large Call to Action"),icon:"megaphone",category:"layout",className:"large-cta",attributes:{title:{type:"string",default:""},description:{type:"string",default:""},url:{type:"string",default:""},buttonText:{type:"string",default:"Click here"},imageId:{type:"number"},imageUrl:{type:"string",default:"".concat(gutenbergVars.image_dir,"/good-guitarist-preview-img.png")}},edit:function(e){var t=e.attributes,r=e.className,o=e.setAttributes,s=t.url,b=t.buttonText,f=t.description,y=t.imageId,v=t.imageUrl,h=p((function(e){var t=e("core").getEntityRecords("postType","cta",{per_page:-1});if(t)return(0,a.cJ)(t).map((function(e){return{title:e.title,onClick:function(){return o({title:e.title,description:e.description,url:e.url,imageId:e.imageId,buttonText:e.buttonText})}}}))}));return(0,n.createElement)("div",{className:r},(0,n.createElement)(c,null,(0,n.createElement)(u,null,h&&(0,n.createElement)(d,{icon:"update",className:"toolbar-toggle-cta",label:i("Use with an existing call to action"),controls:h}))),(0,n.createElement)("div",{className:"image-container"},(0,n.createElement)("img",{src:v,alt:""}),(0,n.createElement)(l,{onSelect:function(e){o({imageUrl:e.url,imageId:e.id})},allowedTypes:"image",value:y,render:function(e){var t=e.open;return(0,n.createElement)("button",{type:"text",className:"image-button change-image-button",onClick:t},i("Change Image"))}})),(0,n.createElement)("div",{className:"details-container"},(0,n.createElement)(g,{label:"Description",value:f,onChange:function(e){return o({description:e})}}),(0,n.createElement)(m,{label:"Link",value:s,onChange:function(e){return o({url:e})}}),(0,n.createElement)(m,{className:"button-text-input",label:"Button text",value:b,onChange:function(e){return o({buttonText:e})}})))},save:function(e){var t=e.attributes,r=e.className,a=t.title,i=t.url,l=t.buttonText,o=t.description,c=t.imageUrl;return(0,n.createElement)("div",{className:r},(0,n.createElement)("img",{className:"lcc-image",src:c,alt:""}),(0,n.createElement)("div",null,(0,n.createElement)("h3",{className:"lcc-heading"},a),(0,n.createElement)("div",{className:"lcc-body"},o)),(0,n.createElement)("a",{className:"lcc-button",href:i},l))}})},266:(e,t,r)=>{"use strict";r.r(t);var n=r(307),a=wp.i18n.__;(0,wp.blocks.registerBlockType)("gutenberg-good-guitarist/latest-lessons",{title:"Latest Lessons",icon:"list",category:"layout",className:"latest-lessons",attributes:{lessons:{type:"string"}},edit:function(){return(0,n.createElement)("div",null,(0,n.createElement)("h2",{className:"dynamic-block-h2"},a("Latest Lessons Carousel")),(0,n.createElement)("small",null,a("A carousel of the latest lessons will appear here on the frontend.")))},save:function(){return null}})},628:(e,t,r)=>{"use strict";r.r(t);const n=window.wp.blocks;var a=r(736),i=r(307);const l=window.wp.blockEditor,o=window.wp.components;(0,n.registerBlockType)("gutenberg-good-guitarist/section",{title:(0,a.__)("Section"),icon:"align-full-width",category:"layout",attributes:{gutterWidth:{type:"number",default:0}},edit:function(e){var t=e.className,r=e.attributes,n=e.setAttributes,c=r.gutterWidth,s={paddingLeft:"".concat(c,"%"),paddingRight:"".concat(c,"%")};return(0,i.createElement)("div",{className:t,style:s},(0,i.createElement)(l.InspectorControls,null,(0,i.createElement)(o.PanelBody,{title:(0,a.__)("Gutter width"),initialOpen:!0},(0,i.createElement)("p",null,(0,a.__)("Enter a value for the left and right margins of this block. The higher the value, the more space will appear to the left and right of the Section content.")),(0,i.createElement)("p",{style:{fontStyle:"italic"}},(0,a.__)("The grey colour on either is side is only to illustrate the size of the margins. Grey will not be used on the front end.")),(0,i.createElement)(o.__experimentalNumberControl,{"data-testid":"gutter-input",onChange:function(e){return n({gutterWidth:e})},max:100,min:0,value:c}))),(0,i.createElement)(l.InnerBlocks,null))},save:function(e){var t=e.className,r=e.attributes.gutterWidth,n={marginLeft:"".concat(r,"%"),marginRight:"".concat(r,"%")};return(0,i.createElement)("div",{className:t,style:n},(0,i.createElement)(l.InnerBlocks.Content,null))}})},262:(e,t,r)=>{"use strict";r.r(t);var n=r(462),a=r(307),i=r(309),l=wp.i18n.__,o=wp.editor.MediaUpload,c=wp.blockEditor,s=c.useBlockProps,u=c.BlockControls,d=wp.components,m=d.Toolbar,g=d.ToolbarDropdownMenu,p=d.TextControl,b=d.TextareaControl,f=wp.data.useSelect;(0,wp.blocks.registerBlockType)("gutenberg-good-guitarist/small-cta",{title:"Small Call to Action",icon:"megaphone",category:"layout",className:"small-cta",attributes:{description:{type:"string",default:""},url:{type:"string",default:""},buttonText:{type:"string",default:"Click here"},imageId:{type:"number"},imageUrl:{type:"string",default:"".concat(gutenbergVars.image_dir,"/good-guitarist-preview-img.png")}},edit:function(e){var t=e.attributes,r=e.setAttributes,c=s(),d=t.url,y=t.buttonText,v=t.description,h=t.imageId,E=t.imageUrl,w=f((function(e){var t=e("core").getEntityRecords("postType","cta",{per_page:-1});if(t)return(0,i.cJ)(t).map((function(e){return{title:e.title,onClick:function(){return r({description:e.description,url:e.url,imageId:e.imageId,imageUrl:e.imageUrl,buttonText:e.buttonText})}}}))}));return(0,a.createElement)("div",(0,n.Z)({},c,{className:"small-cta"}),(0,a.createElement)(u,null,(0,a.createElement)(m,null,w&&(0,a.createElement)(g,{icon:"update",className:"toolbar-toggle-cta",label:"Use with an existing call to action",controls:w}))),(0,a.createElement)("div",{className:"image-container"},(0,a.createElement)("img",{src:E,alt:""}),(0,a.createElement)(o,{onSelect:function(e){r({imageUrl:e.url,imageId:e.id})},allowedTypes:"image",value:h,render:function(e){var t=e.open;return(0,a.createElement)("button",{type:"text",className:"image-button change-image-button",onClick:t},l("Change Image"))}})),(0,a.createElement)("div",{className:"details-container"},(0,a.createElement)(b,{label:"Description",value:v,onChange:function(e){return r({description:e})}}),(0,a.createElement)(p,{label:"Link",value:d,onChange:function(e){return r({url:e})}}),(0,a.createElement)(p,{className:"button-text-input",label:"Button text",value:y,onChange:function(e){return r({buttonText:e})}})))},save:function(e){var t=e.attributes,r=t.url,n=t.buttonText,i=t.description,l=t.imageUrl;return(0,a.createElement)("div",null,(0,a.createElement)("div",{className:"image-container"},(0,a.createElement)("img",{src:l,alt:""})),(0,a.createElement)("div",{className:"details-container"},(0,a.createElement)("p",null,i),(0,a.createElement)("a",{className:"cta-button",href:r},n)))}})},407:(e,t,r)=>{"use strict";r.r(t);var n=r(462),a=r(942);function i(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function l(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,a,i=[],l=!0,o=!1;try{for(r=r.call(e);!(l=(n=r.next()).done)&&(i.push(n.value),!t||i.length!==t);l=!0);}catch(e){o=!0,a=e}finally{try{l||null==r.return||r.return()}finally{if(o)throw a}}return i}}(e,t)||function(e,t){if(e){if("string"==typeof e)return i(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?i(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var o=r(307),c=r(309),s=wp.i18n.__,u=function(e){var t=e.cta,r=t.description,n=t.imageUrl,a=t.url,i=t.buttonText;return(0,o.createElement)("div",{className:"sidebar-cta-card"},(0,o.createElement)("img",{src:n||gutenbergVars.image_dir+"/good-guitarist-preview-img.png",alt:""}),(0,o.createElement)("div",{className:"cta-card-body"},(0,o.createElement)("p",{className:"body-text"},r),(0,o.createElement)("a",{className:"cta-url-button",href:a},i||s("Click here"))))};function d(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}var m=wp.components,g=m.TextControl,p=m.PanelRow,b=m.SelectControl,f=m.ToggleControl,y=m.Spinner,v=wp.blockEditor,h=v.useBlockProps,E=v.InnerBlocks,w=wp.editPost.PluginDocumentSettingPanel,T=wp.data,N=T.select,k=T.useSelect,C=T.dispatch,O=(T.useDispatch,wp.element),S=O.useRef,x=O.useState,_=O.useEffect,P=wp.i18n.__,I=wp.blockEditor.InnerBlocks;(0,wp.blocks.registerBlockType)("gutenberg-good-guitarist/ypt",{apiVersion:2,title:"Youtube Post Template",icon:"playlist-video",category:"layout",className:"youtube-post-type",attributes:{videoInfoFetched:{type:"boolean",default:!1},videoTitle:{type:"string"},videoThumbnail:{type:"string",default:gutenbergVars.image_dir+"/good-guitarist-preview-img.png"},videoDescription:{type:"array"},videoID:{type:"string"},videoUrlRaw:{type:"string",default:""},videoUrlEmbed:{type:"string",default:""},songTitle:{type:"string",default:""},sidebarCtaSlotOne:{type:"object",default:{}},sidebarCtaSlotTwo:{type:"object",default:{}},postBodyElements:{type:"array",default:[]}},edit:function(e){var t=e.clientId,r=e.attributes,i=e.className,s=e.setAttributes,m=r.videoInfoFetched,v=r.videoID,T=r.videoUrlRaw,O=r.videoUrlEmbed,I=r.videoTitle,j=r.videoThumbnail,U=r.songTitle,B=r.sidebarCtaSlotOne,D=r.sidebarCtaSlotTwo,A=h(),L=S(),R=l(x(!1),2),V=R[0],M=R[1],F=l(x({class:"fetch-message-hidden",message:""}),2),Z=F[0],Y=F[1];_((function(){gutenbergVars.youtube_api_key||Y({class:"fetch-message-fail",message:P('Youtube API key not detected. Please ensure you have entered a valid API key in the "GG Settings" section.')})}),[]);var z=k((function(e){var t,r=e("core").getEntityRecords("postType","cta",{per_page:-1}),n=[{label:"None",value:-1}];return r&&(t=(0,c.cJ)(r)).forEach((function(e){n.push({label:e.title,value:e.id})})),{postMeta:e("core/editor").getEditedPostAttribute("meta"),ctaData:t,ctaSelectOptions:n}})),G=z.postMeta,J=z.ctaData,W=z.ctaSelectOptions,q=function(e,t){if(J){var r=Number(t),n=J.find((function(e){return e.id===r}));s((0,a.Z)({},e,function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?d(Object(r),!0).forEach((function(t){(0,a.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):d(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({id:r},n)))}},H=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",r="",n="";e?(r="fetch-message-success",n=P("Video information fetched successfully.")):(r="fetch-message-fail",n=P("Couldn't fetch video information.")+" ".concat(t)),Y({class:r,message:n}),setTimeout((function(){Y({class:"fetch-message-hidden",message:""})}),3e3)},K=function(e,r){e.preventDefault(),M(!0),Y({class:"fetch-message-hidden",message:""}),gapi.load("client",(function(){gapi.client.setApiKey(gutenbergVars.youtube_api_key),gapi.client.load("youtube","v3",(function(){gapi.client.youtube.videos.list({part:"snippet",id:r}).then((function(e){M(!1),function(e){try{var r=N("core/block-editor").getBlocksByClientId(t)[0].innerBlocks.map((function(e){return e.clientId}));C("core/block-editor").removeBlocks(r);var n=e.result.items[0].snippet.title,a=e.result.items[0].snippet.description,i=e.result.items[0].snippet.thumbnails.medium.url,l=a.split("\n"),o=(0,c.D4)(l);C("core/editor").editPost({title:n}),C("core/block-editor").insertBlocks(o,0,t),s({videoTitle:n,videoThumbnail:i,videoInfoFetched:!0}),H(!0)}catch(e){H(!1),console.error(e)}}(e)}),(function(e){M(!1),H(!1,e)}))}))}))};return(0,o.createElement)("div",(0,n.Z)({},A,{className:i}),(0,o.createElement)(w,{name:"sidebar-cta-slots",title:P("Video sidebar CTA slots"),className:"sidebar-cta-slots-panel"},W&&(0,o.createElement)(p,null,(0,o.createElement)(b,{className:"sidebar-cta-select-control",label:P("Sidebar CTA slot 1"),value:B.id,options:W,onChange:function(e){return q("sidebarCtaSlotOne",e)}})),W&&(0,o.createElement)(p,null,(0,o.createElement)(b,{className:"sidebar-cta-select-control",label:P("Sidebar CTA slot 2"),value:D.id,options:W,onChange:function(e){return q("sidebarCtaSlotTwo",e)}}))),(0,o.createElement)(w,{name:"song-difficulty-attributes",title:P("Song difficulty"),className:"song-difficulty-panel"},(0,o.createElement)(p,null,G&&(0,o.createElement)(g,{label:P("Enter a number from 1 to 50"),value:G.song_difficulty,onChange:function(e){return C("core/editor").editPost({meta:{song_difficulty:e}})}}))),(0,o.createElement)(w,{name:"contains-only-one-barre-chord",title:P("Contains only one barre chord"),className:"contains-only-one-barre-chord-panel"},(0,o.createElement)(p,null,G&&(0,o.createElement)(f,{label:P("One barre chord song"),checked:G.contains_one_barre,onChange:function(e){return C("core/editor").editPost({meta:{contains_one_barre:e}})}}))),(0,o.createElement)("section",{className:"video-details"},(0,o.createElement)("h2",null,P("Video Details")),(0,o.createElement)("span",{className:"fetch-message ".concat(Z.class)},Z.message),(0,o.createElement)("label",{className:"youtube-post-label",htmlFor:"youtube-video-url"},"Search by Youtube video URL"),(0,o.createElement)("form",{onSubmit:function(e){return K(e,v)}},(0,o.createElement)("input",{id:"youtube-video-url",label:P("Video URL"),className:"youtube-video-url",value:T,onChange:function(e){var t=e.target.value,r=null,n=t.match(/(\?v=)(\w|-)+/g);n&&(r=n[0].replace("?v=","")),s({videoID:r,videoUrlRaw:t,videoUrlEmbed:"https://www.youtube.com/embed/".concat(r)})}}),(0,o.createElement)("button",{type:"submit",className:"yt-submit-button",disabled:V},V?(0,o.createElement)(y,null):P("Submit"))),I&&(0,o.createElement)(g,{label:P("Video Title"),value:I,onChange:function(e){return s({videoTitle:e.target.value})}}),j&&m&&(0,o.createElement)(o.Fragment,null,(0,o.createElement)("label",{className:"youtube-post-label"},P("Video Thumbnail")),(0,o.createElement)("img",{src:j})),(0,o.createElement)("label",{className:"youtube-post-label",htmlFor:"song-title"},P("Song Title")),(0,o.createElement)("input",{id:"song-title",type:"text",value:U,onChange:function(e){return s({songTitle:e.target.value})}})),(0,o.createElement)("section",{ref:L,className:"post-body"},(0,o.createElement)("h2",null,P("Post Body")),v?(0,o.createElement)(o.Fragment,null,(0,o.createElement)("div",{className:"youtube-post-video-area"},m&&(0,o.createElement)("iframe",{width:"560",height:"615",src:O,className:B.id>0||D.id>0?"iframe-two-third-width":"iframe-full-width",title:"YouTube video player",frameborder:"0",allow:"accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}),(B.id>0||D.id>0)&&(0,o.createElement)("div",{className:"cta-sidebar"},B.id>0&&(0,o.createElement)(u,{cta:B}),D.id>0&&(0,o.createElement)(u,{cta:D}))),(0,o.createElement)("div",{className:"post-content-video-description"},(0,o.createElement)(E,null))):(0,o.createElement)("span",{className:"empty-post-body-msg"},P("Submit URL to populate post body."))))},save:function(e){var t=e.attributes,r=(e.className,t.videoUrlEmbed),n=t.videoInfoFetched,a=t.sidebarCtaSlotOne,i=t.sidebarCtaSlotTwo;return(0,o.createElement)("div",{className:"wp-block-gutenberg-good-guitarist-ypt"},(0,o.createElement)("div",{className:"youtube-post-video-area"},n&&(0,o.createElement)("iframe",{width:"560",height:"615",src:r,className:a.id>0||i.id>0?"iframe-two-third-width":"iframe-full-width",title:"YouTube video player",frameborder:"0",allow:"accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}),(a.id>0||i.id>0)&&(0,o.createElement)("div",{className:"cta-sidebar"},a.id>0&&(0,o.createElement)(u,{cta:a}),i.id>0&&(0,o.createElement)(u,{cta:i}))),(0,o.createElement)("div",{class:"youtube-post-type-video-description"},(0,o.createElement)(I.Content,null)))}})},503:(e,t,r)=>{"use strict";r.r(t);var n=r(307),a=wp.i18n.__;wp.i18n.__;(0,wp.blocks.registerBlockType)("gutenberg-good-guitarist/ypt-search",{title:"Youtube Post Search Box",icon:"search",category:"layout",className:"youtube-post-type-search",attributes:{},edit:function(){return(0,n.createElement)("h2",null,a("A song/youtube post search box will appear here."))},save:function(){return null}})},363:(e,t,r)=>{"use strict";r.r(t),r.d(t,{sidebarCTASelectsMaxHeight:()=>n});var n=function(){setTimeout((function(){document.querySelectorAll(".sidebar-cta-select-control").forEach((function(e){e.addEventListener("mousedown",(function(e){e.target.options.length>8&&(e.size=8)}))}))}),3e3)}},309:(e,t,r)=>{"use strict";r.d(t,{D4:()=>o,cJ:()=>l});var n=wp.blockSerializationDefaultParser.parse,a=wp.blocks.createBlock,i=function(e){return n(e.content.raw).find((function(e){return"gutenberg-good-guitarist/cta-template"===e.blockName}))},l=function(e){return e.filter((function(e){return e.id?i(e):void 0})).map((function(e){var t=i(e).attrs;return{id:e.id,title:e.title.raw,description:t.description,url:t.url,buttonText:t.buttonText,imageId:t.imageId,imageUrl:t.imageUrl}}))},o=function(e){return e.filter((function(e){return e.length})).map((function(e){var t=function(e){var t=/(http:\/\/|https:\/\/).*/g,r="";return"string"==typeof e&&(null==e?void 0:e.search(t))>=0&&(r=e.match(t)),r[0]}(e),r="core/paragraph",n={content:e};return t&&(r="gutenberg-good-guitarist/small-cta",n={url:t,description:e}),a(r,n)}))}},307:e=>{"use strict";e.exports=window.wp.element},736:e=>{"use strict";e.exports=window.wp.i18n},942:(e,t,r)=>{"use strict";function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}r.d(t,{Z:()=>n})},462:(e,t,r)=>{"use strict";function n(){return n=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},n.apply(this,arguments)}r.d(t,{Z:()=>n})}},t={};function r(n){var a=t[n];if(void 0!==a)return a.exports;var i=t[n]={exports:{}};return e[n](i,i.exports,r),i.exports}r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r(262),r(227),r(677),r(970),r(266),r(407),r(503),r(628),r(288),r(363)})();
//# sourceMappingURL=gutenberg.js.map