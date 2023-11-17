import React from 'react'
import { Link } from 'react-router-dom'
// import './Profile.css'
const Profile = () => {
  return (
    <main className='flex justify-center items-center w-[1536px] h-[739px] bg-cover m-[auto] relative shadow-2xl shadow-blue-400'
    style={{
      backgroundImage: "url('https://png.pngtree.com/background/20230410/original/pngtree-mountains-forest-landscape-nature-landscape-cartoon-background-decoration-illustration-picture-image_2385422.jpg')"
  }}>
     
    <div className="profile w-[400px] h-[600px] backdrop-blur-md 
    shadow-[10px 10px 20px rgba(0, 0, 0, 0.703)] rounded-2xl">
      <div className="proflie-avatar h-[170px] relative bg-cover rounded-t-2xl"
      style={{backgroundImage: "url('https://image.tienphong.vn/600x315/Uploaded/2023/neg_wznwtpy/2019_08_18/xuat_hien_meme_nguoi_dan_ong_that_vong_duoc_che_anh_khap_the_gioi_ay_sot_mang_xa_hoi_VTJK.jpg'"}}
      >
        <img className='w-[120px] absolute top-[100px] mx-4 rounded-[50%]' src="https://scontent.fhan17-1.fna.fbcdn.net/v/t39.30808-6/363323245_813824913680131_5990029129929635034_n.jpg?stp=dst-jpg_p843x403&_nc_cat=108&ccb=1-7&_nc_sid=5f2048&_nc_ohc=GWv9lJyLNtIAX9CohHD&_nc_ht=scontent.fhan17-1.fna&oh=00_AfB4AqmJL5-CChvYZLT11Atzoz1JusUtqR7V94PiJF4A4A&oe=655B9C2E" />
      </div>
      <div className="information mt-[80px] mb-5 my-5 text-white">
        <h2 className='my-5 ml-8'>Phạm Ngọc Sơn</h2>
        <h4 className='my-5 ml-8'>Quê Quán : Thái Bình</h4>
        <h4 className='my-5 ml-8'>Năm Sinh : 21/06/2003</h4>
        <h4 className='my-5 ml-8'>Chuyên Nghành : Front-end</h4>
        <h4 className='my-5 ml-8'>Sở thích : Nấu ăn, tập gym, ngắm cái đẹp</h4>
        <h4 className='my-5 ml-8'>Ngôn ngữ đã học : PHP,Java Script, JAVA</h4>
        <h4 className='my-5 ml-8'>Liên Hệ : 0989950358</h4>
        <Link className=' my-5 ml-8 absolute top-[-9px] text-3xl right-4' to="/"> <i className="fa-solid fa-arrow-right" />
</Link>
      </div>
      
    </div>
  </main>
  )
}

export default Profile