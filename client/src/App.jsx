import {Routes,Route} from "react-router-dom"
import ClientLayout from "./Layout/ClientLayout"
import { Contact, Home, JobDetail, Library, MemberDetail, Services } from "./page/public"

const App = () => {
  return (
    <Routes>
      {/* Public Route */}
      <Route element={<ClientLayout/>}>
          <Route index element={<Home/>}/>
          <Route path ="contact" element={<Contact/>}/>
          <Route path ="service" element={<Services/>}/>
          <Route path="library" element={<Library/>}/>
          <Route path="member/{slug}" element={<MemberDetail/>}/>
          <Route path="job/{slug}" element={<JobDetail/>}/>
      </Route>
      {/* Public Route */}
    </Routes>
  )
}

export default App