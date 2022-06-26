import './Chart.css';
import ChartBar from './ChartBar';

const Chart = (props) => {
    const totalMaximum = Math.max(... (props.dataPoint.
        map(dataPoint => dataPoint.value)));
    return (
        <div className="chart">
            {props.dataPoint.map((dataPoint) => (
                <ChartBar
                key={dataPoint.label}
                label={dataPoint.label}
                max={totalMaximum}
                value={dataPoint.value}
                />
            ))
            };
        </div>
    );
}

export default Chart;