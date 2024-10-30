import './App.css'
import Grandpa from './components/Grandpa/Grandpa';
// import ReusableForm from './components/ReusableForm/ReusableForm'
// import HoockForm from './components/HoockForm/HoockForm'
// import RefForm from './components/RefForm/RefForm'
// import SimpleForm from './components/SimpleForm/SimpleForm'
// import StateFullForm from './components/StateFullForm/StateFullForm'

function App() {

  const handleSignUpSubmit = e => {
    e.preventDefault();
  }


  const handleUpdateProfile = e => {
    e.preventDefault();
  }


  return (
    <>
      <h1>Form Master</h1>
      {/* <SimpleForm /> */}
      {/* <StateFullForm /> */}
      {/* <RefForm /> */}
      {/* <HoockForm /> */}
      {/* <ReusableForm formTitle={'Sign Up'} handleSignUpSubmit={handleSignUpSubmit} />
      <ReusableForm formTitle={'Profile Update'} submitBtnText='Update' /> */}

      <Grandpa />

    </>
  )
}

export default App
