(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{109:function(e,t){},110:function(e,t){},111:function(e,t){},127:function(e,t){},135:function(e,t,a){},136:function(e,t,a){"use strict";a.r(t);var n=a(1),l=a.n(n),i=a(29),s=a.n(i),r=a(14),c=a.n(r),o=(a(71),a(72),a(73),a(15)),u=a(3),d=a(7),h=a(5),m=a(4),p=a(6),f=a(31),g=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(h.a)(this,Object(m.a)(t).call(this,e))).handleClickOutside=function(){console.log("blurring"),a.setState(function(e){return{dropdownToggle:!1}})},a.handleDropdownToggle=function(){a.setState(function(e){return{dropdownToggle:!e.dropdownToggle}})},a.state={dropdownToggle:!1},a}return Object(p.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this,t=this.state.dropdownToggle?"file-save-settings-show-menu":"file-save-settings-hide-menu",a=this.props.saveOptions.map(function(t){return l.a.createElement("li",{key:t.key},l.a.createElement("div",{className:"checkbox my-checkbox"},l.a.createElement("label",null,l.a.createElement("input",{type:"radio",checked:t.val,onChange:function(a){e.props.handleFileSaveOptions(a,t)}}),l.a.createElement("span",{className:"file-save-settings-li"},t.text))))});return l.a.createElement(l.a.Fragment,null,l.a.createElement("label",{className:"btn btn-default dropdown-toggle",onClick:this.handleDropdownToggle},l.a.createElement("span",{className:"glyphicon glyphicon-cog"})),l.a.createElement("ul",{id:t,className:"dropdown-menu"},a))}}]),t}(n.Component),v=function(e){function t(){return Object(u.a)(this,t),Object(h.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this.props.visualizer?"glyphicon glyphicon-th":"glyphicon glyphicon-th-list";return l.a.createElement("nav",{className:"navbar navbar-inverse navbar-fixed-top"},l.a.createElement("div",{className:"container-fluid"},l.a.createElement("div",{className:"navbar-header"},l.a.createElement("a",{className:"navbar-brand"},l.a.createElement("img",{id:"react-framework",src:"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K"})),!this.props.visualizer&&l.a.createElement("a",{className:"navbar-brand",href:"#"},"Your Advertisement Here!"),this.props.visualizer&&l.a.createElement("a",{href:"https://github.com/react-tools/react-table",target:"_blank"},l.a.createElement("img",{src:"https://github.com/react-tools/media/raw/master/logo-react-table.png",style:{width:"150px",margin:".5em auto .3em","background-color":"white"}}))),l.a.createElement("div",{id:"navbar"},l.a.createElement("div",{className:"navbar-form navbar-right"},l.a.createElement("label",{className:"btn btn-default btn-file"},l.a.createElement("span",{className:"glyphicon glyphicon-file file-browsing-icon"}),"Browse ",l.a.createElement("input",{id:"navbar-input-file",type:"file",accept:".csv, .json",onChange:this.props.handleOnFileChange})),l.a.createElement("div",{className:"btn-group"},l.a.createElement("label",{className:"btn btn-default btn-file",onClick:this.props.handleOnFileSave},l.a.createElement("span",{className:"glyphicon glyphicon-save-file file-save-icon"}),"Save"),l.a.createElement(g,{saveOptions:this.props.saveOptions,handleFileSaveOptions:this.props.handleFileSaveOptions})),l.a.createElement("button",{className:"btn btn-default csv-visualizer-toggle",onClick:this.props.handleCsvVisualizerToggle},l.a.createElement("span",{className:e}))),l.a.createElement("p",{className:"navbar-text navbar-right"},this.props.currentFilename))))}}]),t}(n.Component),b=function(e){function t(){return Object(u.a)(this,t),Object(h.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this,t=this.props.keys.map(function(t){return l.a.createElement("li",{key:t.fieldname},l.a.createElement("div",{className:"checkbox"},l.a.createElement("label",null,l.a.createElement("input",{name:t.fieldname,type:"checkbox",checked:t.display,onChange:function(a){e.props.onChangeShowField(a,t)}}),t.fieldname)))});return l.a.createElement("div",{className:"col-sm-3 col-md-2 sidebar"},l.a.createElement("div",{className:"page-header"},l.a.createElement("div",{className:"checkbox"},l.a.createElement("label",null,l.a.createElement("input",{name:"showAll",type:"checkbox",checked:this.props.showAll,onChange:this.props.onChangeShowAll}),"Show All"))),l.a.createElement("div",{className:"page-body"},l.a.createElement("ul",{className:"nav nav-sidebar"},t)))}}]),t}(n.Component),y=a(53),E=a.n(y),x=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(h.a)(this,Object(m.a)(t).call(this,e))).render=function(){var e=a.props.uuid,t=a.props.fieldname;return l.a.createElement(E.a,{innerRef:a.contentEditable,html:a.props.html,disabled:!1,onChange:function(n){a.props.handleItemChange(n,e,t)},tagName:"dd"})},a.contentEditable=l.a.createRef(),a}return Object(p.a)(t,e),t}(n.Component),I=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(h.a)(this,Object(m.a)(t).call(this,e))).openModal=function(){a.setState({modalIsOpen:!0})},a.focusModalCloseButton=function(){a.modalCloseButton.current.focus()},a.closeModal=function(){a.setState({modalIsOpen:!1})},a.state={modalIsOpen:!1},a.modalCloseButton=l.a.createRef(),a}return Object(p.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("button",{className:"btn btn-default",onClick:this.openModal},l.a.createElement("span",{className:"glyphicon glyphicon-question-sign"})),l.a.createElement(c.a,{className:"modal-dialog",isOpen:this.state.modalIsOpen,onAfterOpen:this.focusModalCloseButton,onRequestClose:this.closeModal,shouldReturnFocusAfterClose:!1},l.a.createElement("div",{className:"modal-content"},l.a.createElement("div",{className:"modal-header"},l.a.createElement("h4",{className:"modal-title text-center"},"Item View Search Functionality")),l.a.createElement("div",{className:"modal-body"},l.a.createElement("span",null,'Unlike the "search" feature in the table view which searches by columns, this search feature attempts to find a match across all columns. For large datasets, queries may be slow as the search library (flex-search) needs to be an index before it can start searching.'),l.a.createElement("p",null),l.a.createElement("p",null,"Notes:",l.a.createElement("ul",null,l.a.createElement("li",null,'User must press "enter" while in the search box to perform a search'),l.a.createElement("li",null,"Successful searches will highlight search box in cornflower blue"),l.a.createElement("li",null,"Unsuccessful searches will highlight the search box in orange"))),l.a.createElement("p",null),l.a.createElement("h5",null,"Caveat emptor:"),"An orange search box denotes an error. The app will be in an inconsistent state when you see the orange search box. While UI elements will continue to work and data can still be perused results may be confusing. CLEAR the search box or FIX the search string and resubmit before resuming!"),l.a.createElement("div",{className:"modal-footer"},l.a.createElement("button",{type:"button",className:"btn btn-default",ref:this.modalCloseButton,onClick:this.closeModal,onKeyPress:this.closeModal},"Close")))))}}]),t}(n.Component),O=function(e){function t(){return Object(u.a)(this,t),Object(h.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this,t=this.props.row,a=this.props.keys.filter(function(e){return e.display}).map(function(a){return l.a.createElement(l.a.Fragment,{key:a.fieldname},l.a.createElement("dt",null,a.fieldname),l.a.createElement(x,{uuid:t.fsuuid,fieldname:a.fieldname,html:t[a.fieldname],handleItemChange:e.props.handleItemChange}))}),n=this.props.showingSearch?"showing-search-results-info":"hiding-search-results-info",i=this.props.searchException?"search-exception":"no-search-exception-"+n;return l.a.createElement("div",{className:"col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main"},l.a.createElement("div",{className:"page-header text-center"},l.a.createElement("div",{id:"main-form-bar"},l.a.createElement("div",{className:"form-inline pull-left"},l.a.createElement("div",{className:"panel panel-default"},l.a.createElement("div",{className:"panel-body"},"Rows: ",this.props.dataLengthOG),l.a.createElement("div",{className:"panel-body"},"Absolute index: ",this.props.absoluteIndex))),l.a.createElement("div",{className:"form-inline"},l.a.createElement("div",{className:"main-panel-form-group-2 input-group"},l.a.createElement("div",{className:"input-group-btn"},l.a.createElement("button",{className:"btn btn-default",onClick:this.props.handleSearchInputClear},"Clear"),l.a.createElement(I,null)),l.a.createElement("input",{id:i,className:"form-control text-center ",type:"text",value:this.props.inputSearch,onChange:this.props.handleSearchInputChange,onKeyPress:this.props.handleSearchRequest,placeholder:"Global Search ..."})),l.a.createElement("div",{className:"main-panel-form-group-1"},l.a.createElement("button",{className:"btn btn-default",onClick:this.props.handlePreviousClick,onKeyPress:this.props.handlePreviousClick},"Previous"),l.a.createElement("button",{className:"btn btn-default",onClick:this.props.handleNextClick,onKeyPress:this.props.handleNextClick},"Next"),l.a.createElement("input",{id:n,className:"form-control text-center",type:"text",value:this.props.inputIndex,onChange:this.props.handleTextInputChange,onKeyPress:this.props.handleOnSubmit}))),l.a.createElement("div",{className:"form-inline pull-right "+n},l.a.createElement("div",{className:"panel panel-default panel-search-results-info"},l.a.createElement("div",{className:"panel-body"},"Search results: ",this.props.displayIndex," of ",this.props.dataLength))))),l.a.createElement("div",{className:"dl-horizontal"},a))}}]),t}(n.Component),C=a(55),S=(a(75),function(e,t){return String(t[e.id])===e.value}),k=function(e,t){var a=new RegExp(e.value,"i");return a.test(t[e.id])},w=function(e){function t(){return Object(u.a)(this,t),Object(h.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this.props.data.map(function(e){return e}),t=[{Header:"Row",accessor:"fsuuid",filterable:!0,filterMethod:S,maxWidth:100}],a=this.props.keys.filter(function(e){return e.display}).map(function(e){return{Header:e.fieldname,accessor:e.fieldname}}),n=0===a.length?[]:t.concat(a);return l.a.createElement("div",{className:"col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main"},l.a.createElement(C.a,{data:e,columns:n,filterable:!0,defaultFilterMethod:k,showPaginationTop:!1,showPaginationBottom:!0,pageSizeOptions:[1,5,10,25,50,100],defaultPageSize:100,style:{height:"90vh"},className:"-striped -highlight"}))}}]),t}(n.Component),N=a(54),j=a.n(N),F=a(30),A=a.n(F),P=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(h.a)(this,Object(m.a)(t).call(this,e))).handleOnFileChange=function(e){if(0!==e.target.files.length){var t=e.target.files[0],n=t.name,l=t.size/1e6,i=n.toLowerCase().endsWith(".csv"),s=new FileReader;s.onload=function(e){var t=i?Object(f.b)(e.target.result):JSON.parse(e.target.result),s=(i?t.columns:Object.keys(t[0])).map(function(e){return{fieldname:e,display:!0,search:!1}}),r=t.map(function(e,t){return Object.assign({},Object(o.a)({},a.uuid,t+1),e)});a.setState({currentFilename:n,fileSize:l,absoluteIndex:1,actualIndex:0,displayIndex:1,inputIndex:1,showAll:!0,keys:s,data:r,dataLengthOG:r.length,dataOG:r.map(function(e){return e})}),console.log(r[0])},console.log(n+" is: "+l+" MB"),s.readAsText(t)}},a.handleOnFileSave=function(){if(0!==a.state.fileSize&&0!==a.state.dataOG.length){var e=a.state.dataOG.map(function(e){var t=Object.assign({},e);return delete t[a.uuid],t}),t=a.getBlobInfo(a.state.saveOptions,a.state.currentFilename),n="json"===t.key?JSON.stringify(e,null,4):Object(f.a)(e),l=new Blob([n],{type:t.contentType}),i=URL.createObjectURL(l),s=document.createElement("a");s.download=t.filename,s.href=i,s.click(),URL.revokeObjectURL(i)}},a.getBlobInfo=function(e,t){var a=!0,n=!1,l=void 0;try{for(var i,s=e[Symbol.iterator]();!(a=(i=s.next()).done);a=!0){var r=i.value;if(r.val)return{key:r.key,filename:r.fn(t),contentType:"json"===r.key?"application/json":"text/csv"}}}catch(c){n=!0,l=c}finally{try{a||null==s.return||s.return()}finally{if(n)throw l}}},a.handleFileSaveOptions=function(e,t){a.setState(function(e){return{saveOptions:e.saveOptions.map(function(e){return e.key!==t.key||e.val?e.key===t.key&&e.val?e:Object.assign({},e,{val:!1}):Object.assign({},e,{val:!0})})}})},a.handleItemChange=function(e,t,n){a.setState(function(a){return{data:a.data.map(function(a){return a.fsuuid===t?Object.assign({},a,Object(o.a)({},n,A()(e.target.value))):a}),dataOG:a.dataOG.map(function(a){return a.fsuuid===t?Object.assign({},a,Object(o.a)({},n,A()(e.target.value))):a})}})},a.onChangeShowAll=function(e){var t=e.target.checked,n=a.state.keys.map(function(e){return{fieldname:e.fieldname,display:t,search:e.search}});a.setState({showAll:t,keys:n})},a.onChangeShowField=function(e,t){var n=a.state.keys.map(function(a){return a.fieldname===t.fieldname?{fieldname:t.fieldname,display:e.target.checked,search:t.search}:a}),l=!0;n.forEach(function(e){l=l&&e.display}),a.setState({showAll:l,keys:n})},a.handlePreviousClick=function(e){"click"!==e.type&&"Enter"!==e.key||a.setState(function(e){if(e.actualIndex>0){var t=e.actualIndex-1;return{absoluteIndex:e.data[t][a.uuid],actualIndex:t,displayIndex:t+1,inputIndex:t+1}}return null})},a.handleNextClick=function(e){"click"!==e.type&&"Enter"!==e.key||a.setState(function(e){if(e.actualIndex>=0&&e.actualIndex<e.data.length-1){var t=e.actualIndex+1;return{absoluteIndex:e.data[t][a.uuid],actualIndex:t,displayIndex:t+1,inputIndex:t+1}}return null})},a.handleTextInputChange=function(e){var t=e.target.value;a.setState({inputIndex:t})},a.handleOnSubmit=function(e){"Enter"===e.key&&a.setState(function(e){var t=+e.inputIndex;return Number.isInteger(t)&&t>0&&t<=e.data.length?{absoluteIndex:e.data[t-1][a.uuid],actualIndex:t-1,displayIndex:t}:(alert("input "+e.inputIndex+" is invalid"),null)})},a.handleSearchInputChange=function(e){var t=e.target.value;a.setState({inputSearch:t})},a.handleSearchInputClear=function(){a.setState(function(e){return{absoluteIndex:1,actualIndex:0,displayIndex:1,inputIndex:1,inputSearch:"",data:e.dataOG.map(function(e){return e}),searchException:!1,showingSearch:!1}})},a.handleSearchException=function(){a.setState({searchException:!0})},a.handleSearchRequest=function(e){if("Enter"===e.key){if(0===a.state.inputSearch.length)return void a.handleSearchInputClear();var t=a.state.dataOG.map(function(e){return e}),n=a.state.keys.map(function(e){return e.fieldname}),l=a.uuid;a.cachedIndex=new j.a({doc:{id:l,field:n}}),console.log("building flexsearch index"),a.cachedIndex.add(t),console.log("done building flexsearch index");var i=a.state.keys.filter(function(e){return e.display}).map(function(e){return e.fieldname});if(0===i.length)return a.handleSearchException(),void alert("Cannot search without choosing at least one field to display");var s=a.cachedIndex.search({query:a.state.inputSearch,field:i});if(0===s.length)return a.handleSearchException(),void alert("No matches found: "+a.state.inputSearch);a.setState({absoluteIndex:s[0][a.uuid],actualIndex:0,displayIndex:1,inputIndex:1,data:s.map(function(e){return e}),searchException:!1,showingSearch:!0})}},a.handleCsvVisualizerToggle=function(){a.setState(function(e){return{visualizer:!e.visualizer}})},a.state={currentFilename:"Selected File",fileSize:0,absoluteIndex:0,actualIndex:-1,displayIndex:0,inputIndex:0,showAll:!1,inputSearch:"",keys:[],data:[],dataLengthOG:0,dataOG:[],searchException:!1,showingSearch:!1,visualizer:!1,saveOptions:[{key:"csv",val:!1,text:"Save as CSV",fn:function(e){return e.replace(/(\s*[\(\d*\)]*?\.(csv|json)$)/,".csv")}},{key:"json",val:!0,text:"Save as JSON",fn:function(e){return e.replace(/(\s*[\(\d*\)]*?\.(csv|json)$)/,".json")}}]},a.uuid="fsuuid",a.cachedIndex=null,a}return Object(p.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(v,{currentFilename:this.state.currentFilename,handleOnFileChange:this.handleOnFileChange,handleOnFileSave:this.handleOnFileSave,saveOptions:this.state.saveOptions,handleFileSaveOptions:this.handleFileSaveOptions,visualizer:this.state.visualizer,handleCsvVisualizerToggle:this.handleCsvVisualizerToggle}),l.a.createElement("div",{className:"row"},l.a.createElement(b,{keys:this.state.keys,showAll:this.state.showAll,onChangeShowField:this.onChangeShowField,onChangeShowAll:this.onChangeShowAll}),!this.state.visualizer&&l.a.createElement(O,{handlePreviousClick:this.handlePreviousClick,handleNextClick:this.handleNextClick,absoluteIndex:this.state.absoluteIndex,displayIndex:this.state.displayIndex,inputIndex:this.state.inputIndex,handleTextInputChange:this.handleTextInputChange,handleOnSubmit:this.handleOnSubmit,handleItemChange:this.handleItemChange,dataLengthOG:this.state.dataLengthOG,dataLength:this.state.data.length,row:this.state.data[this.state.actualIndex],keys:this.state.keys,inputSearch:this.state.inputSearch,handleSearchInputChange:this.handleSearchInputChange,handleSearchRequest:this.handleSearchRequest,handleSearchInputClear:this.handleSearchInputClear,searchException:this.state.searchException,showingSearch:this.state.showingSearch}),this.state.visualizer&&l.a.createElement(w,{data:this.state.data,keys:this.state.keys})))}}]),t}(n.Component);a(135);var z=function(){return l.a.createElement("div",{className:"App"},l.a.createElement("div",{className:"container-fluid"},l.a.createElement(P,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.setAppElement("#root"),s.a.render(l.a.createElement(z,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},56:function(e,t,a){e.exports=a(136)},71:function(e,t,a){},91:function(e,t){}},[[56,1,2]]]);
//# sourceMappingURL=main.387725f9.chunk.js.map