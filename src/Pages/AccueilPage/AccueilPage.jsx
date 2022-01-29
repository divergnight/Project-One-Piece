import { Container, Row, Button } from 'react-bootstrap'


export default function AccueilPage() {
  return (
    <div className="App">
      <main>
        <Container>
          <Row>
            <div className="p-5 mb-4 bg-light rounded-3">
              <Container fluid className="py-5">
                <h1 className="display-5 fw-bold">
                  Projet One Piece
                </h1>
                <p className="col-md-8 fs-4">
                  Proket permettant de gérer différents personnages de One Piece en mettant en pratique l'utilisation de plusieurs
                  pages sous ReactJs via l'utilisation de React Router
                </p>
                <a
                  className="btn-primary btn btn-lg"
                  href="https://onepiece.fandom.com/fr/wiki/Liste_des_Personnages_Canon"
                >
                  Liste de personnage de One Piece
                </a>
              </Container>
            </div>
          </Row>
        </Container>
      </main>
    </div>
  )
}