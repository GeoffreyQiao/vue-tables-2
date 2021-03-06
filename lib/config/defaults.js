 // Defaults are returned from a function to overcome caching issues which might cause data leakage between instances

 module.exports = function() {
  return {
   dateColumns:[],
   listColumns:{},
   datepickerOptions:{
    locale: {
      cancelLabel:'Clear'
    }
   },
   perPage:10,
   perPageValues:[10,25,50,100],
   params:{},
   sortable:true,
   trackBy:'$index',
   filterable:true,
   customFilters:[],
   templates:{},
   debounce:500,
   dateFormat:"DD/MM/YYYY",
   toMomentFormat:false,
   skin:"table-striped table-bordered table-hover",
   columnsDisplay: {},
   texts:{
    count:"{count} Records",
    filter:"Filter Results:",
    filterPlaceholder:"Search query",
    limit:"Records:",
    page:"Page:",
    noResults:"No matching records",
    filterBy:"Filter by {column}",
    loading:'Loading...',
    defaultOption:'Select {column}'
  },
  sortIcon:{
    base:'glyphicon',
    up: 'glyphicon-chevron-up',
    down: 'glyphicon-chevron-down'
  },
  filterByColumn:false,
  highlightMatches:false,
  orderBy:false,
  footerHeadings:false,
  headings:{},
  pagination: {
    dropdown:false,
    chunk:10
  }
}
}


