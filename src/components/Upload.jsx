import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from 'firebase/storage';

const Container = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: #000000a7;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Wrapper = styled.div`
  width: 600px;
  height: 600px;
  background-color: ${({ theme }) => theme.bgLighter};
  color: ${({ theme }) => theme.text};
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  position: relative;
`;
const Close = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
`;
const Title = styled.h1`
  text-align: center;
`;

const Input = styled.input`
  border: 1px solid ${({ theme }) => theme.soft};
  color: ${({ theme }) => theme.text};
  border-radius: 3px;
  padding: 10px;
  background-color: transparent;
`;

const Desc = styled.textarea`
  border: 1px solid ${({ theme }) => theme.soft};
  color: ${({ theme }) => theme.text};
  border-radius: 3px;
  padding: 10px;
  background-color: transparent;
`;

const Button = styled.button`
  border-radius: 3px;
  border: none;
  padding: 10px 20px;
  font-weight: 500;
  cursor: pointer;
  background-color: ${({ theme }) => theme.soft};
  color: ${({ theme }) => theme.textSoft};
`;

const Label = styled.label`
  font-size: 14px;
`;

const Upload = ({ setOpen }) => {
  const [img, setImg] = useState(undefined);
  const [video, setVideo] = useState(undefined);
  const [imgPercentage, setImgPercentage] = useState(0);
  const [videoPercentage, setVideoPercentage] = useState(0);
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');
  const [tags, setTags] = useState([]);

  const handleTags = (e) => {
    setTags(e.target.value.split(','));
  };

  const uploadFile = (file) => {
    const storage = getStorage();
    /*Create my own fileName which will
    provide a unique file name, to avoid conflict 
   caused by uploading files with the same name*/
    const fileName = new Date().getTime() + file.name;
    /*(storage, 'images/' + file.name)
    replaced with (storage, fileName) */
    const storageRef = ref(storage, fileName);
    const uploadTask = uploadBytesResumable(storageRef, file, metadata);

    // Listen for state changes, errors, and completion of the upload.
    uploadTask.on(
      'state_changed',
      (snapshot) => {
        // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log('Upload is ' + progress + '% done');
        switch (snapshot.state) {
          case 'paused':
            console.log('Upload is paused');
            break;
          case 'running':
            console.log('Upload is running');
            break;
          default:
            break;
        }
      },
      (error) => {}
    );
  };

  useEffect(() => {
    uploadFile(video);
  }, [video]);
  useEffect(() => {
    uploadFile(img);
  }, [img]);

  return (
    <Container>
      <Wrapper>
        <Close onClick={() => setOpen(false)}>X</Close>
        <Title>Upload a new video</Title>
        <Label>Video:</Label>

        <Input
          type='file'
          accept='video/*'
          onChange={(e) => setVideo(e.target.files[0])}
        />
        <Input
          type='text'
          placeholder='Title'
          onChange={(e) => setTitle(e.target.value)}
        />
        <Desc
          placeholder='Description'
          rows={8}
          onChange={(e) => setDesc(e.target.value)}
        />
        <Input
          type='text'
          placeholder='Separate the tags with commas.'
          onChange={handleTags}
        />
        <Label>Image:</Label>
        <Input
          type='file'
          accept='image/*'
          onChange={(e) => setImg(e.target.files[0])}
        />
        <Button>Upload</Button>
      </Wrapper>
    </Container>
  );
};

export default Upload;
