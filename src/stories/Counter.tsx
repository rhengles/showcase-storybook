import { createSignal } from "solid-js";
import { Button } from "./Button";

export default function Counter() {
	const [count, setCount] = createSignal(1);
	const increment = () => setCount(count => count + 1);

	return (
		<Button size="large" primary onClick={increment} data-testid="counter">
			Counter: {count()}
		</Button>
	);
}
