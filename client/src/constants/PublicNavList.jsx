        //   <Route index element={<Home/>}/>
        //   <Route path ="contact" element={<Contact/>}/>
        //   <Route path ="service" element={<Services/>}/>
        //   <Route path="library" element={<Library/>}/>
        //   <Route path="member/{slug}" element={<MemberDetail/>}/>
        //   <Route path="job/{slug}" element={<JobDetail/>}/>
const PublicNavList = [
    {
        id: "home",
        name: "Trang chủ",
        path:"/"
    },
    {
        id: "lien-he",
        name: "Liên hệ",
        path:"/contact"
    },
    {
        id: "thu-vien",
        name: "Thư viện",
        path:"/library"
    },
    {
        id: "dich-vu",
        name: "Dịch vụ",
        path:"/service"
    },
]

export default PublicNavList