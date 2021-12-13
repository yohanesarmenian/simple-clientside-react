import logo from './logo.svg';
import './App.css';
import { 
  AddModal, 
  EditModal,
  DeleteModal} from './components/Forms'
import { useState } from 'react';


function App() {
  const [showAddModal, setAddShowModal,] = useState(false)
  const [showEditModal, setEditShowModal] = useState(false)
  const [showDeleteModal, setDeleteShowModal] = useState(false)

  const [data, setData] = useState([
    {
      username: 'user 1',
      email: 'user1@gmail.com',
      experience: 'Beginer',
      level: 1
    },
    {
      username: 'user 2',
      email: 'user2@gmail.com',
      experience: 'Amature',
      level: 30
    },
    {
      username: 'user 3',
      email: 'user3@gmail.com',
      experience: 'pro',
      level: 60
    }
  ])

  const [id, setId] = useState(null)

  const handleAddModal = () => {
    setAddShowModal(!showAddModal)
  }

  const handleEditModal = () => {
    setEditShowModal(!showEditModal)
  }

  const handleDeleteModal = (index) => {
    setId(index)
    setDeleteShowModal(!showDeleteModal)
  }

  const handleSubmitAdd = (username, email, experience, level) => {
    let rawData = data

    let payload = {
      username,
      email,
      experience,
      level
    }

    rawData.push(payload)

    setData(rawData)
    setAddShowModal(false)
  }

  const handleSubmitDelete = (idData) => {
    let temp = data.filter((data, i) => {
      return i !== idData
    })

    setData(temp)

    setDeleteShowModal(false)
  }

  return (
    <>  
    <AddModal
      show = {showAddModal}
      handleAddModal={handleAddModal}
      handleSubmitAdd={handleSubmitAdd}
    />
    {/* <EditModal
    id={id}
    show={showEditModal}
    handleEditModal={handleEditModal}
    /> */}
    <DeleteModal
      id={id}
      show={showDeleteModal}
      handleDeleteModal={handleDeleteModal}
      handleSubmitDelete={handleSubmitDelete}
    />
      <div className='container'>
      <button type="button" class="btn btn-success" onClick={() => setAddShowModal(!showAddModal)}>Add</button>
      <table class="table">
  <thead>
    <tr>
      {/* <th scope="col">#</th> */}
      <th scope="col">Username</th>
      <th scope="col">Email</th>
      <th scope="col">Experience</th>
      <th scope="col">Level</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
    {
      data?.map((data, index) => {
        return(
          <>
          <tbody>
          <td>{data.username}</td>
          <td>{data.email}</td>
          <td>{data.experience}</td>
          <td>{data.level}</td>
          <td>
          <button type="button" class="btn btn-warning" onClick={handleEditModal}>Edit Data</button>
          <button type="button" class="btn btn-danger black-text" onClick={() => handleDeleteModal(index)}>Delete Data</button>
          </td>
          </tbody>
          </>
        )
      })
    }
    </table>

    </div>
  </>

  );
}

export default App;
