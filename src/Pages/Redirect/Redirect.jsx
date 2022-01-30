import { Container, Row, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './Redirect.css'

export default function Redirect(props) {
	return (
		<div>
			<main>
				<Container>
					<Row>
						<div className="redirect-unknown p-5 mb-4 bg-light rounded-3">
							<Container fluid className="py-5">
								<h1 className="display-5 fw-bold">This page isn't available</h1>
								<p className="col-md-8 fs-4">The link you followed may be broken, or the page may have been removed.</p>
								<Button as={Link} to={props.to ? props.to : '/'} variant="secondary" size="lg">
									Go back to the previous page
								</Button>
							</Container>
						</div>
					</Row>
				</Container>
			</main>
		</div>
	)
}
