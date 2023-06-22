import React, {useState} from 'react';
import axios from 'axios';
import avatar from '../../image/illustration-of-human-icon-user-symbol-icon-modern-design-on-blank-background-free-vector.jpg'
const Form = () => {
  const { REACT_APP_BASE_URL } = process.env;

  const [data, setData] = useState({
    name: "",
    surname: "",
    email: "",
    password: "",
    image: ""
  });
  const [profileImg, setProfileImg] = useState(null);

  const register = () => {
    axios.post(`${REACT_APP_BASE_URL}/create-data`, data)
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const convertBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onload = () => {
        resolve(fileReader.result);
      };
      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };

  const imageUpload = async (e) => {
    const file = e.target.files[0];
    const base64 = await convertBase64(file); // Dosya verilerini base64 formatına dönüştürüyoruz
    setProfileImg(base64);
    setData({ ...data, [e.target.name]: base64 }); // Base64 verilerini `data` içine yerleştiriyoruz
  };

  const onHandleChange = (e) => {
    if (e.target.type === 'file') {
      imageUpload(e);
    } else {
      setData({ ...data, [e.target.name]: e.target.value });
    }
  };

  return (
    <div className="form">
      <input
        placeholder="name"
        name="name"
        onChange={onHandleChange}
      />
      <input
        type="text"
        placeholder="surname"
        name="surname"
        onChange={onHandleChange}
      />
      <input
        type="email"
        placeholder="email"
        name="email"
        onChange={onHandleChange}
      />
      <input
        type="password"
        placeholder="password"
        name="password"
        onChange={onHandleChange}
      />
      <input
        type="file"
        name="image"
        onChange={onHandleChange}
        className="file-input"
      />
      <div className="image">
        <img src={profileImg === null ? avatar : profileImg} alt="" />
      </div>
      <button className="secondary" onClick={register}>Register</button>
    </div>
  );
};

export default Form;