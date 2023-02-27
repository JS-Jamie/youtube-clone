//Commented out all the codes below due to the change of the plan to use YouTube Api instead of using database for videos

// import React, { useEffect, useState } from 'react';
// import styled from 'styled-components';
// import {
//   getStorage,
//   ref,
//   uploadBytesResumable,
//   getDownloadURL,
// } from 'firebase/storage';
// import app from '../firebase';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';

// const Container = styled.div`
//   width: 100%;
//   height: 100%;
//   position: absolute;
//   top: 0;
//   left: 0;
//   background-color: #000000a7;
//   display: flex;
//   align-items: center;
//   justify-content: center;
// `;
// const Wrapper = styled.div`
//   width: 600px;
//   height: 600px;
//   background-color: ${({ theme }) => theme.bgLighter};
//   color: ${({ theme }) => theme.text};
//   padding: 20px;
//   display: flex;
//   flex-direction: column;
//   gap: 20px;
//   position: relative;
// `;
// const Close = styled.div`
//   position: absolute;
//   top: 10px;
//   right: 10px;
//   cursor: pointer;
// `;
// const Title = styled.h1`
//   text-align: center;
// `;

// const Input = styled.input`
//   border: 1px solid ${({ theme }) => theme.soft};
//   color: ${({ theme }) => theme.text};
//   border-radius: 3px;
//   padding: 10px;
//   background-color: transparent;
// `;

// const Desc = styled.textarea`
//   border: 1px solid ${({ theme }) => theme.soft};
//   color: ${({ theme }) => theme.text};
//   border-radius: 3px;
//   padding: 10px;
//   background-color: transparent;
// `;

// const Button = styled.button`
//   border-radius: 3px;
//   border: none;
//   padding: 10px 20px;
//   font-weight: 500;
//   cursor: pointer;
//   background-color: ${({ theme }) => theme.soft};
//   color: ${({ theme }) => theme.textSoft};
// `;

// const Label = styled.label`
//   font-size: 14px;
// `;

// const Upload = ({ setOpen }) => {
//   const [img, setImg] = useState(undefined);
//   const [video, setVideo] = useState(undefined);
//   const [imgPercentage, setImgPercentage] = useState(0);
//   const [videoPercentage, setVideoPercentage] = useState(0);
//   const [inputs, setInputs] = useState({});
//   const [tags, setTags] = useState([]);

//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     setInputs((prev) => {
//       return { ...prev, [e.target.name]: e.target.value };
//     });
//   };

//   const handleTags = (e) => {
//     setTags(e.target.value.split(','));
//   };

//   const uploadFile = (file, urlType) => {
//     const storage = getStorage(app);
//     /*Create my own fileName which will
//     provide a unique file name, to avoid conflict
//    caused by uploading files with the same name*/
//     const fileName = new Date().getTime() + file.name;
//     /*(storage, 'images/' + file.name)
//     replaced with (storage, fileName) */
//     const storageRef = ref(storage, fileName);
//     const uploadTask = uploadBytesResumable(storageRef, file);

//     // Listen for state changes, errors, and completion of the upload.
//     uploadTask.on(
//       'state_changed',
//       (snapshot) => {
//         // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
//         const progress =
//           (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
//         urlType === 'imgUrl'
//           ? setImgPercentage(Math.round(progress))
//           : setVideoPercentage(Math.round(progress));
//         switch (snapshot.state) {
//           case 'paused':
//             console.log('Upload is paused');
//             break;
//           case 'running':
//             console.log('Upload is running');
//             break;
//           default:
//             break;
//         }
//       },
//       (error) => {},
//       () => {
//         getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
//           setInputs((prev) => {
//             return { ...prev, [urlType]: downloadURL };
//           });
//         });
//       }
//     );
//   };

//   useEffect(() => {
//     video && uploadFile(video, 'videoUrl');
//   }, [video]);
//   useEffect(() => {
//     img && uploadFile(img, 'imgUrl');
//   }, [img]);

//   const handleUpload = async (e) => {
//     e.preventDefault();
//     const res = await axios.post('/videos', { ...inputs, tags });
//     setOpen(false);
//     res.status === 200 && navigate(`/video/${res.data._id}`);
//   };

//   return (
//     <Container>
//       <Wrapper>
//         <Close onClick={() => setOpen(false)}>X</Close>
//         <Title>Upload a new video</Title>
//         <Label>Video:</Label>

//         {videoPercentage > 0 ? (
//           'Uploading: ' + videoPercentage + '%'
//         ) : (
//           <Input
//             type='file'
//             accept='video/*'
//             onChange={(e) => setVideo(e.target.files[0])}
//           />
//         )}
//         <Input
//           type='text'
//           placeholder='Title'
//           name='title'
//           onChange={handleChange}
//         />
//         <Desc
//           placeholder='Description'
//           name='desc'
//           rows={8}
//           onChange={handleChange}
//         />
//         <Input
//           type='text'
//           placeholder='Separate the tags with commas.'
//           onChange={handleTags}
//         />
//         <Label>Image:</Label>

//         {imgPercentage > 0 ? (
//           'Uploading: ' + imgPercentage + '%'
//         ) : (
//           <Input
//             type='file'
//             accept='image/*'
//             onChange={(e) => setImg(e.target.files[0])}
//           />
//         )}
//         <Button onClick={handleUpload}>Upload</Button>
//       </Wrapper>
//     </Container>
//   );
// };

// export default Upload;
