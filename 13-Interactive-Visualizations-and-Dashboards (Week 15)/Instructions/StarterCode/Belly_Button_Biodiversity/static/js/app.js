//Select data sets
var selectData = document.getElementById('selDataset');
var selectMeta = document.getElementById('sample-metadata');

// @TODO: Complete the following function that builds the metadata panel
function buildMetadata() {
  // Use `.html("") to clear any existing metadata
  select.html("");
  var url_names = "/names";
  Plotly.d3.json(url, function(error,selectData){
    if (error) return console.warn(error);

    var data = selectData;
    data.map(function(sample){
      var option = document.createElement('option')
      option.text = sample
      option.value = sample
      selectData.appendChild(option)
    });
  });

  };

  sampleNames();

function init() {
  // Grab a reference to the dropdown select element
    var selector = d3.select("#selDataset");
    
    // Use the list of sample names to populate the select options
    d3.json("/names").then((sampleNames) => {
      sampleNames.forEach((sample) => {
        selector
          .append("option")
          .text(sample)
          .property("value", sample);
      });
       // Use the first sample from the list to build the initial plots
      const firstSample = sampleNames[0];
      buildCharts(firstSample);
      buildMetadata(firstSample);
    });
  }
    
  // Use `d3.json` to fetch the metadata for a sample
  // Use d3 to select the panel with id of `#sample-metadata`
  function init() {
    // Grab a reference to the dropdown select element
    var selector = d3.select("#sample-metadata");
        
    // Use the list of sample names to populate the select options
    d3.json("/metadata").then((sampleMeta) => {
    sampleMeta.forEach((sample) => {
      selector
        .append("option")
        .text(sample)
        .property("value", sample);
    });
    
function buildCharts(sample){
  var url_meta = "/metadata/" + sample;
    
    Plotly.d3.select("tbody").html("");
    
// Use `Object.entries` to add each key and value pair to the panel
// Hint:Inside the loop, you will need to use d3 to append new
// tags for each key-value in the metadata.
    Plotly.d3.json(url_meta, function (error, selectMeta){
      if (error){return console.warn(error);
        Plotly.d3.select("tbody").selectAll("tr")
          .data(selectMeta)
          .enter()
          .append("tr")
          .html(function (d){
            return `<td>${Object.keys(d)}</td><td>${d[Object.keys(d)]}</td>`
          })
      }
    });
}


// @TODO:Use `d3.json` to fetch the sample data for the plots
function optionChanged(newSample){
  // Fetch new data each time a new sample is selected
  buildCharts(newSample);
  buildMetadata(newSample);
  //var url_pie="/samples/940";
  var url_pie = "/samples/"+sample;
  
// @TODO:Build a Pie Chart
// HINT:You will need to use slice() to grab the top 10 sample_values,
// otu_ids, and labels (10 each).
  Plotly.d3.json(url_pie,function(error,buildPie){
    if (error) return console.warn(error);
    var data=[{
      values= [Object.values(buildPie.sample_value)],
      labels= [Object.values(buildPie.otu_label)],
      ids= [Object.values(buildPie.otu_id)],
      type= 'pie'
    }];
      
    var trace= {
      x: ids,
      y: values,
      text:otu_label.slice(0,10),
      hole:0.6,
      textfont:{
        size:16,
        color:'blue',
      },
      marker:{
        colors:[
          'rgb(93, 164, 214)', 
          'rgb(255, 144, 14)',  
          'rgb(44, 160, 101)', 
          'rgb(123, 1, 54)',
          'rgb(0, 255, 0)',
          'rgb(0, 0, 255)',
          'rgb(128, 128, 0)',
          'rgb(78, 48, 22)',
          'rgb(2, 32, 69)',
          'rgb(61, 125, 99)'
        ]
      }
    },

    var pieLayout= {
      height:400,
      width:500,
    }
  });
    Plotly.newPlot('pie',data,pieLayout)
    });
};

// @TODO: Build a Bubble Chart using the sample data
function bubblePlot(sample_id){
  var url_bubble = "/samples/"+sample;
  Plotly.j3.json(url_bubble,function(error,bubbleData){
    if (error) return console.warn(error)
    
    var bubbleLayout = {
      margin: { t: 0 },
      hovermode: 'closest',
      xaxis: { title: 'OTU ID' }
    };

    var updateBubble =[{
      x:[Object.values(bubbleData.sample_value)],
      y:[Object.values(bubbleData.otu_id)],
      text:labels,
      mode:'markers',
      'marker.size': [Object.values(bubbleData.sample_value)],
      'marker.color': [Object.values(bubbleData.otu_id)],
      colorscale: "Electric",
      }
    Plotly.plot('bubble',updateBubble,bubbleLayout)
    restylePlotlyBubble(updateBubble)
  });
};

function restylePlotlyBubble(updateBubble) {
  var restyleBubble = document.getElementById('bubble');
  Plotly.restyle(restyleBubble, updateBubble);
}

// Initialize the dashboard
function init(){
  buildCharts(newSample);
  buildMetadata(newSample);
  var url_pie="/samples/940";
  //var url_pie = "/samples/"+sample;
  
// @TODO: Build a Pie Chart
// HINT: You will need to use slice() to grab the top 10 sample_values,
// otu_ids, and labels (10 each).
  Plotly.d3.json(url_pie,function(error,buildPie){
    if (error) return console.warn(error)
    var data=[{
      values: [Object.values(buildPie.sample_value)],
      labels: [Object.values(buildPie.otu_label)],
      ids: [Object.values(buildPie.otu_id)],
      type: 'pie',
      text: otu_label.slice(0,10),
      hole:0.6,
      textfont:{
        size:16,
        color:'blue',
      },

      marker:{
        colors:[
          'rgb(93, 164, 214)', 
          'rgb(255, 144, 14)',  
          'rgb(44, 160, 101)', 
          'rgb(255, 65, 54)',
          'rgb(0, 255, 0)',
          'rgb(255, 0, 0)',
          'rgb(128, 128, 0)',
          'rgb(78, 48, 22)',
          'rgb(88, 32, 12)',
          'rgb(61, 89, 99)'
        ]
      }
    }];

    var pieLayout = {
      title: '',
      height: 600,
      width: 600,
      font: {family:"Arial",
      size: 16,
    },
  };
    Plotly.newPlot('pie', data,pieLayout);
    //restylePlotly(data);
});

  function optionChanged(newSample) {
    // Fetch new data each time a new sample is selected
    buildCharts(newSample);
    buildMetadata(newSample);
  }
}

// BONUS: Build the Gauge Chart
// buildGauge(data.WFREQ);

//Initialize the dashboard
init();