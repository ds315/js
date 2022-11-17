
import {observer} from 'mobx-react-lite';
import store from '../store';

import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const Chart = observer(() =>
{
	const options = {
		accessibility: {enabled: false},
		chart: {type: 'spline', zoomType: 'x', styledMode: true},
		title: {text: '<b>График Напряжения Холодильной Установки</b>'},
		subtitle: {text: 'Для увеличения - нажмите на график и потяните'},
		credits: {enabled: false},
		legend: {enabled: false},
		tooltip: {crosshairs: true},
		plotOptions: {spline: {lineWidth: 2, states: {hover: {lineWidth: 2}}, marker: {enabled: false}}},
		xAxis: {categories: store.v.map(v => v), title: {text: 'Дата и время'}},
		yAxis: {title: {text: 'Напряжение, В'}},
		series: [{name: ' ', data: store.t.map(t => t)}]
	}

	return <div style={{display: 'inline-block', width: '90%'}}>
		<HighchartsReact highcharts={Highcharts} options={options} />
	</div>
})

export default Chart;
