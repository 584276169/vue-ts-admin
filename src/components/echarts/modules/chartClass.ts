import * as echarts from 'echarts/core';
import { BarChart,LineChart,PieChart } from 'echarts/charts';
import {
  TitleComponent,
  TooltipComponent,
  GridComponent,
  DatasetComponent,
  TransformComponent
} from 'echarts/components';
import { LabelLayout, UniversalTransition } from 'echarts/features';
import { CanvasRenderer } from 'echarts/renderers';
import { LegendComponent } from 'echarts/components'
echarts.use([
  TitleComponent,
  TooltipComponent,
  GridComponent,
  DatasetComponent,
  TransformComponent,
  BarChart,
  LineChart,
  PieChart,
  LabelLayout,
  UniversalTransition,
  CanvasRenderer,
  LegendComponent,
]);

class  InitChar{

    options:any;
    ref:string;
    myBar:any;
    constructor(options:any,ref:string){
        this.options=options
        this.ref=ref
    }

  init(){
    let bar = document.getElementById(this.ref)
       this.myBar = echarts.init(bar!)
    this.myBar.setOption(this.options)
    
  }

  Listen(){
    window.addEventListener('resize',()=>{
      this.myBar.resize()
    })
  }
}

export default InitChar