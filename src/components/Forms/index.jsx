import { useState } from "react"
import {
  Modal,
  Button,
  Form
} from "react-bootstrap"

const AddModal = ({
  show,
  handleAddModal,
  handleSubmitAdd
}) => {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [experience, setExperience] = useState('')
  const [level, setLevel] = useState(1)

  return(
    <>
      <Modal show={show} onHide={handleAddModal}>
        <Modal.Header closeButton>
          <Modal.Title>Add Player</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Username</Form.Label>
                <Form.Control type="text" placeholder="Enter username" onChange={(e) => setUsername(e.target.value)}/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" onChange={(e) => setEmail(e.target.value)}/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Experience</Form.Label>
                <Form.Control type="text" placeholder="Enter experience" onChange={(e) => setExperience(e.target.value)}/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Level</Form.Label>
                <Form.Control type="number" placeholder="Enter level" onChange={(e) => setLevel(e.target.value)}/>
            </Form.Group>
            </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleAddModal}>
            Close
          </Button>
          <Button variant="primary" onClick={() => handleSubmitAdd(username, email, experience, level)}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

const EditModal = (
    // show,
    // handleEditModal
) => {
    // const [username, setUsername] = useState('')
    // const [email, setEmail] = useState('')

    // return(
    // //     <>
    // //   <Modal show={show} onHide={handleEditModal}>
    // //     <Modal.Header closeButton>
    // //       <Modal.Title>Edit Player</Modal.Title>
    // //     </Modal.Header>
    // //     <Modal.Body>
    // //     <Form>
    // //         <Form.Group className="mb-3" controlId="formBasicEmail">
    // //             <Form.Label>Username</Form.Label>
    // //             <Form.Control type="text" placeholder="Enter username" onChange={(e) => setUsername(e.target.value)}/>
    // //         </Form.Group>

    // //         <Form.Group className="mb-3" controlId="formBasicEmail">
    // //             <Form.Label>Email address</Form.Label>
    // //             <Form.Control type="email" placeholder="Enter email" onChange={(e) => setEmail(e.target.value)}/>
    // //         </Form.Group>     
    // //         </Form>
    // //     </Modal.Body>
    // //     <Modal.Footer>
    // //       <Button variant="secondary" onClick={handleEditModal}>
    // //         Close
    // //       </Button>
    // //       <Button variant="primary" onClick={() => handleEditModal(username, email)}>
    // //         Save Changes
    // //       </Button>
    // //     </Modal.Footer>
    // //   </Modal>
    // // </>
    // )
}

const DeleteModal = ({
  id,
  show,
  handleDeleteModal,
  handleSubmitDelete
}) => {
  return(
    <>
      <Modal show={show} onHide={handleDeleteModal}>
        <Modal.Header closeButton>
          <Modal.Title>Form Delete Player</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
           Are you sure to delete this?
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleDeleteModal}>
            Cancel
          </Button>
          <Button variant="primary" onClick={() => handleSubmitDelete(id)}>
            Yes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export {
  AddModal,
  EditModal,
  DeleteModal
}