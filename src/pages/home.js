/* eslint-disable jsx-a11y/anchor-is-valid */
import { collection, deleteDoc, doc, getDocs } from "firebase/firestore";
import React, { useState, useEffect } from "react";
import { auth, db } from "../firebase-config";
import "../Home.css";
const Home = ({ setIsAuth }) => {
  const [postList, setPostList] = useState([]);
  const postCollectionRef = collection(db, "posts");

  useEffect(() => {
    const getPosts = async () => {
      const data = await getDocs(postCollectionRef);
      console.log(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      setPostList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getPosts();
  }, []);

  const deletePost = (id) => {
    const postDoc = doc(db, "posts", id);
    deleteDoc(postDoc);
  };

  return (
    <div className="container my-3">
      <div className="row">
        {postList.map((item) => (
          <div className="col-sm-12 col-lg-6 col-md-12" key={item.id}>
            <div className="card" style={{ height: "350px" }}>
              <div className="card-header">
                <h5 className="card-title">{item.title}</h5>
              </div>
              <div className="card-body ">
                <div className="card-body-scroll">
                  <p className="card-text">{item.post}</p>
                </div>
              </div>
              <div className="card-footer">
                <span className="float-start badge text-bg-info">
                  Author: {item.author.name}
                </span>

                {setIsAuth && item.author.id === auth.currentUser.uid && (
                  <span
                    style={{ cursor: "pointer" }}
                    className="float-end badge bg-danger"
                    onClick={deletePost(item.id)}
                  >
                    <i className="bi bi-trash-fill text-light"></i>
                  </span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
