// import axios from 'axios'
// import Image from './Image'
// import { useEffect, useState } from 'react'




// const EmployeeSignup = () => {
// //   const [uploadImages, setUploadImages] = useState('')
// //   const [description, setDescription] = useState('')
// //   const [key, setKey] = useState('')
// //   const [imageUrl, setImageUrl] = useState('')
// //   const [url, setUrl] = useState([])



//   const formData = new FormData()
//   formData.append("image", uploadImages)
//   formData.append("firstname", firstname)
//   formData.append("lastname", lastname)
//   formData.append("email", email)
//   formData.append("phonenumber", phonenumber)
//   formData.append("location", location)
 







//   const handleChange = (event) => {
//     const files = event.target.files[0]
//     setUploadImages(files)
//   }

// //   console.log(uploadImages)

//   function handleSubmit(event) {
//     event.preventDefault()
//     axios.post('http://localhost:4000/images', formData)
//     .then(() => {
//         console.log("the post is" + user)
//         // navigate('/login')
//     })
// } 
  
// //   useEffect(() => {
// //     axios.get(`http://localhost:8000/store-front/images`)
// //       .then((res) => setImageUrl(res.data))
// //   },[uploadImages])
// //   const handleSubmit = (event) => {
// //     if(!uploadImages){
// //       alert('please upload an image')
// //     } else {
// //     event.preventDefault()
// //     axios.post('http://localhost:8000/store-front/images', formData, {
// //       headers: {'Content-Type': 'multipart/form-data'}
// //     })
// //     .then(() => {
// //       setUploadImages('')
// //       setDescription('')
// //     })
// //     .catch((err) => console.log(err))
// //   }
// //   }
//   return (
//     <div>
//       <h5>Upload Images</h5>
//       <form onSubmit={handleSubmit}>
//         <input onChange={handleChange} type='file' id='image' accept='image/*'></input>
//         <input onChange={handleChange} type="text" id="firstname" placeholder="firstname" />
//         <input onChange={handleChange} type="text" id="lastname" placeholder="lastname" />
//         <input onChange={handleChange} type="text" id="email" placeholder="email" />
//         <input onChange={handleChange} type="text" id="phonenumber" placeholder="phonenumber" />
//         <input onChange={handleChange} type="text" id="location" placeholder="location" />
//         <button type="submit">upload</button>
//       </form>
//      {/* <div>
//       {!imageUrl.length ? console.log('image loading') : imageUrl.map((images) => (
//         <Image key={images._id} imageUrl={images} />
//       )) }
//      </div> */}
//     </div>
//   )
// }

// export default EmployeeSignup;