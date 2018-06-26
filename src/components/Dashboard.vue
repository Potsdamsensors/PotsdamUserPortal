<template>
  <div id="app">
 <div id="wrapper">
  <div class="topbar">
    <div class="topbar-left"> <img src="src/assets/images/left_logo.png" border="0" ></div>
    <div class="navbar navbar-default" role="navigation">
      <div class="container">
        <ul class="nav navbar-nav navbar-left">
          <li>
            <button class="button-menu-mobile open-left"> <i class="zmdi zmdi-menu"></i> </button>
          </li>
          <li>
            <h4 class="page-title">Dashboard</h4>
          </li>
        </ul>
      </div>
      <!-- end container -->
    </div>
    <!-- end navbar -->
  </div>
  <!-- Top Bar End -->
  <!-- ========== Left Sidebar Start ========== -->
  <div class="left side-menu">
    <div class="sidebar-inner slimscrollleft">
      <!-- User -->
      <div class="user-box">
        <div class="user-img"> <img src="src/assets/images/avatar-1.jpg" alt="user-img" title="Mat Helme" class="img-circle img-thumbnail img-responsive">
          <div class="user-status offline"><i class="zmdi zmdi-dot-circle"></i></div>
        </div>
        <h5><a href="#">Mat Helme</a> </h5>
        <ul class="list-inline">
          <li> <a href="#" > <i class="zmdi zmdi-settings"></i> </a> </li>
          <li> <router-link :to="'/logout'" class="text-custom"> <i class="zmdi zmdi-power"></i> </router-link> </li>
        </ul>
      </div>
      <!-- End User -->
      <!--- Sidemenu -->
      <div id="sidebar-menu">
        <ul>
          <li class="text-muted menu-title">Navigation</li>
          <li> <router-link class="waves-effect" :to="'/userlist'"><i class="zmdi zmdi-view-dashboard"></i> <span> Dashboard </span> </router-link> </li>
          
        </ul>
        <div class="clearfix"></div>
      </div>
      <!-- Sidebar -->
      <div class="clearfix"></div>
    </div>
  </div>
  <!-- Left Sidebar End -->
  <!-- ============================================================== -->
  <!-- Start right Content here -->
  <!-- ============================================================== -->
  <div class="content-page">   
    <!-- Start content -->
    <div class="content">
      <div class="container">
        <div class="row">
          <!-- end col -->
          <div class="col-lg-12">
            <div class="card-box">
              <highcharts class="chart" :options="chartOptions" :updateArgs="updateArgs"></highcharts>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      title: '',
      points: [10, 0, 8, 2, 6, 4, 5, 5],
      chartType: 'Spline',
      seriesColor: '#6fcd98',
      colorInputIsSupported: null,
      animationDuration: 1000,
      updateArgs: [true, true, {duration: 1000}],
      chartOptions: {
         chart: {
        type: 'spline'
    },
    title: {
        text: 'Monthly Average Temperature'
    },
    subtitle: {
        text: 'Source: WorldClimate.com'
    },
    xAxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
            'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    },
    yAxis: {
        title: {
            text: 'Temperature'
        },
        labels: {
            formatter: function () {
                return this.value + '°';
            }
        }
    },
    tooltip: {
        crosshairs: true,
        shared: true
    },
    plotOptions: {
        spline: {
            marker: {
                radius: 4,
                lineColor: '#666666',
                lineWidth: 1
            }
        }
    },
    series: [{
        name: 'Tokyo',
        marker: {
            symbol: 'square'
        },
        data: [-7.0, 6.9, 9.5, 14.5, 18.2, 21.5, 25.2,30, 23.3, 18.3, 13.9, 9.6]

    }, {
        name: 'London',
        marker: {
            symbol: 'diamond'
        },
        data: [30, -4.2, 5.7, 8.5, 11.9, 15.2, 17.0, 16.6, 14.2, 10.3, 6.6, 4.8]
    }]
      }
    }
  },
  created () {
    let i = document.createElement('input')
    i.setAttribute('type', 'color');
    (i.type === 'color') ? this.colorInputIsSupported = true : this.colorInputIsSupported = false
  }
  /*,
  watch: {
    title (newValue) {
      this.chartOptions.title.text = newValue
    },
    points (newValue) {
      this.chartOptions.series[0].data = newValue
    },
    chartType (newValue) {
      this.chartOptions.chart.type = newValue.toLowerCase()
    },
    seriesColor (newValue) {
      this.chartOptions.series[0].color = newValue.toLowerCase()
    },
    animationDuration (newValue) {
      this.updateArgs[2].duration = Number(newValue)
    }
  }*/
}
</script>

<style scoped>
input[type="color"]::-webkit-color-swatch-wrapper {
  padding: 0;
}
#colorPicker {
  border: 0;
  padding: 0;
  margin: 0;
  width: 30px;
  height: 30px;
}
.numberInput {
  width: 30px;
}
</style>
/*
SELECT time_stamp, count(*) FROM data_packets GROUP BY hour( time_stamp ) , day( time_stamp )
SELECT dp.time_stamp,sd.* FROM data_packets dp left join sensor_data sd  on sd.id = dp.sensor_data_id GROUP BY hour( dp.time_stamp ) , day( dp.time_stamp ) */
