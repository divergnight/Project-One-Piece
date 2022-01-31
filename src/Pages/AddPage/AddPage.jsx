import { Container, Row, Col, Form, Button } from 'react-bootstrap'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { useState } from 'react'

export default function PersoAddPage() {
	const { group } = useParams()
	const [formAdd, setFormAdd] = useState({
		equipage: '',
		prenom: '',
		nom: '',
		prime: '',
		image: '',
		commentaire: '',
		grade: '',
	})

	const navigate = useNavigate()

	function add(e) {
		e.preventDefault()

		const id = Date.now()
		let tmpForm = { ...formAdd }
		tmpForm.id = id
		setFormAdd(tmpForm)

		let personnages = localStorage.getItem(`perso-${group}`)
		if (personnages === null) personnages = '[]'
		personnages = JSON.parse(personnages)
		personnages.push(tmpForm)
		localStorage.setItem(`perso-${group}`, JSON.stringify(personnages))
		navigate(`/op-members/${group}`)
	}
	return (
		<>
			<Container>
				<Row>
					<Col>
						<h1>Ajouter un personnage</h1>
						<hr />
					</Col>
				</Row>

				<Row>
					<Col md={6}>
						<Form onSubmit={e => add(e)}>
							{group === 'pirates' && (
								<Form.Group className="mb-3">
									<Form.Label>Equipage</Form.Label>
									<Form.Control
										type="text"
										placeholder="Enter equipage"
										value={formAdd.equipage}
										onChange={e => {
											let tmp = { ...formAdd }
											tmp.equipage = e.target.value
											setFormAdd(tmp)
										}}
										required
									/>
								</Form.Group>
							)}
							<Form.Group className="mb-3">
								<Form.Label>Prénom</Form.Label>
								<Form.Control
									type="text"
									placeholder="Enter prenom"
									value={formAdd.prenom}
									onChange={e => {
										let tmp = { ...formAdd }
										tmp.prenom = e.target.value
										setFormAdd(tmp)
									}}
									required
								/>
							</Form.Group>
							<Form.Group className="mb-3">
								<Form.Label>Nom</Form.Label>
								<Form.Control
									type="text"
									placeholder="Enter nom"
									value={formAdd.nom}
									onChange={e => {
										let tmp = { ...formAdd }
										tmp.nom = e.target.value
										setFormAdd(tmp)
									}}
									required
								/>
							</Form.Group>
							{group === 'pirates' && (
								<Form.Group className="mb-3">
									<Form.Label>Prime</Form.Label>
									<Form.Control
										type="text"
										placeholder="Enter prime"
										value={formAdd.prime}
										onChange={e => {
											let tmp = { ...formAdd }
											tmp.prime = e.target.value
											setFormAdd(tmp)
										}}
										required
									/>
								</Form.Group>
							)}
							{group === 'shichibukai' && (
								<Form.Group className="mb-3">
									<Form.Label>Prime</Form.Label>
									<Form.Control
										type="text"
										placeholder="Enter prime"
										value={formAdd.prime}
										onChange={e => {
											let tmp = { ...formAdd }
											tmp.prime = e.target.value
											setFormAdd(tmp)
										}}
										required
									/>
								</Form.Group>
							)}
							{group === 'navy' && (
								<Form.Group className="mb-3">
									<Form.Label>Grade</Form.Label>
									<Form.Control
										type="text"
										placeholder="Enter grade"
										value={formAdd.grade}
										onChange={e => {
											let tmp = { ...formAdd }
											tmp.grade = e.target.value
											setFormAdd(tmp)
										}}
										required
									/>
								</Form.Group>
							)}

							<Form.Group className="mb-3">
								<Form.Label>Image</Form.Label>
								<Form.Control
									type="text"
									placeholder="Enter image"
									value={formAdd.image}
									onChange={e => {
										let tmp = { ...formAdd }
										tmp.image = e.target.value
										setFormAdd(tmp)
									}}
									required
								/>
							</Form.Group>
							<Form.Group className="mb-3">
								<Form.Label>Commentaire</Form.Label>
								<Form.Control
									type="text"
									placeholder="Enter commentaire"
									value={formAdd.commentaire}
									onChange={e => {
										let tmp = { ...formAdd }
										tmp.commentaire = e.target.value
										setFormAdd(tmp)
									}}
									required
								/>
							</Form.Group>

							<hr />

							<Button variant="light" as={Link} to={'/op-members/' + group}>
								Retour
							</Button>

							<Button variant="success" type="submit" className="float-end">
								Enregistrer
							</Button>
						</Form>
					</Col>
				</Row>
			</Container>
		</>
	)
}
