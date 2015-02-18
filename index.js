var randomString = require("random-string")
var Vue = require("vue")
Vue.config.debug = true
var randomCompany = function(){
  var percent = Math.ceil(Math.random() * 100)
  return {
    "title" : "ほげほげしさ",
    "first" : {
      "name" : "A社",
      "percent" : percent,
      "description" : randomString({length : 100})
    },
    "second" : {
      "name" : "B社",
      "percent" : 100 - percent,
      "description" : randomString({length : 100})
    }
  }
}

new Vue({
  data : function(){
    return {
      companies : randomCompany(),
      begin : "0s"
    }
  },
  methods:{
    fetchData : function(){
      this.$data.companies = randomCompany()
      this.$data.begin = "0s"
      var animates = document.querySelectorAll(".bar animate")
      animates.forEach(function(){
        this.forceRedraw()
      })
    },
    next : function(){
      this.fetchData()
    },
  },
  computed: {
    first : function(){ return this.$data.companies.first },
    second : function(){ return this.$data.companies.second },
    animateDur:function(){
      return "1s"
    },
    animateBegin:function(){
      return "activate" //this.$data.begin
    },
    barWidth : function(){
      return 300
    },
    firstWidth : function(){
      return this.first.percent * this.barWidth / 100
    },
    secondWidth : function(){
      return this.second.percent * this.barWidth / 100
    }
  },
  el : "#app"
})