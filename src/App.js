import Container from './components/Container/Container';
import Button from './components/Button/Button';
import Timer from './components/Timer/Timer';
import { useEffect, useState } from 'react';

const App = () => {
	const [time, setTime] = useState(0);
	const [timer, setTimer] = useState('');
	const timerStart = () => {
		setTimer(setInterval(() => {
			setTime(prevValue => prevValue + 10);
		}, 1));
	};
	useEffect(() => {
		return () => {
			if(timer) clearInterval(timer);
		};
	}, [timer]);
	const timerStop = () => {
		clearInterval(timer);
	};
	const timerReset = () => {
		setTime(0);
	};
	return (
		<Container>
			<Timer time={time}/>
			<div className='row'>
				<Button action={timerStart}>Start</Button>
				<Button action={timerStop}>Stop</Button>
				<Button action={timerReset}>Reset</Button>
			</div>
		</Container>
	);
}

export default App;