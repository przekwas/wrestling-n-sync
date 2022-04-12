import React, { useState } from 'react';

import TestCard from './TestCard';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

const App = (props: AppProps) => {
	const [toggle, setToggle] = useState<boolean>(false);

	return (
		<Container>
			<Row className="my-5 justify-content-center">
				<Col md={6}>
					<Button variant="primary" className="w-100" onClick={() => setToggle(!toggle)}>
						Toggle Cards
					</Button>
				</Col>
			</Row>
			<Row className="my-2 justify-content-center">
				{toggle && (
					<>
						<Col md={6}>
							<TestCard UID={145} />
						</Col>
						<Col md={6}>
							<TestCard UID={145} />
						</Col>
					</>
				)}
			</Row>
		</Container>
	);
};

interface AppProps {}

export default App;
